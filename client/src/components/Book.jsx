import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../utils/Loading";

const Book = () => {
  const navigate = useNavigate();
  const { id } = useParams();  
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost/cothink1/cothink/server/books/bookDetails.php?book_id=${id}`)
      .then((res) => {
        setBook(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) {
    return <Loading/>;
  }

  return (
    <section>
      <div>
        <h2 className="font-bold text-center text-2xl mb-6">Konvensiya</h2>
        <div className="flex justify-center items-center gap-4 flex-col mb-5">
          <img src={`/${book.book_img}`} className="w-24 h-24 text-center" />
          <p className="text-xl font-semibold">{book.book_title}</p>
          <h4 className="font-bold text-xl">{book.mentor_name}</h4>

          <div className="post-reactions flex justify-end gap-5 w-full max-w-md">
            <div className="like-count flex items-center gap-2">
              <img src="/like.svg" alt="like" /> {book.likes}
            </div>
            <div className="saved-count flex items-center gap-2">
              <img src="/save.svg" alt="saved" /> {book.saved}
            </div>
            <div className="share flex items-center gap-2">
              <img src="/share.svg" alt="share" /> Paylaş
            </div>
          </div>

          <button
            className="bg-blue-800 text-white rounded-md px-4 py-2 mt-3"
            onClick={() => navigate(`/library/books/${book.book_id}/read`)}
          >
            Oxumağa davam edin
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-center font-bold mb-2">Kitab haqqında</p>
          <p className="pt-4 text-justify">{book.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Book;