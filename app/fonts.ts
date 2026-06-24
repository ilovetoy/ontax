import localFont from "next/font/local";

// Pretendard Variable — next/font/local로 자체호스팅(렌더 블로킹·FOUT 제거).
// 라틴 글리프도 포함하므로 별도 Inter 불필요. weight는 가변축 전체 범위.
export const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});
