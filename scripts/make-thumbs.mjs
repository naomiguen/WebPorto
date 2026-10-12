// Membuat versi kecil (thumbnail) untuk semua foto yang dipakai di halaman galeri.
//
// Cara pakai:
//   1. Taruh foto di folder public/
//   2. Daftarkan di GALLERY_DATA (src/constants/index.js), mis. { src: "/foto-saya.jpeg" }
//   3. Jalankan:  npm run thumbs
//
// Thumbnail disimpan di public/thumbs/<nama-file>.jpg. Foto asli TIDAK diubah.
// Foto yang thumbnail-nya sudah ada dilewati; pakai `npm run thumbs -- --force` untuk membuat ulang semuanya.

import { existsSync, mkdirSync, statSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { GALLERY_DATA } from "../src/constants/index.js";

const root = resolve(fileURLToPath(import.meta.url), "..", "..");
const publicDir = join(root, "public");
const outDir = join(publicDir, "thumbs");
const force = process.argv.includes("--force");
const MAX_SIDE = 800;

const sources = [
  ...new Set(
    Object.values(GALLERY_DATA)
      .flatMap((g) => g.kegiatan)
      .flatMap((k) => k.photos)
      .map((p) => p.src)
      .filter((src) => typeof src === "string" && src.startsWith("/"))
  ),
];

if (sources.length === 0) {
  console.log("Belum ada foto yang terdaftar di GALLERY_DATA.");
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });

let made = 0;
let skipped = 0;
let missing = 0;

for (const src of sources) {
  const input = join(publicDir, src);
  if (!existsSync(input)) {
    console.warn(`  ! Tidak ditemukan: public${src}  (cek nama file / huruf besar-kecilnya)`);
    missing++;
    continue;
  }

  const name = basename(src, extname(src)) + ".jpg";
  const output = join(outDir, name);

  if (!force && existsSync(output)) {
    skipped++;
    continue;
  }

  // .rotate() menerapkan orientasi EXIF supaya foto dari HP tidak miring
  await sharp(input)
    .rotate()
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);

  const kb = Math.round(statSync(output).size / 1024);
  console.log(`  + ${name}  (${kb} KB)`);
  made++;
}

console.log(`\nSelesai: ${made} dibuat, ${skipped} dilewati (sudah ada), ${missing} tidak ditemukan.`);
if (missing > 0) process.exitCode = 1;
