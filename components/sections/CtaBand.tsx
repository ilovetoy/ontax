import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { CTA } from "@/lib/site";

// 홈 S7 + 전 페이지 공통 최종 CTA (dark tile). 사이트맵_IA §4: 모든 페이지 하단 1개 고정.
export default function CtaBand({
  heading = "세금 막막하시죠? 저희가 정리해드릴게요.",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-void py-section text-on-dark">
      <Container className="text-center">
        <Reveal>
          <Eyebrow onDark>상담 신청</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-[640px] font-display text-display font-semibold tracking-tight">
            {heading}
          </h2>
          <div className="mt-9">
            <Button href={CTA.href}>{CTA.label}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
