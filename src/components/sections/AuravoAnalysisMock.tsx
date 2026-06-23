import { Volume2 } from "lucide-react";

type WordStatus = "clear" | "partial" | "review";

const wordStyles: Record<WordStatus, string> = {
  clear:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/30 dark:text-emerald-200",
  partial:
    "bg-yellow/35 text-[#1d1d4b] dark:bg-yellow/30 dark:text-yellow",
  review: "bg-red-100 text-red-700 dark:bg-red-500/30 dark:text-red-300",
};

function Word({ text, status }: { text: string; status: WordStatus }) {
  return (
    <span className={`rounded px-0.5 py-px text-xs ${wordStyles[status]}`}>
      {text}
    </span>
  );
}

const radarPoints = [
  { label: "Pacing", value: 82, angle: -90 },
  { label: "Grammar", value: 62, angle: -18 },
  { label: "Fluency", value: 79, angle: 54 },
  { label: "Clarity", value: 64, angle: 126 },
  { label: "Tone", value: 91, angle: 198 },
];

function RadarChart() {
  const cx = 100;
  const cy = 100;
  const maxR = 65;

  const toXY = (angleDeg: number, value: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const r = (value / 100) * maxR;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const polygon = radarPoints
    .map((p) => toXY(p.angle, p.value))
    .map((p) => `${p.x},${p.y}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 200 200"
      className="h-36 w-36 shrink-0 [--radar-grid:rgba(29,29,75,0.12)] dark:[--radar-grid:rgba(255,255,255,0.12)]"
    >
      {[40, 65, 90].map((level) => (
        <polygon
          key={level}
          points={radarPoints
            .map((p) => toXY(p.angle, level))
            .map((p) => `${p.x},${p.y}`)
            .join(" ")}
          fill="none"
          stroke="var(--radar-grid)"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={polygon}
        className="fill-yellow/25 stroke-yellow dark:fill-yellow/20"
        strokeWidth="2"
      />
      {radarPoints.map((p) => {
        const pt = toXY(p.angle, p.value);
        return (
          <circle
            key={p.label}
            cx={pt.x}
            cy={pt.y}
            r="3.5"
            className="fill-yellow"
          />
        );
      })}
    </svg>
  );
}

export function AuravoAnalysisMock() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm dark:border-white/15 dark:bg-[#12122a] dark:shadow-[0_8px_40px_-12px_rgba(255,193,7,0.15)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-yellow-soft/40 px-4 py-2.5 dark:border-white/10 dark:bg-yellow/15">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-yellow/30 dark:bg-yellow/25">
            <Volume2 className="h-3 w-3 text-[#1d1d4b] dark:text-yellow" />
          </div>
          <span className="text-xs font-semibold text-navy dark:text-white">
            auravo
          </span>
        </div>
        <span className="rounded-full border border-yellow bg-yellow/20 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[#1d1d4b] dark:border-yellow/60 dark:bg-yellow/25 dark:text-yellow">
          LIVE DEMO
        </span>
      </div>

      <div className="relative bg-background p-4 sm:p-5 dark:bg-[#12122a]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.12),transparent_60%)]" />

        {/* Title row */}
        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow/40 bg-yellow-soft dark:border-yellow/50 dark:bg-yellow/20 dark:shadow-[0_0_20px_-4px_rgba(255,193,7,0.4)]">
            <Volume2 className="h-4 w-4 text-[#1d1d4b] dark:text-yellow" />
          </div>
          <div>
            <p className="text-[9px] font-semibold tracking-widest text-yellow-hover dark:text-yellow">
              RESULTS
            </p>
            <p className="text-sm font-semibold text-foreground">
              Your English snapshot
            </p>
          </div>
        </div>

        {/* Radar + scores */}
        <div className="relative mt-4 flex items-center gap-4 rounded-lg border border-border bg-yellow-soft/30 p-3 dark:border-yellow/20 dark:bg-yellow/10">
          <RadarChart />
          <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-1.5">
            {radarPoints.map((p) => (
              <div key={p.label} className="flex items-center justify-between">
                <span className="text-[10px] text-muted dark:text-white/60">
                  {p.label}
                </span>
                <span className="text-[11px] font-semibold text-[#1d1d4b] dark:text-yellow">
                  {p.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transcript */}
        <div className="relative mt-3 rounded-lg border border-border bg-card p-3 dark:border-white/12 dark:bg-white/[0.06]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[9px] font-semibold tracking-widest text-muted dark:text-white/55">
              YOUR TRANSCRIPT
            </p>
            <div className="flex gap-2 text-[9px] text-muted dark:text-white/55">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                Clear
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                Partial
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 dark:bg-red-400" />
                Review
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-3">
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-wide text-subtle dark:text-yellow/70">
                Tell me about yourself
              </p>
              <p className="leading-relaxed">
                <Word text="I'm a software engineer" status="clear" />{" "}
                <Word text="based" status="partial" />{" "}
                <Word text="in Bangalore." status="clear" />
              </p>
            </div>
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-wide text-subtle dark:text-yellow/70">
                Describe your strengths
              </p>
              <p className="leading-relaxed">
                <Word text="I communicate" status="clear" />{" "}
                <Word text="clearly" status="partial" />{" "}
                <Word text="with" status="review" />{" "}
                <Word text="cross-functional teams." status="clear" />
              </p>
            </div>
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-wide text-subtle dark:text-yellow/70">
                Why this role interests you
              </p>
              <p className="leading-relaxed">
                <Word text="I'm excited about" status="clear" />{" "}
                <Word text="the opportunity" status="partial" />{" "}
                <Word text="to lead" status="clear" />{" "}
                <Word text="customer-facing" status="review" />{" "}
                <Word text="projects." status="clear" />
              </p>
            </div>
            <div>
              <p className="mb-1 text-[9px] uppercase tracking-wide text-subtle dark:text-yellow/70">
                Describe a challenge you overcame
              </p>
              <p className="leading-relaxed">
                <Word text="I had to present" status="clear" />{" "}
                <Word text="our quarterly results" status="clear" />{" "}
                <Word text="to senior leadership" status="partial" />{" "}
                <Word text="under tight deadlines." status="clear" />
              </p>
            </div>
          </div>
        </div>

        {/* Word stats + practise */}
        <div className="relative mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-2 text-center dark:border-emerald-400/40 dark:bg-emerald-500/15">
            <p className="text-[9px] font-semibold text-emerald-700 dark:text-emerald-300">
              CLEAR
            </p>
            <p className="text-base font-bold text-emerald-800 dark:text-emerald-200">
              42
            </p>
          </div>
          <div className="rounded-lg border border-yellow/40 bg-yellow-soft px-2 py-2 text-center dark:border-yellow/50 dark:bg-yellow/20">
            <p className="text-[9px] font-semibold text-[#1d1d4b] dark:text-yellow">
              PARTIAL
            </p>
            <p className="text-base font-bold text-[#1d1d4b] dark:text-yellow">
              5
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 px-2 py-2 text-center dark:border-red-400/40 dark:bg-red-500/15">
            <p className="text-[9px] font-semibold text-red-700 dark:text-red-300">
              REVIEW
            </p>
            <p className="text-base font-bold text-red-800 dark:text-red-200">
              2
            </p>
          </div>
        </div>

        <div className="relative mt-2">
          <p className="mb-1.5 text-[10px] font-medium text-muted dark:text-white/60">
            Words to practise
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["with", "customer-facing"].map((w) => (
              <span
                key={w}
                className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] text-red-700 dark:border-red-400/40 dark:bg-red-500/20 dark:text-red-300"
              >
                {w}
              </span>
            ))}
            {["based", "clearly", "opportunity", "leadership"].map((w) => (
              <span
                key={w}
                className="rounded-full border border-yellow/50 bg-yellow/20 px-2 py-0.5 text-[10px] text-[#1d1d4b] dark:border-yellow/50 dark:bg-yellow/25 dark:text-yellow"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Feedback row */}
        <div className="relative mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-yellow/40 bg-yellow-soft/60 p-2.5 dark:border-yellow/35 dark:bg-yellow/12">
            <p className="text-[11px] font-semibold text-foreground dark:text-white">
              Priority focus
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-muted dark:text-white/70">
              Slow down on connector words like &ldquo;with&rdquo; and compound
              terms like &ldquo;customer-facing&rdquo; — they&apos;re breaking
              your flow.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 dark:border-emerald-400/35 dark:bg-emerald-500/12">
            <p className="text-[11px] font-semibold text-foreground dark:text-white">
              What you did well
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-muted dark:text-white/70">
              Strong, confident opening and clear structure when describing
              challenges — easy to follow throughout.
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="relative mt-3 space-y-2">
          <div className="rounded-lg border border-border bg-surface/50 p-2.5 dark:border-white/10 dark:bg-white/[0.05]">
            <p className="text-[11px] font-semibold text-foreground dark:text-white">
              Simpler word choices
            </p>
            <p className="mt-1 text-[10px] text-muted dark:text-white/55">
              Instead of &ldquo;I communicate clearly with teams.&rdquo;
            </p>
            <p className="mt-0.5 text-[10px] text-foreground dark:text-yellow/90">
              Try: &ldquo;I work well with cross-functional teams.&rdquo;
            </p>
            <p className="mt-2 text-[10px] text-muted dark:text-white/55">
              Instead of &ldquo;customer-facing projects.&rdquo;
            </p>
            <p className="mt-0.5 text-[10px] text-foreground dark:text-yellow/90">
              Try: &ldquo;projects where I interact directly with clients.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface/50 p-2.5 dark:border-white/10 dark:bg-white/[0.05]">
            <p className="text-[11px] font-semibold text-foreground dark:text-white">
              Pattern detected
            </p>
            <p className="mt-1 border-l-2 border-yellow pl-2 text-[10px] italic text-navy dark:text-yellow/90">
              &ldquo;I&apos;m a software engineer based in Bangalore.&rdquo;
            </p>
            <p className="mt-1 text-[10px] text-muted dark:text-white/65">
              <span className="font-semibold text-[#1d1d4b] dark:text-yellow">
                Try this:{" "}
              </span>
              Pause briefly between your role and location for clearer delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
