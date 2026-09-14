import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "NoiseCode | Nur Alfan Nova Perdana - Full-Stack Web Developer",
  description: "NoiseCode — Portofolio profesional Nur Alfan Nova Perdana - Full-Stack Web Developer berbasis Next.js, React, dan Tailwind CSS. Menampilkan proyek web modern dan keahlian.",
  keywords: ["NoiseCode", "Nur Alfan Nova Perdana", "Next.js", "React", "Portfolio", "Full-Stack Web Developer", "Tailwind CSS"],
  authors: [{ name: "NoiseCode — Nur Alfan Nova Perdana" }],
  openGraph: {
    title: "NoiseCode — Nur Alfan Nova Perdana - Full-Stack Web Developer Portfolio",
    description: "Membangun aplikasi web modern, skalabel, dan berkinerja tinggi menggunakan Next.js & React.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

