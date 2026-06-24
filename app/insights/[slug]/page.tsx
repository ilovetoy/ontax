import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";
import { POSTS } from "@/content/insights";

// 정적 생성 (7주차 더미 5개). 8주차: 노션 CMS로 소스 교체.
export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

// 세무 인사이트 상세 /insights/[slug].
export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="bg-canvas py-section">
        <Container>
          <Link
            href="/insights"
            className="text-caption font-semibold text-action hover:text-action-focus"
          >
            ← 세무 인사이트
          </Link>
          <p className="mt-6 text-caption font-semibold text-action">{post.tag}</p>
          <h1 className="mt-2 font-display text-display font-semibold leading-tight tracking-tight text-ink">
            {post.title}
          </h1>
          <time className="mt-4 block text-caption text-ink-48">{post.date}</time>

          <div className="mt-10 space-y-5 border-t border-hairline pt-10">
            {post.body.map((para, i) => (
              <p key={i} className="text-body text-ink-80">
                {para}
              </p>
            ))}
            <p className="text-caption text-ink-48">
              ※ 본 글은 7주차 데모용 더미 콘텐츠입니다. (8주차 노션 CMS 본문으로 교체)
            </p>
          </div>
        </Container>
      </article>

      {/* 관련 글 */}
      <section className="bg-parchment py-section">
        <Container className="!max-w-[1100px]">
          <h2 className="text-tagline font-semibold text-ink">다른 인사이트</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group block rounded-lg border border-hairline bg-canvas p-5"
              >
                <p className="text-caption font-semibold text-action">{p.tag}</p>
                <h3 className="mt-2 text-body font-semibold leading-snug text-ink group-hover:text-action">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
