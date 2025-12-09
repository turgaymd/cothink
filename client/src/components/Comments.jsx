import { useState } from "react"

   export const CommentCard=({comment})=>{
        return(
    <div className="comment-item mt-4 mb-4" key={comment.comment_id} >
                    <div className="comment-header flex items-center ">
            <img  className="rounded-md avatar" src={comment.profile_img}></img>
            <div className="pl-4">
           <h4 className="font-semibold">{comment?.mentor_name}</h4>
            <p className="text-gray-500">{comment.mentor_position}</p>
            <p className="mt-3 text-black">{comment.comment_text}</p>
            </div>
                    </div> 
                        <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{comment?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>{comment?.comments}</div>
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