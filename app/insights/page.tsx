import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";
import { POSTS } from "@/content/insights";

export const metadata: Metadata = {
  title: "세무 인사이트",
  description: "크리에이터를 위한 절세 팁과 세금 가이드.",
};

// 세무 인사이트 목록 /insights — 페이지_콘텐츠_명세 인사이트(목록).
export default function InsightsPage() {
  return (
    <>
      <section className="bg-canvas py-section">
        <Container className="text-center">
          <h1 className="font-display text-display font-semibold tracking-tight text-ink">
            세무 인사이트
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-lead text-ink-80">
            크리에이터를 위한 절세 팁과 세금 가이드.
          </p>
        </Container>
      </section>

      <section className="bg-parchment py-section">
        <Container className="!max-w-[1100px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group block rounded-lg border border-hairline bg-canvas p-5 transition-all duration-200 hover:-translate-y-1 hover:border-action active:scale-[0.99]"
              >
                {/* 더미 썸네일 (8주차 노션 CMS 이미지) */}
                <div className="aspect-[16/9] rounded-sm bg-parchment" />
                <p className="mt-4 text-caption font-semibold text-action">{post.tag}</p>
                <h2 className="mt-2 text-body font-semibold leading-snug text-ink group-hover:text-action">
                  {post.title}
                </h2>
                <p className="mt-2 text-caption text-ink-48">{post.summary}</p>
                <time className="mt-4 block text-caption text-ink-48">{post.date}</time>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
