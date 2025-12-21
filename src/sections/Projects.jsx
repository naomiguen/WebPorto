import { PROJECTS } from "../constants";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projek" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#F7A8C4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-tighter drop-shadow-lg">
          Karya Pilihan
        </h2>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* PREVIEW GAMBAR PROJEK */}
                <div className="flex-1 w-full relative group">
                  <div className="absolute inset-0 bg-[#AC1754] rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10"></div>
                  <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-white">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* DETAIL PROJEK */}
                <div className="flex-1 w-full text-center md:text-left px-2 sm:px-0">
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 justify-center md:justify-start">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-[#AC1754] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow">{project.title}</h3>
                  <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 drop-shadow">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-black border-b-4 border-white pb-1 hover:text-[#AC1754] hover:border-[#AC1754] transition-all group text-sm sm:text-base"
                  >
                    LIHAT REPOSITORY 
                    <ExternalLink size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;