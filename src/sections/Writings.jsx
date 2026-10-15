import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { WRITINGS, MEDIUM_URL } from "../constants";
import Reveal from "../components/Reveal";
import Starfield from "../components/Starfield";
import MediumIcon from "../components/MediumIcon";
import useLang from "../i18n/useLang";

const Writings = () => {
  const { lang, t } = useLang();
  if (!WRITINGS || WRITINGS.length === 0) return null;

  const formatDate = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(lang === "en" ? "en-US" : "id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <section
      id="tulisan"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7A8C4] via-[#F58BB0] to-[#EC5A92] px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <Starfield count={16} seed={97} palette="soft" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal
          as="h2"
          className="mb-4 text-center text-2xl font-black uppercase tracking-widest text-[#7A0F3A] sm:text-3xl md:text-4xl"
        >
          {t.section.writings}
        </Reveal>
        <Reveal className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-[#5C0B2C] sm:mb-14 sm:text-base">
          <p>{t.writings.subtitle}</p>
        </Reveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {WRITINGS.map((w, i) => (
            <Reveal key={w.url} delay={(i % 2) * 120} className="h-full">
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border-b-8 border-[#AC1754] bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs font-semibold text-gray-500 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {formatDate(w.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} />
                    {t.writings.readTime(w.minutes)}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#AC1754] transition-colors group-hover:text-[#E53888] sm:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600 sm:text-base">{w.excerpt}</p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#AC1754] transition-all duration-200 group-hover:gap-3 group-hover:text-[#E53888]">
                  <MediumIcon className="h-4 w-4" />
                  {t.writings.read}
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center sm:mt-12">
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-[#AC1754] bg-white px-6 py-3 text-sm font-bold text-[#AC1754] shadow-lg transition-all duration-300 hover:bg-[#AC1754] hover:text-white active:scale-95 sm:text-base"
          >
            <MediumIcon className="h-5 w-5" />
            {t.writings.all}
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Writings;
