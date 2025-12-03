import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiUploadCloud } from "react-icons/fi";
import Select from "react-select";
const AddCourse = ({ setActiveTab }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseFile, setCourseFile] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");

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

  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleCourse = async (e) => {
    e.preventDefault();

    if (!courseTitle || !courseFile || !courseLink || !lessonTitle) {
      setError("Bütün xanaları doldurun");
      return;
    }

    const formData = new FormData();
    formData.append("course_title", courseTitle);
    formData.append("category_id", categoryId);
    formData.append("lesson_title", lessonTitle);
    formData.append("video_link", courseLink);
    formData.append("course_file", courseFile); // FAYL BURADADIR
    formData.append("mentor_id", 7); // test üçün, sonra localStorage-dən götürərsən

    try {
      const res = await axios.post(
        "http://localhost/cothink1/cothink/server/courses/coursePost.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "success") {
        toast.success("Kurs uğurla əlavə olundu");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Xəta baş verdi");
    }
  };

  const handleSelect = (selectedCategory) => {
    setCategoryId(selectedCategory.value);
  };
  return (
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
          <label htmlFor="category" className="block title font-semibold pb-2">
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
            onChange={(e) => setCourseTitle(e.target.value)}
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
            onChange={(e) => setCourseLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block title font-semibold text-gray-900 pb-2"
          >
            Fayllar
          </label>
          <div className="flex justify-center items-center bg-gray-100 flex-col gap-3 border border-gray-300 p-5 rounded-2xl">
            <button
              className="find-btn text-blue-500 px-3 py-2"
              onClick={handleUpload}
            >
              <FiUploadCloud fontSize={24} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              className="sr-only"
              onChange={(e) => setCourseFile(e.target.files[0])}
            />
            PNG, JPG, PDF, DOC və digər fayllar dəstəklənir
            <p className="font-semibold">
              Faylları buraya sürükləyin və ya yükləyin
            </p>
            <p className="text-gray-400">
              PNG, JPG, PDF, DOC və digər fayllar dəstəklənir
            </p>
          </div>
        </div>
        <div className="submit-form mt-5 gap-3 flex flex-col md:flex-row justify-center items-center">
          <button
            className="border w-64 border-blue-800 text-blue-800 px-7 py-4"
            onClick={() => setActiveTab("nothing")}
          >
            Ləğv et
          </button>
          <button
            type="submit"
            className="w-64 text-white bg-blue-800 px-7 py-4"
          >
            Yadda Saxla
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
