import Container from "@/components/ui/Container";
import { FAQ } from "@/content/faq";

// 홈 S6 — FAQ 5문항 (light tile). 네이티브 <details>로 JS 없이 아코디언.
export default function Faq() {
  return (
    <section className="bg-canvas py-section">
      <Container>
        <h2 className="text-center font-display text-display font-semibold tracking-tight text-ink">
          자주 묻는 질문
        </h2>
        <div className="mx-auto mt-12 max-w-[760px] divide-y divide-hairline border-y border-hairline">
          {FAQ.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-tagline font-semibold text-ink">
                {item.q}
                <span
                  aria-hidden
                  className="text-ink-48 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-body text-ink-80">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
