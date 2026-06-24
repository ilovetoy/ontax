// 업무분야 카드 (페이지_콘텐츠_명세 업무분야 S2 / 기획서 §5).

export type ServiceCard = { icon: string; title: string; desc: string };

export const SERVICES: ServiceCard[] = [
  {
    icon: "📄",
    title: "종합소득세·부가세 신고 대행",
    desc: "다양한 수입을 합산해 정확하게 신고합니다.",
  },
  {
    icon: "💰",
    title: "크리에이터 맞춤 경비·절세 설계",
    desc: "인정 경비·공제로 세금을 최소화합니다.",
  },
  {
    icon: "🌐",
    title: "애드센스·해외수입 정리",
    desc: "달러 입금·환율·외국납부세액공제까지 챙깁니다.",
  },
  {
    icon: "🎁",
    title: "협찬·현물 소득 정리",
    desc: "현물도 시가로 환산해 누락 없이 신고합니다.",
  },
  {
    icon: "📦",
    title: "굿즈·전자책·강의 수입 관리",
    desc: "여러 수입원을 통합해 관리합니다.",
  },
  {
    icon: "🪪",
    title: "사업자 등록·전환 상담",
    desc: "신인 크리에이터의 등록 시점·업종코드를 안내합니다.",
  },
];
