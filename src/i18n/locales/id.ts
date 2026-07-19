import type { Dictionary } from "@/i18n/types"

export const id: Dictionary = {
  langName: "Bahasa Indonesia",

  nav: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    contact: "Kontak",
    language: "Bahasa",
  },

  hero: {
    role: "Full Stack Developer",
    tagline:
      "Saya membangun aplikasi mobile dan web, mengubah ide menjadi produk yang rapi dan andal.",
    downloadCv: "Unduh CV",
    contactMe: "Hubungi Saya",
    scrollToAbout: "Gulir ke tentang",
  },

  about: {
    eyebrow: "Tentang",
    heading: "Latar belakang saya",
    paragraphs: [
      "Saya membangun aplikasi web dan mobile yang skalabel, memberikan solusi menyeluruh dari antarmuka frontend hingga sistem backend. Saya senang menciptakan produk yang berdampak, meningkatkan pengalaman pengguna, dan terus mempelajari teknologi baru.",
    ],
    stats: {
      experience: "Tahun pengalaman",
      projects: "Proyek selesai",
    },
  },

  skills: {
    eyebrow: "Tech Stack",
    heading: "Keahlian & Alat",
    subtitle: "Teknologi yang saya gunakan sehari-hari untuk membangun produk.",
  },

  projects: {
    eyebrow: "Portofolio",
    heading: "Proyek Unggulan",
    subtitle:
      "Beberapa hal yang saya buat — klik kartu mana pun untuk memainkan demo langsung.",
    livePreview: "Demo Langsung",
    preview: "Pratinjau",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "Aplikasi streaming musik berbasis web — putar lagu, ikuti artis, dan bangun pustaka Anda. PWA yang bisa dipasang dengan kontrol media di layar kunci.",
      },
      renime: {
        title: "Renime",
        description:
          "Aplikasi anime mobile — jelajahi judul populer, tonton episode, cari, dan simpan favorit Anda. Dibangun dengan Expo.",
      },
      inkling: {
        title: "Inkling",
        description:
          "Gambar sesuatu dan AI menebaknya dengan suara — pengenalan sketsa real-time di browser dengan TensorFlow.js (DoodleNet).",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "Game Snake klasik yang dibangun ulang dengan HTML, CSS & JavaScript murni. Bisa dimainkan dengan keyboard atau sentuhan, langsung di browser.",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "Game pemecah bata dengan tiga level, kontrol paddle, jejak bola, partikel, suara, dan mekanik kombo bola bonus.",
      },
      cooknow: {
        title: "CookNow",
        description:
          "Beri tahu CookNow apa yang ada di dapur Anda dan ia menemukan resep yang bisa dimasak sekarang — diperingkat berdasarkan kecocokan bahan, bekerja offline.",
      },
    },
    window: {
      refresh: "Muat ulang",
      openInNewTab: "Buka di tab baru",
      close: "Tutup pratinjau",
      minimize: "Perkecil pratinjau",
      maximize: "Perbesar (layar penuh)",
      exitFullscreen: "Keluar dari layar penuh",
      noWebDemo: (title) =>
        `${title} adalah aplikasi mobile (dibuat dengan Expo), jadi tidak ada demo web untuk disematkan di sini. Anda bisa menjelajahi kodenya di GitHub.`,
      viewOnGithub: "Lihat di GitHub",
    },
  },

  contact: {
    eyebrow: "Kontak",
    heading: "Mari terhubung",
    subtitle:
      "Saya terbuka untuk peluang dan kolaborasi baru. Jangan ragu untuk menghubungi saya.",
    rights: "Semua hak dilindungi.",
  },
}
