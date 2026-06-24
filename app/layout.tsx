import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import { pretendard } from "./fonts";
import { SITE } from "@/lib/site";

const TITLE = "ONTAX 세무회계 — 유튜버·크리에이터 전문 세무";
const DESCRIPTION =
  "애드센스·협찬·굿즈까지, 크리에이터의 수입을 가장 잘 아는 세무사. 비대면 100% · 첫 상담 무료.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s — ONTAX",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE.nameKo,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// 업체 구조화 데이터 (SEO) — 전부 가상.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE.nameKo,
  description: DESCRIPTION,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.tel,
  areaServed: "KR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full ${pretendard.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
