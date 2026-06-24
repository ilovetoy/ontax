import Link from "next/link";
import { SITE, CTA } from "@/lib/site";

// 사이트맵_IA §2·§4: 모바일 하단 고정 CTA 바 [카톡상담][전화][상담신청].
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-canvas/90 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 text-caption font-semibold">
        <a
          href={SITE.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 text-center text-ink-80"
        >
          카톡상담
        </a>
        <a
          href={`tel:${SITE.tel}`}
          className="border-x border-divider py-3 text-center text-ink-80"
        >
          전화
        </a>
        <Link href={CTA.href} className="bg-action py-3 text-center text-on-dark">
          상담신청
        </Link>
      </div>
    </div>
  );
}
