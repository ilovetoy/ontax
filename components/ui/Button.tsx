import Link from "next/link";
import type { ComponentProps } from "react";

// DESIGN-apple: 단일 액센트(Action Blue), pill 버튼. 사이트 전 CTA는 Link 기반.
type Variant = "primary" | "secondary";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-action text-on-dark hover:bg-action-focus",
  secondary: "border border-action text-action hover:bg-action/5",
};

const SIZES = { md: "px-[22px] py-[11px] text-body", sm: "px-4 py-2 text-caption" };

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: keyof typeof SIZES;
}) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-pill font-semibold transition-transform active:scale-95 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    />
  );
}
