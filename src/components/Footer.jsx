import { Mail, Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Fungsi untuk kembali ke paling atas halaman
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#AC1754] text-white py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Tombol Back to Top Melayang */}
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 md:-top-7 bg-[#E53888] p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-[#F7A8C4] group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Bagian Nama & Tagline */}
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-3 md:mb-4 uppercase text-white">
            Let's Connect<span className="text-white">!</span>
          </h2>
          <p className="text-white text-base sm:text-lg max-w-md mx-auto italic leading-relaxed opacity-90">
            Terbuka untuk kolaborasi, diskusi proyek, atau sekadar berbagi inspirasi.
          </p>
        </div>

        {/* Bagian Social Icons dengan Hover Effect*/}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 md:mb-12">
          {[
            { 
              icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />, 
              link: "mailto:naomiguen4@gmail.com", 
              label: "Email" 
            },
            { 
              icon: <Github className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />, 
              link: "https://github.com/naomiguen", 
              label: "GitHub" 
            },
            { 
              icon: <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />, 
              link: "https://linkedin.com/in/naomi-ratna-marisaha-guen", 
              label: "LinkedIn" 
            },
            { 
              icon: <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />, 
              link: "https://instagram.com/its.naomiguen", 
              label: "Instagram" 
            }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.link}
              target={social.link.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="bg-white/10 p-4 sm:p-5 rounded-2xl hover:bg-[#E53888] hover:-translate-y-2 transition-all duration-300 shadow-lg border border-white/20"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Garis Pembatas & Copyright */}
        <div className="w-full border-t border-white/20 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center text-xs sm:text-sm text-white font-medium">
          <p className="opacity-90">© {currentYear} Naomi Ratna Marisaha Guen. All Rights Reserved.</p>
          <p className="opacity-90">Dibuat dengan ❤️</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;