import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section id="pendidikan" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F7A8C4] via-[#F37199] to-[#E53888]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest drop-shadow-lg">
          PENDIDIKAN
        </h2>

        <div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
          {/* Garis Vertikal Tengah - Hanya untuk Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white -translate-x-1/2 opacity-30"></div>

          {EDUCATION.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Deskripsi */}
                <div className="flex-1 w-full">
                  <div className={`p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-b-4 sm:border-b-6 md:border-b-8 border-[#AC1754] ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <span className="text-[#E53888] font-bold text-sm sm:text-base">{item.year}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] mt-1 sm:mt-2">{item.major}</h3>
                    <p className="text-gray-500 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{item.institution}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Titik Tengah - Hanya untuk Desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full border-4 border-[#AC1754] z-10 shadow-lg"></div>

                {/* Foto */}
                <div className="flex-1 w-full">
                  <img 
                    src={item.image} 
                    alt={item.institution} 
                    className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-48 sm:h-56 md:h-64 object-cover border-4 border-white" 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;