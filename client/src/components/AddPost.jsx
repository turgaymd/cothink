import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Select from "react-select";
import { IoMdClose } from "react-icons/io";
import { ApiContext } from "../context/ApiContext";
import { TbChevronsDownLeft } from "react-icons/tb";
import { AuthContext } from "../context/AuthContext";
const AddPost = ({ setActiveTab }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [postImg, setPostImg] = useState("");
  const [postTags, setPostTags] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const { apiUrl } = useContext(ApiContext);
  const {user}=useContext(AuthContext);
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

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


  const student_id=user?.id
  const mentor_id = user?.id;

  const handlePost = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("LocalStorage-də user tapılmadı!");
      return;
    }
    if (!postTitle || !categoryId || !postDesc || !postTags) {
      setError("Bütün xanaları doldurunn");
      return;
    }
    const formData = new FormData();
    if(user.type==="mentor"){
    formData.append("mentor_id", mentor_id);
    }
    else{
    formData.append("student_id", student_id);
    }
    formData.append("category_id", categoryId);
    formData.append("post_title", postTitle);
    formData.append("post_desc", postDesc); 
    formData.append("post_tags", postTags.join(","));

    if (postImg instanceof File) {
      formData.append("post_img", postImg);
    }

    try {
    const url=user.type==="mentor" ? `${apiUrl}/server/posts/postsPost.php` : `${apiUrl}/server/studentPosts/postsPost.php`;
   const res = await axios.post(url,formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
     
      if (res.data.status==="success") {
        toast.success("Post uğurla əlavə olundu");
        setPostTitle("");
        setPostDesc("");
        setPostImg(null);
        setPostTags([]);
        setCategoryId("");
        setPreview(null);
        setInput("")
        setError("");
      } else {
                toast.error(res.data.message);
          
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleSelect = (selectedCategory) => {
    setCategoryId(selectedCategory.value);
  };
  const handleTags = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = input.trim();
      if (newTag && !postTags.includes(newTag)) {
        setPostTags([...postTags, newTag]);
        setInput("");
      }
    }
  };
  const handleRemove = (removedTag) => {
    setPostTags(postTags.filter((tag) => tag !== removedTag));
  };

  const handleReset=()=>{
        setPostTitle("");
        setPostDesc("");
        setPostImg(null);
        setPostTags([]);
        setCategoryId("");
        setPreview(null);
        setInput("")
        setActiveTab("nothing")
  }
  return (
    <>
      <ToastContainer />
      <div className="research-form">
        <h2 className="text-center font-bold text-3xl pb-5">Post əlavə et</h2>
        <form className="mt-5" onSubmit={handlePost}>
          {error && (
            <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
              {error}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block title font-semibold pb-2" htmlFor="title">
                Post başlığı
              </label>
              <textarea
                className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg "
                cols={5}
                rows={3}
                  value={postTitle}
                placeholder="Post başlığı əlavə edin"
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block title font-semibold pb-2"
              >
                Qısa İzah / Post Haqqında
              </label>
              <textarea
                className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg"
                cols={5}
                rows={3}
                value={postDesc}
                placeholder="Post haqqında 1–2 cümləlik açıqlama"
                onChange={(e) => setPostDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block title font-semibold pb-2"
            >
              Kateqoriya
            </label>
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
            <label htmlFor="title" className="block title font-semibold pb-2">
              Şəkillər
            </label>
            <div className="flex justify-center items-center flex-col gap-3 border border-gray-300 p-5 rounded-2xl">
              {preview && (
                <img src={preview} alt="Preview" className="w-32 h-32" />
              )}
              <img src="/images/image_icon.png" />
              <input
                ref={fileInputRef}
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPostImg(file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
              <p className="text-gray-500 md:flex hidden" >Şəkilləri buraya sürükləyin və ya</p>
              <button
                className="find-btn text-white bg-blue-800 rounded-md px-3 py-2 "
                onClick={handleUpload}
              >
                Axtar
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <label
                htmlFor="title"
                className="block title font-semibold text-gray-900 pb-2"
              >
                Etiketlər
              </label>
              <input
                type="text"
                className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg"
                placeholder="Mövzunu ifadə edən açar sözlər əlavə edin və enteri basın"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleTags}
              />
              {postTags.map((tag) => (
                <div
                  key={tag}
                  className="flex  justify-between  items-center bg-blue-600 text-white rounded-md px-5 py-1"
                >
                  {tag}
                  <button onClick={() => handleRemove(tag)}>
                    <IoMdClose fontSize={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="submit-form mt-5 gap-3 flex flex-col md:flex-row justify-center items-center">
            <button
              className="border md:w-64 w-full border-blue-800 text-blue-800 px-7 py-4 rounded-md" type="button"
              onClick={handleReset}
            >
              Ləğv et
            </button>
            <button
              type="submit"
              className="md:w-64 w-full text-white bg-blue-800 px-7 py-4 rounded-md"
            >
              Yadda Saxla
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddPost;