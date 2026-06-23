import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mic, Route, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "AI Voice Assessment",
    description:
      "Speak naturally while our AI analyzes pronunciation, fluency, grammar, and confidence in real time.",
    icon: Mic,
  },
  {
    number: "02",
    title: "Personalized Learning Journey",
    description:
      "Receive a tailored plan targeting your specific improvement areas with adaptive exercises and goals.",
    icon: Route,
  },
  {
    number: "03",
    title: "Continuous Practice & Growth",
    description:
      "Practice conversations, track progress, and build lasting communication skills through daily coaching.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Three Steps to Better Communication" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-yellow/60 via-border to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}
                >
                  <span className="text-xs font-medium tracking-widest text-yellow uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>

                <div className="relative flex items-center md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow/40 bg-background shadow-[0_0_16px_-4px_rgba(255,193,7,0.25)] transition-shadow duration-300 hover:shadow-[0_0_24px_-4px_rgba(255,193,7,0.35)]">
                    <step.icon className="h-5 w-5 text-icon" />
                  </div>
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
