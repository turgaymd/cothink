import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";

const AddArticle = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDesc, setArticleDesc] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleImg, setArticleImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [articleTags, setArticleTags] = useState([]);
  const [input, setInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const {apiUrl}=useContext(ApiContext)
  const {user}=useContext(AuthContext)
  const fileInputRef = useRef(null);
  const navigate=useNavigate()

  useEffect(() => {
    axios
      .get(`${apiUrl}/server/categories/categoryRead.php`)
      .then((res) => {
        if (res.data.status === "success") {
          setCategories(res.data.data);
        }
      })
      .catch(() => toast.error("Category yüklənmədi"));
  }, []);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleSelect = (selectedCategory) => {
    setCategoryId(selectedCategory.value);
  };

  const handleTags = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = input.trim();
      if (newTag && !articleTags.includes(newTag)) {
        setArticleTags([...articleTags, newTag]);
        setInput("");
      }
    }
  };

  const handleRemove = (removedTag) => {
    setArticleTags(articleTags.filter((tag) => tag !== removedTag));
  };
   const mentor_id = user?.id;
  const handleArticle = async (e) => {
    e.preventDefault();
 

    if (!mentor_id) {
      toast.error("Mentor kimi daxil olun");
      return;
    }

    if (!articleTitle || !articleDesc || !articleContent || !articleTags || !categoryId) {
      setError("Bütün xanaları doldurun");
      return;
    }

    const formData = new FormData();
    formData.append("mentor_id", mentor_id);
    formData.append("article_title", articleTitle);
    formData.append("article_desc", articleDesc);
    formData.append("article_topic", articleContent);
    formData.append("category_id", categoryId);
    formData.append("article_tags", articleTags.join(","));

    if (articleImg instanceof File) {
      formData.append("article_img", articleImg);
    }

    try {
      const res = await axios.post(`${apiUrl}/server/articles/articlePost.php`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "success") {
        toast.success("Bloq uğurla əlavə olundu");
        setArticleTitle("");
        setArticleDesc("");
        setArticleContent("");
        setArticleImg(null);
        setPreview(null);
        setArticleTags([]);
        setCategoryId("");
        setError("");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  };
const handleReset=()=>{
              setArticleTitle("");
              setArticleDesc("");
              setArticleContent("");
              setArticleImg(null);
              setPreview(null);
              setCategoryId("");
              setArticleTags([]);
              setInput("");
              navigate("/share")
}
  return (
    <div className="research-form">
      <h2 className="text-center font-bold text-3xl pb-5">Bloq əlavə et</h2>
      <form className="mt-5" onSubmit={handleArticle}>
        {error && (
          <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
            {error}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block title font-semibold text-gray-900 pb-2">
              Bloq başlığı
            </label>
            <textarea
              className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg"
              cols={5}
              rows={3}
              placeholder="Bloq başlığı əlavə edin"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block title font-semibold text-gray-900 pb-2">
              Qısa izah / Bloq haqqında
            </label>
            <textarea
              className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg"
              cols={5}
              rows={3}
              placeholder="Bloqunuzun mövzusu, məqsədi və kimlər üçün faydalı olduğunu 2–3 cümlə ilə yazın"
              value={articleDesc}
              onChange={(e) => setArticleDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block title font-semibold pb-2">Kateqoriya</label>
          <Select
            options={categories.map((item) => ({
              value: item.category_id,
              label: item.category,
            }))}
            onChange={handleSelect}
            placeholder="Kategoriya seçin"
          />
        </div>
        <div className="mb-4">
          <label className="block title font-semibold text-gray-900 pb-2">
            Bloq Məzmunu
          </label>
          <textarea
            className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg"
            cols={5}
            rows={5}
            placeholder="Bloqun əsas hissəsini burada yazın"
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block title font-semibold text-gray-900 pb-2">
            Şəkil
          </label>
          <div className="flex flex-col items-center border border-gray-300 p-5 rounded-2xl gap-3">
            {preview && <img src={preview} alt="Preview" className="w-32 h-32" />}
               <img src="/images/image_icon.png"/>
                           <p className="text-gray-500 md:flex hidden">Şəkilləri buraya sürükləyin və ya</p>
            <button
              type="button"
              className="text-white bg-blue-800 px-3 py-2 rounded-md"
              onClick={handleUpload}
            >
              Axtar
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setArticleImg(file);
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />

          </div>
        </div>
        <div className="mb-4">
          <label className="block title font-semibold text-gray-900 pb-2">
            Etiketlər
          </label>
          <input
            type="text"
            className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg"
            placeholder="Mövzunu ifadə edən açar sözlər əlavə edin və Enteri basın"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleTags}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {articleTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 bg-blue-600 text-white rounded-md px-3 py-1"
              >
                {tag}
                <button type="button" onClick={() => handleRemove(tag)}>
                  <IoMdClose />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="submit-form mt-5 gap-3 flex flex-col md:flex-row justify-center items-center">
          <button
            type="reset"
            className="border border-blue-800 text-blue-800 px-7 py-4 rounded-md"
            onClick={handleReset}
          >
            Ləğv et
          </button>
          <button type="submit" className="bg-blue-800 text-white px-7 py-4 rounded-md">
            Yadda Saxla
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;