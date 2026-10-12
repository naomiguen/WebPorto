import { useMemo } from "react";

// Bidang bintang & kilau yang berkelip dan melayang pelan di latar. Murni CSS (hanya opacity,
// scale, rotate, translate), jadi ringan. Letaknya acak tapi tetap (seed), tidak berubah tiap render.

const SPARKLE = "M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z";
const STAR = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

const COLORS = {
  white: { text: "text-white", bg: "bg-white", glow: "glow-white" },
  gold: { text: "text-[#FFD45E]", bg: "bg-[#FFE08A]", glow: "glow-gold" },
  pink: { text: "text-[#FF3D81]", bg: "bg-[#FF5C9B]", glow: "glow-pink" },
};

// Pilihan warna per jenis. "light" untuk latar gelap/gradasi, "soft" untuk latar pink muda
// (putih saja tidak cukup kontras di sana).
const PALETTES = {
  light: { sparkle: ["white", "white", "white", "gold"], star: ["gold", "gold", "gold", "white"], dot: ["white", "gold"] },
  soft: { sparkle: ["pink", "gold", "white", "pink"], star: ["gold", "gold", "pink"], dot: ["pink", "gold"] },
};

// Pengacak dengan seed supaya hasilnya selalu sama
const rng = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const pick = (r, list) => list[Math.floor(r() * list.length)];

const makeItems = (count, seed, edgeBias, palette) => {
  const r = rng(seed);
  const pal = PALETTES[palette] ?? PALETTES.light;
  return Array.from({ length: count }, (_, i) => {
    const roll = r();
    const kind = roll < 0.42 ? "sparkle" : roll < 0.8 ? "star" : "dot";
    // Sebagian besar ditaruh di sisi kiri/kanan agar tidak tertutup kartu
    const edge = r() < edgeBias;
    const left = edge ? (r() < 0.5 ? 1 + r() * 11 : 88 + r() * 11) : 3 + r() * 94;
    return {
      i,
      kind,
      left,
      top: 2 + r() * 94,
      size: kind === "dot" ? 4 + r() * 5 : kind === "star" ? 20 + r() * 18 : 14 + r() * 20,
      color: pick(r, pal[kind]),
      twinkleDur: 2.2 + r() * 3,
      twinkleDelay: -r() * 6,
      driftDur: 7 + r() * 9,
      driftDelay: -r() * 9,
    };
  });
};

// Satu bintang: lapisan luar melayang, lapisan dalam berkelip, lalu bentuknya
export const GlowStar = ({
  kind = "star",
  size = 24,
  color = "gold",
  className = "",
  style,
  twinkleDur = 3,
  twinkleDelay = 0,
  driftDur = 9,
  driftDelay = 0,
}) => {
  const c = COLORS[color] ?? COLORS.gold;
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute animate-drift motion-reduce:animate-none ${className}`}
      style={{ width: size, height: size, animationDuration: `${driftDur}s`, animationDelay: `${driftDelay}s`, ...style }}
    >
      <span
        className="block h-full w-full animate-twinkle motion-reduce:animate-none motion-reduce:opacity-70"
        style={{ animationDuration: `${twinkleDur}s`, animationDelay: `${twinkleDelay}s` }}
      >
        {kind === "dot" ? (
          <span className={`block h-full w-full rounded-full ${c.bg} ${c.glow}`} />
        ) : (
          <svg viewBox="0 0 24 24" className={`block h-full w-full ${c.text} ${c.glow}`}>
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={kind === "star" ? 1.2 : 0}
              strokeLinejoin="round"
              d={kind === "star" ? STAR : SPARKLE}
            />
          </svg>
        )}
      </span>
    </span>
  );
};

const Starfield = ({
  count = 20,
  seed = 1,
  edgeBias = 0.55,
  palette = "light",
  mobileCount,
  fixed = false,
  className = "",
}) => {
  const items = useMemo(() => makeItems(count, seed, edgeBias, palette), [count, seed, edgeBias, palette]);
  const visibleOnMobile = mobileCount ?? Math.ceil(count * 0.5);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 z-0 overflow-hidden ${className}`}
    >
      {items.map((s) => (
        <GlowStar
          key={s.i}
          kind={s.kind}
          size={s.size}
          color={s.color}
          twinkleDur={s.twinkleDur}
          twinkleDelay={s.twinkleDelay}
          driftDur={s.driftDur}
          driftDelay={s.driftDelay}
          className={s.i >= visibleOnMobile ? "hidden md:block" : ""}
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
        />
      ))}
    </div>
  );
};

export default Starfield;
