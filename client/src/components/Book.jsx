import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LuTableOfContents } from "react-icons/lu";
import Loading from "../utils/Loading";
import { ApiContext } from "../ApiContext";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContext";
import { AiFillLike } from "react-icons/ai"
const Book = () => {
  const navigate = useNavigate();
  const { id } = useParams();  
  const [book, setBook] = useState(null);
 const {apiUrl}=useContext(ApiContext)
 const {user}=useContext(AuthContext)
 const [liked,setLiked]=useState(false)
  useEffect(() => {
    axios 
      .get(`${apiUrl}/server/books/bookDetails.php?book_id=${id}`) 
      .then((res) => {
        setBook(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

    const handleLike=async(item)=>{
           setLiked(true)
    try {
      const res = await axios.post(
        `${apiUrl}/server/books/likeBooks.php?book_id=${item.book_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data)
      if (res.data.status === "success") {
        console.log(res.data)
        setBook((prev)=>({...prev, likes:prev.likes+1}))
   
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
    // setBook((prev)=>({...prev, likes:prev.likes-1}))
  }

  return (
    <section>
      <div>
        <h2 className="font-bold text-center text-2xl mb-6">Konvensiya</h2>
        <div className="flex justify-center items-center gap-4 flex-col mb-5">
          <img src={`${book?.book_img}`} className="w-64 h-64 text-center object-cover" />
          <p className="text-xl font-semibold">{book?.book_title}</p>
          <h4 className="font-bold text-xl">{book?.mentor_name}</h4>
          <div className="post-reactions flex justify-center gap-5 w-full max-w-md">
            <button className="like-count flex items-center gap-2" onClick={()=>handleLike(book)}>
              {
                liked ? <AiFillLike fontSize={24} onClick={handleUnlike}/> : <img src="/images/like.svg" alt="like" /> 
              }
             {book?.likes}
            </button>
            <div className="saved-count flex items-center gap-2">
              <img src="/images/save.svg" alt="saved" /> {book?.saved}
            </div>
            <div className="share flex items-center gap-2">
              <LuTableOfContents fontSize={24}/>{book?.chapters}
            </div>
          </div>
          <button
            className="bg-blue-800 text-white rounded-md px-4 py-2 mt-3"
            onClick={() => navigate(`/library/books/${book?.book_id}/read`)}
          >
            Oxumağa davam edin
          </button>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-bold mb-2">Kitab haqqında</p>
          <p className="pt-4 text-justify">{book?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Book;
