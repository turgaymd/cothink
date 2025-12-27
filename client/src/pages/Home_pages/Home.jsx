
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import Faqs from "./FAQ";
import Team from "./Team";

const Home = () => {


  return (
    <>
   <div className="about-us p-3 md:min-h-[600px] ">
        <div className="flex flex-col md:h-full"> 
        <div className="partners flex md:grid md:grid-cols-6 grid-cols-2  gap-3">
             <a className="scale-160 md:scale-100" href="https://idda.az/az" target="_blank">
  <img src="/images/rəqəmsalw.png" alt="partner" fetchPriority="high"/>
          </a>
             <a className="scale-160 md:scale-100" href="https://idda.az/az" target="_blank" >
  <img src="/images/digitalw.png"  alt="partner" fetchPriority="high"/>
          </a>
             <a className="scale-160 md:scale-100" href="https://beu.edu.az/en" target="_blank">
  <img src="/images/bmuw.png"  alt="partner" fetchPriority="high"/>
          </a>
            
               <a className="scale-160 md:scale-100" href="https://beu.edu.az/en" target="_blank">
  <img src="/images/beuw.png"  alt="partner" fetchPriority="high"/>
          </a>
              <a className="scale-160 md:scale-100">
  <img src="/images/assipw.png"  alt="partner" fetchPriority="high"/>
          </a>
              <a className="scale-160 md:scale-100" href="https://yenifikir.az/" target="_blank">
  <img src="/images/yenifikir.png"  alt="partner" fetchPriority="high"/>
          </a>
        </div>
<div className="text-center pb-4 md:mt-40 mt-18 md:m-5  md:p-5 ">
   <h1 className="text-white text-[15px] md:text-4xl text-center">CoThink startapı ASSİP2 Hakatonunun iştirakçısı olmuş və inkubasiya <br className="hidden md:block" /> mərhələsinə seçilmişdir </h1>
     </div>
     
     </div>
      </div>
      <section className="mt-4">
                  <h2 className="text-2xl text-center mb-12 mt-7">Danışıqlar apardığımız  <span className="font-bold">Tərəfdaşlarımız</span></h2>
                  <Swiper
                                modules={[ Pagination, Autoplay]}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                observer={false}
                                observeParents={false}
                                resizeObserver={false}
                                watchSlidesProgress={false}
                                pagination={{
                                    clickable: true
                                }}
                            >
                         
                               <SwiperSlide>
  <div className="partners  justify-center grid md:grid-cols-4 grid-cols-2  gap-3">
                          
             <a >
  <img src="/images/beu_white.png"  alt="partner"/>
          </a>

             <a  href="https://yenifikir.az/" target="_blank">
  <img src="/images/yenifikir_white.png"  alt="partner"/>
          </a>
               <a  href="https://abbtech.az/" target="_blank" >
  <img src="/images/abb.png"  alt="partner"/>
          </a>

         
              <a  href="https://hedef.edu.az/" target="_blank">
  <img src="/images/hedef.png"  alt="partner"/>
          </a>
          </div>
            </SwiperSlide>
          <SwiperSlide>
             <div className="partners justify-center  grid md:grid-cols-4 grid-cols-2  gap-3">
              <a >
  <img src="/images/eland.png"  alt="partner"  loading="lazy"/>
          </a>
                 <a >
  <img src="/images/codeworld.png"  alt="partner" loading="lazy"/>
          </a>
          
                 <a  href="https://beu.edu.az/en" target="_blank">
  <img src="/images/beu_white.png"  alt="partner" loading="lazy" />
          </a>
          
                 <a  href="https://yenifikir.az/" target="_blank">
  <img src="/images/yenifikir_white.png" alt="partner" loading="lazy"/>
          </a>
          </div>
                   </SwiperSlide>               
                           
                        <div className="swiper-pagination flex justify-center"></div>
                 
                    </Swiper>

      </section>

      <section id="about" className="max-w-[80vw] m-auto mt-5">
        <div>
          <h2 className="font-bold text-3xl text-center">Niyə Bizi Seçməlisiniz?</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 pt-5 mt-7">
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
    <h2 className="text-3xl text-center pb-7">Bizim <span className="font-bold">Üstünlüyümüz</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-7 mt-10">
      <div className="mb-5 flex flex-col justify-center">
        <h2 className="text-2xl">Nə üçün biz <span className="font-bold">Fərqliyik?</span></h2>
        <p className="text-gray-500 pb-4 pt-4">
          CoThink öyrənmə prosesini tam sistemə çevirir. Video izahlar, qısa konspektlər, mövzu qeydləri, 
          mentor dəstəyi və sual–cavab —hamısı bir yerdədir. AI filtrasiyası lazımsız məlumatı aradan qaldırır 
          və diqqəti yalnız həqiqi bilikdə saxlayır. İmtahana və dərslərə hazırlıq daha sürətli, daha aydın və daha motivasiyalı olur.
        </p>
        <button className="bg-blue-800 mb-5 w-full md:w-auto text-white rounded-full flex items-center justify-center gap-3 px-6 py-3 hover:bg-blue-900 transition-colors">
          Daha ətraflı <MdArrowOutward className="hidden md:inline-flex text-blue-500 bg-white rounded-full p-1" fontSize={24}/>
        </button>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <div className="bg-blue-700 w-64 h-32 rounded-[50%/50%] relative">
          <img 
            src="/images/macbook_.webp" 
            className="absolute bottom-6 right-3 object-cover scale-150 mt-3 md:scale-160" 
            alt="Macbook"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      
      <section className="max-w-[95vw] m-auto mt-10 md:mt-14">
        <div className="rounded-2xl bg-linear-to-r from-blue-100 to-purple-100 overflow-hidden">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-8 md:gap-12 px-4 md:px-8 py-6 md:py-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-bold text-2xl md:text-3xl pb-3">
                Hər ehtiyacın — bir platformada
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                CoThink öyrənməni asanlaşdıran tam akademik mühit yaradır.
                Hazırlığınızı daha planlı, ardıcıl və effektiv edin.
              </p>
            </div>

            <div className="flex-1 relative flex flex-col items-center min-h-[250px] md:min-h-[350px]">
              <div className="absolute top-0 left-1/3 
                              w-28 h-28 md:w-44 md:h-44 
                              bg-blue-300 rounded-full opacity-60 z-0"></div>

         <img
                src="/images/laptop.webp"
                className="
                  relative
                  right-15
                  max-w-70 md:max-w-[300px] lg:max-w-[350px]
                  w-auto object-contain z-10
                "
                alt="Laptop" loading="lazy"
              />

              <div className="absolute bottom-4 right-1/3 
                              w-20 h-20 md:w-36 md:h-36 
                              bg-purple-300 rounded-full opacity-60 z-0"></div>
              <img
                src="/images/articles.webp"
                className="mt-30
                  ml-25
                  max-w-50 md:max-w-[200px] lg:max-w-[250px]
                  w-auto object-contain shadow-lg rounded-lg z-20

                  md:mt-0 md:ml-0
                  md:translate-x-10
                  md:absolute md:right-5

                  lg:translate-x-0
                  lg:absolute lg:top-2 lg:right-25
                "
                alt="Articles" loading="lazy"
              />

            </div>

          </div>
        </div>
      </section>
           
 <Team/>
   <Faqs/>
    </>
  );
};

export default Home;