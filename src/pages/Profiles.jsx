import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
const Profiles=()=>{
      const [activeTab, setActiveTab]=useState("books")
    return  (
        <section>
            <div className="flex justify-between">
        <div className="flex gap-5">
            <div className="img">
                <img src="rauf.jpg" className="rounded-full h-24 w-24 object-cover"/>                
            </div>
            <div className="flex flex-col gap-3 justify-center">
                <h4 className="font-bold text-xl">Rauf Quliyev</h4>
                <div className="flex gap-5">
                    <span>38 post</span>
                    <span>120 izləyici</span>
                    <span>45 izlədiklərim</span>
                </div>
            </div>
             </div>
             <div className="actions flex gap-3">
                <button><IoAddCircleOutline fontSize={24}/></button> 
                <button><IoMenu fontSize={24}/></button> 
             </div>
        </div>
            <div className="flex justify-center mb-5 mt-5">
    <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button className={` rounded-full w-full ${activeTab==="books" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("books")}>Postlar</button>
            <button className={`rounded-full w-full ${activeTab==="articles" ?  "bg-blue-700 text-white" : ''}`} onClick={()=>setActiveTab("articles")}>Cavablar</button>
        </div> 
        </div>
        <div className="grid grid-cols-12 gap-5 justify-center max-w-5xl mx-auto">
            <div className="md:col-span-6">
  <div className="post-item bg-white shadow-white-700 shadow-xl rounded-2xl space-y-4">
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
        <img src="həcər.jpg" className="rounded-full w-24 h-24"/>
        <div>
            <h4 className="font-bold text-xl">Aydan A</h4>
            <p className="text-gray-500">UI/UX Designer</p>
            <p className="text-gray-500">3 ay əvvəl</p></div>
              </div>
<BsThreeDots/>
    </div>
                <h4 className="font-bold text-2xl">Bugünkü Öyrənmə Nailiyyətim</h4>
                <p className="text-gray-500">Bu gün Maxwell Tənlikləri mövzusunu öyrəndim və nəhayət elektromaqnetizmi başa düşməyə başladım.Açığı, əvvəllər bu mövzu mənə çox abstrakt gəlirdi və elektrik sahəsi...daha çox</p>
           <img src="post.jpg" className="w-full h-60 rounded-md"/>
            <div className="post-reactions flex gap-5">
            <div className="like-count flex items-center gap-2"><img src="like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>
            <div className="saved-count flex items-center gap-2"><img src="save.svg"></img>36</div>
            <div className="share flex items-center gap-2"><img src="share.svg"></img>Paylaş</div>
        </div>
            </div>
            </div>
               <div className="md:col-span-6">
  <div className="post-item bg-white shadow-white-700 shadow-xl rounded-2xl space-y-4">
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
        <img src="həcər.jpg" className="rounded-full w-24 h-24"/>
        <div>
            <h4 className="font-bold text-xl">Aydan A</h4>
            <p className="text-gray-500">UI/UX Designer</p>
            <p className="text-gray-500">3 ay əvvəl</p></div>
              </div>
<BsThreeDots/>
    </div>
                <h4 className="font-bold text-2xl">Bugünkü Öyrənmə Nailiyyətim</h4>
                <p className="text-gray-500">Bu gün Maxwell Tənlikləri mövzusunu öyrəndim və nəhayət elektromaqnetizmi başa düşməyə başladım.Açığı, əvvəllər bu mövzu mənə çox abstrakt gəlirdi və elektrik sahəsi...daha çox</p>
           <img src="post.jpg" className="w-full h-60 rounded-md"/>
            <div className="post-reactions flex gap-5">
            <div className="like-count flex items-center gap-2"><img src="like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>
            <div className="saved-count flex items-center gap-2"><img src="save.svg"></img>36</div>
            <div className="share flex items-center gap-2"><img src="share.svg"></img>Paylaş</div>
        </div>
            </div>
            </div>
          
        </div>
               
</section>

    )
}
export default Profiles;