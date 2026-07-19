import type { Dictionary } from "@/i18n/types"

export const fr: Dictionary = {
  langName: "Français",

  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    language: "Langue",
  },

  hero: {
    role: "Full Stack Developer",
    tagline:
      "Je conçois des applications mobiles et web, transformant les idées en produits clairs et fiables.",
    downloadCv: "Télécharger le CV",
    contactMe: "Me contacter",
    scrollToAbout: "Défiler vers À propos",
  },

  about: {
    eyebrow: "À propos",
    heading: "Mon parcours",
    paragraphs: [
      "Je conçois des applications web et mobiles évolutives, en livrant des solutions complètes, des interfaces frontend aux systèmes backend. J'aime créer des produits à fort impact, améliorer l'expérience utilisateur et apprendre continuellement de nouvelles technologies.",
    ],
    stats: {
      experience: "Années d'expérience",
      projects: "Projets réalisés",
    },
  },

  skills: {
    eyebrow: "Stack technique",
    heading: "Compétences & Outils",
    subtitle: "Les technologies que j'utilise au quotidien pour créer des produits.",
  },

  projects: {
    eyebrow: "Projets",
    heading: "Travaux sélectionnés",
    subtitle:
      "Quelques créations à moi — cliquez sur une carte pour lancer la démo en direct.",
    livePreview: "Aperçu en direct",
    preview: "Aperçu",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "Une application web de streaming musical — écoutez des morceaux, suivez des artistes et constituez votre bibliothèque. PWA installable avec commandes multimédias sur l'écran verrouillé.",
      },
      renime: {
        title: "Renime",
        description:
          "Une application mobile d'anime — explorez les titres populaires, regardez des épisodes, recherchez et enregistrez vos favoris. Développée avec Expo.",
      },
      inkling: {
        title: "Inkling",
        description:
          "Dessinez quelque chose et une IA le devine à voix haute — reconnaissance de croquis en temps réel dans le navigateur avec TensorFlow.js (DoodleNet).",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "Le jeu Snake classique reconstruit en HTML, CSS et JavaScript purs. Jouable au clavier ou au tactile, directement dans le navigateur.",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "Un casse-briques sur trois niveaux avec contrôle de la raquette, traînée de balle, particules, son et un système de combo à balle bonus.",
      },
      cooknow: {
        title: "CookNow",
        description:
          "Dites à CookNow ce que vous avez dans votre cuisine et il trouve des recettes que vous pouvez cuisiner tout de suite — classées par correspondance d'ingrédients, fonctionne hors ligne.",
      },
    },
    window: {
      refresh: "Actualiser",
      openInNewTab: "Ouvrir dans un nouvel onglet",
      close: "Fermer l'aperçu",
      minimize: "Réduire l'aperçu",
      maximize: "Agrandir (plein écran)",
      exitFullscreen: "Quitter le plein écran",
      noWebDemo: (title) =>
        `${title} est une application mobile (développée avec Expo), il n'y a donc pas de démo web à intégrer ici. Vous pouvez explorer le code source sur GitHub.`,
      viewOnGithub: "Voir sur GitHub",
    },
  },

  contact: {
    eyebrow: "Contact",
    heading: "Entrons en contact",
    subtitle:
      "Je suis ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter.",
    rights: "Tous droits réservés.",
  },
}
