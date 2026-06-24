"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_ITEMS, CTA, SITE } from "@/lib/site";

// 사이트맵_IA §2: sticky 헤더 + 데스크톱 우측 상시 CTA + 모바일 햄버거.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-display text-[20px] font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        {/* 데스크톱 네비 */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-caption transition-colors hover:text-ink ${
                isActive(item.href) ? "text-ink" : "text-ink-48"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={CTA.href} size="sm">
            {CTA.label}
          </Button>
        </div>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-ink transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* 모바일 드롭다운 패널 */}
      {open && (
        <nav className="border-t border-hairline bg-canvas lg:hidden">
          <Container className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-divider py-3 text-body ${
                  isActive(item.href) ? "text-ink" : "text-ink-80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
