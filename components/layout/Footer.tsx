import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_ITEMS, SITE, DISCLAIMER } from "@/lib/site";

// 사이트맵_IA §3: 상호·대표·등록번호(가상) + 바로가기 + 면책 문구.
export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-parchment">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-[18px] font-semibold text-ink">
              {SITE.name}
            </p>
            <p className="mt-2 text-caption text-ink-48">{SITE.tagline}</p>
            <p className="mt-4 text-caption text-ink-48">
              {SITE.email} · {SITE.tel}
            </p>
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
          <p className="mt-2">© {new Date().getFullYear()} {SITE.name}.</p>
        </div>
      </Container>
    </footer>
  );
}
