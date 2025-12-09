import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { ApiContext } from "../ApiContext";
function Discussion(){
  const { id } = useParams();  
  const [post, setPost] = useState(null);
  const [comments, setComments]=useState([])
  const {apiUrl}=useContext(ApiContext)
  
  useEffect(() => {
    axios
      .get(`${apiUrl}/server/posts/postDetails.php?id=${id}`)
      .then((res) => {
        setPost(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

   useEffect(() => {
    axios
      .get(`${apiUrl}/server/discussion/getPost.php?id=1`)
      .then((res) => {
          const postData=res.data.find((p)=>p.post_id===Number(id))
        setComments(postData.comments);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  
  if (!post) {
  return <><Loading/></>;
}
    return(
        <>
        
        <section>
<h2 className="text-center font-medium text-2xl">Diskussiya</h2>
<div className="discussion">
    <div className="discussion-item">
        <div className="post-header flex justify-between items-center">
            <div className="flex post-img items-center">
  <img className="rounded avatar" src="lalə.jpg"></img>
           <div className="pl-3">
           <h4 className="font-semibold">{post?.mentor_name}</h4>
            <p className="text-gray-400">{post?.mentor_position}</p>
            </div>
                </div>
               <button className="bg-blue-800 text-white rounded-full flex" >İzlə <img src="/add.svg"/></button>
                    </div>
            <div className="post-title mt-4">
<p>{post?.post_title} </p>
        </div>
        <div className="post-image pt-5">
<img  src={post?.post_img} className="rounded-md"/>
        </div>
        <div className="post-reactions flex justify-end gap-5 pt-3">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{post?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>{post?.comments}</div>
            <div className="saved-count flex items-center gap-2"><img src="/save.svg"></img>{post?.saved}</div>
            <div className="share flex items-center gap-2"><img src="/share.svg"></img>Paylaş</div>
        </div>
    </div>

</div>
<div className="comments">
    <h4 className="mb-3 mt-3 font-bold">Rəylər</h4>
              {  comments.map((comment)=>{
                return(
                    <>
    <div className="comment-item mt-4 mb-4" key={comment.comment_id} >
                    <div className="comment-header flex items-center ">
            <img  className="rounded-md avatar" src={comment.profile_img}></img>
            <div className="pl-4">
           <h4 className="font-semibold">{comment.mentor_name}</h4>
            <p className="text-gray-500">{comment.mentor_position}</p>
            <p className="mt-3 text-black">{comment.comment_text}</p>
            </div>
                    </div> 
                        <div className="flex justify-end gap-5 comment-reactions pt-3">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{comment?.likes}</div>
            <div className="comment-count flex items-center gap-2" ><img src="/comment.svg"></img>{comment?.comments}</div>
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