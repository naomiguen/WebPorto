import { PROFILE } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-24 md:py-20 bg-gradient-to-br from-[#F7A8C4] via-[#F37199] to-[#E53888]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
        
        {/* KIRI: TEKS PERKENALAN */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] drop-shadow-lg">
            Halo, Saya <br />
            <span className="text-[#AC1754] text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2">
              {PROFILE.name}
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow px-2 sm:px-0">
            {PROFILE.about}
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <button className="bg-[#AC1754] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#E53888] transition-all shadow-xl hover:-translate-y-1 active:scale-95 border-2 border-white/20">
              Download CV
            </button>
          </div>
        </div>

        {/* KANAN: FOTO (UKURAN RESPONSIF) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* Bingkai Dekoratif Pink Tua #AC1754 */}
            <div className="absolute inset-0 bg-[#AC1754] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] rotate-6 -z-10 opacity-60 shadow-2xl"></div>
            {/* Bingkai Dekoratif Pink Sedang #E53888 */}
            <div className="absolute inset-0 bg-[#E53888] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] -rotate-3 -z-10 opacity-50 shadow-xl"></div>
            {/* Bingkai Dekoratif Pink Muda #F37199 */}
            <div className="absolute inset-0 bg-[#F37199] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] rotate-2 -z-10 opacity-40"></div>
            
            <img 
              src="/fotoku.jpg"
              alt="Naomi Ratna" 
              className="w-full h-full object-cover rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 sm:border-6 md:border-8 border-white relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;