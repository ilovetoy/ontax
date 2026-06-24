import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "소개",
  description: "크리에이터의 언어로 세금을 설명하는 ONTAX 대표세무사 소개.",
};

const CAREER = [
  "한국세무사회 정회원 · 세무사 자격 취득",
  "前 ◯◯세무법인 — 콘텐츠·미디어 산업 담당",
  "유튜버·인플루언서 누적 OOO명 세무 관리",
  "애드센스·해외수입·협찬·굿즈 수입 신고 전문",
];

// 소개 /about — 페이지_콘텐츠_명세 소개 S1~S4. 수치·프로필은 가상.
export default function AboutPage() {
  return (
    <>
      {/* S1. 포지셔닝 (light) */}
      <section className="bg-canvas py-section">
        <Container className="text-center">
          <p className="text-tagline font-semibold text-action">왜 크리에이터 특화인가</p>
          <h1 className="mt-4 font-display text-display font-semibold tracking-tight text-ink">
            일반은 포화, 크리에이터 특화는 공백
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-lead text-ink-80">
            일반 세무사는 크리에이터의 수입 구조(달러 환율·현물 협찬·굿즈·강의)를 잘
            모릅니다. ONTAX는 그 공백을 전문성으로 채웁니다. 비대면 100%, 전국 어디서나.
          </p>
        </Container>
      </section>

      {/* S2. 대표 세무사 프로필 (parchment) — 신뢰 핵심 */}
      <section className="bg-parchment py-section">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
            {/* 더미 프로필 사진 — 시스템 유일 그림자(shadow-product) 적용 대상 */}
            <div className="mx-auto aspect-square w-[220px] rounded-lg bg-canvas shadow-product grid place-items-center text-caption text-ink-48">
              대표 사진
              <br />
              (8주차 실사진)
            </div>
            <div>
              <h2 className="font-display text-display font-semibold tracking-tight text-ink">
                김세현 <span className="text-body font-normal text-ink-48">· 대표세무사</span>
              </h2>
              <p className="mt-4 text-lead text-ink-80">
                “크리에이터의 언어로 세금을 설명합니다 — 애드센스도, 협찬도, 굿즈도.”
              </p>
              <ul className="mt-6 space-y-2">
                {CAREER.map((c) => (
                  <li key={c} className="flex gap-3 text-body text-ink-80">
                    <span aria-hidden className="text-action">
                      —
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-caption text-ink-48">
                비대면 상담 OOO건 · 크리에이터 세무 칼럼 기고 · 강연 이력 (가상)
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* S3. 브랜드 톤 (light) */}
      <section className="bg-canvas py-section">
        <Container className="text-center">
          <p className="mx-auto max-w-[680px] font-display text-lead font-normal text-ink">
            “세금 막막하시죠? 저희가 정리해드릴게요.”
          </p>
          <p className="mt-4 text-body text-ink-48">
            친근하지만 전문 — 편안한 존댓말로, 어려운 세무 용어는 풀어서 설명합니다.
          </p>
        </Container>
      </section>

      {/* S4. CTA */}
      <CtaBand />
    </>
  );
}
