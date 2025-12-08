import { IoMdTime } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiContext } from "../ApiContext";
import { IoIosAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
const Article = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const {apiUrl}=useContext(ApiContext)

  useEffect(() => {
    axios 
      .get(`${apiUrl}/server/articles/articleDetails.php?article_id=${id}` 
      )
      .then((res) => {
        setArticle(res.data?.data || null);
        console.log(res.data?.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!article) {
    return <p className="text-center text-xl mt-8">Məqalə tapılmadı</p>;
  }

  return (
    <section>
      <div>
        <h2 className="font-bold text-2xl">{article.article_title}</h2>
        <div className="flex flex-col md:flex-row gap-3 justify-between mb-4 mt-4">
          <div className="flex md:flex-row gap-3">
            <img
              src={`/${article.article_img}`}
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
              <img src="/like.svg" alt="like" />
              {article.likes || 0}
            </div>
            <div className="comment-count flex items-center gap-2">
              <img src="/comment.svg" alt="comment" />
              {article.comments || 0}
            </div>
          </div>
          <div className="post-reactions flex gap-5">
            <div className="share flex items-center gap-2">
              <img src="/share.svg" alt="share" /> {article.shared || 0}
            </div>
            <div className="saved-count flex items-center gap-2">
              <img src="/save.svg" alt="saved" />
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
          )  : <img src="/article.jpg" className="h-84 w-full rounded-md"/>
        
        }
          <p className="pt-4">{article.article_desc}</p>
        </div>
<div className="article-tags mt-5 flex flex-col md:flex-row gap-3 items-center">
  <span className="bg-gray-100  px-5 py-2 rounded-md">Figma</span>
    <span className="bg-gray-100  px-5 py-2 rounded-md">ShapeTools</span>
      <span className="bg-gray-100  px-5 py-2 rounded-md">ProductDesign</span>
</div>
        <div className="comments">
          <h4 className="mb-3 mt-3 font-bold text-lg">Rəylər</h4>
          <div className="flex gap-2 mb-3 items-center">
            <img src="/avatarr.svg" className="w-15 h-15" alt="avatar" />
            <p>Username</p>
          </div>
          <input
            type="text"
            className="w-full bg-gray-200 px-3 py-2 outline-none rounded-md"
            placeholder="Fikirlərinizi yazın…"
          />

          <div className="comment-item pt-3 mt-5">
            <div className="comment-header flex md:flex-row flex-col items-center">
              <img
                className="rounded-md avatar"
                src="/həcər.jpg"
                alt="comment author"
              />
              <div className="pl-4">
                <h4 className="font-semibold">Həcər Quliyeva</h4>
                <p className="text-gray-500">Tələbə – Kompüter Mühəndisliyi</p>
                <p className="mt-3 text-black">
                  Çox aydın izah olunub. Xüsusilə Enerji və İş anlayışları
                  arasındakı fərqlərin real nümunələrlə göstərilməsi xoşuma
                  gəldi
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-5 comment-reactions pt-3">
              <div className="like-count flex items-center gap-2">
                <img src="/like.svg" alt="like" />52
              </div>
              <div className="comment-count flex items-center gap-2">
                <img src="/comment.svg" alt="comment" />26
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;