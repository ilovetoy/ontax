import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "업무분야",
  description:
    "종합소득세·부가세·애드센스·협찬·굿즈·사업자등록까지 크리에이터 맞춤 세무 서비스.",
};

// 업무분야 /services — 페이지_콘텐츠_명세 업무분야 S1~S4.
export default function ServicesPage() {
  return (
    <>
      {/* S1. 인트로 (light) */}
      <section className="bg-canvas py-section">
        <Container className="text-center">
          <h1 className="font-display text-display font-semibold tracking-tight text-ink">
            크리에이터 수입, 종류마다 세금이 다릅니다
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-lead text-ink-80">
            애드센스부터 협찬·굿즈까지, ONTAX가 전부 정리합니다.
          </p>
        </Container>
      </section>

      {/* S2. 서비스 카드 (parchment) */}
      <section className="bg-parchment py-section">
        <Container className="!max-w-[1100px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-hairline bg-canvas p-6 transition-all duration-200 hover:-translate-y-1 hover:border-action"
              >
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 text-body font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-caption text-ink-48">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* S3. 분기 관리 안내 */}
          <p className="mt-12 text-center text-body text-ink-80">
            분기별 관리 + 세금 캘린더 알림으로 놓치는 날짜 없이.
          </p>
        </Container>
      </section>

      {/* S4. CTA */}
      <CtaBand />
    </>
  );
}
