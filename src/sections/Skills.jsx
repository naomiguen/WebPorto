import { SKILLS } from "../constants";
import Reveal from "../components/Reveal";
import Starfield from "../components/Starfield";
import useLang from "../i18n/useLang";

// Satu baris logo yang berjalan terus ke samping.
// Daftar diulang 4x (dua paruh identik) supaya tidak ada celah kosong di layar lebar,
// lalu digeser -50% = satu paruh penuh, sehingga loop-nya mulus.
const MarqueeRow = ({ items, reverse = false, duration = "45s" }) => {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
      <div
        className="flex w-max gap-4 sm:gap-6 py-3 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {loop.map((skill, i) => (
          <div
            key={i}
            aria-hidden={i >= items.length}
            className="group flex w-28 sm:w-36 shrink-0 flex-col items-center gap-3 rounded-2xl border-b-4 border-[#AC1754] bg-white px-3 py-5 sm:py-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <img
              src={skill.icon}
              alt={i < items.length ? skill.name : ""}
              loading="lazy"
              draggable="false"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-center text-xs sm:text-sm font-bold leading-tight text-[#AC1754]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLang();
  return (
    <section id="keahlian" className="relative overflow-hidden bg-[#F7A8C4] py-12 sm:py-16 md:py-20">
      <Starfield count={18} seed={67} palette="soft" />

      <Reveal className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-2xl font-black uppercase tracking-widest text-[#AC1754] sm:text-3xl md:text-4xl">
          {t.section.skills}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-[#AC1754]/80 sm:mb-14 sm:text-base">
          {t.skillsSubtitle}
        </p>
      </Reveal>

      <Reveal delay={150} className="relative z-10 space-y-2 sm:space-y-4">
        <MarqueeRow items={SKILLS.coding} duration="45s" />
        <MarqueeRow items={SKILLS.dataTools} reverse duration="40s" />
      </Reveal>
    </section>
  );
};

export default Skills;
