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
| `npm run lint` | Memeriksa kode dengan ESLint |

## Struktur folder

```
.
├── public/                 Gambar & aset statis (foto, logo keahlian, favicon, og-image)
│   ├── skills/             Logo teknologi untuk bagian Keahlian
│   └── thumbs/             Versi kecil foto galeri (dibuat oleh `npm run thumbs`)
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

1. **Taruh file foto di folder `public/`** (satu folder dengan foto-foto lain), misalnya `public/beasiswa-bi-1.jpeg`.
   Gunakan nama file tanpa spasi, dan perhatikan huruf besar/kecil (Vercel membedakannya).
   Gunakan **JPEG/PNG/WebP**. File RAW kamera (`.NEF`, `.CR2`, dll.) tidak bisa tampil di browser dan sangat besar:
   ekspor dulu ke JPEG, dan simpan file RAW di luar `public/` (folder `raw/` di proyek ini diabaikan git).
   Foto di atas ±2000 px sebaiknya diperkecil dulu; aslinya dimuat penuh saat foto dibuka.
2. **Daftarkan fotonya** di `GALLERY_DATA` pada `src/constants/index.js`:
   ```js
   "beasiswa-bank-indonesia": {
     title: "Beasiswa Bank Indonesia",
     kegiatan: [
       {
         nama: "Dokumentasi Beasiswa Bank Indonesia",
         photos: [
           { src: "/beasiswa-bi-1.jpeg" },
           { src: "/beasiswa-bi-2.jpeg" },
         ],
       },
     ],
   },
   ```
3. **Buat thumbnail:** jalankan `npm run thumbs`. Skrip ini membuat versi kecil (maks. 800 px) di `public/thumbs/`
   supaya halaman galeri cepat dimuat. Foto asli tidak diubah dan hanya dimuat saat foto dibuka penuh.
   Jika langkah ini terlewat, foto tetap tampil tetapi memakai file asli sehingga lebih berat.

Satu halaman bisa berisi beberapa kegiatan (tambahkan beberapa objek di `kegiatan`). Tiap foto boleh diberi
keterangan dengan `{ src: "/foto.jpeg", caption: "Keterangan foto" }`.

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
