import { FaRegComments } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { BsChatLeftQuote } from "react-icons/bs";
const Support=()=>{
    return (
        <div>
               <div className="features_card shadow-white-200 shadow-xl">
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
                          <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
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

    )
}
export default Support;