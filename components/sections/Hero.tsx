import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

// 히어로 목업 카드에 들어가는 예시 수입 라인 (가상).
const SUMMARY_ROWS = [
  { label: "애드센스 (달러)", amount: "₩16,900,000" },
  { label: "협찬·현물 소득", amount: "₩3,200,000" },
  { label: "굿즈·전자책", amount: "₩2,400,000" },
];

// 홈 S1 — 첫인상 (light tile). 비주얼은 목업 → 8주차 영상 교체 (기획서 §12).
export default function Hero() {
  return (
    <section className="bg-canvas pt-[72px] pb-section">
      <Container className="text-center">
        <Reveal>
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
        </Reveal>

        {/* 목업 정산 카드 — 시스템 내 유일한 그림자(shadow-product) */}
        <Reveal delay={140}>
          <div className="mx-auto mt-14 max-w-[680px]">
            <div className="rounded-lg border border-hairline bg-canvas p-6 text-left shadow-product sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-caption font-semibold text-ink">
                  ONTAX 정산 요약
                </p>
                <span className="rounded-pill bg-action/8 px-3 py-1 text-caption font-semibold text-action">
                  2026 귀속
                </span>
              </div>

              <div className="mt-5 divide-y divide-divider">
                {SUMMARY_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="flex items-center gap-2 text-body text-ink-80">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-pill bg-action"
                      />
                      {row.label}
                    </span>
                    <span className="text-body font-semibold text-ink">
                      {row.amount}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-md bg-action/5 px-4 py-3">
                <span className="text-body font-semibold text-ink">
                  예상 절세액
                </span>
                <span className="text-body font-semibold text-action">
                  ₩1,180,000 ↓
                </span>
              </div>
            </div>
            <p className="mt-3 text-caption text-ink-48">
              예시 화면 · 8주차 영상으로 교체 예정
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
