import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddPost = () => {
  const [post_title, setPostTitle] = useState("");
  const [post_desc, setPostDesc] = useState("");
  const [post_img, setPostImg] = useState("");
  const [post_tags, setPostTags] = useState("");
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
    const student_id = user?.student_id;

    if (!student_id) {
      toast.error("LocalStorage-də user tapılmadı!");
      return;
    }

    if (!post_title || !post_desc || !category_id) {
      setError("Bütün xanaları doldurun");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost/cothink1/cothink/server/studentPosts/postsPost.php",
        {
          student_id,
          post_title,
          post_desc,
          post_img,
          post_tags,
          category_id,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.status === "success") {
        toast.success("Post uğurla əlavə olundu");
        setPostTitle("");
        setPostDesc("");
        setPostImg("");
        setPostTags("");
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
          value={post_title}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <textarea
          placeholder="İzah"
          value={post_desc}
          onChange={(e) => setPostDesc(e.target.value)}
        />

        <input
          type="text"
          placeholder="Şəkil Linki (post_img)"
          value={post_img}
          onChange={(e) => setPostImg(e.target.value)}
        />

        <input
          type="text"
          placeholder="Taglar (vergüllə ayır)"
          value={post_tags}
          onChange={(e) => setPostTags(e.target.value)}
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
