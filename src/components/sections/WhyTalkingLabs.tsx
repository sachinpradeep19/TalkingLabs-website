import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Brain, Route, Users } from "lucide-react";

const features = [
  {
    title: "AI Assessment",
    description:
      "Measure pronunciation, fluency, grammar, vocabulary, and confidence.",
    icon: Brain,
  },
  {
    title: "Personalized Learning",
    description: "Adaptive plans tailored to each learner.",
    icon: Route,
  },
  {
    title: "Human + AI Support",
    description: "Technology enhanced by expert guidance.",
    icon: Users,
  },
];

export function WhyTalkingLabs() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-glow/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Why We Exist"
          subtitle="Traditional English learning focuses on exams instead of communication. Talking Labs combines AI assessment, adaptive learning, and human guidance to help learners build confidence in real-world situations."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="h-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-yellow-soft text-icon">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
