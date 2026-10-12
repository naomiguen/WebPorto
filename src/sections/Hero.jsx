import { Component, lazy, Suspense, useState } from "react";
import { PROFILE } from "../constants";
import useLang from "../i18n/useLang";

// Adegan 3D dimuat terpisah supaya teks hero langsung tampil tanpa menunggu three.js
const Hero3D = lazy(() => import("../components/Hero3D"));

// Kalau WebGL tidak tersedia, cukup sembunyikan 3D-nya, halaman tetap jalan
class Safe3D extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    console.warn("Adegan 3D hero dimatikan:", error);
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const delay = (s) => ({ animationDelay: `${s}s` });

const Hero = () => {
  const { t, tr } = useLang();
  // Pengunjung yang mematikan animasi di perangkatnya tidak diberi adegan 3D
  const [show3D] = useState(
    () => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 lg:pt-20 pb-20 bg-gradient-to-br from-[#F7A8C4] via-[#F37199] to-[#E53888]"
    >
      {/* Gelembung latar yang bergerak pelan */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/30 blur-3xl animate-blob motion-reduce:animate-none" />
        <div className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-[#AC1754]/25 blur-3xl animate-blob motion-reduce:animate-none [animation-delay:-5s]" />
        <div className="absolute bottom-[-5rem] left-1/3 h-80 w-80 rounded-full bg-[#FFD1E3]/50 blur-3xl animate-blob motion-reduce:animate-none [animation-delay:-9s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">

        {/* KIRI: TEKS PERKENALAN */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] drop-shadow-lg">
            <span className="block animate-fade-up motion-reduce:animate-none" style={delay(0.1)}>
              {t.hero.greeting}{" "}
              <span className="inline-block origin-[70%_70%] animate-wave motion-reduce:animate-none" aria-hidden="true">
                👋
              </span>
            </span>
            <span
              className="text-[#AC1754] text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl block mt-2 animate-fade-up motion-reduce:animate-none"
              style={delay(0.3)}
            >
              {PROFILE.name}
            </span>
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow px-2 sm:px-0 animate-fade-up motion-reduce:animate-none"
            style={delay(0.5)}
          >
            {tr("profile", "main", "about", PROFILE.about)}
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 animate-fade-up motion-reduce:animate-none" style={delay(0.7)}>
            <button className="bg-[#AC1754] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#E53888] transition-all shadow-xl hover:-translate-y-1 active:scale-95 border-2 border-white/20">
              {t.hero.cv}
            </button>
          </div>
        </div>

        {/* KANAN: FOTO + OBJEK 3D */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="animate-pop-in motion-reduce:animate-none" style={delay(0.2)}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] animate-bob motion-reduce:animate-none">
              {/* Bingkai Dekoratif Pink Tua #AC1754 */}
              <div className="absolute inset-0 bg-[#AC1754] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] rotate-6 -z-10 opacity-60 shadow-2xl animate-wobble-a motion-reduce:animate-none"></div>
              {/* Bingkai Dekoratif Pink Sedang #E53888 */}
              <div className="absolute inset-0 bg-[#E53888] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] -rotate-3 -z-10 opacity-50 shadow-xl animate-wobble-b motion-reduce:animate-none"></div>
              {/* Bingkai Dekoratif Pink Muda #F37199 */}
              <div className="absolute inset-0 bg-[#F37199] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] rotate-2 -z-10 opacity-40"></div>

              <img
                src="/fotoku.jpg"
                alt="Naomi Ratna"
                className="w-full h-full object-cover rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 sm:border-6 md:border-8 border-white relative z-10"
              />

              {show3D && (
                <Safe3D>
                  <Suspense fallback={null}>
                    <Hero3D />
                  </Suspense>
                </Safe3D>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
