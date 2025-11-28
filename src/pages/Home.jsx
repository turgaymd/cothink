import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
const Home=()=>{
    return (
        <>
                <header className="w-full top-0 z-50 navbar items-center">
                    <div className=" flex justify-between items-center">
                    <div className="logo">
                        <Link to ="/home">
                                    <img src="/logo.jpg"></img>
                        </Link>
                    </div>
                        <ul className="hidden md:flex gap-6 desktop-menu">
                            <li className="nav-item"><NavLink className={({isActive})=> isActive ? "active" : "" } to="/home">Ana Səhifə</NavLink></li>
                            <li className="nav-item"><a className={({isActive})=> isActive ? "active" : "" } href="#services">Xidmətlərimiz</a></li>
                            <li className="nav-item"><a className="" href="#about">Haqqımızda</a></li>
                            <li className="nav-item"><NavLink className="" to="/rating">Əlaqə</NavLink></li>
                        </ul>
                           <div className="hidden md:flex actions items-center gap-3 ">                 
                               <a className="border border-blue-800 text-blue-800 rounded-full px-7 py-3" href="/register">Qeydiyyat</a>
                        </div>
                        <button className="md:hidden text-3xl" >
                            { open ? <IoClose fontSize={28}/> : <IoMenu fontSize={28}/>}
                        </button>
            
                    </div>
                    </header>
                     <section>
            <div className="grid grid-cols-2">
                <div >
                    <h2 className="font-bold text-2xl">Bilik paylaşdıqca artır </h2>
                    <p className="text-gray-500 pb-4 pt-4">Öyrənməni daha ağıllı, daha sadə və daha əlçatan edən yeni nəsil təhsil platforması.
CoThink — akademik cəhətdən düzgün və sənə uyğunlaşdırılmış bilikləri bir araya gətirir.</p>
<button className="bg-blue-800 text-white rounded-full"> Kəşfə başlayın</button>
                </div>
                <div className="">
                    <img src="home_banner.jpg"/>
                </div>
            </div>
            </section>
            <section id="about">
            <div>
                <h2 className="font-bold text-3xl text-center mb-5">Niyə  Bizi Seçməlisiniz ?</h2>
                <div className="grid gap- grid-cols-4 pt-5">
                    <div className="bg-gray-100  border border-blue-300  rounded-full w-70 h-70 flex flex-col justify-center items-center p-4 mx-auto">
                        <h5 className="font-bold">Təhlükəsiz və Etibarlı</h5>
                        <p className="text-gray-400 text-center">Bütün məzmun müəllimlər və mütəxəssislər tərəfindən yoxlanılır.</p>
                    </div>
                                        <div className="bg-gray-100 border border-blue-300 rounded-full w-70 h-70 flex flex-col justify-center items-center p-4 mx-auto">
                        <h5 className="font-bold">Proqrama Uyğun</h5>
                        <p className="text-gray-400 text-center">Dərs izahları və resurslar Azərbaycan tədris proqramına uyğun hazırlanır.</p>
                    </div>
                                        <div className="bg-gray-100 border border-blue-300  rounded-full w-70 h-70 flex flex-col justify-center items-center p-4 mx-auto">
                        <h5 className="font-bold">İnsan Dəstəyi</h5>
                        <p className="text-gray-400 text-center">Mentorlar və tələbə icması suallara real və aydın cavablar verir.</p>
                    </div>
                                        <div className="bg-gray-100 border border-blue-300  rounded-full w-70 h-70 flex flex-col justify-center items-center p-4 mx-auto">
                        <h5 className="font-bold">AI Filtrasiyası</h5>
                        <p className="text-gray-400 text-center">Yanlış, uyğunsuz və keyfiyyətsiz məzmun avtomatik təmizlənir.</p>
                    </div>
                        
                </div>
            </div>
            </section>
            <section >
            <div className="mt-5">
                <h2 className="font-bold text-2xl text-center">Bizim Üstünlüyümüz</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2">
                <div >
                    <h2 className="font-bold text-2xl">Nə üçün biz Fərqliyik ? </h2>
                    <p className="text-gray-500 pb-4 pt-4">CoThink öyrənmə prosesini tam sistemə çevirir.
Video izahlar, qısa konspektlər, mövzu qeydləri, mentor dəstəyi və sual–cavab — hamısı bir yerdədir.
AI filtrasiyası lazımsız məlumatı aradan qaldırır və diqqəti yalnız həqiqi bilikdə saxlayır.
İmtahana və dərslərə hazırlıq daha sürətli, daha aydın və daha motivasiyalı olur.</p>
<button className="bg-blue-800 text-white rounded-full"> Daha ətraflı </button>
                </div>
                <div className="">
                    <div className="relative">
                    <img src="macbook.jpg" />
                    <div className="absolute  -bottom-6 w-50 h-30 bg-blue-400 rounded-full rotate-8"></div>
                    </div>
                    </div>
            </div>
            </div>
            </section>
                   <section id="services">
            <div className="mt-5">
               <h2 className="font-bold text-2xl text-center pb-4"> Xidmətlərimiz</h2>   
               <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-20 h-20">
                     <img src="library.svg"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Dərs izahları</h5>
                        <p>Fənlər üzrə hazırlanan qısa, aydın və sistemli video izahlar.</p>
                     </div>
                    </div>
                </div>
                                <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-20 h-20">
                     <img src="library.svg"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Mentor dəstəyi</h5>
                        <p>Sualını göndər və mövzunu izah etməyini mentorlarımızdan istə.</p>
                     </div>
                    </div>
                </div>
                           <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-20 h-20">
                     <img src="library.svg"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Akademik resurslar</h5>
                        <p>PDF-lər, konspektlər, xülasələr və sınaq sualları — hamısı əlçatan.</p>
                     </div>
                    </div>
                </div>
                                <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-20 h-20">
                     <img src="library.svg"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Sual–Cavab</h5>
                        <p>Tələbələr və mentorlar tərəfindən verilən real cavablar; ən faydalıları önə çıxır.</p>
                     </div>
                    </div>
                </div>
               </div>
                 <div className="flex border border-gray-200 mt-4  rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-20 h-20">
                     <img src="library.svg"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Mentor dəstəyi</h5>
                        <p>Sualını göndər və mövzunu izah etməyini mentorlarımızdan istə.</p>
                     </div>
                    </div>
                </div>
            </div>
      
            </section>
                  <div className="mt-5 mb-5 rounded-2xl one-platform">
                <div className="flex justify-between gap-3"> 
                    <div className="">
                        <img src="articles.jpg"/>
                    </div>
                     <div>
                  <h2 className="font-bold text-2xl pb-4"> Hər ehtiyacın — bir platformada</h2> 
                  <p>CoThink öyrənməni asanlaşdıran tam akademik mühit yaradır.
Hazırlığınızı daha planlı, ardıcıl və effektiv edin.
</p> 
</div>
            </div>
            </div>
            <section>
            <div >
          <h2 className="font-bold text-2xl text-center pb-12 mt-5"> Tez-tez Soruşulan Suallar</h2>   
     <div className="grid grid-cols-2 gap-3">
        <div className="border border-gray-200 px-5 py-2 rounded-md">
         <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
            <h6 className="font-bold">CoThink-də dərsləri necə tapa bilərəm?</h6>
            <IoMdAdd fontSize={24}/>
         </div>
                  <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
            <h6 className="font-bold">Məzmunu kim hazırlayır?</h6>
            <IoMdAdd fontSize={24}/>
         </div>
                  <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
            <h6 className="font-bold">Sual verdikdə nə qədər vaxta cavab gəlir?</h6>
            <IoMdAdd fontSize={24}/>
         </div>
              <div className="flex justify-between pt-3 pb-3 border-b border-b-gray-200">
            <h6 className="font-bold">Platformadan istifadə ödənişlidir?</h6>
            <IoMdAdd fontSize={24}/>
         </div>
                  <div className="flex justify-between pt-3 pb-3">
            <h6 className="font-bold">Məzmunun düzgünlüyü necə yoxlanılır?</h6>
            <IoMdAdd fontSize={24}/>
         </div>
        </div>
             <div className="flex flex-col gap-5 items-center justify-center">
                <img src="faq.png" className="object-cover"/>
                <h6 className="font-bold text-2xl pt-4 pb-4">Başqa sualınız var ?</h6>
                <button className="bg-blue-300 rounded-full">Əlaqə saxlayın</button>
            
        </div>
     </div>
          </div>
                          
            </section>
     {/* <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="relative">
        <div className="bg-white shadow-lg rounded-3xl p-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 h-2 w-100 bg-blue-300  rotate-6 rounded-b-3xl"></div>
            <h5 className="font-bold text-xl">Aysel Qasımova</h5>
            <p>Tələbə</p>
            <BiSolidQuoteAltLeft fontSize={24}/>
            <p  className="text-gray-500">CoThink izahları çox anlaşılandır və tələbənin dərsi qavramasını əhəmiyyətli dərəcədə sürətləndirir.
Platformanın interaktivliyi öyrənməni daha maraqlı edir.</p>
        </div>
     </div>
            </div> */}
            
            <footer>
                <div className="grid grid-cols-4">
                    <div>
                    <a>
                        <img src="logo.jpg" />
                    </a>
                    <p className="pb-4 pt-4 text-gray-600">CoThink — tələbələrin öyrəndiyi, paylaşdığı və birlikdə inkişaf etdiyi sosial təhsil platformasıdır.
Məqsədimiz öyrənmə prosesini daha aydın, əlçatan və effektiv etməkdir.</p>
                       <input type="text" className="w-full px-5 py-3 bg-gray-100 rounded-full outline-none" placeholder="E-mailinizi daxil edin"/>
                 <button type="submit" className="bg-black text-white w-full rounded-full mt-4">Təsdiqlə</button>
                  </div>
          <div></div>
          <div>
            <h4 className="font-bold"> Şirkət</h4>
                    <ul className="text-blue-500 footer-menu">
                       <li><a>Haqqımızda</a></li>
                         <li><a>Kariyera</a></li>
                           <li><a>Yenilikər</a></li>
                    </ul>
                </div>
                 <div>
            <h4 className="font-bold">Gizlilik və təhlükəsizlik </h4>
                    <ul className="footer-menu text-gray-500">
                       <li><a>CoThink Giriş </a></li>
                         <li><a>CoThink Şərtlər   </a></li>
                           <li><a>CoThink Məxfilik   </a></li>
                             <li><a>CoThink Dəstək    </a></li>
                           <li><a>CoThink Əlaqə    </a></li>
                    </ul>
                </div>
                </div>
                </footer>

</>
        
    )
}
export default Home;