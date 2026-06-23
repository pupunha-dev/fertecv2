import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost" | "outline";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-200";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-bg-void border border-orange hover:bg-orange-dim hover:border-orange-dim",
  outline:
    "bg-transparent text-text-primary border border-border-subtle hover:border-border-active hover:text-orange",
  ghost:
    "bg-transparent text-text-secondary border border-transparent hover:text-orange",
};

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
