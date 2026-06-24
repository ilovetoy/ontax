// ONTAX 사이트 전역 설정 — 사이트맵_IA.md / 페이지_콘텐츠_명세.md 기준.
// 상호·연락처·수치는 전부 가상(데모). 납품 시 교체.

export const SITE = {
  name: "ONTAX",
  nameKo: "ONTAX 세무회계",
  tagline: "유튜버·크리에이터 전문 세무",
  // 가상 연락처 (사이트맵_IA §3)
  email: "hello@ontax.kr",
  tel: "02-000-0000",
  kakaoUrl: "https://pf.kakao.com/", // 카카오톡 채널 (가상 placeholder)
  // 가상 사업자 정보 (footer)
  bizName: "ONTAX 세무회계",
  representative: "김세현",
  taxId: "000-00-00000", // 세무사등록번호 (가상)
  bizId: "000-00-00000", // 사업자등록번호 (가상)
} as const;

export type NavItem = { label: string; href: string };

// 글로벌 네비게이션 (사이트맵_IA §2)
export const NAV_ITEMS: NavItem[] = [
  { label: "소개", href: "/about" },
  { label: "업무분야", href: "/services" },
  { label: "세무 인사이트", href: "/insights" },
  { label: "상담신청", href: "/contact" },
];

// 단일 전환 목표 = 상담신청 (사이트맵_IA §4)
export const CTA = { label: "무료 상담 신청", href: "/contact" } as const;

export const DISCLAIMER =
  "본 페이지는 데모용이며 상호·연락처·수치·후기는 모두 가상입니다.";
