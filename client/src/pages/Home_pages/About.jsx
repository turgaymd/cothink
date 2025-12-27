import { IoMdAdd } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Faqs from "./FAQ";
import Team from "./Team";

// const TestimonialCard = ({ avatar, name, role, text }) => (
//   <div className="w-full shrink-0 px-2">
//     <div className="relative bg-white rounded-2xl border rounded-br-[25px] rounded-bl-[65px] rounded-tr-[35px] rounded-tl-[35px] border-gray-300 shadow-xl flex flex-col items-center justify-center px-6 py-7 mt-12">
//       <div className="absolute -top-8">
//         <img src={avatar} className="w-16 h-16 object-cover rounded-full" alt={name}/>
//       </div>
//       <h4 className="font-bold text-lg mt-2">{name}</h4>
//       <p className="text-gray-500 text-sm">{role}</p>
//       <RiDoubleQuotesL fontSize={24} className="text-blue-500 mt-2"/>
//       <p className="text-gray-600 pb-4 pt-3 text-sm text-center">
//         {text}
//       </p>
//     </div>
//   </div>
// );

const About = () => {

  return (
    <>
     <div className="about-us p-3 md:min-h-[600px] ">
        <div className="flex flex-col md:h-full"> 
        <div className="partners flex md:grid md:grid-cols-6 grid-cols-2  gap-3">
             <a className="scale-160 md:scale-100"  href="https://idda.az/az" target="_blank">
  <img src="/images/rəqəmsalw.png"  />
          </a>
             <a className="scale-160 md:scale-100" href="https://idda.az/az" target="_blank">
  <img src="/images/digitalw.png"  />
          </a>
             <a className="scale-160 md:scale-100" href="https://beu.edu.az/en" target="_blank">
  <img src="/images/bmuw.png" />
          </a>
            
               <a className="scale-160 md:scale-100 " href="https://beu.edu.az/en" target="_blank">
  <img src="/images/beuw.png" />
          </a>
              <a className="scale-160 md:scale-100">
  <img src="/images/assipw.png"/>
          </a>
              <a className="scale-160 md:scale-100" href="https://yenifikir.az/" target="_blank">
  <img src="/images/yenifikir.png"/>
          </a>
        </div>
<div className="text-center pb-4 md:mt-40 mt-18 md:m-5  md:p-5 ">
   <p className="text-white text-[15px]  md:text-4xl text-center">CoThink startapı ASSİP2 Hakatonunun iştirakçısı olmuş və inkubasiya <br className="hidden md:block" /> mərhələsinə seçilmişdir </p>
     </div>
     
     </div>
      </div>
      <section id="about" className=" m-auto mt-10">
        
        <h2 className="font-bold text-center text-3xl pb-7">Haqqımızda </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 mt-7">
          <div className="flex">
          <p>CoThink — təhsildə düşünməyi, sual verməyi və birlikdə öyrənməyi ön plana çıxaran yeni nəsil təhsil platformasıdır.
            <br></br>
  <br></br>
Bu gün tələbələr məlumatı asan əldə edir, lakin onu dərindən anlama və müzakirə etmə imkanları azalır. CoThink bu problemi həll edərək tələbəni passiv izləyici yox, öyrənmənin aktiv iştirakçısına çevirir.
  <br></br>
    <br></br>

Platformada sual-cavab, mentor dəstəyi, video dərslər və etibarlı resurslar vahid sistem kimi işləyir. CoThink Azərbaycan təhsil proqramına uyğun, yerli dildə və real ehtiyaclara əsaslanan öyrənmə ekosistemi yaradır.
  <br></br>  <br></br>
Layihə ASSİP çərçivəsində inkişaf etdirilib; CoThink ASSİP 2 Hakatonunda iştirak etmiş və inkubasiya mərhələsinə seçilmişdir. Proqram İRİA-nın dəstəyi, Yeni Fikir-in icrası və BMU-nun tərəfdaşlığı ilə həyata keçirilir.
</p>
</div>
<div  className="flex flex-col gap-3">
   <img src="/images/about_2.jpg" className="h-48"/>
  <img src="/images/about_1.jpg" className="h-48"/>
   
</div>
<div>

</div>
        </div>
        <div>
          <h2 className="font-bold text-3xl text-center">Niyə Bizi Seçməlisiniz?</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 pt-3 mt-[80px]">
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
   <section className="max-w-[95vw] m-auto mt-10 md:mt-14">
        <div className="rounded-2xl bg-linear-to-r from-blue-100 to-purple-100 overflow-hidden">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-0 md:gap-8  px-4 md:px-8 pb-8 md:py-2">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left ">
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
                src="/images/laptop.webp"
                className="
                hidden
                md:block
                  relative
                  right-15
                  max-w-70 md:max-w-[300px] lg:max-w-[500px]
                  w-auto object-contain z-10 ml-2
                "
                alt="Laptop"
              />

              {/* Background Circle 2 */}
              <div className="absolute bottom-4 right-1/3 hidden mdLabsolute
                              w-20 h-10 md:w-36 md:h-36 
                              bg-purple-300 rounded-full opacity-60 z-0"></div>

              {/* Articles Image */}
              <img
                src="/images/articles.webp"
                className="
                  
                  
                  max-w-60 md:max-w-[200px] lg:max-w-[350px]
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



 
  <Team/>
  <Faqs/>
    </>
  );
};

export default About;