import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_ITEMS, SITE, DISCLAIMER } from "@/lib/site";

// 약관 링크 (placeholder — 8주차 실제 페이지 연결).
const POLICY_LINKS = [
  { label: "개인정보처리방침", href: "#" },
  { label: "이용약관", href: "#" },
];

// 사이트맵_IA §3: 상호·대표·등록번호(가상) + 바로가기 + 연락처 + 면책 문구.
export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-parchment">
      {/* 모바일: 하단 고정 CTA 바(lg:hidden)에 마지막 줄이 가리지 않도록 여유 패딩 */}
      <Container className="pt-12 pb-24 lg:pb-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-[18px] font-semibold text-ink">
              {SITE.name}
            </p>
            <p className="mt-2 text-caption text-ink-48">{SITE.tagline}</p>
            <div className="mt-4 space-y-1 text-caption text-ink-48">
              <p>
                {SITE.email} · {SITE.tel}
              </p>
              <p>운영시간 평일 10:00–18:00 (점심 12:00–13:00)</p>
            </div>
            <a
              href={SITE.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-caption font-semibold text-action hover:text-action-focus"
            >
              💬 카카오톡 채널 상담
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-caption text-ink-80 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-hairline pt-6 text-caption text-ink-48">
          <p>
            {SITE.bizName} · 대표 {SITE.representative} · 세무사등록번호{" "}
            {SITE.taxId} · 사업자등록번호 {SITE.bizId}
          </p>
          <p className="mt-2">{DISCLAIMER}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            {POLICY_LINKS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="text-ink-80 transition-colors hover:text-ink"
              >
                {p.label}
              </Link>
            ))}
            <span>© {new Date().getFullYear()} {SITE.name}.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
