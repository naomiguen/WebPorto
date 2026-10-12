import { ORGANIZATIONS, COMMITTEES, WORK_EXPERIENCE, hasPhotos } from "../constants";
import { Briefcase, Calendar, Users, ArrowRight, GraduationCap, FlaskConical, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { FloatingSparkle, FloatingHeart } from "../components/Deco";
import Starfield from "../components/Starfield";
import useLang from "../i18n/useLang";

// Ikon kartu magang/asisten menurut jenisnya
const WORK_ICONS = { intern: Briefcase, teaching: GraduationCap, lab: FlaskConical };

// Helper: convert string to URL-friendly slug
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const Experience = () => {
  const { t, tr } = useLang();

  return (
    <div id="pengalaman">
      {/* SECTION MAGANG & ASISTEN */}
      <section className="relative overflow-x-clip py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#E53888] via-[#F37199] to-[#F7A8C4]">
        <Starfield count={20} seed={91} />
        <FloatingHeart className="right-[7%] top-16 text-white/40" size={30} />
        <FloatingSparkle className="left-[6%] bottom-20 text-white/50" delay={-2} />

        <div className="relative max-w-4xl mx-auto">
          <Reveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 text-center uppercase tracking-widest drop-shadow-lg">
            {t.section.work}
          </Reveal>

          <ol className="relative space-y-6 sm:space-y-8 md:border-l-4 md:border-white/40 md:pl-10">
            {WORK_EXPERIENCE.map((item, index) => {
              const Icon = WORK_ICONS[item.type] ?? Briefcase;
              const period = tr("work", item.key, "period", item.period);
              const role = tr("work", item.key, "role", item.role);
              const location = tr("work", item.key, "location", item.location);
              const points = tr("work", item.key, "points", item.points);
              return (
                <li key={item.key} className="relative">
                  {/* Titik di garis waktu (desktop) */}
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute -left-[3.25rem] top-9 h-5 w-5 rounded-full border-4 border-[#AC1754] bg-white shadow-lg"
                  />
                  <Reveal variant="right" delay={(index % 2) * 100}>
                    <article className="group rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-xl border-b-4 sm:border-b-8 border-[#AC1754] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="w-fit shrink-0 rounded-2xl bg-[#F7A8C4] p-3.5">
                          <Icon size={26} className="text-[#AC1754]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#F7A8C4] px-3 py-1.5 text-xs sm:text-sm font-bold text-[#AC1754]">
                              <Calendar size={14} />
                              {period}
                            </span>
                            {location && (
                              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-500">
                                <MapPin size={14} />
                                {location}
                              </span>
                            )}
                          </div>
                          <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-snug text-[#AC1754] group-hover:text-[#E53888] transition-colors">
                            {role}
                          </h3>
                          <p className="mt-1 text-sm sm:text-base font-semibold text-gray-500">{item.organization}</p>

                          {item.description && (
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">{item.description}</p>
                          )}
                          {points && (
                            <ul className="mt-4 space-y-2.5">
                              {points.map((point, i) => (
                                <li key={i} className="flex gap-3 text-sm sm:text-base leading-relaxed text-gray-600">
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#AC1754] to-[#E53888]" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {item.gallery && hasPhotos(item.gallery) && (
                            <Link
                              to={`/gallery/${item.gallery}`}
                              className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#AC1754] transition-all duration-200 hover:gap-3 hover:text-[#E53888]"
                            >
                              {t.seeMore}
                              <ArrowRight size={15} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* SECTION ORGANISASI */}
      <section className="relative overflow-x-clip py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F7A8C4]">
        <Starfield count={34} seed={23} palette="soft" />
        <FloatingSparkle className="left-[5%] top-14 text-white/60" />
        <FloatingHeart className="right-[6%] bottom-16 text-[#E53888]/30" delay={-3} size={30} />

        <div className="relative max-w-6xl mx-auto">
          <Reveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-black text-[#AC1754] mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest">
            {t.section.organizations}
          </Reveal>

          <div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
            {/* Garis Vertikal Tengah */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#AC1754] -translate-x-1/2 opacity-20"></div>

            {ORGANIZATIONS.map((item, index) => {
              const isEven = index % 2 === 0;
              const slug = toSlug(item.role);
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Deskripsi */}
                  <Reveal variant={isEven ? "left" : "right"} className="flex-1 w-full group">
                    <div className={`p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-b-4 sm:border-b-6 md:border-b-8 border-[#AC1754] ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                      {/* Year Badge dengan Icon */}
                      <div className={`inline-flex items-center gap-2 bg-[#F7A8C4] px-4 py-2 rounded-full mb-3 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Calendar size={16} className="text-[#AC1754]" />
                        <span className="text-[#AC1754] font-bold text-sm sm:text-base">{tr("organizations", item.role, "year", item.year)}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] mt-1 sm:mt-2 group-hover:text-[#E53888] transition-colors">
                        {tr("organizations", item.role, "role", item.role)}
                      </h3>

                      {/* Organization dengan Icon */}
                      <div className={`flex items-center gap-2 text-gray-500 font-semibold mb-3 sm:mb-4 text-sm sm:text-base ${isEven ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                        <Briefcase size={16} />
                        <p>{tr("organizations", item.role, "organization", item.organization)}</p>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {tr("organizations", item.role, "description", item.description)}
                      </p>

                      {/* Decorative Line */}
                      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full ${isEven ? 'md:ml-auto' : ''} mx-auto md:mx-0`}></div>

                      {/* Lihat Selengkapnya Link */}
                      {hasPhotos(slug) && (
                        <div className={`mt-4 flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                          <Link
                            to={`/gallery/${slug}`}
                            className="inline-flex items-center gap-1.5 text-[#AC1754] font-semibold text-sm hover:text-[#E53888] hover:gap-3 transition-all duration-200 group/link"
                          >
                            {t.seeMore}
                            <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </Reveal>

                  {/* Titik Tengah dengan Pulse Effect */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-[#AC1754] rounded-full border-4 border-[#F7A8C4] shadow-lg"></div>
                      <div className="absolute inset-0 bg-[#AC1754] rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Foto dengan Hover Effect */}
                  <Reveal variant={isEven ? "right" : "left"} delay={150} className="flex-1 w-full group">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white group-hover:border-[#E53888] transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={tr("organizations", item.role, "role", item.role)}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        // Belum ada foto: tampilkan panel berwarna dengan nama organisasi
                        <div className="flex h-64 sm:h-80 md:h-96 lg:h-[400px] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#AC1754] px-6 text-center">
                          <Users size={56} className="text-white/90" />
                          <p className="text-lg sm:text-2xl font-black leading-snug text-white drop-shadow">
                            {tr("organizations", item.role, "organization", item.organization)}
                          </p>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                        <Users size={24} className="text-[#AC1754]" />
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION KEPANITIAAN */}
      <section className="relative overflow-x-clip py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#F7A8C4]">
        <Starfield count={36} seed={37} />
        <FloatingHeart className="left-[6%] top-14 text-white/40" size={30} />
        <FloatingSparkle className="right-[5%] bottom-20 text-white/50" delay={-2} />

        <div className="relative max-w-6xl mx-auto">
          <Reveal as="h2" className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest drop-shadow-lg">
            {t.section.committees}
          </Reveal>

          <div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
            {/* Garis Vertikal Tengah */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white -translate-x-1/2 opacity-30"></div>

            {COMMITTEES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Deskripsi */}
                  <Reveal variant={isEven ? "left" : "right"} className="flex-1 w-full group">
                    <div className={`p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-b-4 sm:border-b-6 md:border-b-8 border-[#AC1754] ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 bg-[#F7A8C4] px-4 py-2 rounded-full mb-3 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Calendar size={16} className="text-[#AC1754]" />
                        <span className="text-[#AC1754] font-bold text-sm sm:text-base">{item.year}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] mt-1 sm:mt-2 group-hover:text-[#E53888] transition-colors">
                        {tr("committees", item.event, "role", item.role)}
                      </h3>

                      {/* Event dengan Icon */}
                      <div className={`flex items-center gap-2 text-gray-500 font-semibold mb-3 sm:mb-4 text-sm sm:text-base ${isEven ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                        <Briefcase size={16} />
                        <p>{item.event}</p>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {tr("committees", item.event, "description", item.description)}
                      </p>

                      {/* Decorative Line */}
                      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full ${isEven ? 'md:ml-auto' : ''} mx-auto md:mx-0`}></div>
                    </div>
                  </Reveal>

                  {/* Titik Tengah dengan Pulse Effect */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full border-4 border-[#AC1754] shadow-lg"></div>
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Foto dengan Hover Effect */}
                  <Reveal variant={isEven ? "right" : "left"} delay={150} className="flex-1 w-full group">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white group-hover:border-[#AC1754] transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        src={item.image}
                        alt={tr("committees", item.event, "role", item.role)}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                        <Users size={24} className="text-[#AC1754]" />
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
