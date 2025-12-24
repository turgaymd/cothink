import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

    const Faqs=()=>{
 const [collapse, setCollapse]=useState(null)

  const faqs=[
  {
title:"CoThink-də dərsləri necə tapa bilərəm?",
text:"Dərsləri ixtisas, fənn və mövzu üzrə filtrləyə bilərsiniz. Platformada qısa video dərslər, PDF resurslar və izahlı məqalələr bir yerdə mövcuddur, beləliklə tələbə ehtiyac duyduğu mövzunu asanlıqla tapa bilir."
  },
    {
title:"Məzmunu kim hazırlayır?",
text:"Məzmun yerli mentorlar və təsdiqlənmiş müəllimlər tərəfindən hazırlanır. Onlar yalnız öz sahələri üzrə video dərslər və resurslar təqdim edir, beləliklə etibarlı və proqram-uyğun material təmin olunur."
  },
    {
title:"Sual verdikdə nə qədər vaxta cavab gəlir?",
text:"CoThink əsas funksiyaları üçün həm ödənişsiz, həm də premium abunəliklər təklif edir. Premium istifadəçilər əlavə funksiyalara və məzmunlara məhdudiyyətsiz çıxış əldə edirlər."
  },
    {
title:"Platformadan istifadə ödənişlidir?",
text:"CoThink əsas funksiyaları üçün həm ödənişsiz, həm də premium abunəliklər təklif edir. Premium istifadəçilər əlavə funksiyalara və məzmunlara məhdudiyyətsiz çıxış əldə edirlər."
  },
   {
title:"Məzmunun düzgünlüyü necə yoxlanılır?",
text:"Cavablar Mentorlar və yüksək reytinqli tələbələr tərəfindən qiymətləndirilir, beləliklə etibarlılıq təmin olunur."
  }
  ]
  return(
    <section className="max-w-[80vw] m-auto mt-10 mb-10">
      <div>
        <h2 className="text-xl md:text-3xl text-center pb-8 md:pb-12 mt-5">
          <span className="font-bold">Tez-tez</span> Soruşulan <span className="font-bold">Suallar</span>
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-3 items-stretch h-full">
    <div className="border border-gray-200 px-4 md:px-5 py-2 rounded-md">
            {
              faqs.map((item, index)=>(
                      <>
 <div className="flex justify-between items-center pt-3 pb-3 border-b border-b-gray-200 gap-3" key={index}>
              <h6 className="font-medium text-sm md:text-base">{item.title}</h6>
              {
                collapse===index  ?          
                      <FiMinus fontSize={24} className="shrink-0" onClick={()=>setCollapse(null)}/> : 
                       <IoMdAdd fontSize={24} className="shrink-0" onClick={()=>setCollapse(collapse===index ? null : index)}/>
            }
      
                     </div>
          {
             collapse===index &&       <p className="text-gray-400 pt-3">{item.text}</p>
          }
       
            </>
              ))}
       
             </div>
      
          <div className="flex flex-col gap-3 md:gap-5 items-center justify-center py-5">
            <img src="/images/faq.png" className="object-cover max-w-[200px] md:max-w-full" alt="FAQ"/>
            <h6 className="font-bold text-xl md:text-2xl pt-2 md:pt-4 pb-2 md:pb-4 text-center">Başqa sualınız var?</h6>
            <a className="rounded-full contact-btn px-6 py-2 bg-blue-800 text-white hover:bg-blue-900 transition-colors" href="/contact">Əlaqə saxlayın</a>
          </div>
        </div>
      </div>
    </section>
  ) 
    }
    export default Faqs;