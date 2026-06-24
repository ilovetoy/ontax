import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";

export const metadata: Metadata = {
  title: {
    default: "ONTAX 세무회계 — 유튜버·크리에이터 전문 세무",
    template: "%s — ONTAX",
  },
  description:
    "애드센스·협찬·굿즈까지, 크리에이터의 수입을 가장 잘 아는 세무사. 비대면 100% · 첫 상담 무료.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <Header />
        {/* 모바일 하단 고정 CTA 바와 겹치지 않도록 하단 패딩 */}
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
