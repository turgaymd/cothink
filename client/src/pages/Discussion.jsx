import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { ApiContext } from "../context/ApiContext";
import { WhatsappShareButton } from "react-share";
import { toast, ToastContainer } from "react-toastify";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { CommentCard } from "../components/Comments";
function Discussion(){
  const { id } = useParams();  
  const [post, setPost] = useState(null);
  const [savedPosts, setSavedPosts]=useState([])
  const [comments, setComments]=useState([])
  const [comment, setComment]=useState("")
  const [error,setError]=useState('')
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)
  const [liked,setLiked]=useState(false)


     const fetchComments=async()=>{ 
       axios.get(`${apiUrl}/server/posts/getcomments.php?post_id=${id}`)
              .then((res) => {
                setComments(res.data.comments);
              })
              .catch((err) => console.error(err));
          }
          
  useEffect(() => {
    
    axios
      .get(`${apiUrl}/server/posts/postDetails.php?post_id=${id}`)
      .then((res) => {
        if(res.data.data){
          setPost(res.data.data);
        }
      })
         axios
      .get(`${apiUrl}/server/studentPosts/postDetails.php?post_id=${id}`)
      .then((res) => {
        if(res.data.data){
  setPost(res.data.data);
        }
      
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
         axios.get(`${apiUrl}/server/posts/getcomments.php?post_id=${id}`)
              .then((res) => {
                setComments(res.data.comments);
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
      })
      .catch((err) => console.error(err));

               axios.get(`${apiUrl}/server/savedPages/savedPosts/getSavedPosts.php?student_id=${user?.id}`)
              .then(res => {
                const ids=res.data.saved_books.map(item=>item.post_id)
                  setSavedPosts(ids)

              })

  }, [id]);

    const handleUnsave=async(item)=>{

  await axios.delete(`${apiUrl}/server/savedPages/savedPosts/unSavePosts.php?post_id=${item.post_id}`,
    {
           data:{ student_id:user.id},
          headers: { "Content-Type": "application/json" }
         }     
  );
 setSavedPosts((prev)=>prev.filter((id)=>id!==item.post_id))
}
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
        toast.error("Tələbə kimi daxil olun");
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
}
  if (!post) {
  return <><Loading/></>;
}
   const handleLike=async(item)=>{
           setLiked(true)
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/studentPostLikes/like.php?post_id=${item.post_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
       if (res.data.status === "liked") {
             setPost((prev)=>({...prev, likes:prev.likes+1}))
        setLiked(true)
      }
     else if(res.data.status === "exists"){
        toast.info("Artiq bəyənmisiniz")
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }

    const handleUnlike=()=>{
    setLiked(false)
  }
    const handleComments=async (e)=>{
      e.preventDefault()
      if(comment===""){
          setError("Komment daxil edin")
          return;
      }
     const res=  await axios.post(`${apiUrl}/server/posts/postComments.php?post_id=${id}`,
       {
          student_id:user?.id, comment_text:comment}
      )
      if(res.data.status==="success"){
          setComment("")
          toast.success("Rəy paylaşıldı")
          fetchComments()
  }
  }
    return(
        <>
        <ToastContainer/>
        <section>
<h2 className="text-center font-medium text-2xl pb-5">Diskussiya</h2>
<div className="discussion">
    <div className="discussion-item">
        <div className="post-header flex gap-3 justify-between items-center">
            <div className="flex post-img items-center">
            <img
              className="rounded avatar object-cover"
              src={
                post?.profile_img
                  ? post.profile_img.trim().startsWith("http")
                    ? post.profile_img.trim()
                    : `https://cothink.az/${post.profile_img.trim()}`
                  : "/images/admin.png"
              }
              alt="Post Author"
            />
           <div className="pl-3">
           <h4 className="font-semibold">{post?.mentor_name || post?.student_name}</h4>
            <p className="text-gray-400">{post?.mentor_position}</p>
            </div>
                </div>
               <button className="bg-blue-800 text-white rounded-full flex" >İzlə <img src="/images/add.svg"/></button>
                    </div>
            <div className="post-title mt-4">
<p>{post?.post_desc} </p>
        </div>
        <div className="post-image pt-5">
        <img
          src={
            post?.post_img
              ? post.post_img.trim().startsWith("http")
                ? post.post_img.trim()
                : `https://cothink.az/server/uploads/posts/${post.post_img.trim()}`
              : "/images/admin.png"
          }
          className="rounded-md"
          alt="Post"
          onError={(e) => (e.target.style.display = "none")}
        />

        </div>
        <div className="post-reactions flex justify-end gap-5 pt-3">
            <div className="like-count flex items-center gap-2">
                   {
                                            liked ? <AiFillLike fontSize={24} onClick={handleUnlike}/> :
                                            <AiOutlineLike fontSize={24} onClick={()=>handleLike(post)}/>
                                }
              {post?.likes}
            
              </div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>{post?.comments}</div>
            <div className="saved-count flex items-center gap-2">
                  {savedPosts.includes(post.post_id) ? 
                                    (<FaBookmark fontSize={24} onClick={()=>handleUnsave(post)}/>) :
                                     (<FaRegBookmark   fontSize={24} onClick={()=>handleSave(post)}/>)}
              {/* <img src="/images/save.svg"></img> */}
            {post?.saved}</div>
            <div className="share flex items-center gap-2">

              <img src="/images/share.svg"></img>
            <WhatsappShareButton url={window.location.href} title={post?.post_title}>Paylaş</WhatsappShareButton>
            </div>
        </div>
    </div>

</div>
  <form onSubmit={handleComments} className="pt-5">
                            {error && (
                <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
                  {error}
                </p>
                            )}
  <input type="text" className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md" placeholder="Fikirlərinizi yazın…" onChange={(e)=>setComment(e.target.value)}/>
      
                        </form>
<div className="comments">
                 <h4 className="mb-3 mt-3 font-bold">Rəylər</h4>
              {  comments.map((comment)=>{
                return(
                    <>
   <CommentCard key={comment._id} comment={comment}/>
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