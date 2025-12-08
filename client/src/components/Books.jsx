import axios from "axios";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useState } from "react";

const Books = ({books, query}) => {
     const filteredBooks=books.filter((item)=>
      item.book_title.toLowerCase().includes(query.toLowerCase())
  )

const [saved,setSaved]=useState([])
const handleSave=async(item)=>{
   try {
    const formData=new FormData();
    formData.append("book_id", item.book_id)
    formData.append("book_title", item.book_title)
    formData.append("book_img", item.book_img)
    formData.append("book_url", item.book_url)

      const res = await axios.post(
        "http://localhost/cothink1/cothink/server/books/bookRead.php",
         formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "success") {
        toast.success("Kitab yadda saxlanıldı");
        setSaved((prev)=>[...prev, item.book_id])
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
}

const handleUnsave=(item)=>{
setSaved((prev)=>prev.filter((id)=>id!==item.book_id))
}
    return (
        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
               {filteredBooks.length===0 ? 
                  <p className="font-bold col-span-4 text-center text-2xl">Kitab tapılmadı</p>   : (
               filteredBooks.map((item, index)=>(
                   <div className="library-item shadow-xl rounded-xl mt-4" key={index}>
                        <a href={`/library/books/${item.book_id}`}>
                <div className="flex flex-col md:flex-row justify-between gap-3">
                  <img
                    src={item.book_img}
                    className="w-20 h-25 object-cover"
                    alt="book"
                  ></img>
                  <div className="mentor-title flex flex-col gap-3">
                    <h4 className="font-bold text-lg break-all">
                      {item.book_title}
                    </h4>
                    <p>PDF </p>
                    <div className="flex gap-5 md:flex-row flex-col stats">
                      <div className="flex items-center gap-1">
                        <a className="flex gap-1" download href={`item.book_url`}>
                          <img src="download.svg" />
                          <span>Yüklə</span>
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="share.svg" />
                        <span>Paylaş</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {saved.includes(item.book_id) ? <FaBookmark fontSize={24} onClick={()=>handleUnsave(item)}/> :  <FaRegBookmark fontSize={24} onClick={()=>handleSave(item)}/>}
                      Saxla  
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Books;
