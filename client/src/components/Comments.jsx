import { useState } from "react"

   export const CommentCard=({comment})=>{
        return(
    <div className="comment-item mt-4 mb-4" key={comment.comment_id} >
                    <div className="comment-header flex items-center ">
                      <img
              className="rounded-md w-20 h-20"
              src={
                comment?.profile_img
                  ? comment.profile_img.trim().startsWith("http")
                    ? comment.profile_img.trim()
                    : `https://cothink.az/${comment.profile_img.trim()}`
                  : "/images/admin.png"
              }
              alt="Profile"
            />

            <div className="pl-4">
           <h4 className="font-semibold">{comment.student_name}</h4>
            <p className="text-gray-500">{comment.mentor_position}</p>
            <p className="mt-3 text-black">{comment.comment_text}</p>
            </div>
                    </div> 
                        <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/images/like.svg"></img>{comment?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>{comment?.comments || "0"}</div>
    </div>
                    </div>
        )
                        }
const Comments=()=>{
    const [comments, setComments]=useState([])
    return(
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mx-auto">
                       {
                          comments.length===0 ?       
                            <p className="font-bold col-span-4 text-center text-2xl">Komment tapılmadı</p>   : (
       comments.map((item, index)=>(
         <CommentCard item={item} key={index}/>
       )))}
           </div>
       )
   }

export default Comments