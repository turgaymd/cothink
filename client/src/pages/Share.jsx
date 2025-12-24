import { useContext, useState } from "react";
import AddPost from "../components/AddPost";
import AddCourse from "../components/AddCourse";
import { BsBook, BsCameraVideo } from "react-icons/bs";
import { PiArticleLight } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { AuthContext } from "../context/AuthContext";
const Share=()=>{
      const [activeTab, setActiveTab]=useState("nothing")
      const {user}=useContext(AuthContext)
      console.log(user)
      if(user?.type==="student"){
        return <AddPost/>
      }
    return(
      <section>
                <>
                     {activeTab==="nothing" ?
                     <>
                        <h2 className="font-bold text-black text-center text-2xl">Yeni Paylaşım Əlavə Edin</h2>
        <p className="text-gray-400 text-center pt-2">Paylaşmaq istədiyiniz məzmunun növünü seçin</p>
        <div className="mt-3">
            <h2 className="font-bold text-black  text-xl pb-3">Kateqoriyalar</h2>
                   <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 rounded-md share-category cursor-pointer" onClick={()=>setActiveTab("post")}>
                    <div className="flex justify-center items-center text-blue-800 gap-5">
                    <BsBook fontSize={32}/>
                    <a >Post</a>
                    </div>
                </div>
                      <div className="bg-gray-100 rounded-md  share-category cursor-pointer" onClick={()=>setActiveTab("course")}>
                    <div className="flex justify-center items-center text-blue-800 gap-5">
                     <BsCameraVideo fontSize={32}/>
                    <a className="text-blue-800">Kurs</a>
                    </div>
                </div>
                      <div className="bg-gray-100 rounded-md  share-category">
                    <div className="flex justify-center items-center text-blue-800 gap-5">
                    <PiArticleLight fontSize={32}/>
                    <a className="text-blue-800" href="/addarticle" >Bloq</a>
                    </div>
                </div>
                      <div className="bg-gray-100 rounded-md  share-category">
                    <div className="flex justify-center items-center text-blue-800 gap-5">
                    <LuBookAudio fontSize={32}/>
                    <a className="text-blue-800">Tədris Materialı</a>
                    </div>
                </div>
            </div>
             </div>
            </> : null
}
</>
        {
            activeTab==="post" && <AddPost setActiveTab={setActiveTab}/>
        }
           {
            activeTab==="course" && <AddCourse setActiveTab={setActiveTab}/>
        }
        </section>
    )
}
export default Share;