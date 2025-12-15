import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import {WhatsappShareButton} from "react-share"
import { ApiContext } from "../ApiContext";
import { AuthContext } from "../AuthContext";
 
const Books = ({books, query, selectedCategory, visibleBooks, handleMoreBooks, handleLessBooks}) => {

  const [savedBooks,setSavedBooks]=useState([])
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)

  const filteredBooks=books.filter((item)=>{
    const searchedQuery=  item.book_title.toLowerCase().includes(query.toLowerCase())
    const matchedCategories=!selectedCategory ||  item?.category_id===selectedCategory
    return searchedQuery && matchedCategories
  })

  const displayedBooks = filteredBooks.slice(0, visibleBooks)
 
  useEffect(()=>{
    axios.get(
      `${apiUrl}/server/savedPages/savedBooks/getSaveBooks.php?student_id=${user.id}`)
      .then(res => {
        const book_ids=res.data.saved_books.map(book=>book.book_id)
        setSavedBooks(book_ids)
        console.log(book_ids)
      })
      .catch(err => console.error(err))
  },[])

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
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  }

  const handleUnsave=async(item)=>{
    setSavedBooks((prev)=>prev.filter((id)=>id!==item.book_id))
    await axios.delete(`${apiUrl}/server/savedPages/savedBooks/getSaveBooks.php?student_id=${user.id}`,
      {data:{book_id:item.book_id, student_id:user?.student_id}},
      { headers: { "Content-Type": "application/json" } },
    )
  }

  return (
    <>
      <ToastContainer/>
      <div className="flex justify-between items-center mt-5 mb-3">
        <h4 className="font-semibold text-xl">Kitablar</h4>
        {filteredBooks.length > 3 && (
          visibleBooks >= filteredBooks.length ? (
            <button className="text-blue-500" onClick={handleLessBooks}>
              Daha azını göstər
            </button>
          ) : (
            <button className="text-blue-500" onClick={handleMoreBooks}>
              Hamısına bax
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {displayedBooks.length===0 ? 
          <p className="font-bold col-span-4 text-center text-2xl">Kitab tapılmadı</p> : (
          displayedBooks.map((item, index)=>(
            <div className="library-item shadow-xl rounded-xl mt-4" key={index}>
              <div className="flex flex-col md:flex-row gap-5">
                <a href={`/library/books/${item.book_id}`}>
                  <div className="flex items-center justify-center">
                    <img
                      src={item.book_img}
                      className="w-20 h-25 object-cover"
                      alt="book"
                    ></img>
                  </div>
                </a>
                <div className="mentor-title flex flex-col gap-3">
                  <h4 className="font-bold text-lg break-all">
                    {item.book_title}
                  </h4>
                  <p>PDF </p>
                  <div className="flex gap-5 md:flex-row stats ">
                    <div className="flex items-center gap-1">
                      <a className="flex gap-1" download href={`item.book_url`}>
                        <img src="/images/download.svg" />
                        <span>Yüklə</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/images/share.svg" />
                      <WhatsappShareButton url={window.location.href} title={item.book_title}>Paylaş</WhatsappShareButton>
                    </div>
                    <div className="flex items-center gap-1">
                      {savedBooks.includes(item.book_id) ? 
                        (<FaBookmark fontSize={24} onClick={()=>handleUnsave(item)}/>) :
                        (<FaRegBookmark fontSize={24} onClick={()=>handleSave(item)}/>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Books;