import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const leaders = [
  {
    name: "Aarti Gupta",
    role: "CEO",
    bio: "15+ years in English language training, curriculum design, and EdTech.",
    initials: "AG",
  },
  {
    name: "Arti Srivastava",
    role: "CTO",
    bio: "25+ years in software engineering, cloud platforms, automation, and AI products.",
    initials: "AS",
  },
];

export function Team() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Leadership" />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {leaders.map((leader) => (
            <GlassCard key={leader.name} className="h-full text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-soft to-yellow/20 text-xl font-semibold text-[#1d1d4b] ring-2 ring-yellow/30">
                {leader.initials}
              </div>
              <h3 className="text-xl font-medium text-foreground">
                {leader.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-navy">{leader.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {leader.bio}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
