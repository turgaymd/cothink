
import { SlArrowRight } from "react-icons/sl";
import { BsChatLeftQuote, BsEnvelope } from "react-icons/bs";
const TwoFactorAuth=()=>{
    return (
        <section>
                     <h2 className="text-center text-2xl font-bold pb-5">İki mərhələli təsdiq</h2>
                     <div className="md:p-5 p-0">
                                      <div className="features_card shadow-sm inset-shadow-sm">
                                 <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                                <div className="flex items-center gap-3">
                                     <div className="icons">
                                  <span className="text-blue-500 rounded-full"><BsChatLeftQuote fontSize={24}/></span>  
                                </div>
                                <div className="flex flex-col">
                                <h4 className="font-bold">SMS vasitəsilə təsdiqləmə</h4>
                                </div>
                                </div>
                               
                             <label className="bg-blue-800 relative w-20 h-10 rounded-full cursor-pointer" for="check">
                              <input type="checkbox" id="check" className="sr-only peer"></input>
                              <span className="w-2/5 h-4/5 left-1 top-1 bg-white peer-checked:bg-red absolute rounded-full"></span>
                            </label>
                            </div>
                            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 gap-2">
                                <div className="flex items-center gap-3">
                                     <div className="icons">
                                  <span className="text-blue-500 rounded-full"><BsEnvelope fontSize={24}/></span>  
                                </div>
                                <div className="flex flex-col">
                                <h4 className="font-bold">E-poçt vasitəsilə təsdiqləmə</h4>
                                </div>
                                </div>
                                <label className="bg-gray-200 relative w-20 h-10 rounded-full cursor-pointer" for="check">
                              <input type="checkbox" id="check" className="sr-only peer"></input>
                              <span className="w-2/5 h-4/5 left-1 top-1 bg-gray-600 peer-checked:bg-red absolute rounded-full"></span>
                            </label>
                            </div>     
                                          
                            </div>
                     </div>

                               <div className="text-center mt-5">
                  <a className="bg-blue-700 text-white px-5 py-3 rounded-md" href="/settings">Geri</a>
    </div>
        </section>
    )
}
export default TwoFactorAuth;