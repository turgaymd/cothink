import { BsThreeDots } from "react-icons/bs";
import {useState } from "react";
import { WhatsappShareButton } from "react-share";

export const PostCard=({item})=>{
  const postImg=item?.post_img?.startsWith("http") ? item?.post_img : `https://cothink.az/server/uploads/posts/${item?.post_img}`

    return(
      <a href={`/questions/${item.post_id}`}>
 
          <div className="post-item bg-white shadow-white-700 shadow-xl rounded-2xl space-y-4">
    <div className="flex justify-between items-center">
        <div className="flex gap-4">
        <img src={item.profile_img} className="rounded-full w-15 h-15"/>
        <div>
            <h4 className="font-bold text-xl">{item.mentor_name}</h4>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-gray-500">{item.created_at}</p></div>
              </div>
<BsThreeDots/>
    </div>
                <h4 className="font-bold text-2xl">{item.post_title}</h4>
                <p className="text-gray-500">{item.post_desc}</p>
                {
                  item.post_img &&  <img src={postImg} className="w-full h-64 rounded-md"/>
                }
          
            <div className="post-reactions flex gap-5">
            <div className="like-count flex items-center gap-2"><img src="/images/like.svg"></img>{item.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>{item.post_comments}</div>
            <div className="saved-count flex items-center gap-2"><img src="/images/save.svg"></img>{item.saved}</div>
            <div className="share flex items-center gap-2"><img src="/images/share.svg"></img>
              <WhatsappShareButton url={window.location.href} title={item.post_title}>Paylaş</WhatsappShareButton>
            </div>
        </div>
            </div>
                   
      </a>
    )
}
const Posts=()=>{
        const [posts, setPosts]=useState([])
    return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto">
                    {
                       posts.length===0 ?       
                         <p className="font-bold col-span-4 text-center text-2xl">Post tapılmadı</p>   : (
    posts.map((item, index)=>(
      <PostCard item={item} key={index}/>
    )))}
        </div>
    )
}
export default Posts;