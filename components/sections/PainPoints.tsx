import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { PAIN_POINTS } from "@/content/home";

// 키워드만 Action Blue로 강조.
function Quote({ quote, keyword }: { quote: string; keyword: string }) {
  const [before, after] = quote.split(keyword);
  return (
    <>
      {before}
      <strong className="font-semibold text-action">{keyword}</strong>
      {after}
    </>
  );
}

// 홈 S2 — 공감 "이런 고민 있으셨죠?" (parchment tile). 좌측 정렬 헤더 + 호버 카드.
export default function PainPoints() {
  return (
    <section className="bg-parchment py-section">
      <Container>
        <Reveal>
          <Eyebrow>고객의 목소리</Eyebrow>
          <h2 className="mt-3 max-w-[520px] font-display text-display font-semibold tracking-tight text-ink">
            이런 고민, 있으셨죠?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p.keyword} delay={i * 80}>
              <div className="h-full rounded-lg border border-hairline bg-canvas p-7 text-tagline leading-snug text-ink-80 transition-all duration-200 hover:-translate-y-1 hover:border-action">
                <span aria-hidden className="text-action">
                  “
                </span>
                <Quote quote={p.quote} keyword={p.keyword} />
                <span aria-hidden className="text-action">
                  ”
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
