import { useState } from "react";

const Rating=()=>{
    const [active, setActive]=useState("week")
    return (
        <div className="md:col-span-10 p-5">
            <section>
                <div className="flex justify-center">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={`rounded-full w-full ${active==="week" ?  "bg-blue-700 text-white " : ''}`} onClick={()=>setActive("week")}>Həftəlik Reyting</button>
            <button className={`rounded-full w-full ${active==="month" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActive("month")}>Aylıq Reyting</button>
        </div>
            
                </div>
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">Reytinq Cədvəli</h2>
            <p className="text-gray-400">Sual verən,cavablayan,bəyənilən və paylaşım edənlər əsasında sıralama</p>
        <div className="flex gap-3 mb-5">
            <div className="relative pt-5">
         <img src="elvin.jpg" className="w-28 h-28 rounded-full border-[5px] border-blue-500 object-cover"/>
      
<div className="absolute bottom-0 bg-blue-800 rounded-full px-2 py-1 text-white left-1/2 -translate-x-1/2 badge">
   <div className="flex flex-col items-center">
        <p>Elvin</p>
     <p>812</p>
    </div>
</div>
      </div>
       <div className="relative mb-2">
         <img src="həcər.jpg" className="w-28 h-28 rounded-full border-[5px] border-amber-500 object-cover"/>
<div className="absolute bottom-0 bg-amber-500 rounded-full px-2 py-1 text-white left-1/2 -translate-x-1/2 winner badge">
   <div className="flex flex-col items-center text-black">
        <p>Elvin</p>
     <p>812</p>
    </div>
</div>
      </div>
<div className="relative pt-5">
 <img src="emil.jpg" className="w-28 h-28 rounded-full border-[5px] border-blue-500 object-cover"/>
<div className="absolute bottom-0 bg-blue-800 rounded-full px-2 py-1 text-white left-1/2 -translate-x-1/2 badge">
   <div className="flex flex-col items-center">
        <p>Elvin</p>
     <p>812</p>
    </div>
</div>
      </div>

        </div>
        <div className="mt-5 flex justify-center flex-col gap-5 items-center ">
      <p className="text-center text-xl">Töhfən üçün təşəkkürlər!<br></br>
        Davam et,  zirvədə sən də ola bilərsən!</p>
        <button className="border border-blue-300 rounded-full w-full">Hazırki yerin:#28</button>
                <p className="font-bold text-lg">Bugün 12 cavab,7 paylaşım,9 bəyənmə qazandın</p>
        </div>
             </div>
            </section>
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="border border-blue-300 w-full max-w-3xl flex rounded-full">
                    <div className="flex items-center gap-10">
                        <div className="px-3 py-2 flex gap-3" >
                        <img src="avatar.png" className=" rounded-full w-20 h-20 bg-gray-400 object-cover"/>
                        <div className="flex flex-col justify-center">
                        <h4 className="font-bold">Aysel Hacıyeva</h4>
                        <p className="text-gray-400">Tələbə – Proseslərin Avtomatlaşdırılması Mühəndisliyi </p>
                    </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="bg-blue-800 text-white rounded-full px-4  py-2">647</span>
                       <img src="medal_gold.svg"/>
                           </div>
                              </div>
                </div>

            </div>
        </div>
    )
}
export default Rating;