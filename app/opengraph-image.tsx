import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// 공유용 OG 이미지 (1200×630). 한글 폰트 로드 불필요하도록 브랜드(라틴) 중심 구성.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ONTAX — creator-focused tax accounting";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#1d1d1f",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          ONTAX
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            color: "#cccccc",
            fontWeight: 400,
          }}
        >
          Creator-focused tax accounting
        </div>
        <div
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={{ width: 64, height: 6, backgroundColor: "#2997ff" }} />
          <div style={{ fontSize: 30, color: "#2997ff", fontWeight: 600 }}>
            {SITE.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
