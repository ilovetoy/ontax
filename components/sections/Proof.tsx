import Container from "@/components/ui/Container";
import { PROOF_STATS, TESTIMONIALS } from "@/content/home";

// 홈 S5 — 신뢰·증거 (dark tile). 수치·후기 전부 가상.
export default function Proof() {
  return (
    <section className="bg-tile-1 py-section text-on-dark">
      <Container className="text-center">
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-display font-semibold text-action-on-dark">
                {stat.value}
              </div>
              <div className="mt-2 text-caption text-body-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-[760px] gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="rounded-lg bg-tile-2 p-7 text-left"
            >
              <blockquote className="text-tagline leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-caption text-body-muted">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-caption text-body-muted">
          ⚠️ 데모용 가상 수치·후기입니다. 납품 시 실제 실적·후기로 교체됩니다.
        </p>
      </Container>
    </section>
  );
}
