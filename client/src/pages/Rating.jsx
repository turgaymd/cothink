import { useState } from "react";

const Rating=()=>{
    const [active, setActive]=useState("week")
    return (
        <div className="md:col-span-10 p-5">
            <section>
                <div className="flex justify-center">
    <div className="switch-toogle flex md:flex-row flex-col justify-center rounded-md md:rounded-full items-center mb-5 max-w-3xl w-full  border border-gray-200">
            <button className={`rounded-md md:rounded-full w-full ${active==="week" ?  "bg-blue-800 text-white " : ''}`} onClick={()=>setActive("week")}>Həftəlik Reyting</button>
            <button className={`rounded-md md:rounded-full w-full ${active==="month" ?  "bg-blue-800 text-white" : ''}`} onClick={()=>setActive("month")}>Aylıq Reyting</button>
        </div>
            
                </div>
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">Reytinq Cədvəli</h2>
            <p className="text-gray-400 pb-5 mb-5">Sual verən,cavablayan,bəyənilən və paylaşım edənlər əsasında sıralama</p>
        <div className="flex md:flex-row gap-3 mb-5 mt-5 items-end justify-center">
            <div className="relative flex flex-col items-center md:mb-0">
         <img src="/images/elvin.jpg" className="md:w-28 md:h-28 w-24 h-24 rounded-full border-[5px] border-blue-500 object-cover"/>

<div className="absolute -bottom-3 bg-blue-800 rounded-full px-3 py-1.5 text-white whitespace-nowrap">
   <div className="flex flex-col items-center">
        <p className="text-sm font-semibold">Elvin</p>
     <p className="text-xs">812</p>
    </div>
</div>
      </div>
       <div className="relative flex flex-col items-center">
        
        <img src="/images/winner_cap.svg" className="absolute  right-4 md:right-7 -top-13"/>


         <img src="/images/həcər.jpg" className="md:w-28 md:h-28 w-24 h-24 rounded-full border-[5px] border-amber-300 object-cover"/>
<div className="absolute -bottom-3 bg-amber-300 rounded-full px-3 py-1.5 text-white whitespace-nowrap">
   <div className="flex flex-col items-center text-black">
        <p className="text-sm font-semibold">Həcər</p>
     <p className="text-xs">856</p>
    </div>
</div>
      </div>
<div className="relative flex flex-col items-center md:mb-0">
 <img src="/images/emil.jpg" className="md:w-28 md:h-28 w-24 h-24 rounded-full border-[5px] border-blue-500 object-cover"/>
<div className="absolute -bottom-3 bg-blue-800 rounded-full px-3 py-1.5 text-white whitespace-nowrap">
   <div className="flex flex-col items-center">
        <p className="text-sm font-semibold">Emil</p>
     <p className="text-xs">715</p>
    </div>
</div>
      </div>

        </div>
        <div className="mt-8 flex justify-center flex-col gap-5 items-center ">
      <p className="text-center text-xl">Töhfən üçün təşəkkürlər!<br></br>
        Davam et,  zirvədə sən də ola bilərsən!</p>
        <button className="border border-blue-300 rounded-full w-full max-w-md py-2 hover:bg-[#4E70D7] hover:text-white hover:border-[#4E70D7] transition-colors">Hazırki yerin:#28</button>
                <p className="font-bold text-lg text-center">Bugün 12 cavab,7 paylaşım,9 bəyənmə qazandın</p>
        </div>
             </div>
            </section>
            <div className="flex flex-col gap-3 justify-center items-center mt-2">
            
                                 <div className="border border-blue-300 w-full gap-3 max-w-3xl flex md:flex-row flex-col md:items-center justify-between rounded-md md:rounded-full px-8 md:px-4  py-2">
                        <div className="flex  items-center gap-3 md:flex-row flex-col" >
                        <img src="/images/aysel.png" className="md:w-16 md:h-16 w-20 h-20 rounded-full  bg-gray-400 object-cover"/>       
                        <div className="text-center md:text-left">
                        <h4 className="font-bold">Aysel Hacıyeva</h4>
                        <p className="text-gray-400">Tələbə – Proseslərin Avtomatlaşdırılması Mühəndisliyi </p>
                       </div>
                        </div>
                    <div className="flex items-center justify-center gap-3">
                        <span className="bg-blue-800 text-white rounded-full px-4  py-2">856</span>
                       <img src="/images/medal_gold.svg" className="w-10 h-10"/>
    </div>
                              </div>
                                  <div className="border border-blue-300 w-full gap-3 max-w-3xl flex md:flex-row flex-col md:items-center  justify-between rounded-md md:rounded-full px-8 md:px-4  py-2">
                        <div className="flex  items-center gap-3 md:flex-row flex-col" >
                        <img src="/images/elvin.jpg" className="md:w-16 md:h-16 w-20 h-20 rounded-full  bg-gray-400 object-cover"/>       
                        <div className="text-center md:text-left">
                        <h4 className="font-bold">Elvin Hacıyev</h4>
                        <p className="text-gray-400">Tələbə – Kompüter Mühəndisliyi  </p>
                       </div>
                        </div>
                    <div className="flex items-center justify-center gap-3">
                        <span className="bg-blue-800 text-white rounded-full px-4  py-2">812</span>
                       <img src="/images/medal_silver.svg" className="w-10 h-10"/>
    </div>
                              </div>
                                  <div className="border border-blue-300 w-full gap-3 max-w-3xl flex md:flex-row flex-col md:items-center justify-between rounded-md md:rounded-full px-8 md:px-4  py-2">
                        <div className="flex  items-center gap-3 text-center md:flex-row flex-col" >
                        <img src="/images/emil.jpg" className="md:w-15 md:h-15 w-20 h-20 rounded-full  bg-gray-400 object-cover"/>       
                        <div className="text-center md:text-left">
                        <h4 className="font-bold">Emil Həsənov</h4>
                        <p className="text-gray-400">Tələbə – Kompüter Mühəndisliyi  </p>
                       </div>
                        </div>
                    <div className="flex items-center justify-center gap-3">
                        <span className="bg-blue-800 text-white rounded-full px-4  py-2">715</span>
                       <img src="/images/medal_silver.svg" className="w-10 h-10"/>
    </div>
                              </div>
                             
                                         {/* <div className="border border-blue-300 w-full max-w-3xl flex items-center justify-between rounded-full px-8 md:px-4  py-2">
                        <div className="flex items-center gap-3" >
                        <img src="aysel.png" className=" rounded-full w-15 h-15 bg-gray-400 object-cover"/>       
                        <div>
                        <h4 className="font-bold">Aysel Hacıyeva</h4>
                        <p className="text-gray-400">Tələbə – Proseslərin Avtomatlaşdırılması Mühəndisliyi </p>
                       </div>
                        </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-blue-800 text-white rounded-full px-4  py-2">647</span>
                       <img src="medal_gold.svg" className="w-10 h-10"/>
    </div>
                              </div> */}
                              </div>
        </div>
    )
}
export default Rating;