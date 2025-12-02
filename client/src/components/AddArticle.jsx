import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddPost = () => {
  const [article_title, setArticleTitle] = useState("");
  const [article_desc, setArticleDesc] = useState("");
  const [article_img, setArticleImg] = useState("");
  const [article_tags, setArticleTags] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  // ✔ backend_categoryRead.php-dən category-ləri çək
  useEffect(() => {
    axios
      .get(
        "http://localhost/cothink1/cothink/server/categories/categoryRead.php"
      )
      .then((res) => {
        if (res.data.status === "success") {
          setCategories(res.data.data);
        }
      })
      .catch(() => toast.error("Category yüklənmədi"));
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const mentor_id = user?.mentor_id;

    if (!mentor_id) {
      toast.error("LocalStorage-də user tapılmadı!");
      return;
    }

    if (!article_title || !article_desc || !category_id) {
      setError("Bütün xanaları doldurun");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost/cothink1/cothink/server/articles/articlePost.php",
        {
        //   mentor_id,
          article_title,
          article_desc,
          article_img,
          article_tags,
          category_id,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.status === "success") {
        toast.success("Post uğurla əlavə olundu");
        setArticleTitle("");
        setArticleDesc("");
        setArticleImg("");
        setArticleTags("");
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

  return (
    <div className="research-form">
      <h2 className="text-center font-bold text-3xl pb-5">Post əlavə et</h2>

      <form onSubmit={handlePost}>
        {error && <p className="text-red-600">{error}</p>}

        <input
          type="text"
          placeholder="Başlıq"
          value={article_title}
          onChange={(e) =>  setArticleTitle(e.target.value)}
        />

        <textarea
          placeholder="İzah"
          value={article_desc}
          onChange={(e) =>  setArticleDesc(e.target.value)}
        />

        <input
          type="text"
          placeholder="Şəkil Linki (post_img)"
          value={article_img}
          onChange={(e) =>  setArticleImg(e.target.value)}
        />

        <input
          type="text"
          placeholder="Taglar (vergüllə ayır)"
          value={article_tags}
          onChange={(e) =>  setArticleTags(e.target.value)}
        />

        {/* CATEGORY SELECT */}
        <select
          value={category_id}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Kateqoriya seç</option>

          {categories.map((cat) => (
            <option key={cat.category_id} value={cat.category_id}>
              {cat.category}
            </option>
          ))}
        </select>

        <button type="submit">Yadda saxla</button>
      </form>
    </div>
  );
};

export default AddPost;
