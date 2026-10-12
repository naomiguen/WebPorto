import { Link } from "react-router-dom";
import { EDUCATION, ACHIEVEMENTS, hasPhotos } from "../constants";
import { GraduationCap, Calendar, MapPin, Award, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { FloatingHeart, FloatingSparkle } from "../components/Deco";
import Starfield from "../components/Starfield";
import useLang from "../i18n/useLang";

const Education = () => {
  const { t, tr } = useLang();
  return (
    <section id="pendidikan" className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F7A8C4] via-[#F37199] to-[#E53888]">
      <Starfield count={22} seed={11} />
      <FloatingHeart className="right-[7%] top-12 text-white/40" />
      <FloatingSparkle className="left-[6%] bottom-14 text-white/50" delay={-2} />

      <div className="relative max-w-6xl mx-auto">
        <Reveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest drop-shadow-lg">
          {t.section.education}
        </Reveal>

        {/* Grid Layout - 2 Columns di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {EDUCATION.map((item, index) => (
            <Reveal key={index} delay={index * 120} className="h-full">
            <div
              className="group relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gambar dengan Overlay */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.institution}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge Tahun */}
                <div className="absolute top-4 right-4 bg-[#AC1754] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg">
                  <Calendar size={16} />
                  {tr("education", item.institution, "year", item.year)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Icon Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#F7A8C4] p-3 rounded-2xl">
                    <GraduationCap size={24} className="text-[#AC1754]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] leading-tight">
                      {tr("education", item.institution, "major", item.major)}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-gray-500">
                      <MapPin size={16} />
                      <p className="font-semibold text-sm">{item.institution}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {tr("education", item.institution, "description", item.description)}
                </p>

                {/* Decorative Bottom Border */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full"></div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Beasiswa & pencapaian */}
        {ACHIEVEMENTS.length > 0 && (
          <div className="mt-12 sm:mt-16 md:mt-20">
            <Reveal
              as="h3"
              className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-black uppercase tracking-widest text-white drop-shadow-lg"
            >
              {t.section.achievements}
            </Reveal>

            <div className={ACHIEVEMENTS.length === 1 ? "mx-auto max-w-3xl" : "grid gap-6 md:grid-cols-2"}>
              {ACHIEVEMENTS.map((item, index) => (
                <Reveal key={item.key} variant="zoom" delay={index * 120} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-3xl border-b-8 border-[#AC1754] bg-white p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Kilau emas di pojok kartu */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFD45E]/35 blur-2xl"
                    />
                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                      <div className="w-fit shrink-0 rounded-2xl bg-gradient-to-br from-[#FFD45E] to-[#FFA62B] p-4 shadow-lg shadow-[#FFD45E]/40 transition-transform duration-300 group-hover:rotate-6">
                        <Award size={34} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="rounded-full bg-[#F7A8C4] px-3 py-1 text-xs sm:text-sm font-bold text-[#AC1754]">
                            {tr("achievements", item.key, "badge", item.badge)}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-500">
                            <Calendar size={14} />
                            {tr("achievements", item.key, "year", item.year)}
                          </span>
                        </div>
                        <h4 className="mt-2 text-lg sm:text-2xl font-bold leading-snug text-[#AC1754]">
                          {tr("achievements", item.key, "title", item.title)}
                        </h4>
                        <p className="mt-1 text-sm sm:text-base font-semibold text-gray-500">{item.issuer}</p>

                        {item.gallery && hasPhotos(item.gallery) && (
                          <Link
                            to={`/gallery/${item.gallery}`}
                            className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#AC1754] transition-all duration-200 hover:gap-3 hover:text-[#E53888]"
                          >
                            {t.seeMore}
                            <ArrowRight size={15} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;