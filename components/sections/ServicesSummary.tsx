import Link from "next/link";
import Container from "@/components/ui/Container";
import { SERVICE_SUMMARY } from "@/content/home";

// 홈 S4 — 서비스 요약 (parchment tile) → /services.
export default function ServicesSummary() {
  return (
    <section className="bg-parchment py-section">
      <Container className="text-center">
        <h2 className="font-display text-display font-semibold tracking-tight text-ink">
          크리에이터 수입, 전부 정리합니다
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SERVICE_SUMMARY.map((s) => (
            <span
              key={s}
              className="rounded-pill bg-canvas px-5 py-3 text-body text-ink-80"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="text-body font-semibold text-action hover:text-action-focus"
          >
            업무분야 자세히 보기 →
          </Link>
        </div>
      </Container>
    </section>
  );
}
