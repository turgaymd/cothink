import { useState } from "react";
import AddPost from "../components/AddPost";
const Share=()=>{
      const [activeTab, setActiveTab]=useState("nothing")
    return(
        <section>
            {activeTab==="nothing" ?
          <>
        <h2 className="font-bold text-black text-center text-2xl">Yeni Paylaşım Əlavə Edin</h2>
        <p className="text-gray-400 text-center pt-2">Paylaşmaq istədiyiniz məzmunun növünü seçin</p>
        <div className="mt-3">
            <h2 className="font-bold text-black  text-xl pb-3">Kateqoriyalar</h2>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-200 rounded-md share-category cursor-pointer" onClick={()=>setActiveTab("post")}>
                    <div className="flex justify-center items-center">
                    <a className="text-blue-500" >Post</a>
                    </div>
                </div>
                      <div className="bg-gray-200 rounded-md  share-category">
                    <div className="flex justify-center items-center">
                    <a className="text-blue-500">Kurs</a>
                    </div>
                </div>
                      <div className="bg-gray-200 rounded-md  share-category">
                    <div className="flex justify-center items-center">
                    <a className="text-blue-500" href="/addarticle" >Məqalə</a>
                    </div>
                </div>
                      <div className="bg-gray-200 rounded-md  share-category">
                    <div className="flex justify-center items-center">
                    <a className="text-blue-500">Tədris Materialı</a>
                    </div>
                </div>
            </div>
        </div>
        </> : <></>
}
        {
            activeTab==="post" && <AddPost setActiveTab={setActiveTab}/>
        }
        </section>
    )
}
export default Share;