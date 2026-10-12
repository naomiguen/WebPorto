import { useEffect, useRef, useState } from "react";

// Keadaan awal (sebelum terlihat) untuk tiap varian. Pergeseran ke samping hanya di layar md ke atas,
// di HP cukup naik dari bawah agar tidak memicu scroll horizontal.
const HIDDEN = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 translate-y-8 md:translate-y-0 md:-translate-x-10",
  right: "opacity-0 translate-y-8 md:translate-y-0 md:translate-x-10",
  zoom: "opacity-0 scale-90",
};

// Membungkus elemen supaya muncul halus sekali saja ketika masuk layar.
// Pengunjung dengan "reduce motion" langsung melihat konten tanpa animasi.
const Reveal = ({ as = "div", variant = "up", delay = 0, className = "", children }) => {
  const Tag = as;
  const ref = useRef(null);
  const [shown, setShown] = useState(
    () =>
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,translate,scale] duration-700 ease-out ${
        shown ? "opacity-100 translate-x-0 translate-y-0 scale-100" : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
