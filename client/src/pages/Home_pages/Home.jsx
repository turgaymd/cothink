import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const logos = [
    "/images/Group 7.svg",
    "/images/Group 10.svg",
    "/images/Group 9.svg"
  ];

  // Logo slider timer - hər 3 saniyədə avtomatik dəyişir
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const newSlide = prev === 0 ? logos.length - 1 : prev - 1;
      return newSlide;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % logos.length;
      return newSlide;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <>
      <section id="home" className="w-full py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center gap-10 px-5">

          {/* Text Side */}
          <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left">

            <h2 className="font-bold text-2xl md:text-4xl leading-tight">
              Bilik paylaşdıqca artır
            </h2>

            <p className="text-gray-500 py-5 text-base md:text-lg leading-relaxed">
              Öyrənməni daha ağıllı, daha sadə və daha əlçatan edən yeni nəsil təhsil platforması.
              <br />
              CoThink — akademik cəhətdən düzgün və sənə uyğunlaşdırılmış bilikləri bir araya gətirir.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#3456BE] text-white px-6 py-3 rounded-3xl flex items-center gap-3 hover:opacity-90 transition">
                Kəşfə başlayın 
                <span className="bg-white text-[#3456BE] p-1 rounded-full">
                  <MdArrowOutward fontSize={18} />
                </span>
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <img
              src="/images/home_banner.png"
              className="
                w-full 
                max-w-[400px] 
                md:max-w-[430px] 
                lg:max-w-[500px]
                rounded-xl
              "
              alt="Home Banner"
            />
          </div>

        </div>
      </section>

      {/* Niyə Bizi Seçməlisiniz Section */}
      <section id="about" className="max-w-[80vw] m-auto mt-20">
        <div>
          <h2 className="font-bold text-3xl text-center">Niyə Bizi Seçməlisiniz?</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 pt-5 mt-[80px]">
            <div className="bg-gray-100 border border-blue-300 rounded-full w-full aspect-square min-w-[140px] flex flex-col justify-center items-center p-4 hover:border-amber-400 cursor-pointer">
              <h5 className="font-bold text-xs sm:text-sm md:text-base text-center">Təhlükəsiz və Etibarlı</h5>
              <p className="text-gray-400 text-center text-[10px] sm:text-xs md:text-sm mt-2">Bütün məzmun müəllimlər və mütəxəssislər tərəfindən yoxlanılır.</p>
            </div>
            <div className="bg-gray-100 border border-blue-300 rounded-full w-full aspect-square min-w-[140px] flex flex-col justify-center items-center p-4 hover:border-amber-500 cursor-pointer">
              <h5 className="font-bold text-xs sm:text-sm md:text-base text-center">Proqrama Uyğun</h5>
              <p className="text-gray-400 text-center text-[10px] sm:text-xs md:text-sm mt-2">Dərs izahları və resurslar Azərbaycan tədris proqramına uyğun hazırlanır.</p>
            </div>
            <div className="bg-gray-100 border border-blue-300 rounded-full w-full aspect-square min-w-[140px] flex flex-col justify-center items-center p-4 hover:border-amber-300 cursor-pointer">
              <h5 className="font-bold text-xs sm:text-sm md:text-base text-center">İnsan Dəstəyi</h5>
              <p className="text-gray-400 text-center text-[10px] sm:text-xs md:text-sm mt-2">Mentorlar və tələbə icması suallara real və aydın cavablar verir.</p>
            </div>
            <div className="bg-gray-100 border border-blue-300 rounded-full w-full aspect-square min-w-[140px] flex flex-col justify-center items-center p-4 hover:border-amber-400 cursor-pointer">
              <h5 className="font-bold text-xs sm:text-sm md:text-base text-center">AI Filtrasiyası</h5>
              <p className="text-gray-400 text-center text-[10px] sm:text-xs md:text-sm mt-2">Yanlış, uyğunsuz və keyfiyyətsiz məzmun avtomatik təmizlənir.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[80vw] m-auto">
  <div className="mt-10 mb-4">
    <h2 className="text-3xl text-center pb-5">Bizim <span className="font-bold">Üstünlüyümüz</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-7 mt-10">
      <div className="mb-5 flex flex-col justify-center">
        <h2 className="text-2xl">Nə üçün biz <span className="font-bold">Fərqliyik?</span></h2>
        <p className="text-gray-500 pb-4 pt-4">
          CoThink öyrənmə prosesini tam sistemə çevirir. Video izahlar, qısa konspektlər, mövzu qeydləri, 
          mentor dəstəyi və sual–cavab —hamısı bir yerdədir. AI filtrasiyası lazımsız məlumatı aradan qaldırır 
          və diqqəti yalnız həqiqi bilikdə saxlayır. İmtahana və dərslərə hazırlıq daha sürətli, daha aydın və daha motivasiyalı olur.
        </p>
        <button className="bg-blue-800 w-full md:w-auto text-white rounded-full flex items-center justify-center gap-3 px-6 py-3 hover:bg-blue-900 transition-colors">
          Daha ətraflı <MdArrowOutward className="hidden md:inline-flex text-blue-500 bg-white rounded-full p-1" fontSize={24}/>
        </button>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <div className="bg-blue-700 w-64 h-32 rounded-[50%/50%] relative">
          <img 
            src="/images/macbook_.png" 
            className="absolute bottom-6 right-3 object-cover scale-150 md:scale-160" 
            alt="Macbook"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      
      <section className="max-w-[95vw] m-auto mt-10 md:mt-14">
        <div className="rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 overflow-hidden">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-8 md:gap-12 px-4 md:px-8 py-6 md:py-2">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-bold text-2xl md:text-3xl pb-3">
                Hər ehtiyacın — bir platformada
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                CoThink öyrənməni asanlaşdıran tam akademik mühit yaradır.
                Hazırlığınızı daha planlı, ardıcıl və effektiv edin.
              </p>
            </div>

            {/* Images Section */}
            <div className="flex-1 relative flex flex-col items-center min-h-[250px] md:min-h-[350px] mt-10">

              {/* Background Circle 1 */}
              <div className="absolute top-0 left-1/3 
                              w-28 h-28 md:w-44 md:h-44 
                              bg-blue-300 rounded-full opacity-60 z-0"></div>

              {/* Laptop Image */}
              <img
                src="/images/laptop.png"
                className="
                  relative
                  right-15
                  max-w-70 md:max-w-[300px] lg:max-w-[500px]
                  w-auto object-contain z-10 ml-2
                "
                alt="Laptop"
              />

              {/* Background Circle 2 */}
              <div className="absolute bottom-4 right-1/3 
                              w-20 h-20 md:w-36 md:h-36 
                              bg-purple-300 rounded-full opacity-60 z-0"></div>

              {/* Articles Image */}
              <img
                src="/images/articles.jpg"
                className="
                  mt-30
                  ml-25
                  max-w-50 md:max-w-[200px] lg:max-w-[350px]
                  w-auto object-contain shadow-lg rounded-lg z-20

                  /* Tablet (md): absolute positioning */
                  md:mt-0 md:ml-0
                  md:translate-x-10
                  md:absolute md:right-5

                  /* Desktop (lg+) */
                  lg:translate-x-0
                  lg:absolute lg:top-2 lg:right-0
                "
                alt="Articles"
              />

            </div>

          </div>
        </div>
      </section>
           
      {/* Desktop view - 3 images side by side */}
      <div className="hidden md:flex justify-center mt-30 gap-10">
        <div><img src="/images/Group 7.svg" alt="Feature 1" /></div>
        <div><img src="/images/Group 10.svg" alt="Feature 2" /></div>
        <div><img src="/images/Group 9.svg" alt="Feature 3" /></div>
      </div>

      {/* Mobile view - Slider with arrow buttons */}
      <div className="md:hidden relative w-full mt-10">
        <div className="flex items-center justify-between px-4">
          {/* Left Arrow */}
          <button 
            onClick={handlePrevSlide}
            disabled={isTransitioning}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 z-10 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <IoIosArrowBack fontSize={28} />
          </button>

          {/* Slider Container */}
          <div className="flex-1 mx-2 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {logos.map((logo, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center items-center py-5">
                  <img 
                    src={logo} 
                    alt={`Feature ${index + 1}`} 
                    className="max-w-[300px] w-full h-auto object-contain px-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNextSlide}
            disabled={isTransitioning}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 z-10 disabled:opacity-50"
            aria-label="Next slide"
          >
            <IoIosArrowForward fontSize={28} />
          </button>
        </div>
      </div>

      <section className="max-w-[80vw] m-auto mt-10 mb-10">
        <div>
          <h2 className="font-bold text-2xl text-center pb-12 mt-5">Tez-tez Soruşulan Suallar</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="border border-gray-200 px-5 py-2 rounded-md">
              <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
                <h6 className="font-medium">CoThink-də dərsləri necə tapa bilərəm?</h6>
                <IoMdAdd fontSize={24}/>
              </div>
              <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
                <h6 className="font-medium">Məzmunu kim hazırlayır?</h6>
                <IoMdAdd fontSize={24}/>
              </div>
              <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
                <h6 className="font-medium">Sual verdikdə nə qədər vaxta cavab gəlir?</h6>
                <IoMdAdd fontSize={24}/>
              </div>
              <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
                <h6 className="font-medium">Platformadan istifadə ödənişlidir?</h6>
                <IoMdAdd fontSize={24}/>
              </div>
              <div className="flex justify-between pt-3 pb-3">
                <h6 className="font-medium">Məzmunun düzgünlüyü necə yoxlanılır?</h6>
                <IoMdAdd fontSize={24}/>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
              <img src="/images/faq.png" className="object-cover" alt="FAQ"/>
              <h6 className="font-bold text-2xl pt-4 pb-4">Başqa sualınız var?</h6>
              <button className="rounded-full contact-btn px-6 py-2 bg-blue-800 text-white hover:bg-blue-900 transition-colors">Əlaqə saxlayın</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;