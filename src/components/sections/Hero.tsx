import { VoiceOrb } from "@/components/effects/VoiceOrb";
import { Button } from "@/components/ui/Button";
import { AURAVO_URL, COMPANY_NAME } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-glow blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-surface blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-yellow-soft/50 px-4 py-1.5 text-xs text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              AI-Powered English Communication Platform
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Transform English
              <br />
              <span className="text-navy">Communication</span>
              <br />
              with AI
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              Talking Labs builds intelligent communication tools that help
              learners, professionals, and organizations improve spoken English
              through personalized AI coaching.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                href={AURAVO_URL}
                external
                className="w-full px-8 py-3.5 text-base sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Launch Auravo
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="w-full px-8 py-3.5 text-base sm:w-auto"
              >
                Book a Demo
              </Button>
            </div>

            <p className="mt-8 text-xs tracking-wide text-faint uppercase">
              Powered by {COMPANY_NAME}
            </p>
          </div>

          <div className="mt-16 flex-1 lg:mt-0">
            <VoiceOrb />
          </div>
        </div>
      </div>
    </section>
  );
}
