import { PROJECTS } from "../constants";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projek" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#F7A8C4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
            Karya Pilihan
          </h2>
        </div>

        {/* Grid Layout - Staggered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Image Container dengan Overlay Gradient */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Tech Stack */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="bg-white/90 backdrop-blur-sm text-[#AC1754] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Icon Indicator */}
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                  <Code2 size={24} className="text-[#AC1754]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#AC1754] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA Button */}
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#AC1754] px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#AC1754] hover:text-white transition-all shadow-lg hover:shadow-xl group/btn"
                >
                  <span>Lihat Repository</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-[100px] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;