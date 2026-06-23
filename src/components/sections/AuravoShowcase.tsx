import { Button } from "@/components/ui/Button";
import { AuravoAnalysisMock } from "@/components/sections/AuravoAnalysisMock";
import { AURAVO_URL } from "@/lib/constants";
import {
  ArrowUpRight,
  BarChart3,
  MessageCircle,
  Mic,
  Route,
  Sparkles,
  Briefcase,
} from "lucide-react";

const features = [
  { title: "Voice Assessment", icon: Mic },
  { title: "Personalized Learning Plans", icon: Route },
  { title: "Progress Tracking", icon: BarChart3 },
  { title: "Practice Conversations", icon: MessageCircle },
  { title: "Interview Preparation", icon: Briefcase },
  { title: "AI Speaking Coach", icon: Sparkles },
];

export function AuravoShowcase() {
  return (
    <section id="auravo" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-glow blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border-2 border-yellow bg-yellow px-5 py-2 text-sm font-semibold tracking-wide text-[#1d1d4b] shadow-[0_4px_20px_-4px_rgba(255,193,7,0.55)]">
            <Sparkles className="h-4 w-4 text-[#1d1d4b]" />
            Flagship Product
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet Auravo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Speak naturally. Auravo listens, scores your speech across five
            dimensions, color-codes every word in your transcript, and gives you
            plain-language tips you can act on immediately.
          </p>
        </div>

        <div className="mt-12">
          <AuravoAnalysisMock />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-yellow/40 hover:bg-yellow-soft/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-soft text-icon transition-colors duration-300 group-hover:bg-yellow/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href={AURAVO_URL}
            external
            className="px-10 py-4 text-base"
            icon={<ArrowUpRight className="h-5 w-5" />}
          >
            Open Auravo
          </Button>
        </div>
      </div>
    </section>
  );
}
