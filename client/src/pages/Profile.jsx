import { useContext, useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CourseCard } from "../components/Courses";
import { ArticleCard } from "../components/Articles";
import Posts, { PostCard } from "../components/Posts";
import axios from "axios";
import Loading from "../utils/Loading";
import { ApiContext } from "../ApiContext";
import { CommentCard } from "../components/Comments";
import { WhatsappShareButton } from "react-share";

const Profile = () => {
  const {apiUrl}= useContext(ApiContext)
  const user=JSON.parse(localStorage.getItem("user"))
  const [activeTab, setActiveTab] = useState(user.type==="mentor" ? "courses" : "studentPosts");
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [mentorPosts, setMentorPosts]=useState([])
  const [studentPosts, setStudentPosts]=useState([]);
  const [postComments, setPostComments]=useState([])

   useEffect(()=>{

    if(user?.type==="mentor"){
 axios.get(`${apiUrl}/server/mentors/mentorCourses.php?mentor_id?=${user?.id}`)
      .then((res) => {
        setCourses(res.data);
        console.log(courses);
      });
         axios.get(`${apiUrl}/server/mentors/mentorArticles.php?mentor_id=${user.id}`)
        .then(res => {
            setArticles(res.data)
            // console.log(res.data) 
        })
            axios.get(`${apiUrl}/server/mentors/mentorPosts.php?mentor_id=${user.id}`)
        .then(res => {
            setMentorPosts(res.data)
            console.log(res.data) 
        })
          }  
          axios.get(`${apiUrl}/server/studentPosts/postsRead.php?id=${user.student_id}`)
        .then(res => {
            setStudentPosts(res.data)

        })
          .catch(()=>{
          setStudentPosts([])
          return <Loading/>})
         axios.get(`${apiUrl}/server/posts/postComments.php?id=${user.student_id}`)
        .then(res => {
            setPostComments(res.data)

        })
        .catch(()=>{
          setPostComments([])
        })
  }, []);

 if(studentPosts.length===0){
  return <Loading/>
 }

  return (
    <section>
      <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <div>
            <img
              src="/images/rauf.jpg"
              className="rounded-full h-24 w-24 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <h4 className="font-bold text-xl">{user?.name}</h4>
            <div className="flex gap-5">
              <span>2.6k tələbə</span>
              <span>38 post</span>
              <span>120 izləyici</span>
              <span>45 izlədiklərim</span>
            </div>
          </div>
        </div>
        {/* <div className="actions flex gap-3">
          <button>
            <IoAddCircleOutline fontSize={24} />
          </button>
          <button>
            <IoMenu fontSize={24} />
          </button>
        </div> */}
      </div>
      <div className="flex gap-3 mt-3 mb-3">
        <a
          className="flex-1 md:flex-none bg-blue-800 text-center text-white rounded-full py-3 px-5"
          href="/profile/edit"
        >
          Profili redaktə et
        </a>
        <button className="flex-1 md:flex-none bg-blue-800 text-white rounded-full  py-3">
          <WhatsappShareButton url={window.location.href} title={user?.name}>    Profili paylaş</WhatsappShareButton>
      
        </button>
      </div>
      <div className="flex justify-center mb-5 mt-5">
      {
        user.type==="mentor" ? <>
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
              activeTab === "mentorPosts" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("mentorPosts")}
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
        </> :

            <div className="switch-toogle flex justify-center items-center mb-5 rounded-full max-w-3xl w-full bg-white border border-gray-200">
          <button
            className={`rounded-full w-full ${
              activeTab === "studentPosts" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("studentPosts")}
          >
          Paylaşılan suallar
          </button>
          <button
            className={` rounded-full w-full ${
              activeTab === "postComments" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("postComments")}
          >
            Cavablar
          </button>

        </div>
      }
     
      </div>
      {activeTab === "courses" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {!Array.isArray(courses) ||  courses?.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Kurs yoxdur hazırda
            </p>
          ) : (
            courses.map((item) => <CourseCard key={item.course_id} item={item} />)
          )}
        </div>
      )}
      {activeTab === "articles" && (
        <>
          {!Array.isArray(articles) ||  articles?.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Məqalə yoxdur hazırda
            </p>
          ) : (
            articles.map((item) => <ArticleCard key={item._id} item={item} />)
          )}
        </>
      )}
      {activeTab === "mentorPosts" &&
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {!Array.isArray(mentorPosts) || mentorPosts?.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Post yoxdur hazırda
            </p> ) :
    (   mentorPosts.map((item) => <PostCard  key={item._id} item={item} />)
    
    )} 
      </div>}
        {activeTab === "studentPosts" &&
      <>
   
       {!Array.isArray ||  studentPosts?.length >0 ? (    
             studentPosts.map((item) =>( <PostCard  key={item._id} item={item} />
          ))) :
    ( 
      <p className="text-center text-xl font-bold col-span-3">
              Postlar tapılmadı
            </p>
    )
  } 
      </>
}
            {activeTab === "postComments" &&
      <>
       {!Array.isArray(postComments) || postComments?.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Cavablar tapılmadı
            </p> ) :
    (   postComments.map((item) => <CommentCard  key={item._id} item={item} />)
    
    )} 
      </>}
    </section>
  );
};

export default Profile;
