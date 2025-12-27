import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { BsChatLeftQuote, BsEnvelope } from "react-icons/bs";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const TwoFactorAuth=({setActiveTab})=>{
    const [smsEnabled, setSmsEnabled] = useState(false);
    const [emailEnabled, setEmailEnabled] = useState(false);

    return (
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
                       
                        <div 
                            className={`${smsEnabled ? 'bg-blue-800' : 'bg-gray-200'} relative w-20 h-10 rounded-full cursor-pointer transition-colors duration-300`} 
                            onClick={() => setSmsEnabled(!smsEnabled)}
                        >
                            <span 
                                className={`w-2/5 h-4/5 top-1 bg-white absolute rounded-full transition-all duration-300 ${
                                    smsEnabled ? 'left-[52%]' : 'left-1'
                                }`}
                            ></span>
                        </div>
                    </div>

                    <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 gap-2">
                        <div className="flex items-center gap-3">
                            <div className="icons">
                                <span className="text-blue-500 rounded-full">
                                    <BsEnvelope fontSize={24}/>
                                </span>  
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-bold text-black">E-poçt vasitəsilə təsdiqləmə</h4>
                            </div>
                        </div>
                        
                        <div 
                            className={`${emailEnabled ? 'bg-blue-800' : 'bg-gray-200'} relative w-20 h-10 rounded-full cursor-pointer transition-colors duration-300`} 
                            onClick={() => setEmailEnabled(!emailEnabled)}
                        >
                            <span 
                                className={`w-2/5 h-4/5 top-1 bg-white absolute rounded-full transition-all duration-300 ${
                                    emailEnabled ? 'left-[52%]' : 'left-1'
                                }`}
                            ></span>
                        </div>
                    </div>     
                </div>
            </div>
        </section>
    )
}

export default TwoFactorAuth;