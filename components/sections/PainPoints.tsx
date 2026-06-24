import Container from "@/components/ui/Container";
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

// 홈 S2 — 공감 "이런 고민 있으셨죠?" (parchment tile).
export default function PainPoints() {
  return (
    <section className="bg-parchment py-section">
      <Container>
        <h2 className="text-center font-display text-display font-semibold tracking-tight text-ink">
          이런 고민, 있으셨죠?
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((p) => (
            <div
              key={p.keyword}
              className="rounded-lg bg-canvas p-7 text-tagline leading-snug text-ink-80"
            >
              <span aria-hidden className="text-action">“</span>
              <Quote quote={p.quote} keyword={p.keyword} />
              <span aria-hidden className="text-action">”</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
