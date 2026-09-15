import type { ElementType, ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  size?: "default" | "sm";
}

const SIZE_CLASSES: Record<NonNullable<SectionTitleProps["size"]>, string> = {
  default: "text-[clamp(1.75rem,3vw,2.75rem)]",
  sm: "text-[clamp(1.25rem,2vw,1.5rem)]",
};

export default function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
  size = "default",
}: SectionTitleProps) {
  return (
    <Tag
      className={`font-display ${SIZE_CLASSES[size]} font-bold uppercase leading-tight tracking-tight text-text-primary ${className}`}
    >
      {children}
    </Tag>
  );
}
