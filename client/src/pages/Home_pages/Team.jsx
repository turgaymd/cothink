import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Team=()=>{

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const logos = [
    "/images/Group 7.svg",
    "/images/Group 10.svg",
    "/images/Group 9.svg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
    return(
        <>
        <div className="hidden md:flex justify-center mt-30 gap-10">
        <div><img src="/images/Group 7.svg" alt="Feature 1" /></div>
        <div><img src="/images/Group 10.svg" alt="Feature 2" /></div>
        <div><img src="/images/Group 9.svg" alt="Feature 3" /></div>
      </div>

  
      <div className="md:hidden relative w-full mt-10">
        <div className="flex items-center justify-between px-4">
  
          <button 
            onClick={handlePrevSlide}
            disabled={isTransitioning}
            className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 z-10 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <IoIosArrowBack fontSize={28} />
          </button>

         
          <div className="flex-1 mx-2 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {logos.map((logo, index) => (
                <div key={index} className="w-full shrink-0 flex justify-center items-center py-5">
                  <img 
                    src={logo} 
                    alt={`Feature ${index + 1}`} 
                    className="max-w-[300px] w-full h-auto object-contain px-4" loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNextSlide}
            disabled={isTransitioning}
            className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 z-10 disabled:opacity-50"
            aria-label="Next slide"
          >
            <IoIosArrowForward fontSize={28} />
          </button>
        </div>
      </div>
        </>
    )
}
export default Team;