
import { SlArrowRight } from "react-icons/sl";
import { BsChatLeftQuote, BsEnvelope } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const DarkMode=({setActiveTab})=>{
    return(
          <section>
                    <div className="back md:hidden flex">
                        <button onClick={()=>setActiveTab("")}>
                            <MdOutlineArrowBackIosNew fontSize={24}/>
                        </button>
                    </div>
                    <h2 className="text-center text-2xl font-bold pb-5">İki mərhələli təsdiq</h2>
                    <div className="md:p-5 p-0">
                        <div className="features_card shadow-sm inset-shadow-sm">
                    
                            <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="icons">
                                        <span className="text-blue-500 rounded-full">
                                            <BsChatLeftQuote fontSize={24}/>
                                        </span>  
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-black">SMS vasitəsilə təsdiqləmə</h4>
                                    </div>
                                </div>
                               
                           
                                </div>
                            </div>
        
                  
                        </div>
                </section>
    )
}
export default DarkMode;