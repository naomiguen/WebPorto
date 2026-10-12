import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useLang from "../i18n/useLang";
import LangSwitch from "./LangSwitch";

const Navbar = () => {
  const { t } = useLang();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk scroll halus ke bagian tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Tutup menu setelah klik
    }
  };

  // Detect section yang sedang terlihat
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pendidikan', 'pengalaman', 'projek', 'keahlian', 'footer'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const menuItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.education, id: 'pendidikan' },
    { label: t.nav.experience, id: 'pengalaman' },
    { label: t.nav.projects, id: 'projek' },
    { label: t.nav.skills, id: 'keahlian' },
    { label: t.nav.contact, id: 'footer' }
  ];

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO / NAMA */}
        <div 
          className="text-[#AC1754] font-black text-xl sm:text-2xl tracking-tighter cursor-pointer hover:text-[#E53888] transition-colors z-50" 
          onClick={() => scrollToSection('hero')}
        >
          NR<span className="text-[#E53888]">.</span>
        </div>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#AC1754] hover:text-[#E53888] transition-colors z-50"
          aria-label={t.nav.menu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MENU LINKS (Desktop) */}
        <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#AC1754] font-semibold text-sm uppercase tracking-wide hover:text-[#E53888] transition-colors relative group"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E53888] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            );
          })}
          <LangSwitch tone="light" />
        </div>

      </div>
    </nav>

    {/* MOBILE MENU (Full Screen Overlay).
        Ditaruh di luar <nav>: navbar memakai backdrop-blur, dan elemen dengan filter itu akan
        mengurung elemen "fixed" di dalamnya sehingga overlay hanya setinggi navbar. */}
    <div
      aria-hidden={!isMenuOpen}
      inert={!isMenuOpen}
      className={`fixed inset-0 z-40 bg-gradient-to-br from-[#F7A8C4] via-[#F37199] to-[#E53888] transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-white font-bold text-2xl uppercase tracking-wide hover:text-[#AC1754] transition-all relative ${
                isActive ? 'scale-110' : ''
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full"></span>
              )}
            </button>
          );
        })}
        <LangSwitch tone="pink" className="mt-2" />
      </div>
    </div>
    </>
  );
};

export default Navbar;