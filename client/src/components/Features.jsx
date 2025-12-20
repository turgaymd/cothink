

import { MdOutlineArrowBackIosNew } from "react-icons/md";
const Features=({setActiveTab})=>{
    return(
<section>
            <div className="back md:hidden flex">
                               <button onClick={()=>setActiveTab("")}><MdOutlineArrowBackIosNew fontSize={24}/></button>
                             </div>
        <div >
         <h2 className="text-center text-2xl font-bold pb-5">Websayt haqqında</h2>
         <div className="p-0 md:pt-5">
               <div className="features_card shadow-sm inset-shadow-sm ">
                       
                            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                          
                        <div className="flex flex-col">
                        <h4 className="font-bold">CoThink.az</h4>
                                 <p className="text-gray-400">Öyrənməni daha ağıllı, daha sadə və daha əlçatan edən yeni nəsil təhsil platforması.
CoThink — akademik cəhətdən düzgün və sənə uyğunlaşdırılmış bilikləri bir araya gətirir.</p>
                        <a className="text-red-500 underline underline-offset-1 rules" href="/privacy">Şərtlər - Məxfilik siyasəti</a>
                        </div>
                       
                        </div>
                 
                    </div>
                            
                    </div>
                    </div>
        </div>
       
        </section>
    )
}
export default Features;