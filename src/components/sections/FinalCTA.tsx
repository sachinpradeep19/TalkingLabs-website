import { Button } from "@/components/ui/Button";
import { AURAVO_URL, CONTACT_EMAIL } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-yellow-soft/40 to-transparent px-8 py-16 text-center transition-colors duration-300 sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.1),transparent_60%)]" />

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Transforming English Communication in India
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Join us in democratizing communication skills and creating
              opportunities for millions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={AURAVO_URL}
                external
                className="w-full px-10 py-4 text-base sm:w-auto"
                icon={<ArrowUpRight className="h-5 w-5" />}
              >
                Launch Auravo
              </Button>
              <Button
                href={`mailto:${CONTACT_EMAIL}`}
                variant="secondary"
                className="w-full px-10 py-4 text-base sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
