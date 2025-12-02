import { BsThreeDots } from "react-icons/bs";
import { useEffect,useState } from "react";
import axios from "axios";
const Posts=()=>{
        const [posts, setPosts]=useState([])

useEffect(()=>{
    axios.get("http://localhost/cothink1/cothink/server/posts/postsRead.php")
        .then(res => {
            setPosts(res.data) // backend JSON-dakı array
        })
     },[posts])

    return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto">
                    {
                        posts.length===0 ?       
                         <p className="font-bold col-span-4 text-center text-2xl">Post tapılmadı</p>   : (
    posts.map((item, index)=>(
        <div className="post-item bg-white shadow-white-700 shadow-xl rounded-2xl space-y-4" key={index}>
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
        <img src="/həcər.jpg" className="rounded-full w-24 h-24"/>
        <div>
            <h4 className="font-bold text-xl">{item.mentor_name}</h4>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-gray-500">{item.created_at}</p></div>
              </div>
<BsThreeDots/>
    </div>
                <h4 className="font-bold text-2xl">{item.post_title}</h4>
                <p className="text-gray-500">{item.post_desc}</p>
           <img src="/post.jpg" className="w-full h-60 rounded-md"/>
            <div className="post-reactions flex gap-5">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{item.post_likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>{item.post_comments}</div>
            <div className="saved-count flex items-center gap-2"><img src="/save.svg"></img>{item.post_saved}</div>
            <div className="share flex items-center gap-2"><img src="/share.svg"></img>Paylaş</div>
        </div>
            </div>
    )))}
        </div>
    )
}
export default Posts;