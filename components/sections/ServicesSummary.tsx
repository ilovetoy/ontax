import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_SUMMARY } from "@/content/home";

// 홈 S4 — 서비스 요약 (pearl tile) → /services.
export default function ServicesSummary() {
  return (
    <section className="bg-pearl py-section">
      <Container className="text-center">
        <Reveal>
          <Eyebrow>서비스</Eyebrow>
          <h2 className="mt-3 font-display text-display font-semibold tracking-tight text-ink">
            크리에이터 수입, 전부 정리합니다
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SERVICE_SUMMARY.map((s) => (
              <span
                key={s}
                className="rounded-pill border border-hairline bg-canvas px-5 py-3 text-body text-ink-80 transition-colors hover:border-action hover:text-action"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1 text-body font-semibold text-action hover:text-action-focus"
            >
              업무분야 자세히 보기
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
