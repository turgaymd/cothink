
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { SiReaddotcv } from "react-icons/si";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";
const Home=()=>{
        const [open, setOpen]=useState(  false  )
        const [error, setError]=useState("")
        const [email, setEmail]=useState("")
        const [name, setName]=useState("")
        const [phone, setPhone]=useState("")
        const [message, setMessage]=useState("")
        const sendEmail=async(e)=>{
                 e.preventDefault()
                if(!email){
                   setError("Zəhmət olmasa email ünvanınızı daxil edin.")
                }
                else{
                    setError('')
                }
                 try{
         const res = await axios.post("http://localhost/cothink1/cothink/server/contact.php", 
                 { email},
                  { headers:{ "Content-Type":"application/json" }});
                    if(res.data.success){
                   Swal.fire({
                    text:"Email göndərildi"
                  })
                 }    
            }
            catch(err){
                console.error(err)
                
            }              
        }
        const handleContact=async (e)=>{
            e.preventDefault()
            const formData= {name, email, phone, message} 
            if(!email || !phone || !message){
                toast.error("Bütün xanaları doldurun")
                return;
            }
            try{
            const res= await axios.post("http://localhost/cothink1/cothink/server/contact.php", formData,
              
                  { headers:{ "Content-Type":"application/json" }});
                 if(res.data.success){
                   Swal.fire({
                    text:"Mesajınız uğurla göndərildi"
                  })
                 }         
            }
            catch(err){
                console.error(err)
                toast.error("Xəta baş verdi, yenidən cəhd edin")
                
            } 
        }
    return (
        <>
        <ToastContainer/>
                <header className="w-full top-0 z-50 navbar items-center">
                    <div className=" flex justify-between items-center">
                             <button className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
                { open ? <IoClose fontSize={28}/> : <IoMenu fontSize={28}/>}
            </button>
                    <div className="logo">
                        <Link to ="/home" className="hidden md:flex">
                         <img src="/logo.jpg"></img>
                        </Link>
                         <Link to ="/home" className="md:hidden flex">
                         <img src="mobile_logo.png"></img>
                        </Link>
                    </div>
                        <ul className="hidden md:flex gap-6 desktop-menu">
                            <li className="nav-item"><a className={({isActive})=> isActive ? "active" : "" } href="#home">Ana Səhifə</a></li>
                            <li className="nav-item"><a className={({isActive})=> isActive ? "active" : "" } href="#services">Xidmətlərimiz</a></li>
                            <li className="nav-item"><a className="" href="#about">Haqqımızda</a></li>
                            <li className="nav-item"><a className="" href="#contact">Əlaqə</a></li>
                        </ul>
                           <div className=" md:flex actions items-center gap-3 ">                 
                               <a className="border border-blue-800 text-blue-800 rounded-full px-7 py-3" href="/register">Qeydiyyat</a>
                        </div>
                  
            
                    </div>
                      {
                                    open && (
                                        <>
                                    <ul className="md:hidden bg-white shadow-md flex flex-col gap-5 px-6 py-4 nav">
                                    <li className="nav-item"><a  href="#home">Ana Səhifə</a></li>
                                    <li className="nav-item"><a  href="#services">Xidmətlərimiz</a></li>
                                    <li className="nav-item"><a  href="#about">Haqqımızda</a></li>
                                    <li className="nav-item"><a  >Əlaqə</a></li>
                                      
                                </ul>                
                        </>
                                    )
                    
                                }
                    </header>
                     <section id="home">
            <div className="grid md:grid-cols-2  grid-cols-1">
                <div className="flex flex-col justify-center ">
                    <h2 className="font-bold text-2xl">Bilik paylaşdıqca artır </h2>
                    <p className="text-gray-500 pb-4 pt-4">Öyrənməni daha ağıllı, daha sadə və daha əlçatan edən yeni nəsil təhsil platforması.
CoThink — akademik cəhətdən düzgün və sənə uyğunlaşdırılmış bilikləri bir araya gətirir.</p>
<button className="bg-blue-800 text-white rounded-full w-64 flex items-center justify-center gap-3"> Kəşfə başlayın <MdArrowOutward  className="text-blue-500 bg-white rounded-full" fontSize={24}/></button>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <img src="home_banner.jpg" className="rounded-md"/>
                </div>
            </div>
            </section>
            <section id="about">
            <div>
                <h2 className="font-bold text-3xl text-center mb-5">Niyə  Bizi Seçməlisiniz ?</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 md:gap-0 gap-3  grid-cols-1 pt-5">
                    <div className="bg-gray-100  border border-blue-300  rounded-full w-80 h-80 flex flex-col justify-center items-center p-4 mx-auto hover:border-amber-400">
                        <h5 className="font-bold">Təhlükəsiz və Etibarlı</h5>
                        <p className="text-gray-400 text-center">Bütün məzmun müəllimlər və mütəxəssislər tərəfindən yoxlanılır.</p>
                    </div>
                                        <div className="bg-gray-100 border border-blue-300 rounded-full w-80 h-80 flex flex-col justify-center items-center p-4 mx-auto hover:border-amber-500">
                        <h5 className="font-bold">Proqrama Uyğun</h5>
                        <p className="text-gray-400 text-center">Dərs izahları və resurslar Azərbaycan tədris proqramına uyğun hazırlanır.</p>
                    </div>
                                        <div className="bg-gray-100 border border-blue-300  rounded-full w-80 h-80 flex flex-col justify-center items-center p-4 mx-auto hover:border-amber-300">
                        <h5 className="font-bold">İnsan Dəstəyi</h5>
                        <p className="text-gray-400 text-center">Mentorlar və tələbə icması suallara real və aydın cavablar verir.</p>
                    </div>
                                        <div className="bg-gray-100 border border-blue-300  rounded-full w-80 h-80 flex flex-col justify-center items-center p-4 mx-auto hover:border-amber-400">
                        <h5 className="font-bold">AI Filtrasiyası</h5>
                        <p className="text-gray-400 text-center">Yanlış, uyğunsuz və keyfiyyətsiz məzmun avtomatik təmizlənir.</p>
                    </div>
                        
                </div>
            </div>
            </section>
            <section >
            <div className="mt-4 mb-4">
                <h2 className="font-bold text-2xl text-center pb-5">Bizim Üstünlüyümüz</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-7">
                <div >
                    <h2 className="font-bold text-2xl">Nə üçün biz Fərqliyik ? </h2>
                    <p className="text-gray-500 pb-4 pt-4">CoThink öyrənmə prosesini tam sistemə çevirir.
Video izahlar, qısa konspektlər, mövzu qeydləri, mentor dəstəyi və sual–cavab — hamısı bir yerdədir.
AI filtrasiyası lazımsız məlumatı aradan qaldırır və diqqəti yalnız həqiqi bilikdə saxlayır.
İmtahana və dərslərə hazırlıq daha sürətli, daha aydın və daha motivasiyalı olur.</p>
<button className="bg-blue-800 text-white rounded-full flex items-center justify-center gap-3"> Daha ətraflı <MdArrowOutward  className="text-blue-500 bg-white rounded-full" fontSize={24}/></button>
                </div>
                <div className="flex justify-center">

                  <div className="bg-blue-700 w-64 h-32 rounded-[50%/50%] relative">
                                    <img src="macbook_.png" className="absolute bottom-2 object-cover" />
                  </div>
  
                    </div>
            </div>
            </div>
            </section>
                   <section id="services">
            <div className="mt-5">
               <h2 className="font-bold text-2xl text-center pb-4"> Xidmətlərimiz</h2>   
               <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5">
                <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-30 md:w-20 h-20">
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
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-30 md:w-20 h-20">
                     <HiOutlineUsers fontSize={28} className="text-blue-800"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Mentor dəstəyi</h5>
                        <p>Sualını göndər və mövzunu izah etməyini mentorlarımızdan istə.</p>
                     </div>
                    </div>
                </div>
                           <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-30 md:w-20 h-20">
                    <LuBookText fontSize={28} className="text-blue-800"/>                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Akademik resurslar</h5>
                        <p>PDF-lər, konspektlər, xülasələr və sınaq sualları — hamısı əlçatan.</p>
                     </div>
                    </div>
                </div>
                                <div className="flex border border-gray-200 rounded-md service-item">
                    <div className="flex justify-between items-center gap-7">
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-30 md:w-20 h-20">
                     <RiQuestionnaireLine fontSize={28} className="text-blue-800"/>
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
                        <div className="bg-blue-300 rounded-full flex justify-center items-center w-30 md:w-20 h-20">
                     <SiReaddotcv fontSize={28} className="text-blue-800"/>
                        </div>
                     <div>
                     
                        <h5 className="font-bold text-xl">Fənn icmaları</h5>
                        <p>Mövzu müzakirələrinə qoşul, başqalarından öyrən, öz biliklərini paylaş.</p>
                     </div>
                    </div>
                </div>
            </div>
      
            </section>
            <section id="contact">
                <h2 className="font-bold text-center text-3xl mb-7 ">Əlaqə</h2>
             <div className="grid grid-cols-1 gap-1 md:grid-cols-3 text-white mt-5 mb-5 ">
                    <div className="flex flex-col rounded-md">
                        <div className="bg-blue-800 rounded-t-md w-[80%] h-15 flex items-center pl-4">  
                                   <h4 className="font-bold text-xl">Email Address</h4>    
                        </div>
                         <div className="bg-blue-800 rounded-b-xl pl-5 w-full h-15">
                                 <p>cothink@gmail.com</p>
                        </div>
                   </div>
                  
                    <div className="flex flex-col items-center justify-center rounded-md">
                        <div className="bg-blue-800 rounded-t-md w-full  h-15 flex justify-center items-center">        
                                                      <h4 className="font-bold text-xl text-center">Phone Number</h4>
                        </div>
                         <div className="bg-blue-800 rounded-b-xl text-center w-[200px] h-15">
                                 <p>+012 123 45 67</p>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md justify-end items-end">
                        <div className="bg-blue-800 rounded-t-md w-[80%] h-15 flex items-center pr-4 justify-end">
                                     <h4 className="font-bold text-xl">Social Media</h4>
                        </div>
                         <div className="bg-blue-800 rounded-b-xl flex items-center justify-end pr-4 w-full h-15">
                      
                                 <button><BsInstagram fontSize={24}/></button>
                    </div>
                   </div>
                   
                      </div>
                <div className="mt-8 max-w-2xl mx-auto">
               <form  onSubmit={handleContact}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 mt-4'>       
            <div className="w-full">
              <label className="block font-bold pb-2">Ad</label>
              <input type="text" className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md" name="user_name"  placeholder="Adınızı daxil edin" onChange={(e)=>setName(e.target.value)}></input>
              </div>            
            <div>
            <label className="block font-bold pb-2">Mobil nömrə</label>
          <input type="tel" className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md"  name="user_phone"  placeholder="Mobil nömrənizi daxil edin" onChange={(e)=>setPhone(e.target.value)}/>
          </div>    
          </div> 
              <div className="mt-4 mb-4">
            <label className="block font-bold pb-2">Email</label>
          <input type="email" className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md"  name="user_email" placeholder="E-mailinizi daxil edin" onChange={(e)=>setEmail(e.target.value)}/>
          </div>   
          <div className="sm:col-span-2">
          <label className="block mb-2 font-bold pb-2">Qeyd*</label>
        <textarea className="w-full shadow-sm bg-gray-200 outline-none px-5 py-2 mt-2 rounded-md" rows={5} name="message" placeholder="" onChange={(e)=>setMessage(e.target.value)}/>
        </div>
          <div className='text-center mt-4'>
      <button className="w-full rounded-full submit bg-black text-white" type="submit" >Təsdiqlə</button>
          </div>
          <div className="row">
          </div>
          </form>
          
                </div>
                </section>

            <section>
  
                  <div className="mt-5 mb-5 rounded-2xl one-platform">
                <div className="flex md:flex-row flex-col justify-between items-center gap-4 px-5 py-3"> 
                    <div className="flex relative">
                    <div className="absolute -top-15 left-0 md:w-84 md:h-80  z-0 bg-blue-300   rounded-full  "> </div>
                         <img src="laptop.png" className=" relative  w-40 md:w-80 h-auto object-cover z-9"/>    
                         <div className="absolute -bottom-15 -right-25 w-48 h-48 md:w-64 md:h-64  z-0 bg-blue-300   rounded-full">  </div>
                        <img src="articles.jpg" className="absolute pt-2 md:pt-12 w-30 md:w-60 h-auto top-20 z-10 -right-15 md:-right-25 "/>
                    </div>
                     <div>
                  <h2 className="font-bold text-2xl pb-4 mt-7 md:mt-0" > Hər ehtiyacın — bir platformada</h2> 
                  <p>CoThink öyrənməni asanlaşdıran tam akademik mühit yaradır.
Hazırlığınızı daha planlı, ardıcıl və effektiv edin.
</p> 
</div>
            </div>
            </div>
                          </section>
            <section>
            <div >
          <h2 className="font-bold text-2xl text-center pb-12 mt-5"> Tez-tez Soruşulan Suallar</h2>   
     <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
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
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
                    <div>
                    <a>
                        <img src="footer_logo.png" />
                    </a>
                    <p className="pb-4 pt-4 text-gray-600">CoThink — tələbələrin öyrəndiyi, paylaşdığı və birlikdə inkişaf etdiyi sosial təhsil platformasıdır.
Məqsədimiz öyrənmə prosesini daha aydın, əlçatan və effektiv etməkdir.</p>
<form onSubmit={sendEmail}>
                       <input type="email" className="w-full px-5 py-3 bg-gray-100 rounded-full outline-none" placeholder="E-mailinizi daxil edin" onChange={(e)=>setEmail(e.target.value)} />
                 {error && <p className="pt-2 text-red-500">{error}</p>}
                 <button type="submit" className="bg-black text-white w-full rounded-full mt-4">Təsdiqlə</button>
                  </form>
                  </div>
          <div></div>
          <div className="mt-3">
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