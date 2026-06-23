import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow text-[#1d1d4b] hover:bg-yellow-hover shadow-[0_4px_20px_-4px_rgba(255,193,7,0.45)] hover:shadow-[0_6px_24px_-4px_rgba(255,193,7,0.55)]",
  secondary:
    "bg-transparent text-navy border border-border hover:bg-yellow-soft hover:border-yellow/40",
  ghost: "text-muted hover:text-navy hover:bg-yellow-soft/60",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset";

  const combined = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={combined}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
      {icon}
    </Link>
  );
}
