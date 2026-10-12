// Dekorasi kecil yang melayang pelan di latar section. Sengaja hanya tampil di layar md ke atas
// dan dibuat transparan supaya tidak mengganggu isi.

const base =
  "pointer-events-none absolute hidden md:block animate-bob motion-reduce:animate-none";

export const FloatingHeart = ({ className = "", delay = 0, size = 34 }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`${base} ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <path
      fill="currentColor"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
);

export const FloatingSparkle = ({ className = "", delay = 0, size = 30 }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`${base} ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <path fill="currentColor" d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
  </svg>
);
