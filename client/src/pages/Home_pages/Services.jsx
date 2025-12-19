import { useState, useEffect } from "react";
import { BsBook } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { SiReaddotcv } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Faqs from "./FAQ";

const Services = () => {
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
    <section id="services">
      <div className="mt-5 max-w-[80vw] m-auto">
        <h2 className="font-bold text-2xl text-center pb-4">Xidmətlərimiz</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5">
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <BsBook fontSize={26} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Dərs izahları</h5>
                <p className="text-gray-500">Fənlər üzrə hazırlanan qısa, aydın və sistemli video izahlar.</p>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <HiOutlineUsers fontSize={28} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Mentor dəstəyi</h5>
                <p className="text-gray-500">Sualını göndər və mövzunu izah etməyini mentorlarımızdan istə.</p>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <LuBookText fontSize={28} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Akademik resurslar</h5>
                <p className="text-gray-500">PDF-lər, konspektlər, xülasələr və sınaq sualları — hamısı əlçatan.</p>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <RiQuestionnaireLine fontSize={28} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Sual–Cavab</h5>
                <p className="text-gray-500">Tələbələr və mentorlar tərəfindən verilən real cavablar; ən faydalıları önə çıxır.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border border-gray-200 mt-4 rounded-md service-item">
          <div className="flex justify-between items-center gap-7 m-auto">
            <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
              <SiReaddotcv fontSize={28} className="text-blue-800"/>
            </div>
            <div >
              <h5 className="font-bold text-xl ">Fənn icmaları</h5>
              <p className="text-gray-500">Mövzu müzakirələrinə qoşul, başqalarından öyrən,  öz biliklərini paylaş.</p>
            </div>
          </div>
        </div>
      </div>

     {/* Desktop view - 3 images side by side */}
      <div className="hidden md:flex justify-center mt-30 gap-10 max-w-[85vw] m-auto">
        <img src="/images/Group 7.svg" alt="Feature 1" className="flex-1 h-auto object-contain" />
        <img src="/images/Group 10.svg" alt="Feature 2" className="flex-1 h-auto object-contain" />
        <img src="/images/Group 9.svg" alt="Feature 3" className="flex-1 h-auto object-contain" />
      </div>

      {/* Mobile view - Slider with arrow buttons */}
      <div className="md:hidden relative w-full mt-10">
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button 
            onClick={handlePrevSlide}
            disabled={isTransitioning}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 z-10 disabled:opacity-50 pl-2"
            aria-label="Previous slide"
          >
            <IoIosArrowBack fontSize={28} />
          </button>

          {/* Slider Container */}
          <div className="flex-1 mx-1 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {logos.map((logo, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center items-center py-5">
                  <img 
                    src={logo} 
                    alt={`Feature ${index + 1}`} 
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNextSlide}
            disabled={isTransitioning}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 z-10 disabled:opacity-50 pr-2"
            aria-label="Next slide"
          >
            <IoIosArrowForward fontSize={28} />
          </button>
        </div>
      </div>
    <Faqs/>
    </section>
  );
};

export default Services;