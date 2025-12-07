import { useState, useEffect, useContext } from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { CourseCard } from "../components/Courses";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import Articles, { ArticleCard } from "../components/Articles";
import Posts from "../components/Posts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiContext } from "../ApiContext";
import mentors from "../data/MentorsData";
import courses from "../data/coursesData";

const Mentor = () => {
  const [activeTab, setActiveTab] = useState("courses");
  // const [mentor, setMentor] = useState(null);
  // const [courses, setCourses] = useState([]);
   const [articles, setArticles] = useState([]);
   const [posts,setPosts]=useState([])
   const {apiUrl}=useContext(ApiContext)
  const { id } = useParams();

  useEffect(() => {
    // axios
    //   .get(`${apiUrl}/server/mentors/mentorDetail.php?id=${id}`)
    //   .then((res) => {
    //     setMentor(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
    //      axios
    //   .get(`${apiUrl}/server/mentors/mentorCourses.php?id=${id}`)
    //   .then((res) => {
    //     setCourses(res.data);
    //   })
      // .catch((err) => console.log(err));
       axios
      .get(`${apiUrl}/server/books/bookRead.php`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
       axios
      .get(`${apiUrl}/server/articles/articleRead.php`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const mentor = mentors.find(m => m.mentor_id == id);

  if (!mentor) {
    return <p className="text-center text-xl mt-8">Mentor tapılmadı</p>;
  }
  return (
    <div>
      <section>
        <h2 className="text-center font-bold text-2xl ">Mentor Profili </h2>
        <div className="mentor-profile mt-4 ">
          <div className="bg-white shadow-3xl border border-gray-200 rounded-lg px-10 py-4">
            <div className="gap-2 grid grid-cols-1 lg:grid-cols-2">
              <div className="profil-img flex flex-col justify-center items-center">
                <img
                  src="/emil.jpg"
                  className="mentor-avatar rounded-full object-cover"
                />
                <div className="flex justify-end gap-5 comment-reactions pt-3 text-blue-700">
                  <div className="like-count flex items-center gap-2">
                    <HiOutlineUsers fontSize={24} /> {mentor.students} tələbə
                  </div>
                    <div className="like-count flex items-center gap-2">
                    <HiOutlineUsers fontSize={24} /> {mentor.comments} Rəy (100+)
                  </div>
                </div>
              </div>
              <div className="mentor-info flex flex-col gap-2">
                <h4 className="font-bold text-xl">{mentor.mentor_name}</h4>
                <p>{mentor.description}</p>

                <div className="flex gap-4">
                  {/* <span className="bg-white rounded-full px-4 py-2 border border-gray-400">
                    {mentor.position}
                  </span> */}
                  <a href={mentor.linkedn_link} className="border border-gray-400 px-3 py-1 rounded-md"><SlSocialLinkedin fontSize={24}/></a>
                 <a href={mentor.website_link} className="border border-gray-400 px-3 py-1 rounded-md"><TbWorld fontSize={24}/></a>
                  <a></a>
                </div>
                <p className="pt-3">Danışıq dilləri:</p>
                <div className="flex md:flex-row flex-col gap-3 mt-2 mb-5">
                  <span className="bg-white rounded-md px-4 py-2 border border-gray-400">Azərbaycan</span>
                  <span className="bg-white rounded-md px-4 py-2 border border-gray-400">Alman</span>
                  <span className="bg-white rounded-md px-4 py-2 border border-gray-400">Ingilis</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
            <button
              className={`rounded-full w-full ${activeTab === "courses" ? "bg-blue-700 text-white" : ""}`}
              onClick={() => setActiveTab("courses")}
            >
              Kurslar
            </button>

            <button
              className={`rounded-full w-full ${activeTab === "posts" ? "bg-blue-700 text-white" : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              Postlar
            </button>

            <button
              className={`rounded-full w-full ${activeTab === "articles" ? "bg-blue-700 text-white" : ""}`}
              onClick={() => setActiveTab("articles")}
            >
              Məqalələr
            </button>
          </div>
        </div>

        <div>
          {activeTab === "courses" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {courses.length === 0 ? (
                <p className="text-center text-xl font-bold col-span-3">
                  Kurs tapılmadı
                </p>
              ) : (
                courses.map((item) => (
                  <CourseCard key={item._id} item={item} />
                ))
              )}
            </div>
          )}
           {activeTab === "articles" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {articles.length === 0 ? (
                <p className="text-center text-xl font-bold col-span-3">
                  Kurs tapılmadı
                </p>
              ) : (
                articles.map((item) => (
                  <ArticleCard key={item._id} item={item} />
                ))
              )}
            </div>
          )}

          {
             activeTab === "posts" &&  <Posts />
          }
                 
            
        
        </div>
      </section>
    </div>
  );
};

export default Mentor;