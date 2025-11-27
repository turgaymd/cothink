import { IoMdTime } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
const Article=()=>{
    return(
        <section>
        <h2 className="font-bold text-2xl">UX/UI Dizayn Müasir Rəqəmsal Təcrübələri Necə Formalaşdırır?</h2>
        <div className="flex flex-col md:flex-row gap-3 justify-between mb-4 mt-4">
            <div className="flex md:flex-row gap-3">
        <img src="aysel.png" className="object-cover w-20 h-20"/>
        <div className="flex flex-col gap-3">
            <h4>Aysel Hacıyeva</h4>
            <button className="bg-blue-800 text-white px-3 py-2 rounded-full">İzlə</button>
        </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <IoMdTime fontSize={24}/>  <p>8 dəq oxuma</p>
        <FaRegCalendar fontSize={24}/>  <p>2024-12-15</p>
        </div>
        </div>
        <div className="post-reactions flex gap-5">
            <div className="flex gap-3">
            <div className="like-count flex items-center gap-2"><img src="like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="comment.svg"></img>26</div>    
        </div>
         <div className="post-reactions flex  gap-5 pt-3">
            <div className="share flex items-center gap-2"><img src="share.svg"></img>Paylaş</div>
            <div className="saved-count flex items-center gap-2"><img src="save.svg"></img>36</div>
        </div>
         </div>
         <div className="pt-3 mt-3">
            <img src="ui.jpg" className="rounded-md"/>
         </div>
          <div className="comments">
                <h4 className="mb-3 mt-3 font-bold text-lg">Rəylər</h4>
            <div className="flex gap-2 mb-3 items-center">
                <img src="/avatarr.svg" className="w-15 h-15"/>
                <p>Username</p>
            </div>
                        <input type="text" className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md" placeholder="Fikirlərinizi yazın…"/>
    <div className="comment-item pt-3 mt-5">
          <div className="comment-header flex md:flex-row flex-col items-center justify-center">
            <img  className="rounded-md avatar" src="/həcər.jpg"></img>
            <div className="pl-4">
           <h4 className="font-semibold">Həcər Quliyeva</h4>
            <p className="text-gray-500">Tələbə – Kompüter Mühəndisliyi</p>
            <p className="mt-3 text-black">Çox aydın izah olunub. Xüsusilə Enerji və İş anlayışları arasındakı fərqlərin real nümunələrlə göstərilməsi xoşuma gəldi</p>
            </div>
                    </div>
            <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>52</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>26</div>
    </div>
</div>
                    </div>
        </section>
    )
}
export default Article;