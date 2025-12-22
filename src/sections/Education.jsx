import { EDUCATION } from "../constants";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="pendidikan" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F7A8C4] via-[#F37199] to-[#E53888]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-widest drop-shadow-lg">
          PENDIDIKAN
        </h2>

        {/* Grid Layout - 2 Columns di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {EDUCATION.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gambar dengan Overlay */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.institution}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge Tahun */}
                <div className="absolute top-4 right-4 bg-[#AC1754] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg">
                  <Calendar size={16} />
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Icon Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#F7A8C4] p-3 rounded-2xl">
                    <GraduationCap size={24} className="text-[#AC1754]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#AC1754] leading-tight">
                      {item.major}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-gray-500">
                      <MapPin size={16} />
                      <p className="font-semibold text-sm">{item.institution}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Bottom Border */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#AC1754] to-[#E53888] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;