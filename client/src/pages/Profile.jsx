import { useContext, useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CourseCard } from "../components/Courses";
import { ArticleCard } from "../components/Articles";
import Posts, { PostCard } from "../components/Posts";
import axios from "axios";
import { ApiContext } from "../ApiContext";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [posts, setPosts]=useState([])
  const {apiUrl}= useContext(ApiContext)
    const user=JSON.parse(localStorage.getItem("user"))
   useEffect(()=>{
          axios.get(`${apiUrl}/server/mentors/mentorCourses.php?id=${user.mentor_id}`)
      .then((res) => {
        setCourses(res.data.data);
        console.log(courses);
      });
      
      axios.get(`${apiUrl}/server/mentors/mentorArticles.php?id=${user.mentor_id}`)
        .then(res => {
            setArticles(res.data)
            console.log(res.data) 
        })
         axios.get(`${apiUrl}/server/mentors/mentorPosts.php?id=${user.mentor_id}`)
        .then(res => {
            setPosts(res.data)
            console.log(res.data) 
        })
  }, []);

  return (
    <section>
      <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <div>
            <img
              src="rauf.jpg"
              className="rounded-full h-24 w-24 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center">
            {/* <h4 className="font-bold text-xl">{user?.name}</h4> */}
            <div className="flex gap-5">
              <span>2.6k tələbə</span>
              <span>38 post</span>
              <span>120 izləyici</span>
              <span>45 izlədiklərim</span>
            </div>
          </div>
        </div>
        <div className="actions flex gap-3">
          <button>
            <IoAddCircleOutline fontSize={24} />
          </button>
          <button>
            <IoMenu fontSize={24} />
          </button>
        </div>
      </div>
      <div className="flex gap-3 mt-3 mb-3">
        <a
          className="flex-1 md:flex-none bg-blue-800 text-center text-white rounded-full py-3 px-5"
          href="/profile/edit"
        >
          Profili redaktə et
        </a>
        <button className="flex-1 md:flex-none bg-blue-800 text-white rounded-full  py-3">
          Profili paylaş
        </button>
      </div>
      <div className="flex justify-center mb-5 mt-5">
        <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
          <button
            className={`rounded-full w-full ${
              activeTab === "courses" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Kurslar
          </button>
          <button
            className={` rounded-full w-full ${
              activeTab === "posts" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("posts")}
          >
            Postlar
          </button>
          <button
            className={`rounded-full w-full ${
              activeTab === "articles" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("articles")}
          >
            Məqalələr
          </button>
        </div>
      </div>
      {activeTab === "courses" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {courses.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Kurs tapılmadı.
            </p>
          ) : (
            courses.map((item) => <CourseCard key={item.course_id} item={item} />)
          )}
        </div>
      )}
      {activeTab === "articles" && (
        <>
          {articles.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Məqalə tapılmadı
            </p>
          ) : (
            articles.map((item) => <ArticleCard key={item._id} item={item} />)
          )}
        </>
      )}
      {activeTab === "posts" &&
      <>
       {posts.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Məqalə tapılmadı
            </p> ) :
    (   posts.map((item) => <PostCard  key={item._id} item={item} />)
    
    )} 
      </>}
    </section>
  );
};

export default Profile;
