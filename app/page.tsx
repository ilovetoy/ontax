import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import ServicesSummary from "@/components/sections/ServicesSummary";
import Proof from "@/components/sections/Proof";
import LatestInsights from "@/components/sections/LatestInsights";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

// 홈 / — 페이지_콘텐츠_명세 S1~S7.
export default function Home() {
  return (
    <>
      <Hero /> {/* S1 */}
      <TrustStrip /> {/* 신뢰 스트립 */}
      <PainPoints /> {/* S2 */}
      <Solution /> {/* S3 */}
      <ServicesSummary /> {/* S4 */}
      <Proof /> {/* S5 */}
      <LatestInsights /> {/* 최신 인사이트 (블로그 유입) */}
      <Faq /> {/* S6 */}
      <CtaBand /> {/* S7 */}
    </>
  );
}
