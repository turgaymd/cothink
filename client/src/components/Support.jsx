import { FaRegComments } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import { BsChatLeftQuote, BsEnvelope } from "react-icons/bs";
const Support=()=>{
    return (
        <section>
        <div>
         <h2 className="text-center text-2xl font-bold pb-5">Kömək və dəstək</h2>
               <div className="features_card shadow-sm inset-shadow-sm">
                         <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                             <div className="icons">
                          <span className="text-blue-500 rounded-full"><BsChatLeftQuote fontSize={24}/></span>  
                        </div>
                        <div className="flex flex-col">
                        <h4 className="font-bold">FAQ</h4>
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
                        <h4 className="font-bold">Contact Support (Chat)</h4>
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
                        <h4 className="font-bold">Contact Support (Email)</h4>
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
                        <h4 className="font-bold">Report an issue</h4>
                                 <p className="text-gray-400">Nə isə işləmirsə, bizə bildirin</p>
                        </div>
                        </div>
                       <button><SlArrowRight /></button> 
                    </div>
                            
                    </div>
        </div>
         <div className="text-center mt-5">
                  <a className="bg-blue-700 text-white px-5 py-3 rounded-md" href="/settings">Geri</a>
    </div>
        </section>

    )
}
export default Support;