import type { Dictionary } from "@/i18n/types"

export const zh: Dictionary = {
  langName: "中文",

  nav: {
    home: "首页",
    about: "关于",
    skills: "技能",
    projects: "项目",
    contact: "联系",
    language: "语言",
  },

  hero: {
    role: "全栈开发者",
    tagline: "我构建移动和网页应用，将想法转化为简洁可靠的产品。",
    downloadCv: "下载简历",
    contactMe: "联系我",
    scrollToAbout: "滚动到关于",
  },

  about: {
    eyebrow: "关于",
    heading: "我的背景",
    paragraphs: [
      "我构建可扩展的网页和移动应用，提供从前端界面到后端系统的端到端解决方案。我热衷于打造有影响力的产品、改善用户体验，并持续学习新技术。",
    ],
    stats: {
      experience: "工作年限",
      projects: "完成的项目",
    },
  },

  skills: {
    eyebrow: "技术栈",
    heading: "技能与工具",
    subtitle: "我日常用来构建产品的技术。",
  },

  projects: {
    eyebrow: "项目",
    heading: "精选作品",
    subtitle: "我构建的一些作品——点击任意卡片即可播放实时演示。",
    livePreview: "实时预览",
    preview: "预览",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "一款音乐流媒体网页应用——播放歌曲、关注艺人、建立你的音乐库。可安装的 PWA，支持锁屏媒体控制。",
      },
      renime: {
        title: "Renime",
        description:
          "一款移动端动漫应用——探索热门作品、观看剧集、搜索并收藏你喜欢的内容。使用 Expo 构建。",
      },
      inkling: {
        title: "Inkling",
        description:
          "画点什么，AI 会大声猜出它是什么——在浏览器中通过 TensorFlow.js（DoodleNet）实现实时草图识别。",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "用纯 HTML、CSS 和 JavaScript 重制的经典贪吃蛇游戏。可用键盘或触摸操作，直接在浏览器中畅玩。",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "一款横跨三个关卡的打砖块游戏，包含挡板控制、球体拖尾、粒子效果、音效以及奖励球连击机制。",
      },
      cooknow: {
        title: "CookNow",
        description:
          "告诉 CookNow 你厨房里有什么，它会找到你现在就能做的食谱——按食材匹配度排序，离线也能用。",
      },
    },
    window: {
      refresh: "刷新",
      openInNewTab: "在新标签页中打开",
      close: "关闭预览",
      minimize: "最小化预览",
      maximize: "最大化（全屏）",
      exitFullscreen: "退出全屏",
      noWebDemo: (title) =>
        `${title} 是一款移动应用（使用 Expo 构建），因此这里没有可嵌入的网页演示。你可以在 GitHub 上浏览源代码。`,
      viewOnGithub: "在 GitHub 上查看",
    },
  },

  contact: {
    eyebrow: "联系",
    heading: "取得联系",
    subtitle: "我乐于接受新的机会与合作。欢迎随时联系我。",
    rights: "版权所有。",
  },
}
