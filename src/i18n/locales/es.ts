import type { Dictionary } from "@/i18n/types"

export const es: Dictionary = {
  langName: "Español",

  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    language: "Idioma",
  },

  hero: {
    role: "Desarrollador Full Stack",
    tagline:
      "Construyo aplicaciones móviles y web, convirtiendo ideas en productos limpios y confiables.",
    downloadCv: "Descargar CV",
    contactMe: "Contáctame",
    scrollToAbout: "Desplazarse a sobre mí",
  },

  about: {
    eyebrow: "Sobre mí",
    heading: "Mi trayectoria",
    paragraphs: [
      "Construyo aplicaciones web y móviles escalables, ofreciendo soluciones integrales desde las interfaces frontend hasta los sistemas backend. Me apasiona crear productos con impacto, mejorar la experiencia del usuario y aprender continuamente nuevas tecnologías.",
    ],
    stats: {
      experience: "Años de experiencia",
      projects: "Proyectos completados",
    },
  },

  skills: {
    eyebrow: "Tech Stack",
    heading: "Habilidades y Herramientas",
    subtitle: "Las tecnologías que uso a diario para crear productos.",
  },

  projects: {
    eyebrow: "Portafolio",
    heading: "Proyectos Destacados",
    subtitle:
      "Algunas cosas que he creado — haz clic en cualquier tarjeta para reproducir la demo en vivo.",
    livePreview: "Demo en Vivo",
    preview: "Vista previa",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "Una app web de streaming de música — reproduce canciones, sigue a artistas y crea tu biblioteca. PWA instalable con controles multimedia en la pantalla de bloqueo.",
      },
      renime: {
        title: "Renime",
        description:
          "Una app móvil de anime — explora títulos populares, mira episodios, busca y guarda tus favoritos. Construida con Expo.",
      },
      inkling: {
        title: "Inkling",
        description:
          "Dibuja algo y una IA lo adivina en voz alta — reconocimiento de bocetos en tiempo real en el navegador con TensorFlow.js (DoodleNet).",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "El clásico juego de la Serpiente reconstruido con HTML, CSS y JavaScript puro. Se juega con teclado o táctil, directamente en el navegador.",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "Un juego de romper ladrillos a lo largo de tres niveles con control de paleta, estela de la bola, partículas, sonido y una mecánica de combo de bola extra.",
      },
      cooknow: {
        title: "CookNow",
        description:
          "Dile a CookNow qué tienes en tu cocina y encontrará recetas que puedes preparar ahora mismo — ordenadas por coincidencia de ingredientes, funciona sin conexión.",
      },
    },
    window: {
      refresh: "Recargar",
      openInNewTab: "Abrir en una pestaña nueva",
      close: "Cerrar vista previa",
      minimize: "Minimizar vista previa",
      maximize: "Maximizar (pantalla completa)",
      exitFullscreen: "Salir de pantalla completa",
      noWebDemo: (title) =>
        `${title} es una app móvil (creada con Expo), así que no hay una demo web para incrustar aquí. Puedes explorar el código en GitHub.`,
      viewOnGithub: "Ver en GitHub",
    },
  },

  contact: {
    eyebrow: "Contacto",
    heading: "Ponte en contacto",
    subtitle:
      "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en escribirme.",
    rights: "Todos los derechos reservados.",
  },
}
