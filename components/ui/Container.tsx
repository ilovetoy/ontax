import type { ReactNode } from "react";

// 980px 그리드 (DESIGN-apple: 본문 컨테이너). 좌우 24px 거터.
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[980px] px-6 ${className}`}>
      {children}
    </div>
  );
}
