import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import CtaBand from "@/components/sections/CtaBand";
import { POSITIONING, PROFILE, BRAND_TONE } from "@/content/about";

export const metadata: Metadata = {
  title: "소개",
  description: "크리에이터의 언어로 세금을 설명하는 ONTAX 대표세무사 소개.",
};

// 소개 /about — 페이지_콘텐츠_명세 소개 S1~S4. 수치·프로필은 가상.
export default function AboutPage() {
  return (
    <>
      {/* S1. 포지셔닝 (light) */}
      <section className="bg-canvas py-section">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>{POSITIONING.eyebrow}</Eyebrow>
            <h1 className="mt-3 font-display text-display font-semibold tracking-tight text-ink">
              {POSITIONING.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-[680px] text-lead text-ink-80">
              {POSITIONING.lead}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* S2. 대표 세무사 프로필 (parchment) — 신뢰 핵심 */}
      <section className="bg-parchment py-section">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
              {/* 더미 프로필 사진 — 시스템 유일 그림자(shadow-product) */}
              <div className="mx-auto grid aspect-square w-[220px] place-items-center rounded-lg bg-canvas text-center text-caption text-ink-48 shadow-product">
                대표 사진
                <br />
                (8주차 실사진)
              </div>
              <div>
                <h2 className="font-display text-display font-semibold tracking-tight text-ink">
                  {PROFILE.name}{" "}
                  <span className="text-body font-normal text-ink-48">
                    · {PROFILE.title}
                  </span>
                </h2>
                <p className="mt-4 text-lead text-ink-80">
                  “{PROFILE.oneLiner}”
                </p>
                <ul className="mt-6 space-y-2">
                  {PROFILE.career.map((c) => (
                    <li key={c} className="flex gap-3 text-body text-ink-80">
                      <span aria-hidden className="text-action">
                        —
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-caption text-ink-48">{PROFILE.signals}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* S3. 브랜드 톤 (light) */}
      <section className="bg-canvas py-section">
        <Container className="text-center">
          <Reveal>
            <p className="mx-auto max-w-[680px] font-display text-lead font-normal text-ink">
              “{BRAND_TONE.reassurance}”
            </p>
            <p className="mt-4 text-body text-ink-48">{BRAND_TONE.tone}</p>
          </Reveal>
        </Container>
      </section>

      {/* S4. CTA */}
      <CtaBand />
    </>
  );
}
