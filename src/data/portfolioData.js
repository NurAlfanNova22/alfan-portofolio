export const portfolioData = {
  personal: {
    name: "NoiseCode",
    fullName: "Nur Alfan Nova Perdana",
    role: "Full-Stack & AI Solutions Developer",
    tagline: "Membangun aplikasi web cerdas & berkinerja tinggi dengan integrasi AI dan arsitektur modern.",
    bio: "Saya berfokus pada pengembangan aplikasi web responsif, integrasi model AI/LLM, serta arsitektur teknis modern untuk menciptakan solusi digital yang inovatif dan efisien.",
    location: "Blitar, Jawa Timur, Indonesia",
    email: "wizardb67@gmail.com",
    phone: "085327242507",
    availableForHire: true,
    socials: {
      github: "https://github.com/NurAlfanNova22",
      linkedin: "https://www.linkedin.com/in/nur-alfan-nova-perdana-b39a24248/",
      instagram: "https://instagram.com/nur_alfan22"
    },
    stats: [
      { label: "Proyek Selesai", value: "6+" },
      { label: "AI Integrations", value: "3+" },
      { label: "Modern Stack", value: "Next.js & AI" }
    ]
  },
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "Next.js & React.js", level: "Proficient", percent: 90 },
        { name: "JavaScript & TypeScript", level: "Proficient", percent: 85 },
        { name: "Tailwind CSS", level: "Proficient", percent: 95 },
        { name: "HTML & CSS", level: "Proficient", percent: 95 }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js & Express.js", level: "Proficient", percent: 85 },
        { name: "REST API", level: "Proficient", percent: 85 },
        { name: "MySQL / PostgreSQL", level: "Proficient", percent: 80 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", level: "Proficient", percent: 90 },
        { name: "Vercel / Cloud Hosting", level: "Proficient", percent: 85 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Tech Store",
      category: "Web App",
      description: "Platform e-commerce responsif dengan keranjang belanja, checkout, katalog filter dinamis, dan panel admin berbasis Next.js.",
      longDescription: "Membangun platform e-commerce skala penuh yang berfokus pada performa dan pengalaman pengguna. Proyek ini menangani manajemen inventaris yang kompleks, integrasi pembayaran, dan dashboard admin yang intuitif.",
      challenges: "Salah satu tantangan utama adalah mengoptimalkan rendering gambar produk yang banyak tanpa mengorbankan kecepatan LCP (Largest Contentful Paint).",
      solutions: "Saya menggunakan fitur optimasi gambar dari Next.js dan implementasi caching di sisi server untuk mempercepat pengambilan data produk.",
      features: [
        "Katalog produk lengkap dengan sistem pencarian & filter kategori dinamis",
        "Keranjang belanja (Shopping Cart) interaktif dengan perhitungan total otomatis",
        "Simulasi checkout pembayaran aman dengan validasi pesanan",
        "Panel admin manajemen produk & ringkasan penjualan real-time"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com/NurAlfanNova22/ecommerce-tech-store",
      githubUrl: "https://github.com/NurAlfanNova22/ecommerce-tech-store",
      featured: true
    },
    {
      id: 2,
      title: "Task & Workspace Manager",
      category: "Web App",
      description: "Aplikasi produktivitas berbasis Kanban board dengan drag-and-drop tugas, filter prioritas, dan status realtime.",
      longDescription: "Aplikasi manajemen tugas kolaboratif yang dirancang untuk mengorganisasi alur kerja tim maupun individu dengan efisien melalui papan Kanban interaktif.",
      challenges: "Mengimplementasikan interaksi drag-and-drop yang mulus dan sinkronisasi status tugas secara instan di berbagai kolom.",
      solutions: "Memanfaatkan state management modern dan pustaka interaksi UI performa tinggi untuk memastikan transisi elemen bekerja tanpa jeda.",
      features: [
        "Papan Kanban interaktif dengan multi-kolom (To Do, In Progress, Done)",
        "Sistem manajemen tugas lengkap dengan label prioritas & tenggat waktu",
        "Fitur tambah, edit, dan hapus tugas secara instan",
        "Penyimpanan lokal / state tersinkronisasi untuk akses cepat"
      ],
      techStack: ["React.js", "Next.js", "Tailwind CSS", "Prisma"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com/NurAlfanNova22/task-workspace-manager",
      githubUrl: "https://github.com/NurAlfanNova22/task-workspace-manager",
      featured: true
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      category: "Dashboard",
      description: "Dashboard interaktif pelacak pemasukan dan pengeluaran dengan grafik visualisasi dan ringkasan ekspor laporan.",
      longDescription: "Dashboard keuangan pribadi yang membantu pengguna memantau arus kas, mengkategorikan pengeluaran bulanan, dan menganalisis kesehatan keuangan secara visual.",
      challenges: "Menyajikan data keuangan yang kompleks ke dalam bentuk grafik interaktif yang mudah dipahami dalam sekali lihat.",
      solutions: "Mengintegrasikan pustaka Chart.js dengan komponen reaktif Next.js untuk merender grafik tren pengeluaran dan pemasukan secara dinamis.",
      features: [
        "Grafik visualisasi arus kas bulanan & kategori pengeluaran",
        "Pencatatan transaksi pemasukan dan pengeluaran secara cepat",
        "Ringkasan saldo total dan kalkulasi otomatis",
        "Riwayat transaksi lengkap dengan opsi filter tanggal"
      ],
      techStack: ["Next.js", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com/NurAlfanNova22/personal-finance-dashboard",
      githubUrl: "https://github.com/NurAlfanNova22/personal-finance-dashboard",
      featured: true
    },
    {
      id: 4,
      title: "L'Émeraude Culinary Landing",
      category: "Landing Page",
      description: "Website restoran mewah premium dengan animasi interaktif Framer Motion, sistem reservasi meja online, dan katalog menu kuliner digital eksklusif.",
      longDescription: "L'Émeraude adalah landing page restoran mewah yang dirancang dengan estetika tinggi. Menampilkan pengalaman visual yang imersif, transisi halaman mulus menggunakan Framer Motion, reservasi online yang responsif, serta galeri menu kuliner interaktif.",
      challenges: "Menghadirkan nuansa mewah dan elegan tanpa mengorbankan performa animasi dan kecepatan muat halaman di berbagai perangkat.",
      solutions: "Mengoptimalkan komponen modular Next.js dengan animasi berbasis Framer Motion yang ringan serta desain layout yang fully responsive.",
      features: [
        "Animasi transisi imersif menggunakan Framer Motion",
        "Sistem form reservasi meja online interaktif dengan notifikasi sukses",
        "Katalog menu kuliner digital dengan kategori & detail hidangan",
        "Desain mewah responsif berstandar tinggi (High-End UI/UX)"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/images/restaurant.png",
      demoUrl: "https://lemeraude-culinary-landing.vercel.app/",
      githubUrl: "https://github.com/NurAlfanNova22/lemeraude-culinary-landing",
      featured: true
    },
    {
      id: 5,
      title: "SkyPulse",
      category: "Web App",
      description: "Aplikasi cuaca interaktif dengan informasi real-time, prakiraan akurat, dan antarmuka modern yang responsif.",
      longDescription: "SkyPulse menyediakan pembaruan cuaca komprehensif termasuk suhu terkini, tingkat kelembapan, kecepatan angin, indeks UV, serta prakiraan cuaca beberapa hari ke depan dengan UI kaca (Glassmorphism) yang elegan.",
      challenges: "Mengelola penanganan error API eksternal dan menampilkan fallback data yang informatif saat koneksi atau pencarian kota tidak ditemukan.",
      solutions: "Menerapkan manajemen state asynchronous yang kokoh dengan indikator loading dan penanganan exception yang ramah pengguna.",
      features: [
        "Pencarian kota global untuk data cuaca real-time",
        "Informasi detail (Suhu, Kelembapan, Angin, Tekanan Udara, UV)",
        "Prakiraan cuaca harian & per jam yang akurat",
        "Antarmuka responsif modern dengan tema dinamis"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Weather API"],
      image: "/images/skypulse.png",
      demoUrl: "https://skypulse-five-topaz.vercel.app/",
      githubUrl: "https://github.com/NurAlfanNova22/SkyPulse.git",
      featured: true
    },
    {
      id: 6,
      title: "Design System & UI Kit",
      category: "UI/UX",
      description: "Koleksi komponen UI modern dan reusable untuk mempercepat perancangan antarmuka aplikasi web.",
      longDescription: "Design System & UI Kit komprehensif yang dirancang untuk konsistensi produk digital, mencakup panduan warna tipografi, tombol interaktif, kartu, form input, dan komponen navigasi.",
      challenges: "Memastikan standarisasi komponen dapat beradaptasi secara fleksibel pada berbagai kebutuhan layout aplikasi.",
      solutions: "Menyusun struktur hierarki komponen yang modular dan terdokumentasi rapi dengan prinsip atomic design.",
      features: [
        "Panduan warna (Color Palette) & tipografi terstandarisasi",
        "Koleksi komponen reusable (Button, Card, Modal, Form Elements)",
        "Dokumentasi penggunaan dan varian state komponen",
        "Optimasi alur kerja desain untuk efisiensi tim"
      ],
      techStack: ["Figma", "UI/UX Design", "Design System"],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com/NurAlfanNova22/design-system-ui-kit",
      githubUrl: "https://github.com/NurAlfanNova22/design-system-ui-kit",
      featured: false
    }
  ],
  experiences: [],
  education: [
    {
      degree: "D3 Manajemen Informatika",
      institution: "Polinema (Politeknik Negeri Malang) - Kampus PSDKU Blitar",
      period: "2023 - Sekarang",
      description: "Aktif mempelajari pengembangan perangkat lunak, pemrograman web full-stack, struktur data, dan rekayasa sistem informasi."
    }
  ]
};
