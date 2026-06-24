// 홈 페이지 콘텐츠 — 페이지_콘텐츠_명세.md(홈 S2~S5) / 기획서 §4·§6·§5·§8.
// 모든 수치·후기는 가상(데모). 납품 시 교체.

// S2. 공감 — "이런 고민 있으셨죠?" (기획서 §4 / §3.5 상담일지)
export const PAIN_POINTS: { keyword: string; quote: string }[] = [
  { keyword: "달러", quote: "애드센스가 달러로 들어오는데, 이거 어디다 신고하죠? 환율은요?" },
  { keyword: "협찬", quote: "협찬으로 받은 제품도 세금 내야 하나요? 현금도 아닌데…" },
  { keyword: "3.3%", quote: "3.3% 떼고 받았는데 5월에 또 내라네요. 두 번 내는 거예요?" },
  { keyword: "굿즈", quote: "굿즈 팔기 시작했는데 사업자등록 해야 하나요? 언제부터요?" },
];

// S3. 솔루션 — "왜 ONTAX" (기획서 §6)
export const SOLUTIONS: { icon: string; title: string; desc: string }[] = [
  { icon: "🎬", title: "크리에이터만 전문", desc: "플랫폼별 수입 구조를 압니다." },
  { icon: "💬", title: "비대면·간편", desc: "카톡·이메일로 자료를 주고받아요." },
  { icon: "🗣️", title: "쉬운 설명", desc: "어려운 세무 용어 없이 풀어서." },
  { icon: "🎁", title: "첫 상담 무료", desc: "부담 없이 시작하세요." },
];

// S4. 서비스 요약 (기획서 §5) → /services
export const SERVICE_SUMMARY: string[] = [
  "종합소득세·부가세 신고",
  "경비·절세 설계",
  "애드센스·협찬·굿즈 정리",
  "사업자등록 상담",
  "분기 관리·세금 캘린더",
];

// S5. 신뢰 — 증거 (기획서 §8, 전부 가상)
export const PROOF_STATS: { value: string; label: string }[] = [
  { value: "OOO명", label: "관리 크리에이터" },
  { value: "OOO만+", label: "누적 구독자 합계" },
];

export const TESTIMONIALS: { quote: string; author: string }[] = [
  { quote: "환급까지 받았어요. 진작 맡길 걸.", author: "유튜버 A" },
  { quote: "유튜브 수입, 이제 안 무서워요.", author: "인스타 크리에이터 B" },
];
