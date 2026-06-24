import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

// 홈 S1 — 첫인상 (light tile). 비주얼은 더미 → 8주차 영상 교체 (기획서 §12).
export default function Hero() {
  return (
    <section className="bg-canvas pt-[72px] pb-section">
      <Container className="text-center">
        <p className="text-tagline font-semibold text-action">{SITE.nameKo}</p>
        <h1 className="mx-auto mt-4 max-w-[720px] font-display text-hero font-semibold tracking-tight text-ink">
          유튜버·크리에이터,
          <br />
          세금은 ONTAX가 정리해드릴게요.
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-lead text-ink-80">
          애드센스(달러)도, 협찬도, 굿즈도 — 플랫폼 수입을 가장 잘 아는 세무사.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact">무료 상담 신청</Button>
          <Button
            href={SITE.kakaoUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            카카오톡 상담
          </Button>
        </div>
        <p className="mt-7 text-caption text-ink-48">
          비대면 100% · 첫 상담 무료 · 전국 크리에이터
        </p>

        {/* 더미 히어로 비주얼 — 시스템 내 유일한 그림자(shadow-product) */}
        <div className="mx-auto mt-14 flex aspect-[16/9] max-w-[860px] items-center justify-center rounded-lg bg-parchment shadow-product">
          <span className="text-caption text-ink-48">
            [ 히어로 비주얼 — 8주차 영상 교체 ]
          </span>
        </div>
      </Container>
    </section>
  );
}
