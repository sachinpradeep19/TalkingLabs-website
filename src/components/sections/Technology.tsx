import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mic, AudioLines, BrainCircuit, Shield } from "lucide-react";

const technologies = [
  {
    title: "Voice AI",
    description:
      "Advanced neural models that understand natural speech patterns and provide real-time feedback.",
    icon: Mic,
  },
  {
    title: "Speech Recognition",
    description:
      "State-of-the-art ASR technology optimized for diverse Indian English accents.",
    icon: AudioLines,
  },
  {
    title: "Personalized Learning Intelligence",
    description:
      "Adaptive algorithms that evolve with each learner's progress and goals.",
    icon: BrainCircuit,
  },
  {
    title: "Privacy & Security",
    description:
      "Enterprise-grade data protection with secure, encrypted voice processing.",
    icon: Shield,
  },
];

export function Technology() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.06),transparent_50%)]" />
        <div
          className="absolute inset-0 bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(29,29,75,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(29,29,75,0.04) 1px, transparent 1px)
            `,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Built on Modern AI" />

        <div className="grid gap-6 sm:grid-cols-2">
          {technologies.map((tech) => (
            <GlassCard key={tech.title} className="h-full">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-yellow-soft text-icon">
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {tech.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {tech.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
