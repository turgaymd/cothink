import {  SlArrowUp } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BsChatRightText } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FaRegComments, FaRegFile } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
const CourseDetail=()=>{
    return(
     <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="">
                <img src="/termodinamic.jpg" className="w-full"/>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">3 Dəqiqədə Termodinamikanın Əsasları</p>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-md">Kursu əldə et</button>
            </div>
            <p className="text-blue-500">#Fizika</p>
                <div className="flex  gap-5 mt-5">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>26</div>
            <div className="saved-count flex items-center gap-2"><img src="/save.svg"></img>36</div>
        </div>
        <div className="flex justify-between mt-5 mb-5">
            <div className="flex gap-3">
            <img src="/aydan.png"/>
            <div className="flex flex-col">
                <h4 className="font-bold">Aytac H.</h4>
                <p className="text-gray-400">Abunəçilər 11.2k</p>
                </div>
            </div>
            <div className="flex items-center gap-3 ">                 
                   <button className="bg-gray-300 rounded-md p-2"><IoIosNotificationsOutline className="text-2xl"/></button>
                   <button className="bg-blue-500 text-white rounded-md p-2"><BsChatRightText className="text-2xl"/></button>
                   <button className="text-blue-700 rounded-md px-5 py-2 border border-blue-700">İzlə</button>
            </div>
            </div>
             </div>
             <div className="">
                <button className="w-full bg-blue-800 text-xl text-white rounded-full">Kurs planı</button>
                    <div className="features_card shadow-white-200 shadow-xl px-3 py-2 mb-5">
                        <div className="flex justify-between border-b border-b-gray-200 pb-3 mb-3 cursor-pointer">
                            <div className="flex items-center gap-3">
                                 <div className="icons">
                              <span className="text-blue-500 rounded-full"><CiUser fontSize={24}/></span>  
                            </div>
                            <div className="flex flex-col">
                            <h4 className="font-bold">Enerji, istilik və iş anlayışları</h4>
                            <p className="text-gray-400">4 dərs</p>
                            </div>
                            </div>
                           <button><SlArrowUp/></button> 
                        </div>
                          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
                            <div className="flex items-center gap-3 cursor-pointer" >
                                 <div className="icons">
                              <span className="text-blue-500 rounded-full"><FaRegCirclePlay fontSize={24}/></span>  
                            </div>
                            <div className="flex flex-col">
                            <h4 className="font-bold">“Enerji nədir?”</h4>
                            <p className="text-gray-400">3 dəq 45 san</p>
                            </div>
                            </div> 
                        </div>
                          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
                            <div className="flex items-center gap-3">
                                 <div className="icons">
                              <span className="text-blue-500 rounded-full"><FaRegFile fontSize={24}/></span>  
                            </div>
                            <div className="flex flex-col">
                            <h4 className="font-bold">“Enerjinin formaları və çevrilməsi”</h4>
                            <p className="text-gray-400">PDF</p>
                            </div>
                            </div>
                        </div>
                          <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
                            <div className="flex items-center gap-3">
                                 <div className="icons">
                              <span className="text-blue-500 rounded-full "><FaRegComments fontSize={24}/></span>  
                            </div>
                            <div className="flex flex-col">
                            <h4 className="font-bold">“Enerjinin gündəlik istifadəsi”</h4>
                            <p className="text-gray-400">Forum</p>
                            </div>
                            </div>
                        </div>
                     <div className="flex justify-between mt-5 mb-5 border-b border-b-gray-200 pb-3">
                            <div className="flex items-center gap-3">
                                 <div className="icons">
                              <span className="text-blue-500 rounded-full "><MdAssignment fontSize={24}/></span>  
                            </div>
                            <div className="flex flex-col">
                            <h4 className="font-bold">“Enerji haqqında əsas anlayışlar”</h4>
                            <p className="text-gray-400">20 sual</p>
                            </div>
                            </div>
                        </div>
                        </div>
             </div>
        </div>
     </section>
    )
}
export default CourseDetail;