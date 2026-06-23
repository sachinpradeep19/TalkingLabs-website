export function VoiceOrb() {
  const barHeights = [10, 16, 22, 18, 26, 20, 14, 24, 12, 20, 28, 16, 22, 14, 18, 24, 12, 20, 16, 22, 14, 18, 26, 12];

  return (
    <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[400px] lg:h-[480px]">
      <div className="absolute h-64 w-64 rounded-full bg-yellow-glow blur-[100px] sm:h-80 sm:w-80" />

      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-navy/15"
          style={{
            width: 120 + i * 60,
            height: 120 + i * 60,
            opacity: 0.35 - i * 0.07,
          }}
        />
      ))}

      <div className="absolute flex items-end gap-1.5">
        {barHeights.map((height, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-navy/30 to-yellow"
            style={{ height }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full sm:h-40 sm:w-40">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy via-[#2a2a6b] to-[#1d1d4b] shadow-[0_0_60px_12px_rgba(255,193,7,0.2)]" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow/30 to-transparent" />
        <div className="absolute inset-4 rounded-full border border-yellow/30 bg-navy/20 backdrop-blur-sm" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 h-10 w-10 text-yellow sm:h-12 sm:w-12"
          aria-hidden="true"
        >
          <path
            d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M19 10v1a7 7 0 0 1-14 0v-1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 18v4M8 22h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
