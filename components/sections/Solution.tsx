import Container from "@/components/ui/Container";
import { SOLUTIONS } from "@/content/home";

// 홈 S3 — 솔루션 "왜 ONTAX" (light tile).
export default function Solution() {
  return (
    <section className="bg-canvas py-section">
      <Container>
        <h2 className="text-center font-display text-display font-semibold tracking-tight text-ink">
          왜 ONTAX일까요?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="text-center sm:text-left">
              <div aria-hidden className="text-[34px] leading-none">
                {s.icon}
              </div>
              <h3 className="mt-4 text-tagline font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-body text-ink-48">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
