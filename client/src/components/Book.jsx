import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Book=()=>{
    const navigate=useNavigate()
      const [book, setBook] = useState([]);
      
      useEffect(() => {
    axios.get("http://localhost/cothink/server/books/bookDetail.php")
      .then((res) => {
        setBook(res.data); 
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

    return (
        <section>
            <div>
                                        <h2 className="font-bold text-center text-2xl">Konvensiya</h2>
                   {
                book.map((item)=>{
                    return(
                        <>
        <div className="flex justify-center items-center gap-4 flex-col mb-5" key={item.id}>

<img src={`/${item.img}`} className="w-24 h-24 text-center"/>
<p className="text-xl">{item.book_title}</p>
<h4 className="font-bold text-xl">{item.author}</h4>
   <div className="post-reactions flex justify-end gap-5">
            <div className="like-count flex items-center gap-2"><img src="/like.svg"></img>{item.likes}</div>
            <div className="saved-count flex items-center gap-2"><img src="/save.svg"></img>{item.saved}</div>
            <div className="share flex items-center gap-2"><img src="/share.svg"></img>Paylaş</div>
 </div>
 <button className="bg-blue-800 text-white rounded-md px-4 py-2" onClick={()=>navigate('/library/books/:id/read')}>Oxumağa davam edin</button>
                
 </div>
<div>
<p className="text-center font-bold">Kitab haqqında </p>
<p className="pt-4">
  {item.description}
</p>
</div>
  </>
                    )
                })
            }
</div>
</section>
         )
}
export default Book;