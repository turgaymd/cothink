import { FaRegComments } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import { BsChatLeftQuote, BsEnvelope } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const Support=({setActiveTab})=>{
    return (
        <section>
            <div className="back md:hidden flex">
                               <button onClick={()=>setActiveTab("")}><MdOutlineArrowBackIosNew fontSize={24}/></button>
                             </div>
        <div >
         <h2 className="text-center text-2xl  font-bold pb-5">Kömək və dəstək</h2>
         <div className="p-0 md:pt-5">
               <div className="features_card shadow-sm inset-shadow-sm ">
                         <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                             <div className="icons">
                          <span className="text-blue-500 rounded-full"><BsChatLeftQuote fontSize={24}/></span>  
                        </div>
                        <div className="flex flex-col">
                        <h4 className="font-bold text-black">FAQ</h4>
                        <p className="text-gray-400">Tez-tez verilən suallar və cavablar</p>
                        </div>
                        </div>
                       <button><SlArrowRight /></button> 
                    </div>
                    <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                             <div className="icons">
                          <span className="text-blue-500 rounded-full"><FaRegComments fontSize={24}/></span>  
                        </div>
                        <div className="flex flex-col">
                        <h4 className="font-bold text-black">Contact Support (Chat)</h4>
                        <p className="text-gray-400">Komandamızla çat vasitəsilə əlaqə saxlayın</p>
                        </div>
                        </div>
                       <button><SlArrowRight /></button> 
                    </div>
                    <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                             <div className="icons">
                          <span className="text-blue-500 rounded-full"><BsEnvelope fontSize={24}/></span>  
                        </div>
                        <div className="flex flex-col">
                        <h4 className="font-bold text-black">Contact Support (Email)</h4>
                        <p className="text-gray-400">support@artevo.app</p>
                        </div>
                        </div>
                       <button><SlArrowRight /></button> 
                    </div>
                            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                             <div className="icons">
                          <span className="text-blue-500 rounded-full"><CiCircleInfo fontSize={24}/></span>  
                        </div>
                        <div className="flex flex-col">
                        <h4 className="font-bold text-black">Report an issue</h4>
                                 <p className="text-gray-400">Nə isə işləmirsə, bizə bildirin</p>
                        </div>
                        </div>
                       <button><SlArrowRight /></button> 
                    </div>
                            
                    </div>
                    </div>
        </div>
       
        </section>

    )
}
export default Support;