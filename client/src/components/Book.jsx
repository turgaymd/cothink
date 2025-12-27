import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { LuTableOfContents } from "react-icons/lu";
import { ApiContext } from "../context/ApiContext";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Book = () => {
  const { id } = useParams();  
  const [book, setBook] = useState(null);
 const {apiUrl}=useContext(ApiContext)
 const {user}=useContext(AuthContext)
 const [liked,setLiked]=useState(false)
 const [savedBooks ,setSavedBooks]=useState([])


  useEffect(() => {
    axios 
      .get(`${apiUrl}/server/books/bookDetails.php?book_id=${id}`) 
      .then((res) => {
        setBook(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

    useEffect(()=>{
      if(!user?.id) return;
    axios.get(
      `${apiUrl}/server/savedPages/savedBooks/getSaveBooks.php?student_id=${user.id}`)
      .then(res => {
        const book_ids=res.data.saved_books.map(book=>book.book_id)
        setSavedBooks(book_ids)
        console.log(book_ids)
      })
      .catch(err => console.error(err))
    
  },[])

    const handleLike=async(item)=>{
           setLiked(true)
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/bookLikes/like.php?book_id=${item.book_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.status === "liked") {
             setBook((prev)=>({...prev, likes:prev.likes+1}))
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
           setLiked(false)
    try {
      const res = await axios.post(
        `${apiUrl}/server/likes/bookLikes/unlike.php?book_id=${item.book_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.status === "unliked") {
             setBook((prev)=>({...prev, likes:prev.likes-1}))
        setLiked(false)
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


   const handleSave=async(item)=>{
    try {
      const res = await axios.post(
        `${apiUrl}/server/savedPages/savedBooks/postsaveBooks.php?book_id=${item.book_id}`,
        {
          student_id:user?.id
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data)
      if (res.data.status === "success") {
        toast.success("Kitab yadda saxlanıldı");
        setSavedBooks((prev)=>[...prev, item.book_id])
      } else {
         toast.error("Tələbə kimi daxil olun");
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }

  const handleUnsave=async(item)=>{
    setSavedBooks((prev)=>prev.filter((id)=>id!==item.book_id))
    await axios.delete(`${apiUrl}/server/savedPages/savedBooks/unSaveBooks.php?book_id=${item.book_id}`,
      {data:{book_id:item.book_id, student_id:user?.id},
      headers: { "Content-Type": "application/json" } },
    )
  }
  return (
    <>
    <ToastContainer/>
    <section>
      <div>
        <h2 className="font-bold text-center text-2xl mb-6">Konvensiya</h2>
        <div className="flex justify-center items-center gap-4 flex-col mb-5">
          <img src={`${book?.book_img}`} className="w-64 h-64 text-center object-cover" />
          <p className="text-xl font-semibold">{book?.book_title}</p>
          <h4 className="font-bold text-xl">{book?.mentor_name}</h4>
          <div className="post-reactions flex justify-center gap-5 w-full max-w-md">
            <span className="like-count flex items-center gap-2" >
              {
                liked ? <AiFillLike fontSize={28} onClick={()=>handleUnlike(book)}/> : <AiOutlineLike fontSize={28} onClick={()=>handleLike(book)}/> 
              }
             {book?.likes}
            </span>
            <div className="saved-count flex items-center gap-2">
                                    {savedBooks.includes(book?.book_id) ? 
                                      (<FaBookmark fontSize={20} onClick={()=>handleUnsave(book)}/>) :
                                      (<FaRegBookmark fontSize={20} onClick={()=>handleSave(book)}/>)}
            </div>
            <div className="share flex items-center gap-2">
              <LuTableOfContents fontSize={24}/>{book?.chapters}
            </div>
          </div>
          <a
            className="bg-blue-800 text-white rounded-md px-4 py-2 mt-3"
            target="_blank"
            href={`/library/books/${book?.book_id}/read`}
          >
            Oxumağa davam edin
          </a>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-bold mb-2">Kitab haqqında</p>
          <p className="pt-4 text-justify">{book?.description}</p>
        </div>
      </div>
    </section>
</>
  );
};

export default Book;
