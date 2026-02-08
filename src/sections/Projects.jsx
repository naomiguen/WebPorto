import { PROJECTS } from "../constants";
import { ExternalLink, Code2, Lock, Github } from "lucide-react";

const Projects = () => {
  // Debug: Cek apakah data ter-import dengan benar
  console.log("PROJECTS data:", PROJECTS);
  console.log("PROJECTS length:", PROJECTS?.length);

  // Fallback jika data kosong
  if (!PROJECTS || PROJECTS.length === 0) {
    return (
      <section id="projek" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#F7A8C4]">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">
              Karya Pilihan
            </h2>
            <p className="text-white mt-8">Data proyek sedang dimuat...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projek" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#F7A8C4] overflow-hidden">
      
      {/* Dekorasi Background Tambahan agar tidak flat */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#AC1754] blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">
            Karya Pilihan
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Grid Layout - Responsive 1 Kolom (Mobile) & 2 Kolom (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    console.error("Image failed to load:", project.image);
                    e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                  }}
                />
                
                {/* Gradient Overlay Diatas Gambar agar teks terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754]/80 via-transparent to-transparent opacity-90"></div>
                
                {/* Floating Tech Stack */}
                <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
                  {project.tech.map((t, techIndex) => (
                    <span 
                      key={`${index}-${techIndex}`}
                      className="bg-white/90 backdrop-blur-sm text-[#AC1754] text-[10px] font-extrabold px-3 py-1.5 rounded-xl uppercase tracking-wider shadow-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Icon Indicator (Lock/Code) */}
                <div className="absolute bottom-5 right-5 bg-white p-3.5 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-300">
                  {project.isPrivate ? (
                    <Lock size={22} className="text-[#AC1754]" />
                  ) : (
                    <Code2 size={22} className="text-[#AC1754]" />
                  )}
                </div>
              </div>

              {/* Content Section - BACKGROUND PUTIH */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col bg-white">
                <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] mb-3 sm:mb-4 group-hover:text-[#E53888] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Decorative Line */}
                <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full"></div>

                {/* CTA Button Area - Support Dual Buttons */}
                <div className="mt-auto">
                  {project.isPrivate ? (
                    // Private Project - Single Lock Button
                    <div className="inline-flex items-center gap-3 bg-[#F7A8C4] text-[#AC1754] px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-sm border border-[#E53888]/20 cursor-not-allowed">
                      <Lock size={16} />
                      <span>Private Project (NDA)</span>
                    </div>
                  ) : (
                    // Public Project - Dual Buttons (Demo + Repository)
                    <div className="flex flex-wrap gap-3">
                      {/* Demo/Live Button - KIRI */}
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#AC1754] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold text-sm hover:bg-[#E53888] transition-all duration-300 shadow-lg group/btn active:scale-95 order-1"
                        >
                          <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          <span>Coba Aplikasi</span>
                        </a>
                      )}

                      {/* Repository Button - KANAN */}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-[#AC1754] px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold text-sm border-2 border-[#AC1754] hover:bg-[#AC1754] hover:text-white transition-all duration-300 shadow-lg group/btn active:scale-95 order-2"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                          <span>Link Repository</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative Corner - Glass Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-[100px] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;