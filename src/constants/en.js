// Terjemahan English. Teks asli (Indonesia) tetap di constants/index.js; di sini hanya versi English-nya.
// Cara kerjanya: dicocokkan lewat kunci, bukan urutan. Kalau sebuah entri belum diterjemahkan,
// situs otomatis memakai teks Indonesia-nya, jadi menambah entri baru di index.js tidak merusak apa pun.
//
//   profile        -> kunci "main"
//   education      -> kunci: institution
//   work           -> kunci: key
//   achievements   -> kunci: key
//   organizations  -> kunci: role (Indonesia)
//   committees     -> kunci: event
//   projects       -> kunci: title (Indonesia)
//   gallery        -> kunci: slug halaman; "kegiatan" berkunci nama kegiatan (Indonesia)

export const EN = {
  profile: {
    main: {
      about:
        "Informatics student at Institut Teknologi Kalimantan focused on web development and AI-based technology. Active in campus organizations and committees, used to working in a structured way, and constantly growing my technical skills through real projects and exploring new technologies.",
    },
  },

  education: {
    "Institut Teknologi Kalimantan": {
      year: "2023 - Present",
      major: "Informatics",
      description:
        "Focused on web technology development and the application of machine learning, artificial intelligence, and data science.",
    },
    "SMAN 1 Panti": {
      year: "2020 - 2023",
      major: "Mathematics & Natural Sciences (MIPA)",
      description:
        "Graduated from the Mathematics & Natural Sciences track and achieved the highest scores in Chemistry and Physics.",
    },
  },

  work: {
    "bmkg-intern": {
      period: "January - May 2026",
      location: "Balikpapan, East Kalimantan",
      points: [
        "Assisted in designing an Enterprise Architecture model to align operational business processes with IT systems at the station level.",
        "Developed a functional web system with React.js and JavaScript, integrating Supabase (PostgreSQL) as the backend service and database management.",
        "Developed a weather classification model using an Artificial Neural Network (ANN) and an Automated Machine Learning (AutoML) approach to help improve the prediction accuracy of the meteorological system.",
      ],
    },
    "ta-struktur-data": {
      period: "August - December 2026",
      role: "Teaching Assistant, Data Structures",
    },
    "ta-pcd": {
      period: "August - December 2026",
      role: "Teaching Assistant, Digital Image Processing",
    },
    "lab-fisika": {
      period: "September - December 2025",
      role: "Laboratory Assistant, Physics I",
      location: "Balikpapan, East Kalimantan",
      points: [
        "Guided and supervised more than 100 students in Physics I practicum sessions, particularly in the Calorimeter and Spring Constant modules.",
        "Guided experimental data collection and quantitative analysis so that students could interpret results accurately.",
        "Ensured the proper use of laboratory equipment and compliance with safety protocols.",
        "Assessed and provided structured feedback on practicum reports to strengthen students' scientific writing skills.",
      ],
    },
  },

  achievements: {
    "beasiswa-bi": {
      badge: "Scholarship",
      title: "Bank Indonesia Scholarship Recipient (Central Banking Education)",
    },
  },

  organizations: {
    "Kepala Departemen Persekutuan": {
      year: "March 2026 - Present",
      role: "Head of Fellowship Department",
      organization: "Christian Student Fellowship (PMK)",
      description:
        "Leading the Fellowship Department by planning, coordinating, and supervising department programs in line with the organization's goals and values. Organizing fellowship activities, spiritual development programs, and community-building initiatives among members. Regularly monitoring and evaluating the implementation of work programs to ensure effectiveness and continuous improvement.",
    },
    "Kepala Departemen Dalam Negeri HMIF ITK": {
      year: "2025 - Present",
      role: "Head of Internal Affairs Department, HMIF ITK",
      description:
        "Responsible for managing the organization's internal affairs, coordinating between divisions, and ensuring the continuity of work programs and organizational administration.",
    },
    "Staff Badan Manajerial": {
      year: "2025 - Present",
      role: "Managerial Body Staff",
      description:
        "Responsible for finding and providing speakers for the PMO and PDO activities of every student association at ITK.",
    },
    "Pemandu LKMM ITK": {
      year: "2024 - Present",
      role: "LKMM ITK Facilitator",
      organization: "LKMM ITK FACILITATORS",
      description:
        "Designing training concepts at ITK and serving as a speaker at LKMM Pra-TD and LKMM TD as part of developing students' leadership and managerial skills.",
    },
    "Staff Departemen Dalam Negeri HMIF": {
      role: "Internal Affairs Department Staff, HMIF",
      description:
        "Responsible for planning and carrying out several work programs, such as the Graduation Thanksgiving (Syukuran Wisuda) and Sekolah Sidang.",
    },
    "Staff Magang Departemen Dalam Negeri HMIF": {
      role: "Intern Staff, Internal Affairs Department HMIF",
      description: "Served as MC at the HMIF graduation thanksgiving event.",
    },
  },

  committees: {
    "Decathlon PMK ITK": {
      role: "Expert Staff, Event Division",
      description:
        "Responsible for designing the creative concept and compiling a detailed rundown, and coordinating every element of the event to make sure it ran on time and according to the established plan.",
    },
    "Infinite Vol.4": {
      role: "Expert Staff, Event Division",
      description:
        "Designed the concept for the Informatics Internship Expo and the exhibition of IoT, Game, and Deep Learning course projects as a platform to publish student work and promote the Informatics Study Program.",
    },
    "Retreat PMK ITK 2024": {
      role: "Staff, Event Division",
      description:
        "Responsible for designing the concept and theme of the event for new students across Institut Teknologi Kalimantan, including the design of indoor and outdoor games and the structured arrangement of participant groups.",
    },
    "HUT KM ITK 2024": {
      role: "Staff, Fundraising Division",
      description:
        "Responsible for preparing sales reports and developing sales strategies to reach the targets that were set.",
    },
    "SPIn ETAM ITK 2024": {
      role: "Staff, Event Division",
      description:
        "Served as Liaison Officer (LO) for SPIn ETAM as the communication link with participants, ensured accurate information delivery, and contributed to designing the flashmob choreography and the papermob code for the new student welcoming events at Institut Teknologi Kalimantan.",
    },
    "INFINITE Vol.3": {
      role: "Staff, Event Division",
      description:
        "Prepared the Terms of Reference (TOR) for InfoTech EXPO INFINITE Vol. 3 and took part in setting up the decorations, making sure every element of the event was neatly arranged.",
    },
  },

  projects: {
    "Sistem Informasi Enterprise Architecture BMKG": {
      title: "BMKG Enterprise Architecture Information System",
      description:
        "Built during my internship at BMKG, Class I Meteorological Station Sultan Aji Muhammad Sulaiman Sepinggan, Balikpapan. Helped design an Enterprise Architecture model (TOGAF) to align business processes with IT systems, built a web system with React.js and Supabase (PostgreSQL) as the backend, and developed a weather classification model based on ANN and AutoML to improve prediction accuracy.",
    },
    ScanBar: {
      description:
        "ScanBar is a web-based nutrition tracker for packaged food and beverages. Users can scan a package barcode to see its nutritional content (OpenFoodFacts data), log their daily intake, and get analysis and recommendations from Google Gemini. For unpackaged food, it offers photo-based analysis and an AI nutrition chatbot. It also includes a BMR/TDEE calculator for daily nutrition targets and an admin dashboard to manage products and users.",
    },
    Convertly: {
      description:
        "Convertly is a free file toolkit for students with 19 tools in one interface, ranging from compressing, merging, and locking PDFs and automatic ID photos to Word/PowerPoint-to-PDF conversion and OCR for scans. Built with security as a priority: content-based file validation, Redis-backed per-IP rate limiting, and automatic file deletion after 30 minutes. Available in three languages (Indonesian, English, Spanish) with a dark mode.",
    },
  },

  gallery: {
    "kepala-departemen-persekutuan": {
      title: "Head of Fellowship Department, PMK",
      kegiatan: { Organogram: "Organogram", "Photo Studio": "Photo Studio" },
    },
    "beasiswa-bank-indonesia": {
      title: "Bank Indonesia Scholarship",
      kegiatan: {
        "Ring One": "Ring One",
        "Divisi Pendidikan dan Kebudayaan": "Education and Culture Division",
        "GenBI Balikpapan": "GenBI Balikpapan",
      },
    },
    "magang-bmkg": {
      title: "BMKG Balikpapan Internship",
      kegiatan: { "Dokumentasi Kegiatan Magang": "Internship Documentation" },
    },
    "kepala-departemen-dalam-negeri-hmif-itk": {
      title: "Head of Internal Affairs Department, HMIF ITK",
      kegiatan: {
        "Foto Dagriww": "Dagriww Photos",
        "Welcome Party Dagri": "Welcome Party Dagri",
        "Welcome Party Staff HMIF Kabinet Impact": "Welcome Party for HMIF Staff, Impact Cabinet",
        "Welcome Party Maba Informatika 2025": "Welcome Party for New Informatics Students 2025",
      },
    },
    "staff-badan-manajerial": {
      title: "Managerial Body Staff, KM ITK",
      kegiatan: { "Kegiatan PMO & PDO": "PMO & PDO Activities" },
    },
    "pemandu-lkmm-itk": {
      title: "LKMM ITK Facilitator",
      kegiatan: { "Sesi Pelatihan LKMM": "LKMM Training Session" },
    },
    "staff-departemen-dalam-negeri-hmif": {
      title: "Internal Affairs Department Staff, HMIF",
      kegiatan: { "Program Kerja Departemen": "Department Work Programs" },
    },
    "staff-magang-departemen-dalam-negeri-hmif": {
      title: "Intern Staff, Internal Affairs Department HMIF",
      kegiatan: { "Syukuran Wisuda HMIF": "HMIF Graduation Thanksgiving" },
    },
  },
};
