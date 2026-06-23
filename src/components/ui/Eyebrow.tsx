import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`block font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-orange ${className}`}
    >
      {children}
    </span>
  );
}
