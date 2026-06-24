import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

// 히어로 하단 신뢰 스트립 — 얇은 divider 밴드. 수치는 가상.
const ITEMS = ["한국세무사회 정회원", "비대면 100%", "누적 관리 OOO명", "첫 상담 무료"];

export default function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-canvas">
      <Container className="py-6">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-caption text-ink-48">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="h-1 w-1 rounded-pill bg-action" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
