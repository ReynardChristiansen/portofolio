import type { Dictionary } from "@/i18n/types"

export const ko: Dictionary = {
  langName: "한국어",

  nav: {
    home: "홈",
    about: "소개",
    skills: "기술",
    projects: "프로젝트",
    contact: "연락처",
    language: "언어",
  },

  hero: {
    role: "Full Stack Developer",
    tagline: "저는 모바일과 웹을 개발하며, 아이디어를 깔끔하고 안정적인 제품으로 만듭니다.",
    downloadCv: "이력서 다운로드",
    contactMe: "연락하기",
    scrollToAbout: "소개로 스크롤",
  },

  about: {
    eyebrow: "소개",
    heading: "제 배경",
    paragraphs: [
      "저는 확장 가능한 웹과 모바일 애플리케이션을 개발하며, 프론트엔드 인터페이스부터 백엔드 시스템까지 엔드투엔드 솔루션을 제공합니다. 영향력 있는 제품을 만들고, 사용자 경험을 개선하며, 새로운 기술을 끊임없이 배우는 것을 좋아합니다.",
    ],
    stats: {
      experience: "경력 연차",
      projects: "완료한 프로젝트",
    },
  },

  skills: {
    eyebrow: "기술 스택",
    heading: "기술 & 도구",
    subtitle: "제품을 개발하기 위해 매일 사용하는 기술들입니다.",
  },

  projects: {
    eyebrow: "프로젝트",
    heading: "주요 작업",
    subtitle: "제가 만든 몇 가지 작업입니다 — 아무 카드나 클릭해 라이브 데모를 실행해 보세요.",
    livePreview: "라이브 미리보기",
    preview: "미리보기",
    items: {
      hirmify: {
        title: "Hirmify",
        description:
          "음악 스트리밍 웹 앱 — 곡을 스트리밍하고, 아티스트를 팔로우하며, 나만의 라이브러리를 만드세요. 잠금 화면 미디어 컨트롤을 지원하는 설치형 PWA입니다.",
      },
      renime: {
        title: "Renime",
        description:
          "모바일 애니메이션 앱 — 인기 작품을 둘러보고, 에피소드를 시청하며, 검색하고, 좋아하는 작품을 저장하세요. Expo로 개발했습니다.",
      },
      inkling: {
        title: "Inkling",
        description:
          "무언가를 그리면 AI가 소리 내어 알아맞힙니다 — TensorFlow.js(DoodleNet)로 브라우저에서 실시간 스케치 인식.",
      },
      hypersnake: {
        title: "Hyper Snake",
        description:
          "순수 HTML, CSS, JavaScript로 다시 만든 클래식 스네이크 게임. 키보드나 터치로 브라우저에서 바로 플레이할 수 있습니다.",
      },
      bricks: {
        title: "Break the Bricks",
        description:
          "패들 조작, 공 잔상, 파티클, 사운드, 보너스 볼 콤보 메커니즘을 갖춘 3개 레벨의 벽돌 깨기 게임입니다.",
      },
      cooknow: {
        title: "CookNow",
        description:
          "냉장고에 있는 재료를 CookNow에 알려주면 지금 바로 만들 수 있는 레시피를 찾아줍니다 — 재료 일치도로 정렬되며, 오프라인에서도 작동합니다.",
      },
    },
    window: {
      refresh: "새로고침",
      openInNewTab: "새 탭에서 열기",
      close: "미리보기 닫기",
      minimize: "미리보기 최소화",
      maximize: "최대화(전체 화면)",
      exitFullscreen: "전체 화면 종료",
      noWebDemo: (title) =>
        `${title}은(는) 모바일 앱(Expo로 제작)이라 여기에 삽입할 웹 데모가 없습니다. GitHub에서 소스 코드를 살펴볼 수 있습니다.`,
      viewOnGithub: "GitHub에서 보기",
    },
  },

  contact: {
    eyebrow: "연락처",
    heading: "연락하기",
    subtitle: "새로운 기회와 협업에 열려 있습니다. 언제든 편하게 연락 주세요.",
    rights: "모든 권리 보유.",
  },
}
