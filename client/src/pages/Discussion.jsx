import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { ApiContext } from "../ApiContext";
import { WhatsappShareButton } from "react-share";
import { toast, ToastContainer } from "react-toastify";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AuthContext } from "../AuthContext";
function Discussion(){
  const { id } = useParams();  
  const [post, setPost] = useState(null);
  const [savedPosts, setSavedPosts]=useState([])
  const [comments, setComments]=useState([])
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)
  
  useEffect(() => {
    axios
      .get(`${apiUrl}/server/posts/postDetails.php?post_id=${id}`)
      .then((res) => {
        setPost(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

   useEffect(() => {
    axios
      .get(`${apiUrl}/server/discussion/getPost.php?id=${id}`)
      .then((res) => {
        console.log(res.data);
          const postData=res.data.find((p)=>p.post_id===Number(id))
        setComments(postData.comments);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

    const handleUnsave=async(item)=>{
  setSavedPosts((prev)=>prev.filter((id)=>id!==item.article_id))
  await axios.delete(`${apiUrl}/server/savedPages/savedPosts/getSavedPosts.php?student_id=${user.id}`,
           {data:{post_id:item.post_id, student_id:user?.student_id}},
          { headers: { "Content-Type": "application/json" } },
  )

}
console.log(user.id)
const handleSave=async(item)=>{
   try {
      const res = await axios.post(
        `${apiUrl}/server/savedPages/savedPosts/postsavePosts.php?post_id=${item.post_id}`,
         {
          student_id:user?.id
         },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.status === "success") {
        toast.success("Post yadda saxlanıldı");
        setSavedPosts((prev)=>[...prev, item.post_id])
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
}
  if (!post) {
  return <><Loading/></>;
}
    return(
        <>
        <ToastContainer/>
        <section>
<h2 className="text-center font-medium text-2xl pb-5">Diskussiya</h2>
<div className="discussion">
    <div className="discussion-item">
        <div className="post-header flex md:flex-row flex-col gap-3 justify-between items-center">
            <div className="flex post-img items-center">
  <img className="rounded avatar" src={post?.profile_img || "/images/admin.png"}></img>
           <div className="pl-3">
           <h4 className="font-semibold">{post?.mentor_name}</h4>
            <p className="text-gray-400">{post?.mentor_position}</p>
            </div>
                </div>
               <button className="bg-blue-800 text-white rounded-full flex" >İzlə <img src="/images/add.svg"/></button>
                    </div>
            <div className="post-title mt-4">
<p>{post?.post_desc} </p>
        </div>
        <div className="post-image pt-5">
<img  src={post?.post_img} className="rounded-md"/>
        </div>
        <div className="post-reactions flex justify-end gap-5 pt-3">
            <div className="like-count flex items-center gap-2"><img src="/images/like.svg"></img>{post?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>{post?.comments}</div>
            <div className="saved-count flex items-center gap-2">
                  {savedPosts.includes(post.post_id) ? 
                                    (<FaBookmark fontSize={24} onClick={()=>handleUnsave(post)}/>) :
                                     (<FaRegBookmark   fontSize={24} onClick={()=>handleSave(post)}/>)}
              {/* <img src="/images/save.svg"></img> */}
            {post?.saved}</div>
            <div className="share flex items-center gap-2"><img src="/images/share.svg"></img>
            <WhatsappShareButton url={window.location.href} title={post?.post_title}>Paylaş</WhatsappShareButton>
            </div>
        </div>
    </div>

</div>
<div className="comments">
 
              {  comments.map((comment)=>{
                return(
                    <>
                       <h4 className="mb-3 mt-3 font-bold">Rəylər</h4>
    <div className="comment-item mt-4 mb-4" key={comment.comment_id} >
                    <div className="comment-header flex items-center ">
            <img  className="rounded-md avatar" src={comment.profile_img}></img>
            <div className="pl-4">
           <h4 className="font-semibold">{comment.student_name}</h4>
            <p className="text-gray-500">{comment.mentor_position}</p>
            <p className="mt-3 text-black">{comment.comment_text}</p>
            </div>
                    </div> 
                        <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/images/like.svg"></img>{comment?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>{comment?.comments}</div>
    </div>
                    </div>
                    </>
         )
            })
        }     
    
</div>
         
        </section>
      </>

    )
}
export default Discussion