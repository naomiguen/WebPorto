import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Instagram, ArrowUp, Copy, Check } from "lucide-react";
import useLang from "../i18n/useLang";
import MediumIcon from "./MediumIcon";
import { MEDIUM_URL } from "../constants";
import Reveal from "./Reveal";
import { FloatingHeart, FloatingSparkle } from "./Deco";
import Starfield from "./Starfield";

const EMAIL = "naomiguen4@gmail.com";

const Footer = () => {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Salin email ke clipboard, tampilkan "Tersalin!" sebentar
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard diblokir: pengunjung tetap bisa klik email-nya */
    }
  };

  // Fungsi untuk kembali ke paling atas halaman
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#AC1754] text-white py-16 md:py-20 px-4 sm:px-6 relative">
      <Starfield count={20} seed={83} />
      <FloatingHeart className="left-[8%] top-20 text-white/20" size={30} />
      <FloatingSparkle className="right-[9%] bottom-24 text-white/25" delay={-2} />

      {/* Tombol Back to Top Melayang (di luar pembungkus isi supaya posisinya tetap menempel di tepi atas footer) */}
      <button
        onClick={scrollToTop}
        className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-7 z-20 bg-[#E53888] p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-[#F7A8C4] group"
        aria-label={t.footer.backTop}
      >
        <ArrowUp size={20} className="md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* Bagian Nama & Tagline */}
        <Reveal className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-3 md:mb-4 uppercase text-white">
            Let's Connect<span className="text-white">!</span>
          </h2>
          <p className="text-white text-base sm:text-lg max-w-md mx-auto italic leading-relaxed opacity-90">
            {t.footer.tagline}
          </p>
        </Reveal>

        {/* Ajakan kontak: status ketersediaan + email yang terlihat */}
        <Reveal delay={100} className="mb-8 md:mb-10 flex flex-col items-center gap-4 px-2">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-bold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            {t.footer.open}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm sm:text-base font-bold text-[#AC1754] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7A8C4]"
            >
              <Mail size={18} />
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-bold transition-colors hover:bg-white/20"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? t.footer.copied : t.footer.copy}
            </button>
          </div>
        </Reveal>

        {/* Bagian Social Icons dengan Hover Effect*/}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 md:mb-12">
          {[
            { 
              icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />, 
              link: `mailto:${EMAIL}`, 
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
            },
            {
              icon: <MediumIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
              link: MEDIUM_URL,
              label: "Medium"
            }
          ].map((social, index) => (
            <Reveal key={index} variant="zoom" delay={index * 90}>
              <a
                href={social.link}
                target={social.link.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="block bg-white/10 p-4 sm:p-5 rounded-2xl hover:bg-[#E53888] hover:-translate-y-2 transition-all duration-300 shadow-lg border border-white/20"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            </Reveal>
          ))}
        </div>

        {/* Garis Pembatas & Copyright */}
        <div className="w-full border-t border-white/20 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center text-xs sm:text-sm text-white font-medium">
          <p className="opacity-90">© {currentYear} Naomi Ratna Marisaha Guen. {t.footer.rights}</p>
          <p className="opacity-90">{t.footer.made} 🩶</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;