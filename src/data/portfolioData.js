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
      category: "AI & Automation",
      items: [
        { name: "LLM Integration (OpenAI/Gemini)", level: "Proficient", percent: 85 },
        { name: "Vercel AI SDK", level: "Proficient", percent: 85 },
        { name: "Prompt Engineering", level: "Advanced", percent: 90 },
        { name: "AI-Augmented Development", level: "Advanced", percent: 90 }
      ]
    },
    {
      category: "Tools & Deployment",
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
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Task & Workspace Manager",
      category: "Web App",
      description: "Aplikasi produktivitas berbasis Kanban board dengan drag-and-drop tugas, filter prioritas, dan status realtime.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "Prisma"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      category: "Dashboard",
      description: "Dashboard interaktif pelacak pemasukan dan pengeluaran dengan grafik visualisasi dan ringkasan ekspor laporan.",
      techStack: ["Next.js", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
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
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/images/restaurant.png",
      demoUrl: "https://lemeraude-culinary-landing.vercel.app/",
      githubUrl: "https://github.com/NurAlfanNova22",
      featured: true
    },
    {
      id: 5,
      title: "SkyPulse",
      category: "Web App",
      description: "Aplikasi cuaca interaktif dengan informasi real-time, prakiraan akurat, dan antarmuka modern yang responsif.",
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
      techStack: ["Figma", "UI/UX Design", "Design System"],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ],
  experiences: [],
  education: [
    {
      degree: "D3 Manajemen Informatika",
      institution: "Politeknik Negeri Malang (Polinema)",
      period: "Sekarang",
      description: "Fokus mempelajari dasar-dasar pemrograman, pengembangan web, dan manajemen basis data."
    }
  ]
};
