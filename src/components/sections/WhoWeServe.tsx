import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  GraduationCap,
  Briefcase,
  Building2,
  School,
  Store,
  UtensilsCrossed,
} from "lucide-react";

const audiences = [
  {
    title: "Students",
    description: "Build confidence for academic and social communication.",
    icon: GraduationCap,
  },
  {
    title: "Job Seekers",
    description: "Prepare for interviews and professional conversations.",
    icon: Briefcase,
  },
  {
    title: "Corporate Teams",
    description: "Upskill teams for global business communication.",
    icon: Building2,
  },
  {
    title: "Colleges",
    description: "Scale English communication training across campus.",
    icon: School,
  },
  {
    title: "Retail Organizations",
    description: "Train frontline staff for customer interactions.",
    icon: Store,
  },
  {
    title: "Restaurants & Hospitality",
    description: "Elevate guest experience through better communication.",
    icon: UtensilsCrossed,
  },
];

export function WhoWeServe() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Built For" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <GlassCard key={audience.title} className="h-full">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-soft text-icon">
                <audience.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium text-foreground">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {audience.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
