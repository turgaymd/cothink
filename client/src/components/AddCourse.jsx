import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FiUploadCloud } from "react-icons/fi";
import Select from "react-select";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";
const AddCourse = ({ setActiveTab }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseImg, setCourseImg] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [coursePrice,setCoursePrice]=useState([])
  const [categoryId, setCategoryId] = useState("");
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const navigate=useNavigate("/share")
  
  const { apiUrl } = useContext(ApiContext);
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

  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleCourse = async (e) => {
    e.preventDefault();

    if (!courseTitle || !courseLink || !lessonTitle  || !coursePrice  ||!categoryId) {
      setError("Bütün xanaları doldurun");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const mentor_id = user?.id;

    if (!mentor_id) {
      toast.error("Mentor kimi daxil olun");
      return;
    }

    const formData = new FormData();
    formData.append("course_title", courseTitle);
    formData.append("category_id", categoryId);
    formData.append("lesson_title", lessonTitle);
    formData.append("video_link", courseLink);
       formData.append("course_price", coursePrice);
    // formData.append("course_img", courseImg);
    formData.append("mentor_id", mentor_id);

     if ( courseImg instanceof File) {
      formData.append("course_img", courseImg);
    }
    
    try {
      const res = await axios.post(
        `${apiUrl}/server/courses/coursePost.php`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (res.data.status === "success") {
        toast.success("Course uğurla əlavə olundu");
        setCourseTitle("");
        setCourseImg("");
        setCourseLink("")
        setLessonTitle("");
         setCoursePrice("")
        setCategoryId("");
        setError("");
      } else {
        setError(res.data.error);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSelect = (selectedCategory) => {
    setCategoryId(selectedCategory.value);
  };
  const handleReset=()=>{
        setCourseTitle("");
        setCourseImg("");
        setCourseLink("")
        setLessonTitle("");
         setCoursePrice("")
        setCategoryId("");
        setActiveTab("nothing")
}
  return (
    <>
      <ToastContainer />
      <div className="research-form">
        <h2 className="text-center font-bold text-3xl">Kurs əlavə et</h2>
        <p className="text-center text-gray-400 pb-3">
          Kurs məlumatları və dərsləri daxil edin
        </p>
        <form className="mt-5" onSubmit={handleCourse}>
          {error && (
            <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
              {error}
            </p>
          )}

          <h2 className="text-center font-bold text-xl">Kurs Məlumatları</h2>
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
          <div className="mb-4 mt-4">
            <label
              htmlFor="description"
              className="block title font-semibold text-gray-900 pb-2"
            >
              Kurs adı
            </label>
            <input
              type="text"
              className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg"
              placeholder="Kursun adını daxil edin"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
           <div className="mb-4 mt-4">
            <label
              htmlFor="description"
              className="block title font-semibold text-gray-900 pb-2"
            >
              Kursun qiyməti
            </label>
            <input
              type="number"
              max={50}
              className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg"
              placeholder="Kursun qiymətini daxil edin"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block title font-semibold text-gray-900 pb-2"
              htmlFor="title"
            >
              Dərs Başlığı
            </label>
            <input
              className="w-full form-input border border-gray-300 px-3 py-1.5 outline-none rounded-lg dark:bg-gray-700 dark:text-white dark:border-none"
              placeholder="Dərsin başlığını daxil edin"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
            />
          </div>
          <div className="mb-4 mt-4">
            <label
              htmlFor="link"
              className="block title font-semibold text-gray-900 pb-2"
            >
              Video Linki
            </label>
            <input
              type="text"
              className="w-full form-input border border-gray-300 px-3 py-2 outline-none rounded-lg"
              placeholder="YouTube, Vimeo və ya digər video linkini daxil edin"
              value={courseLink}
              onChange={(e) => setCourseLink(e.target.value)}
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
                  setCourseImg(file);
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />
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

export default AddCourse;
