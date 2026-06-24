import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { POSTS } from "@/content/insights";

// 홈 — 최신 인사이트 3개 (parchment tile). 블로그 유입·전문성·내부링크.
const LATEST = [...POSTS]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

export default function LatestInsights() {
  return (
    <section className="bg-parchment py-section">
      <Container className="!max-w-[1100px]">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>인사이트</Eyebrow>
              <h2 className="mt-3 font-display text-display font-semibold tracking-tight text-ink">
                크리에이터를 위한 절세 가이드
              </h2>
            </div>
            <Link
              href="/insights"
              className="group hidden shrink-0 items-center gap-1 text-body font-semibold text-action hover:text-action-focus sm:inline-flex"
            >
              전체 보기
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/insights/${post.slug}`}
                className="group block h-full rounded-lg border border-hairline bg-canvas p-5 transition-all duration-200 hover:-translate-y-1 hover:border-action active:scale-[0.99]"
              >
                {/* 더미 썸네일 (8주차 노션 CMS 이미지) */}
                <div className="aspect-[16/9] rounded-sm bg-parchment" />
                <p className="mt-4 text-caption font-semibold text-action">
                  {post.tag}
                </p>
                <h3 className="mt-2 text-body font-semibold leading-snug text-ink group-hover:text-action">
                  {post.title}
                </h3>
                <p className="mt-2 text-caption text-ink-48">{post.summary}</p>
                <time className="mt-4 block text-caption text-ink-48">
                  {post.date}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 모바일: 전체 보기 링크 */}
        <Reveal>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/insights"
              className="text-body font-semibold text-action hover:text-action-focus"
            >
              전체 인사이트 보기 →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
