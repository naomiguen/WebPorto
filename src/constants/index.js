export const PROFILE = {
  name: "Naomi Ratna Marisaha Guen",
  about: "Mahasiswa Informatika di Institut Teknologi Kalimantan yang berfokus pada pengembangan web dan teknologi berbasis AI. Aktif dalam organisasi dan kepanitiaan kampus, terbiasa bekerja terstruktur, dan terus mengembangkan kemampuan teknis melalui proyek nyata dan eksplorasi teknologi baru.",
};

export const EDUCATION = [
  {
    year: "2023 - Sekarang",
    major: "Informatika",
    institution: "Institut Teknologi Kalimantan",
    description: "Berfokus pada pengembangan teknologi web dan penerapan machine learning, kecerdasan buatan, serta data science.",
    image: "https://cdn-web.ruangguru.com/file-uploader/09f4d595-174f-432a-b891-850e872a1373.jpeg"
  },
  {
    year: "2020 - 2023",
    major: "Jurusan MIPA",
    institution: "SMAN 1 Panti",
    description: "Lulusan Jurusan MIPA serta peraih nilai tertinggi pada mata pelajaran Kimia dan Fisika.",
    image: "/sma.jpeg"
  }
];

// Magang & asisten. `key` dipakai untuk mencocokkan terjemahan English di constants/en.js.
// type: "intern" | "teaching" | "lab" (menentukan ikon). points & description bersifat opsional.
export const WORK_EXPERIENCE = [
  {
    key: "bmkg-intern",
    type: "intern",
    gallery: "magang-bmkg", // slug halaman dokumentasi di GALLERY_DATA
    period: "Januari - Mei 2026",
    role: "Web Developer & Machine Learning Intern",
    organization: "BMKG - Stasiun Meteorologi Kelas I Sultan Aji Muhammad Sulaiman Sepinggan",
    location: "Balikpapan, Kalimantan Timur",
    points: [
      "Membantu perancangan model Enterprise Architecture untuk menyelaraskan proses bisnis operasional dengan sistem IT di tingkat stasiun.",
      "Mengembangkan sistem web fungsional berbasis React.js dan JavaScript, mengintegrasikan Supabase (PostgreSQL) sebagai layanan backend dan manajemen database.",
      "Mengembangkan model klasifikasi cuaca menggunakan Artificial Neural Network (ANN) dan pendekatan Automated Machine Learning (AutoML) untuk mendukung peningkatan akurasi prediksi sistem meteorologi.",
    ],
  },
  {
    key: "ta-struktur-data",
    type: "teaching",
    period: "Agustus - Desember 2026",
    role: "Asisten Dosen Struktur Data",
    organization: "Institut Teknologi Kalimantan",
  },
  {
    key: "ta-pcd",
    type: "teaching",
    period: "Agustus - Desember 2026",
    role: "Asisten Dosen Pengolahan Citra Digital",
    organization: "Institut Teknologi Kalimantan",
  },
  {
    key: "lab-fisika",
    type: "lab",
    period: "September - Desember 2025",
    role: "Asisten Laboratorium Fisika I",
    organization: "Institut Teknologi Kalimantan",
    location: "Balikpapan, Kalimantan Timur",
    points: [
      "Membimbing dan mengawasi lebih dari 100 mahasiswa dalam sesi praktikum Fisika I, khususnya pada modul Kalorimeter dan Konstanta Pegas.",
      "Memandu pengumpulan data eksperimen dan analisis kuantitatif agar mahasiswa dapat menginterpretasikan hasil secara akurat.",
      "Memastikan penggunaan peralatan laboratorium yang tepat dan kepatuhan terhadap protokol keselamatan.",
      "Menilai dan memberikan umpan balik terstruktur pada laporan praktikum untuk memperkuat kemampuan penulisan ilmiah mahasiswa.",
    ],
  },
];

// Beasiswa & pencapaian. Tambahkan entri baru di sini (lomba, sertifikasi, dll.).
// `key` dipakai untuk mencocokkan terjemahan English di constants/en.js.
export const ACHIEVEMENTS = [
  {
    key: "beasiswa-bi",
    gallery: "beasiswa-bank-indonesia", // slug halaman dokumentasi di GALLERY_DATA
    badge: "Beasiswa",
    year: "2026",
    title: "Penerima Beasiswa Bank Indonesia (Pendidikan Kebanksentralan)",
    issuer: "Bank Indonesia",
  },
];

export const ORGANIZATIONS = [
  {
    year: "Maret 2026 - Sekarang",
    role: "Kepala Departemen Persekutuan",
    organization: "Persekutuan Mahasiswa Kristen (PMK)",
    description: "Memimpin Departemen Persekutuan dengan merencanakan, mengoordinasikan, dan mengawasi program departemen sesuai tujuan dan nilai organisasi. Mengorganisir kegiatan persekutuan, program pengembangan rohani, dan inisiatif pembangunan komunitas antar anggota. Memantau dan mengevaluasi pelaksanaan program kerja secara berkala untuk memastikan efektivitas dan perbaikan berkelanjutan.",
    image: "/organogram1.jpeg", // foto sampul kartu (kalau dikosongkan, tampil panel pengganti)
  },
  {
    year: "2025 - Sekarang",
    role: "Kepala Departemen Dalam Negeri HMIF ITK",
    organization: "HMIF ITK",
    description: "Bertanggung jawab atas pengelolaan internal organisasi, koordinasi antar divisi, serta memastikan keberlangsungan program kerja dan administrasi organisasi.",
    image: "/kadep-hmif.jpeg"
  },
  {
    year: "2025 - Sekarang",
    role: "Staff Badan Manajerial",
    organization: "KM ITK",
    description: "Bertanggung jawab mencari dan menyediakan pemateri dalam kegiatan PMO dan PDO setiap himpunan di ITK",
    image: "/bmj.jpeg"
  },
  {
    year: "2024 - Sekarang",
    role: "Pemandu LKMM ITK",
    organization: "PEMANDU LKMM ITK",
    description: "Merancang konsep pelatihan di ITK dan menjadi pemateri pada kegiatan LKMM Pra-TD dan LKMM TD sebagai upaya pengembangan kepemimpinan dan manajerial mahasiswa.",
    image: "/pemandu.jpeg"
  },
  {
    year: "2024 - 2025",
    role: "Staff Departemen Dalam Negeri HMIF",
    organization: "HMIF ITK",
    description: "Bertanggung jawab atas perencanaan dan pelaksanaan beberapa program kerja, seperti Syukuran Wisuda dan Sekolah Sidang.",
    image: "/staff_hmif.JPG"
  },
  {
    year: "April 2024 - September 2024",
    role: "Staff Magang Departemen Dalam Negeri HMIF",
    organization: "HMIF ITK",
    description: "Menjadi MC pada acara syukuran wisuda HMIF.",
    image: "/staff_magang.jpeg"
  }
];

export const COMMITTEES = [
  {
    year: "2025",
    role: "Staff Ahli Divisi Acara",
    event: "Decathlon PMK ITK",
    description: "Bertanggung jawab dalam merancang konsep kreatif dan menyusun rundown kegiatan secara detail, serta mengoordinasikan seluruh elemen acara untuk memastikan pelaksanaan berjalan tepat waktu dan sesuai dengan rencana yang telah ditetapkan",
    image: "/Decathlon.JPG"
  },
  {
    year: "2025",
    role: "Staff Ahli Divisi Acara",
    event: "Infinite Vol.4",
    description: "Merancang konsep Expo Kerja Praktik Informatika dan pameran karya mata kuliah IoT, Game, serta Deep Learning sebagai media publikasi karya mahasiswa dan sarana promosi Program Studi Informatika.",
    image: "/expo_infinite.jpg"
  },
  {
    year: "2024",
    role: "Staf Divisi Acara",
    event: "Retreat PMK ITK 2024",
    description: "Bertanggung jawab atas perancangan konsep dan tema acara bagi mahasiswa baru se-Institut Teknologi Kalimantan, termasuk desain permainan indoor dan outdoor serta pengelolaan pembagian kelompok peserta secara terstruktur.",
    image: "/retreat.jpeg"
  },
  {
    year: "2024",
    role: "Staf Divisi Dana Usaha",
    event: "HUT KM ITK 2024",
    description: "Bertanggung jawab atas penyusunan laporan penjualan serta pengembangan strategi penjualan untuk mencapai target yang telah ditetapkan.",
    image: "/hut_km.jpeg"
  },
  {
    year: "2024",
    role: "Staf Divisi Acara",
    event: "SPIn ETAM ITK 2024",
    description: "Menjadi LO dalam kegiatan SPIn ETAM sebagai penghubung komunikasi dengan peserta, memastikan penyampaian informasi yang akurat, serta berkontribusi dalam perancangan gerakan flashmob dan penyusunan kode papermob untuk rangkaian acara penyambutan mahasiswa baru Institut Teknologi Kalimantan.",
    image: "/Spin_etam.jpeg"
  },
  {
    year: "2023",
    role: "Staf Divisi Acara",
    event: "INFINITE Vol.3",
    description: "Menyusun Term of Reference (TOR) InfoTech EXPO INFINITE Vol. 3 serta berperan dalam pemasangan dekorasi dan memastikan seluruh elemen acara tertata dengan rapi",
    image: "/expo.jpeg"
  },
];

export const PROJECTS = [
  {
    title: "Sistem Informasi Enterprise Architecture BMKG",
    tech: ["React.js", "Supabase", "TOGAF Framework", "ANN & AutoML"],
    description: "Dikerjakan saat magang di BMKG Stasiun Meteorologi Kelas I Sultan Aji Muhammad Sulaiman Sepinggan, Balikpapan. Membantu merancang model Enterprise Architecture (TOGAF) untuk menyelaraskan proses bisnis dengan sistem IT, membangun sistem web berbasis React.js dengan Supabase (PostgreSQL) sebagai backend, serta mengembangkan model klasifikasi cuaca berbasis ANN dan AutoML untuk meningkatkan akurasi prediksi.",
    image: "/dokum_bmkg.jpeg",
    isPrivate: true
  },
  {
    title: "ScanBar",
    tech: ["Vue.js", "Express", "MongoDB", "Supabase"],
    description: "ScanBar adalah aplikasi web pelacak nutrisi untuk produk makanan dan minuman. Pengguna dapat memindai barcode kemasan untuk melihat kandungan gizi (data OpenFoodFacts), mencatat asupan harian, dan mendapat analisis serta rekomendasi dari Google Gemini. Untuk makanan tanpa kemasan, tersedia analisis dari foto dan chatbot gizi berbasis AI. Dilengkapi kalkulator BMR/TDEE untuk target nutrisi harian, serta dashboard admin untuk mengelola produk dan pengguna.",
    image: "/Scanbar.png",
    demoLink: "https://scan-bar-y26r.vercel.app/",
    githubLink: "https://github.com/naomiguen/fe-scanbar",
    isPrivate: false
  },
  {
    title: "Convertly",
    tech: ["React.js", "FastAPI", "Python", "Docker"],
    description: "Convertly adalah situs alat file gratis untuk mahasiswa dengan 19 alat dalam satu antarmuka, mulai dari kompres, gabung, dan kunci PDF, pas foto otomatis, hingga konversi Word/PowerPoint ke PDF dan OCR untuk scan. Dibangun dengan keamanan sebagai prioritas: validasi file berdasarkan isinya, rate limit per IP berbasis Redis, serta penghapusan file otomatis setelah 30 menit. Tersedia dalam tiga bahasa (Indonesia, English, Español) dengan mode gelap.",
    image: "/convertly.png",
    githubLinks: [
      { label: "Repo Frontend", labelEn: "Frontend Repo", url: "https://github.com/naomiguen/convertly-frontend" },
      { label: "Repo Backend", labelEn: "Backend Repo", url: "https://github.com/naomiguen/convertly-backend" },
    ],
    isPrivate: false
  },
];

// Baris atas marquee: bahasa & framework. Baris bawah: database & tools.
export const SKILLS = {
  coding: [
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "React.js", icon: "/skills/react.svg" },
    { name: "Vue.js", icon: "/skills/vuejs.svg" },
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Express.js", icon: "/skills/express.svg" },
    { name: "Python", icon: "/skills/python.svg" },
    { name: "Scikit-learn", icon: "/skills/scikitlearn.svg" },
    { name: "HTML", icon: "/skills/html5.svg" },
    { name: "CSS", icon: "/skills/css3.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
  ],
  dataTools: [
    { name: "SQL", icon: "/skills/sql.svg" },
    { name: "MySQL", icon: "/skills/mysql.svg" },
    { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
    { name: "Supabase", icon: "/skills/supabase.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "Figma", icon: "/skills/figma.svg" },
    { name: "GitHub", icon: "/skills/github.svg" },
    { name: "Google Workspace", icon: "/skills/googleworkspace.svg" },
    { name: "Microsoft Office", icon: "/skills/microsoftoffice.svg" },
  ],
};

export const GALLERY_DATA = {
  // Slug = nama peran dalam huruf kecil dengan spasi jadi "-" (lihat toSlug di Experience.jsx)
  "kepala-departemen-persekutuan": {
    title: "Kepala Departemen Persekutuan PMK",
    kegiatan: [
      {
        nama: "Organogram",
        photos: [
          { src: "/organogram1.jpeg" },
          { src: "/organogram2.jpeg" },
          { src: "/organogram3.jpeg" },
          { src: "/organogram4.jpeg" },
        ],
      },
      {
        nama: "Photo Studio",
        photos: [
          { src: "/photostudio1.jpeg" },
          { src: "/photostudio2.jpeg" },
          { src: "/photostudio3.jpeg" },
          { src: "/photostudio4.jpeg" },
          { src: "/photostudio5.jpeg" },
          { src: "/photostudio6.jpeg" },
          { src: "/photostudio7.jpeg" },
          { src: "/photostudio8.jpeg" },
          { src: "/photostudio9.jpeg" },
          { src: "/photostudio10.jpeg" },
          { src: "/photostudio11.jpeg" },
          { src: "/photostudio12.jpeg" },
          { src: "/photostudio13.jpeg" },
          { src: "/photostudio14.jpeg" },
          { src: "/photostudio15.jpeg" },
          { src: "/photostudio16.jpeg" },
        ],
      },
    ],
  },

  "beasiswa-bank-indonesia": {
    title: "Beasiswa Bank Indonesia",
    kegiatan: [
      {
        nama: "Ring One",
        photos: [
          { src: "/ringone1.jpeg" },
          { src: "/ringone2.jpeg" },
          { src: "/ringone3.jpeg" },
          { src: "/ringone4.jpeg" },
        ],
      },
      {
        nama: "Divisi Pendidikan dan Kebudayaan",
        photos: [
          { src: "/divisipendikbud1.jpeg" },
          { src: "/divisipendikbud2.jpeg" },
        ],
      },
      {
        nama: "GenBI Balikpapan",
        photos: [
          { src: "/genbi1.jpeg" },
          { src: "/genbi2.jpeg" },
          { src: "/genbi3.jpeg" },
        ],
      },
    ],
  },

  "magang-bmkg": {
    title: "Magang BMKG Balikpapan",
    kegiatan: [
      {
        nama: "Dokumentasi Kegiatan Magang",
        // Tambahkan foto magang lain di sini: { src: "/nama-file.jpeg" }
        photos: [{ src: "/dokum_bmkg.jpeg" }],
      },
    ],
  },

  "kepala-departemen-dalam-negeri-hmif-itk": {
    title: "Kepala Departemen Dalam Negeri HMIF ITK",
    kegiatan: [
      {
        nama: "Foto Dagriww",
        photos: [
          { src: "/kadep-hmif.jpeg" },
          { src: "/foto1.jpeg" },
          { src: "/foto2.jpeg" },
          { src: "/foto3.jpeg" }
        ],
      },
      {
        nama: "Welcome Party Dagri",
        photos: [
          { src: "/wepedagri1.jpeg" },
          { src: "/wepedagri2.jpeg" },
          { src: "/wepedagri3.jpeg" },
          { src: "/wepedagri4.jpeg" }
        ],
     },
     {
        nama: "Welcome Party Staff HMIF Kabinet Impact",
        photos: [
          { src: "/wepestaff1.jpeg" },
          { src: "/wepestaff2.jpeg" },
          { src: "/wepestaff3.jpeg" },
          { src: "/wepestaff4.jpeg" },
          { src: "/wepestaff5.jpeg" },
          { src: "/wepestaff6.jpeg" },
          { src: "/wepestaff7.jpeg" },
          { src: "/wepestaff10.JPG" },
        ],
     },
     {
        nama: "Welcome Party Maba Informatika 2025",
        photos: [
          { src: "/wepestaff1.jpeg" },
          { src: "/wepestaff2.jpeg" },
          { src: "/wepestaff3.jpeg" },
          { src: "/wepestaff4.jpeg" },
          { src: "/wepestaff5.jpeg" },
          { src: "/wepestaff6.jpeg" },
          { src: "/wepestaff7.jpeg" },
          { src: "/wepestaff10.JPG" },
        ],
     },
    ],
  },

  "staff-badan-manajerial": {
    title: "Staff Badan Manajerial KM ITK",
    kegiatan: [
      {
        nama: "Kegiatan PMO & PDO",
        photos: [
          { src: "/bmj.jpeg" },
        ],
      },
    ],
  },

  "pemandu-lkmm-itk": {
    title: "Pemandu LKMM ITK",
    kegiatan: [
      {
        nama: "Sesi Pelatihan LKMM",
        photos: [
          { src: "/pemandu.jpeg" },
        ],
      },
    ],
  },

  "staff-departemen-dalam-negeri-hmif": {
    title: "Staff Departemen Dalam Negeri HMIF",
    kegiatan: [
      {
        nama: "Program Kerja Departemen",
        photos: [
          { src: "/staff_hmif.JPG" },
        ],
      },
    ],
  },

  "staff-magang-departemen-dalam-negeri-hmif": {
    title: "Staff Magang Departemen Dalam Negeri HMIF",
    kegiatan: [
      {
        nama: "Syukuran Wisuda HMIF",
        photos: [
          { src: "/staff_magang.jpeg" },
        ],
      },
    ],
  },
};

// Apakah halaman dokumentasi dengan slug ini sudah punya minimal satu foto?
export const hasPhotos = (slug) =>
  GALLERY_DATA[slug]?.kegiatan?.some((k) => k.photos?.length > 0) ?? false;
