import { ORGANIZATIONS, COMMITTEES } from "../constants";
import { Briefcase, Calendar, Users } from "lucide-react";

const Experience = () => {
  return (
    <>
      {/* SECTION ORGANISASI */}
      <section id="pengalaman" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F7A8C4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#AC1754] mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest">
            ORGANISASI
          </h2>

          <div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
            {/* Garis Vertikal Tengah */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#AC1754] -translate-x-1/2 opacity-20"></div>

            {ORGANIZATIONS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Deskripsi */}
                  <div className="flex-1 w-full group">
                    <div className={`p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-b-4 sm:border-b-6 md:border-b-8 border-[#AC1754] ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                      {/* Year Badge dengan Icon */}
                      <div className={`inline-flex items-center gap-2 bg-[#F7A8C4] px-4 py-2 rounded-full mb-3 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Calendar size={16} className="text-[#AC1754]" />
                        <span className="text-[#AC1754] font-bold text-sm sm:text-base">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] mt-1 sm:mt-2 group-hover:text-[#E53888] transition-colors">
                        {item.role}
                      </h3>
                      
                      {/* Organization dengan Icon */}
                      <div className={`flex items-center gap-2 text-gray-500 font-semibold mb-3 sm:mb-4 text-sm sm:text-base ${isEven ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                        <Briefcase size={16} />
                        <p>{item.organization}</p>
                      </div>
                      
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Line */}
                      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full ${isEven ? 'md:ml-auto' : ''} mx-auto md:mx-0`}></div>
                    </div>
                  </div>

                  {/* Titik Tengah dengan Pulse Effect */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-[#AC1754] rounded-full border-4 border-[#F7A8C4] shadow-lg"></div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 bg-[#AC1754] rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Foto dengan Hover Effect */}
                  <div className="flex-1 w-full group">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white group-hover:border-[#E53888] transition-all duration-300">
                      {/* Gradient Overlay muncul saat hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      
                      <img 
                        src={item.image} 
                        alt={item.role} 
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500" 
                      />

                      {/* Icon muncul saat hover */}
                      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                        <Users size={24} className="text-[#AC1754]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION KEPANITIAAN */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#E53888] via-[#F37199] to-[#F7A8C4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest drop-shadow-lg">
            KEPANITIAAN
          </h2>

          <div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
            {/* Garis Vertikal Tengah */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white -translate-x-1/2 opacity-30"></div>

            {COMMITTEES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Deskripsi */}
                  <div className="flex-1 w-full group">
                    <div className={`p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-b-4 sm:border-b-6 md:border-b-8 border-[#AC1754] ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                      {/* Year Badge dengan Icon */}
                      <div className={`inline-flex items-center gap-2 bg-[#F7A8C4] px-4 py-2 rounded-full mb-3 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Calendar size={16} className="text-[#AC1754]" />
                        <span className="text-[#AC1754] font-bold text-sm sm:text-base">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] mt-1 sm:mt-2 group-hover:text-[#E53888] transition-colors">
                        {item.role}
                      </h3>
                      
                      {/* Event dengan Icon */}
                      <div className={`flex items-center gap-2 text-gray-500 font-semibold mb-3 sm:mb-4 text-sm sm:text-base ${isEven ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                        <Briefcase size={16} />
                        <p>{item.event}</p>
                      </div>
                      
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Line */}
                      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full ${isEven ? 'md:ml-auto' : ''} mx-auto md:mx-0`}></div>
                    </div>
                  </div>

                  {/* Titik Tengah dengan Pulse Effect */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full border-4 border-[#AC1754] shadow-lg"></div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Foto dengan Hover Effect */}
                  <div className="flex-1 w-full group">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white group-hover:border-[#AC1754] transition-all duration-300">
                      {/* Gradient Overlay muncul saat hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      
                      <img 
                        src={item.image} 
                        alt={item.role} 
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500" 
                      />

                      {/* Icon muncul saat hover */}
                      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                        <Users size={24} className="text-[#AC1754]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;