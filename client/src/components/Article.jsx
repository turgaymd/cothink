import { IoMdTime } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiContext } from "../ApiContext";
import {AuthContext} from "../AuthContext"
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
const Article = () => {
  const [article, setArticle] = useState(null);
  const [comments,setComments]=useState([])
  const [comment, setComment]=useState("")
  const [error,setError]=useState('')
  const { id } = useParams();
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)



    const fetchComments=async(e)=>{
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
          console.log(res.data)
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
              src={`../../client/uploads/images/${article.article_img}`}
              className="object-cover w-20 h-20 rounded-full"
            />
            <div className="flex flex-col gap-3">
              <h4>{article.mentor_name}</h4>
              <button className="bg-blue-800 text-white px-3 py-2 rounded-full flex gap-1">
                İzlə <IoIosAdd fontSize={24}/>
              </button>
            </div>
          </div>
          <div className="flex gap-3 text-gray-400">
            <IoMdTime fontSize={24} /> <p>8 dəq oxuma</p>
            <FaRegCalendar fontSize={24} /> <p>{article.created_at}</p>
          </div>
        </div>

        <div className="post-reactions flex gap-5 border-t border-t-gray-300 border-b border-b-gray-300 py-3 justify-between md:flex-row flex-col items-center">
          <div className="flex gap-3">
            <div className="like-count flex items-center gap-2">
              <img src="/images/like.svg" alt="like" />
              {article.likes || 0}
            </div>
            <div className="comment-count flex items-center gap-2">
              <img src="/images/comment.svg" alt="comment" />
              {article.comments || 0}
            </div>
          </div>
          <div className="post-reactions flex gap-5">
            <div className="share flex items-center gap-2">
              <img src="/images/share.svg" alt="share" /> {article.shared || 0}
            </div>
            <div className="saved-count flex items-center gap-2">
              <img src="/images/save.svg" alt="saved" />
              {article.saved || 0}
            </div>
            <div>
              <BsThreeDots fontSize={24} className="text-gray-500"/>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-3">
          {article.article_img ? (
            <img
              src={`/${article.article_img}`}
              className="rounded-md mb-3"
              alt={article.article_title}
            /> 
          )  : <img src="/images/article.jpg" className="h-84 w-full rounded-md"/>
        
        }
          <h4 className="font-bold pt-4 text-xl">{article.article_desc}</h4>
          <p className="pt-4">{article.article_topic}</p>
        </div>
<div className="article-tags mt-5 flex flex-col md:flex-row gap-3 items-center">
  <span className="bg-gray-100  px-5 py-2 rounded-md">Figma</span>
    <span className="bg-gray-100  px-5 py-2 rounded-md">ShapeTools</span>
      <span className="bg-gray-100  px-5 py-2 rounded-md">ProductDesign</span>
</div>
        <div className="comments ">
          <div className="flex gap-3 md:flex-row flex-col  items-center border-t border-t-gray-300 pt-3">
     <img src="/images/admin.png" className="w-25 h-25" alt="avatar" /> 
     <h4 className="font-bold text-xl">{user?.name}</h4>
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
          {/* <input
            type="text"
            className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md"
            placeholder="Fikirlərinizi yazın…"
          /> */}
            {
              comments.length>0 ? (
                comments.map((comment)=>{
                return(
              <div className="comment-item mt-4 mb-4" key={comment?.comment_id} >
                    <div className="comment-header flex md:flex-row flex-col items-center ">
            <img  className="rounded-md w-30 h-30" src={comment?.profile_img || "/images/admin.png"}></img>
            <div className="pl-4">
           <h4 className="font-semibold">{comment?.mentor_name}</h4>
            <p className="text-gray-500">{comment?.mentor_position}</p>
            <p className="mt-3 text-black">{comment?.comment_text}</p>
            </div>
                    </div> 
                        <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/images/like.svg"></img>{comment?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/images/comment.svg"></img>{comment?.comments}</div>
    </div>
                    </div>
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