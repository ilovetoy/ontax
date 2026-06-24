import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "무료 상담 신청",
  description: "크리에이터 세무, 첫 상담은 무료. 비대면으로 간편하게.",
};

const CREATOR_TYPES = ["유튜버", "인스타그래머", "블로거", "스트리머", "틱톡커", "기타"];

const inputClass =
  "w-full rounded-md border border-hairline bg-canvas px-4 py-3 text-body text-ink placeholder:text-ink-48";

// 상담신청 /contact — 페이지_콘텐츠_명세 상담신청 S1~S4.
// 7주차: UI 목업(제출 동작 X). 8주차: 폼·카톡 실제 전송 + 개인정보 동의 처리.
export default function ContactPage() {
  return (
    <>
      {/* S1. 헤드 + 안심 문구 (light) */}
      <section className="bg-canvas pt-section pb-12">
        <Container className="text-center">
          <h1 className="font-display text-display font-semibold tracking-tight text-ink">
            무료 상담 신청
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-lead text-ink-80">
            세금, 혼자 고민하지 마세요. 남겨주시면 빠르게 연락드립니다. 상담 내용은 비밀
            보장됩니다.
          </p>
        </Container>
      </section>

      {/* S2~S3. 폼 + 연락처 (parchment) */}
      <section className="bg-parchment pb-section pt-4">
        <Container className="!max-w-[920px]">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            {/* 연락처 / 안심 요소 */}
            <div>
              <ul className="space-y-5">
                <li>
                  <p className="text-body font-semibold text-ink">⚡ 빠른 응답</p>
                  <p className="text-caption text-ink-48">신청 후 1영업일 이내 연락</p>
                </li>
                <li>
                  <p className="text-body font-semibold text-ink">🔒 비밀 보장</p>
                  <p className="text-caption text-ink-48">상담 내용은 안전하게 보호됩니다</p>
                </li>
                <li>
                  <p className="text-body font-semibold text-ink">🎯 맞춤 진단</p>
                  <p className="text-caption text-ink-48">수입 구조에 맞는 절세 방향 제시</p>
                </li>
              </ul>
              <div className="mt-8 space-y-2 border-t border-hairline pt-6 text-caption text-ink-80">
                <p>📧 {SITE.email}</p>
                <p>📞 {SITE.tel}</p>
                <p>💬 카카오톡 채널 상담</p>
                <p className="text-ink-48">비대면 100% · 첫 상담 무료 · 전국 어디서나</p>
              </div>
            </div>

            {/* 폼 카드 (UI 목업) */}
            <form className="rounded-lg border border-hairline bg-canvas p-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-caption font-semibold text-ink">
                    이름 <span className="text-action">*</span>
                  </label>
                  <input className={inputClass} placeholder="홍길동" />
                </div>
                <div>
                  <label className="mb-1.5 block text-caption font-semibold text-ink">
                    연락처 <span className="text-action">*</span>
                  </label>
                  <input className={inputClass} placeholder="010-0000-0000" />
                </div>
                <div>
                  <label className="mb-1.5 block text-caption font-semibold text-ink">
                    크리에이터 유형
                  </label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>
                      선택 (선택사항)
                    </option>
                    {CREATOR_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-caption font-semibold text-ink">
                    상담 내용
                  </label>
                  <textarea
                    rows={4}
                    className={inputClass}
                    placeholder="궁금한 점을 자유롭게 적어주세요 (선택)"
                  />
                </div>
                <label className="flex items-start gap-2 text-caption text-ink-48">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    [필수] 개인정보 수집·이용에 동의합니다. 수집 항목(이름·연락처)은 상담
                    목적에만 사용됩니다.
                  </span>
                </label>
                <button
                  type="button"
                  className="w-full rounded-pill bg-action px-[22px] py-[13px] text-body font-semibold text-on-dark transition-transform active:scale-95"
                >
                  무료 상담 신청하기
                </button>
                <p className="text-center text-caption text-ink-48">
                  ※ 7주차 데모 — 제출 동작은 8주차에 연동됩니다.
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
