# Portofolio Naomi Ratna Marisaha Guen

Website portofolio pribadi: profil, pendidikan, magang & asisten, organisasi, kepanitiaan, projek, dan keahlian,
lengkap dengan halaman dokumentasi foto untuk tiap pengalaman. Tersedia dalam **Bahasa Indonesia** dan **English**.

**Website:** https://naomiratnamarisahaguen.vercel.app/

## Fitur

- **Hero interaktif** dengan objek 3D lucu (hati, pita, lipstik, bunga, bintang, cermin) yang melayang dan ikut bergerak mengikuti kursor, dibuat dengan three.js.
- **Dua bahasa (ID / EN)**: tombol ganti bahasa di navbar, pilihan diingat di perangkat pengunjung.
- **Magang & Asisten**: linimasa magang dan asisten dosen/laboratorium.
- **Beasiswa & Pencapaian**: daftar beasiswa dan pencapaian.
- **Organisasi & Kepanitiaan**: linimasa zig-zag. Setiap pengalaman organisasi punya halaman dokumentasi foto.
- **Galeri dokumentasi**: grid foto per kegiatan dengan tampilan foto penuh (lightbox, bisa digeser/pakai keyboard).
- **Showcase Projek**: teknologi yang dipakai, link demo, dan link repository.
- **Keahlian**: logo teknologi yang berjalan ke samping.
- **Tulisan**: kartu tulisan pilihan dari [Medium](https://medium.com/@guenn4) (judul, tanggal, kutipan, waktu baca).
- **Animasi halus**: elemen muncul saat di-scroll, bintang berkelip di latar. Otomatis nonaktif untuk pengunjung yang memilih "kurangi gerakan" di perangkatnya.
- **Responsif** untuk HP, tablet, dan desktop.
- **Pratinjau link** (Open Graph) saat dibagikan lewat WhatsApp/LinkedIn.

## Teknologi

| | |
|---|---|
| Framework | [React 19](https://react.dev/) + [Vite 7](https://vite.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| 3D | [three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://drei.docs.pmnd.rs/) |
| Ikon | [Lucide React](https://lucide.dev/) |
| Pembuat thumbnail | [sharp](https://sharp.pixelplumbing.com/) (hanya saat development) |
| Hosting | [Vercel](https://vercel.com/) |

Membutuhkan **Node.js 20.19 atau lebih baru**.

## Menjalankan secara lokal

```bash
git clone https://github.com/naomiguen/WebPorto.git
cd WebPorto
npm install
npm run dev
```

Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server development |
| `npm run build` | Membuat versi produksi di folder `dist/` |
| `npm run preview` | Mencoba hasil build secara lokal |
| `npm run thumbs` | Membuat thumbnail untuk foto galeri (lihat bagian di bawah) |
| `npm run optimize` | Memperkecil foto yang terlalu besar (aslinya disimpan di `raw/originals/`) |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Struktur folder

```
.
├── public/                 Gambar & aset statis. Foto dibagi per pengalaman (lihat di bawah)
│   ├── favicon.svg, apple-touch-icon.png, og-image.png   (tetap di sini: dipakai index.html)
│   ├── profil/             Foto profil
│   ├── pendidikan/         Foto sekolah
│   ├── magang-asisten/     Dokumentasi magang  → bmkg/
│   ├── beasiswa/           Dokumentasi beasiswa → bank-indonesia/
│   ├── organisasi/         Satu folder per organisasi (pmk-persekutuan/, hmif-kadep/, ...)
│   ├── kepanitiaan/        Satu folder per kepanitiaan (retreat-pmk-2024/, ...)
│   ├── projek/             Gambar sampul projek
│   ├── skills/             Logo teknologi untuk bagian Keahlian
│   └── thumbs/             Versi kecil foto galeri (otomatis dari `npm run thumbs`, jangan diedit manual)
├── raw/                    (diabaikan git) file RAW kamera dan cadangan foto asli sebelum diperkecil (originals/)
├── scripts/
│   └── make-thumbs.mjs    Pembuat thumbnail
├── src/
│   ├── constants/
│   │   ├── index.js        SEMUA ISI KONTEN (bahasa Indonesia): profil, pendidikan, magang, projek, galeri, dst.
│   │   └── en.js           Terjemahan English dari isi konten
│   ├── i18n/               Sistem ganti bahasa + teks antarmuka (ui.js)
│   ├── sections/           Hero, Education, Experience, Projects, Skills, GalleryDetail
│   ├── components/         Navbar, Footer, Hero3D, Starfield, Reveal, LangSwitch, dll.
│   ├── App.jsx             Rute halaman
│   └── index.css           Tailwind + animasi kustom
├── index.html              Judul, deskripsi, dan meta pratinjau link
└── vercel.json             Pengaturan rute untuk Vercel
```

## Mengubah isi konten

Hampir semua teks ada di satu file: **`src/constants/index.js`**. Tidak perlu menyentuh komponen.

| Ingin mengubah | Bagian di `constants/index.js` |
|---|---|
| Nama & deskripsi diri di hero | `PROFILE` |
| Pendidikan | `EDUCATION` |
| Magang & asisten | `WORK_EXPERIENCE` |
| Beasiswa & pencapaian | `ACHIEVEMENTS` |
| Organisasi | `ORGANIZATIONS` |
| Kepanitiaan | `COMMITTEES` |
| Projek | `PROJECTS` |
| Logo keahlian | `SKILLS` |
| Tulisan pilihan dari Medium | `WRITINGS` |
| Foto dokumentasi | `GALLERY_DATA` |

Contoh menambah satu pengalaman magang/asisten:

```js
{
  key: "ta-algoritma",                       // pengenal unik (dipakai untuk terjemahan)
  type: "teaching",                          // "intern" | "teaching" | "lab" (menentukan ikon)
  period: "Agustus - Desember 2027",
  role: "Asisten Dosen Algoritma",
  organization: "Institut Teknologi Kalimantan",
  location: "Balikpapan, Kalimantan Timur",  // opsional
  points: ["Poin tugas pertama.", "Poin tugas kedua."], // opsional
},
```

## Menambah foto dokumentasi

Foto dikelompokkan **satu folder per pengalaman** di dalam `public/`:

```
public/
├── organisasi/
│   ├── pmk-persekutuan/        organogram1.jpeg, photostudio1.jpeg, ...
│   ├── hmif-kadep/             kadep-hmif.jpeg, wepedagri1.jpeg, ...
│   ├── km-badan-manajerial/
│   ├── pemandu-lkmm/
│   ├── hmif-staff/
│   └── hmif-staff-magang/
├── kepanitiaan/
│   ├── decathlon-pmk-2025/  infinite-vol4/  retreat-pmk-2024/
│   └── hut-km-2024/  spin-etam-2024/  infinite-vol3/
├── magang-asisten/bmkg/
├── beasiswa/bank-indonesia/
├── pendidikan/sman1-panti/
├── projek/
└── profil/
```

Alamat folder-folder ini ditulis **sekali saja** di bagian atas `src/constants/index.js` (objek `FOTO`),
lalu dipakai di semua tempat. Memindahkan atau mengganti nama folder cukup diubah di sana.

### Langkah menambah foto

1. **Taruh file fotonya di folder pengalaman yang sesuai**, misalnya
   `public/organisasi/pmk-persekutuan/studio17.jpeg`. Pengalaman baru? Buat folder baru, mis.
   `public/organisasi/nama-organisasi/`, lalu tambahkan satu baris di objek `FOTO`.
   - Pakai nama file tanpa spasi, dan perhatikan huruf besar/kecil (Vercel membedakannya).
   - Pakai **JPEG/PNG/WebP**. File RAW kamera (`.NEF`, `.CR2`, dll.) tidak bisa tampil di browser dan sangat besar:
     ekspor dulu ke JPEG, dan simpan file RAW di luar `public/` (folder `raw/` di proyek ini diabaikan git).
   - Foto besar (> 400 KB atau > 2000 px) diperkecil otomatis dengan **`npm run optimize`**. Aslinya disalin
     dulu ke `raw/originals/`, jadi tidak ada yang hilang. Jalankan sebelum `npm run thumbs`.
2. **Tulis nama file-nya** di `photosIn(...)` pada `GALLERY_DATA` (`src/constants/index.js`):
   ```js
   "kepala-departemen-persekutuan": {
     title: "Kepala Departemen Persekutuan PMK",
     kegiatan: [
       {
         nama: "Photo Studio",
         // photosIn(folder, ...nama-file). seq("photostudio", 17) = photostudio1.jpeg ... photostudio17.jpeg
         photos: photosIn(FOTO.pmk, ...seq("photostudio", 17)),
       },
       {
         nama: "Organogram",
         photos: photosIn(FOTO.pmk, "organogram1.jpeg", "organogram2.jpeg"),
       },
     ],
   },
   ```
   Foto yang diberi keterangan ditulis sebagai objek: `{ src: "foto.jpeg", caption: "Keterangan" }`.
3. **Perkecil & buat thumbnail:** jalankan `npm run optimize` lalu `npm run thumbs`. Skrip ini membuat versi kecil (maks. 800 px) di `public/thumbs/`
   dengan struktur folder yang sama, supaya halaman galeri cepat dimuat. Foto asli tidak diubah dan hanya
   dimuat saat foto dibuka penuh. Jika langkah ini terlewat, foto tetap tampil tetapi memakai file asli sehingga lebih berat.

Satu halaman bisa berisi beberapa kegiatan (tambahkan beberapa objek di `kegiatan`). Foto sampul kartu
(`image:`) di organisasi, kepanitiaan, dan projek juga memakai `FOTO`, mis. `${FOTO.pmk}/organogram1.jpeg`.

### Tombol "Lihat Selengkapnya"

- **Organisasi** otomatis mengarah ke halaman galeri dengan slug yang dibentuk dari nama peran
  (huruf kecil, spasi menjadi `-`), misalnya "Pemandu LKMM ITK" menjadi `pemandu-lkmm-itk`.
- **Magang** dan **Beasiswa** memakai isian `gallery: "slug-halaman"` pada datanya.
  Tombolnya **muncul otomatis begitu halaman galerinya punya minimal satu foto**, jadi tidak ada tautan ke halaman kosong.

## Bahasa (ID / EN)

- Teks asli ditulis dalam Bahasa Indonesia di `src/constants/index.js`.
- Terjemahan English ada di **`src/constants/en.js`**, dicocokkan dengan kunci (bukan urutan):

  | Kelompok | Kunci |
  |---|---|
  | `education` | `institution` |
  | `work`, `achievements` | `key` |
  | `organizations` | `role` (Indonesia) |
  | `committees` | `event` |
  | `projects` | `title` (Indonesia) |
  | `gallery` | slug halaman; `kegiatan` berkunci nama kegiatan (Indonesia) |

- Entri yang belum diterjemahkan otomatis tampil dalam Bahasa Indonesia, jadi menambah konten baru tidak merusak apa pun.
- Teks antarmuka (judul section, tombol, label) ada di `src/i18n/ui.js`.

## Deploy

Situs ini di-deploy ke **Vercel**. File `vercel.json` mengarahkan semua alamat ke `index.html` supaya link langsung
ke halaman galeri (misalnya `/gallery/pemandu-lkmm-itk`) dan refresh halaman tidak menghasilkan 404.

Judul tab, deskripsi, dan gambar pratinjau link diatur di `index.html` dan `public/og-image.png`.
Jika alamat situs berubah, perbarui `og:url` dan `og:image` di `index.html`.

## Palet warna

| Warna | Kode |
|---|---|
| Magenta tua (utama) | `#AC1754` |
| Magenta cerah | `#E53888` |
| Pink sedang | `#F37199` |
| Pink muda (latar) | `#F7A8C4` |

---

Dibuat dengan ❤️ oleh Naomi Ratna Marisaha Guen
