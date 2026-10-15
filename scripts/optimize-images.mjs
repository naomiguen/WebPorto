// Memperkecil foto yang terlalu besar di public/ supaya situs cepat dimuat.
//
// Cara pakai:
//   npm run optimize            -> proses semua foto yang besar
//   npm run optimize -- --dry   -> hanya tampilkan apa yang akan diubah
//
// Aturan:
//  - Foto dianggap besar kalau ukurannya > 400 KB atau sisi terpanjangnya > 2000 px.
//  - Foto diperkecil hingga sisi terpanjang 2000 px, kualitas JPEG 82, metadata (termasuk lokasi GPS) dibuang.
//  - File ASLI disalin dulu ke raw/originals/ (struktur foldernya sama, diabaikan git). Tidak ada yang hilang.
//  - Hanya dipakai kalau hasilnya benar-benar lebih kecil. Aman dijalankan berulang kali.
//  - Folder skills/ dan thumbs/, file SVG, dan ikon di akar public/ tidak disentuh.

import { copyFileSync, existsSync, mkdirSync, readdirSync, renameSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(fileURLToPath(import.meta.url), "..", "..");
const publicDir = join(root, "public");
const backupDir = join(root, "raw", "originals");
const dry = process.argv.includes("--dry");

const MAX_SIDE = 2000;
const MIN_BYTES = 400 * 1024;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const SKIP_DIRS = new Set(["skills", "thumbs"]);
const SKIP_ROOT_FILES = new Set(["favicon.svg", "apple-touch-icon.png", "og-image.png"]);

const files = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (dir === publicDir && SKIP_DIRS.has(e.name)) continue;
      walk(p);
    } else if (EXTS.has(extname(e.name).toLowerCase())) {
      if (dir === publicDir && SKIP_ROOT_FILES.has(e.name)) continue;
      files.push(p);
    }
  }
})(publicDir);

// Di Windows, antivirus/indexer kadang mengunci file sesaat setelah ditulis (EPERM/EBUSY).
// Coba lagi beberapa kali; kalau tetap gagal, timpa isinya langsung.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function replaceFile(file, buffer) {
  const tmp = file + ".tmp";
  writeFileSync(tmp, buffer);
  for (let attempt = 1; attempt <= 6; attempt++) {
    try {
      renameSync(tmp, file);
      return;
    } catch (err) {
      if (!["EPERM", "EBUSY", "EACCES"].includes(err.code)) throw err;
      await sleep(250 * attempt);
    }
  }
  copyFileSync(tmp, file);
  try {
    unlinkSync(tmp);
  } catch {
    /* sisa .tmp tidak berbahaya; dibersihkan di proses berikutnya */
  }
}

const mb = (b) => (b / 1048576).toFixed(2) + " MB";
let before = 0;
let after = 0;
let changed = 0;
let kept = 0;

for (const file of files.sort()) {
  const size = statSync(file).size;
  const meta = await sharp(file).metadata();
  const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
  before += size;

  if (size <= MIN_BYTES && longest <= MAX_SIDE) {
    after += size;
    kept++;
    continue;
  }

  const rel = relative(publicDir, file).replace(/\\/g, "/");
  const isPng = extname(file).toLowerCase() === ".png";
  let pipeline = sharp(file).rotate().resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true });
  pipeline = isPng ? pipeline.png({ compressionLevel: 9, palette: true }) : pipeline.jpeg({ quality: 82, mozjpeg: true });
  const buf = await pipeline.toBuffer();

  if (buf.length >= size * 0.95) {
    console.log(`  = ${rel}  (${mb(size)}) sudah efisien, dilewati`);
    after += size;
    kept++;
    continue;
  }

  console.log(`  ${dry ? "~" : "+"} ${rel}  ${mb(size)} -> ${mb(buf.length)}  (${meta.width}x${meta.height}${longest > MAX_SIDE ? " dikecilkan" : ""})`);
  after += buf.length;
  changed++;
  if (dry) continue;

  const backup = join(backupDir, rel);
  mkdirSync(dirname(backup), { recursive: true });
  if (!existsSync(backup)) copyFileSync(file, backup); // simpan aslinya sekali saja
  await replaceFile(file, buf);
}

console.log(
  `\n${dry ? "[SIMULASI] " : ""}${changed} foto diperkecil, ${kept} dibiarkan.` +
    `\nTotal: ${mb(before)} -> ${mb(after)}  (hemat ${mb(before - after)})`
);
if (!dry && changed > 0) console.log("File asli tersimpan di raw/originals/");
