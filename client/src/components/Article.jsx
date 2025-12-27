import { IoMdTime } from "react-icons/io";
import { FaBookmark, FaRegBookmark, FaRegCalendar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import {AuthContext} from "../context/AuthContext"
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { WhatsappShareButton } from "react-share";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { CommentCard } from "./Comments";
const Article = () => {
  const [article, setArticle] = useState(null);
  const [comments,setComments]=useState([])
  const [liked, setLiked]=useState(false)
  const [comment, setComment]=useState("")
  const [savedArticles, setSavedArticles]=useState([])
  const [error,setError]=useState('')
  const { id } = useParams();
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)

  useEffect(()=>{
    axios.get(
      `${apiUrl}/server/savedPages/savedArticles/getSaveArticles.php?student_id=${user.id}`)
      .then(res => {
        const article_ids=res.data.saved_articles.map(item=>item.article_id)
        setSavedArticles(article_ids)
      })
      .catch(err => console.error(err))
  },[])

    const fetchComments=async()=>{
  axios .get(`${apiUrl}/server/articles/articleComments.php?article_id=${id}` 
      )
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => console.error(err));

  }
  useEffect(() => {
    axios 
      .get(`${apiUrl}/server/articles/articleDetails.php?article_id=${id}` 
      )
      .then((res) => {
        setArticle(res.data?.data || null);
      })
      .catch((err) => console.error(err));
      fetchComments()
     
  }, [id]);
  
  if (!article) {
    return <p className="text-center text-xl mt-8">Məqalə tapılmadı</p>;
  }

  const handleComments=async (e)=>{
      e.preventDefault()
      if(comment===""){
          setError("Komment daxil edin")
          return;
      }
     const res=  await axios.post(`${apiUrl}/server/articles/postComments.php?article_id=${id}`,
       {
          student_id:user?.id, comment_text:comment}
      )
      if(res.data.status==="success"){
          setComment("")
          toast.success("Rəy paylaşıldı")
          fetchComments()
  }
  }


  const handleUnsave=async(item)=>{
    
    await axios.delete(`${apiUrl}/server/savedPages/savedArticles/unSaveArticles.php?article_id=${item.article_id}`,
      {data:{article_id:item.article_id, student_id:user?.id},
      headers: { "Content-Type": "application/json" } },

    )
          setSavedArticles((prev)=>prev.filter((id)=>id!==item.article_id))

  }

const handleSave=async(item)=>{
   try {
      const res = await axios.post(
        `${apiUrl}/server/savedPages/savedArticles/postsaveArticles.php?article_id=${item.article_id}`,
         {
          student_id:user?.id
         },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data)
      if (res.data.status === "success") {
        toast.success("Məqalə yadda saxlanıldı");
        setSavedArticles((prev)=>[...prev, item.article_id])
      } else {
        toast.error("Tələbə kimi daxil olun");
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
}
    const handleLike=async(item)=>{
           setLiked(true)
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/articleLikes/like.php?article_id=${item.article_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
    if (res.data.status === "liked") {
             setArticle((prev)=>({...prev, likes:prev.likes+1}))
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

  const handleUnlike=async(item)=>{
           setLiked(true)
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/articleLikes/unlike.php?article_id=${item.article_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
    if (res.data.status === "unliked") {
             setArticle((prev)=>({...prev, likes:prev.likes-1}))
        setLiked(false)
      }
  else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }
  return (
    <>
    <ToastContainer/>
    <section>
      <div>
        <h2 className="font-bold text-2xl">{article.article_title}</h2>
        <div className="flex flex-col md:flex-row gap-3 justify-between mb-4 mt-4">
          <div className="flex md:flex-row gap-3">
            <img
            src={
              article?.profile_img
                ? article.profile_img.trim().startsWith("http")
                  ? article.profile_img.trim()
                  : `https://cothink.az/${article.profile_img.trim()}`
                : "/images/admin.png"
            }
            className="object-cover w-20 h-20 rounded-full"
            alt="Article Author"
          />

            <div className="flex flex-col gap-2">
              <h4>{article.mentor_name}</h4>
              <button className="bg-blue-800 text-white px-3 py-2 rounded-full flex gap-1">
                İzlə <IoIosAdd fontSize={24}/>
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-3 text-gray-400">
            <div className="flex gap-1">     <IoMdTime fontSize={24} /> <p>8 dəq oxuma</p></div>
       <div className="flex  gap-1">  <FaRegCalendar fontSize={24} /> <p>{article.created_at}</p></div>
          
          </div>
        </div>

        <div className="post-reactions flex gap-5 border-t border-t-gray-300 border-b border-b-gray-300 py-3 justify-between md:flex-row items-center">
          <div className="flex gap-3">
            <div className="like-count flex items-center gap-2" >
                  {
                              liked ? <AiFillLike fontSize={24} onClick={()=>handleUnlike(article)}/> :
                              <AiOutlineLike fontSize={24} onClick={()=>handleLike(article)}/>
                  }
              {article.likes || 0}
            </div>
            <div className="comment-count flex items-center gap-2">
              <img src="/images/comment.svg" alt="comment" />
              {article.comments || 0}
            </div>
          </div>
          <div className="post-reactions flex gap-5">
            <div className="share flex items-center gap-2">
             
                <WhatsappShareButton url={window.location.href} title={article?.article_title}> <img src="/images/share.svg" alt="share" /> </WhatsappShareButton>{article.shared || 0}
            </div>
            <div className="saved-count flex items-center gap-2">
    {savedArticles.includes(article.article_id) ? 
                      (<FaBookmark fontSize={24} onClick={()=>handleUnsave(article)}/>) :
                       (<FaRegBookmark fontSize={24} onClick={()=>handleSave(article)}/>)}
              {article.saved || 0}
            </div>
            <div>
              <BsThreeDots fontSize={24} className="text-gray-500"/>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-3">
    
            <img src="/images/article.jpg" className="h-84 w-full rounded-md"/>
        
        
          <h4 className="font-bold pt-4 text-xl">{article.article_desc}</h4>
          <p className="pt-4">{article.article_topic}</p>
        </div>
<div className="article-tags mt-5 flex flex-col md:flex-row gap-3">
 <h4 className="font-semibold">Açar sözlər: {article.article_tags}</h4>
</div>
        <div className="comments ">
          <div className="flex gap-3 md:flex-row flex-col  items-center border-t border-t-gray-300 pt-3">
     {/* <img src="/images/admin.png" className="w-25 h-25" alt="avatar" /> 
     <h4 className="font-bold text-xl">{user?.name}</h4> */}
          </div>
            <form onSubmit={handleComments}>
                            {error && (
                <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
                  {error}
                </p>          
                            )}
  <input type="text" className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md" placeholder="Fikirlərinizi yazın…" onChange={(e)=>setComment(e.target.value)}/>

                        </form>
                        
          <h4 className="mb-3 mt-3 font-bold text-lg">Rəylər</h4>
          <div className="flex gap-2 mb-3 items-center">
           
            <p>{user?.username}</p>
          </div>
            {
              comments.length>0 ? (
                comments.map((comment)=>{
                return(
               <CommentCard key={comment._id} comment={comment}/>
                )
              }
            ))
            : <p className="font-bold col-span-4 text-center text-xl mt-4">Rəy yoxdur</p>
          }
 
        </div>
      </div>
    </section>
    </>
  );
};

export default Article;