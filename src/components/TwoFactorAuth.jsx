
import { SlArrowRight } from "react-icons/sl";
import { BsChatLeftQuote, BsEnvelope } from "react-icons/bs";
const TwoFactorAuth=()=>{
    return (
        <section>
              <div className="features_card shadow-white-200 shadow-xl">
                                 <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                                <div className="flex items-center gap-3">
                                     <div className="icons">
                                  <span className="text-blue-500 rounded-full"><BsChatLeftQuote fontSize={24}/></span>  
                                </div>
                                <div className="flex flex-col">
                                <h4 className="font-bold">SMS vasitəsilə təsdiqləmə</h4>
                                </div>
                                </div>
                                <button><SlArrowRight /></button> 
                                {/* <label className="relative flex justify-between items-center group px-2">
                               <input type="checkbox" value={''} className="sr-only peer" checked/>
                               <div className="relative w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500"></div>
                            </label> */}
                            </div>
                            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                                <div className="flex items-center gap-3">
                                     <div className="icons">
                                  <span className="text-blue-500 rounded-full"><BsEnvelope fontSize={24}/></span>  
                                </div>
                                <div className="flex flex-col">
                                <h4 className="font-bold">E-poçt vasitəsilə təsdiqləmə</h4>
                                </div>
                                </div>
                               <button><SlArrowRight /></button> 
                            </div>                   
                            </div>
        </section>
    )
}
export default TwoFactorAuth;