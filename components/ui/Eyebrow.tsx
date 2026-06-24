import type { ReactNode } from "react";

// 섹션 상단 kicker 라벨 — 액센트 컬러 포인트.
export default function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`text-caption font-semibold tracking-[0.14em] ${
        onDark ? "text-action-on-dark" : "text-action"
      }`}
    >
      {children}
    </p>
  );
}
