import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrendingDown, Users, IndianRupee } from "lucide-react";

const stats = [
  {
    value: "< 5%",
    label: "of Indians communicate confidently in English",
    icon: TrendingDown,
  },
  {
    value: "72%",
    label: "of professionals report communication barriers affecting career growth",
    icon: Users,
  },
  {
    value: "₹2.5L Cr+",
    label: "estimated productivity loss due to communication challenges",
    icon: IndianRupee,
  },
];

export function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="The Communication Gap" />

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <GlassCard key={stat.value} className="h-full">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-soft text-icon">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
