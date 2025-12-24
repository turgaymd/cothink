import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { useParams } from "react-router-dom";

const BookView=()=>{
const { id } = useParams();  
const [book, setBook] = useState(null);
const {apiUrl}=useContext(ApiContext)

useEffect(() => {
    axios
      .get(`${apiUrl}/server/books/bookDetails.php?book_id=${id}`) 
      .then((res) => {
        console.log(res.data.data);
        setBook(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [id]); return (
    <>
    {book &&      <iframe src={book.book_file} className="w-full h-screen border-none" >
        </iframe>}
    
        </>
    )
}
export default BookView;