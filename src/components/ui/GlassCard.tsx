import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/30 hover:shadow-[0_8px_30px_-12px_rgba(255,193,7,0.2)] sm:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-soft/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
