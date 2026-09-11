import type { ElementType, ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  size?: "default" | "sm";
}

const SIZE_CLASSES: Record<NonNullable<SectionTitleProps["size"]>, string> = {
  default: "text-[clamp(2rem,4vw,3.5rem)]",
  sm: "text-[clamp(1.5rem,2.5vw,2rem)]",
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
