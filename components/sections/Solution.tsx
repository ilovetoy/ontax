import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { SOLUTIONS } from "@/content/home";

// 홈 S3 — 솔루션 "왜 ONTAX" (light tile). 인덱스 번호 + 아이콘 배지.
export default function Solution() {
  return (
    <section className="bg-canvas py-section">
      <Container>
        <Reveal>
          <Eyebrow>WHY ONTAX</Eyebrow>
          <h2 className="mt-3 max-w-[520px] font-display text-display font-semibold tracking-tight text-ink">
            왜 ONTAX일까요?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-md bg-action/8 text-[22px] transition-colors group-hover:bg-action/15"
                  >
                    {s.icon}
                  </span>
                  <span className="font-display text-tagline font-semibold tabular-nums text-action/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-tagline font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-body text-ink-48">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
