import type { ElementType, ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: SectionTitleProps) {
  return (
    <Tag
      className={`font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight tracking-tight text-text-primary ${className}`}
    >
      {children}
    </Tag>
  );
}
