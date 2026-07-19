import type { Dictionary } from "@/i18n/types"

export const ja: Dictionary = {
  langName: "日本語",

  nav: {
    home: "ホーム",
    about: "紹介",
    skills: "スキル",
    projects: "プロジェクト",
    contact: "連絡先",
    language: "言語",
  },

  hero: {
    role: "フルスタック開発者",
    tagline:
      "モバイルとウェブを構築し、アイデアをクリーンで信頼性の高いプロダクトに変えます。",
    downloadCv: "履歴書をダウンロード",
    contactMe: "お問い合わせ",
    scrollToAbout: "紹介へスクロール",
  },

  about: {
    eyebrow: "紹介",
    heading: "私について",
    paragraphs: [
      "フロントエンドのインターフェースからバックエンドのシステムまで、エンドツーエンドのソリューションを提供し、スケーラブルなウェブおよびモバイルアプリケーションを構築しています。インパクトのあるプロダクトを作り、ユーザー体験を向上させ、新しい技術を学び続けることに情熱を注いでいます。",
    ],
    stats: {
      experience: "年の経験",
      projects: "完成したプロジェクト",
    },
  },

  skills: {
    eyebrow: "技術スタック",
    heading: "スキルとツール",
    subtitle: "プロダクトを構築するために日々使用している技術です。",
  },

  projects: {
    eyebrow: "ポートフォリオ",
    heading: "注目のプロジェクト",
    subtitle:
      "私が作ったものをいくつか紹介します。どれでもカードをクリックしてライブデモを再生してください。",
    livePreview: "ライブプレビュー",
    preview: "プレビュー",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "音楽ストリーミングのウェブアプリ。曲を再生し、アーティストをフォローし、ライブラリを構築できます。ロック画面のメディア操作に対応したインストール可能なPWAです。",
      },
      renime: {
        title: "Renime",
        description:
          "モバイルアニメアプリ。人気のタイトルを探索し、エピソードを視聴し、検索し、お気に入りを保存できます。Expoで構築されています。",
      },
      inkling: {
        title: "Inkling",
        description:
          "何かを描くとAIが声に出して当てます。TensorFlow.js（DoodleNet）を使ったブラウザ上のリアルタイムスケッチ認識です。",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "素のHTML、CSS、JavaScriptで再構築した定番のスネークゲーム。キーボードでもタッチでも、ブラウザ上で直接プレイできます。",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "3つのレベルにわたるブロック崩しゲーム。パドル操作、ボールの軌跡、パーティクル、サウンド、ボーナスボールのコンボ機能を備えています。",
      },
      cooknow: {
        title: "CookNow",
        description:
          "キッチンにある材料をCookNowに伝えると、今すぐ作れるレシピを見つけます。材料の一致度でランク付けされ、オフラインでも動作します。",
      },
    },
    window: {
      refresh: "再読み込み",
      openInNewTab: "新しいタブで開く",
      close: "プレビューを閉じる",
      minimize: "プレビューを最小化",
      maximize: "最大化（全画面）",
      exitFullscreen: "全画面を終了",
      noWebDemo: (title) =>
        `${title} はモバイルアプリ（Expoで構築）のため、ここに埋め込むウェブデモはありません。ソースコードはGitHubでご覧いただけます。`,
      viewOnGithub: "GitHubで見る",
    },
  },

  contact: {
    eyebrow: "連絡先",
    heading: "お気軽にご連絡ください",
    subtitle:
      "新しい機会やコラボレーションを歓迎しています。お気軽にご連絡ください。",
    rights: "無断転載を禁じます。",
  },
}
