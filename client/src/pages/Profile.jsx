import { useContext, useEffect, useRef, useState } from "react";
import { CourseCard } from "../components/Courses";
import { ArticleCard } from "../components/Articles";
import Posts, { PostCard } from "../components/Posts";
import axios from "axios";
import { ApiContext } from "../context/ApiContext";
import { CommentCard } from "../components/Comments";
import { WhatsappShareButton } from "react-share";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const {apiUrl}= useContext(ApiContext)
  const {user,setUser}=useContext(AuthContext)
  const [activeTab, setActiveTab] = useState(user?.type==="mentor" ? "courses" : "studentPosts");
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [mentorPosts, setMentorPosts]=useState([])
  const [studentPosts, setStudentPosts]=useState([]);
  const [postComments, setPostComments]=useState([])
  const [mentor, setMentor]=useState(null) 
  const [student, setStudent]=useState(null)
  const [profileImg, setProfileImg]=useState("")
  const [linkedin, setLinkedin] = useState("");
  const [edit, setEdit]=useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [username, setUsername] = useState("");

  const fileInputRef = useRef(null);
useEffect(() => {
  if(!user) return;
  const fetchingProfile = async ()=>{

     try{
    const [mentorRes,courseRes, postRes, articleRes] = await Promise.all([
  axios.get(`${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`),
  axios.get(`${apiUrl}/server/mentors/mentorCourses.php?mentor_id=${user.id}`),
  axios.get(`${apiUrl}/server/mentors/mentorPosts.php?mentor_id=${user.id}`),
  axios.get(`${apiUrl}/server/mentors/mentorArticles.php?mentor_id=${user.id}`),   
    ])
   setMentor(mentorRes.data.data);
    setCourses(courseRes.data);
    setMentorPosts(postRes.data);
    setArticles(articleRes.data);
    const mentorData=mentorRes.data.data
    setName(mentorData.mentor_name || "")
    setEmail(mentorData.mentor_email || "")
    setUsername(mentorData.mentor_username || "")
    setAbout(mentorData.description || "")
    setLinkedin(mentorData.linkedn_link || "")
     setProfileImg(mentorData?.profile_img ? `https://cothink.az${mentorData?.profile_img}` : "/images/admin.png")
     }
     catch(err){
      console.log(err)
     }
  }
    const fetchStudent=async()=>{
 const [studentRes, studentPostRes, studentCommentRes] = await Promise.all([
   axios.get(`${apiUrl}/server/students/studentProfil.php?id=${user.id}`),
  axios.get(`${apiUrl}/server/students/studentPost.php?student_id=${user.id}`),
    axios.get(`${apiUrl}/server/students/studentcomments.php?student_id=${user.id}`),
 ])

  setStudentPosts(studentPostRes.data.data)
 setPostComments(studentCommentRes.data) 
  setStudent(studentRes.data.data);
   const studentData=studentRes.data.data
    setName(studentData.student_name || "")
    setEmail(studentData.student_email || "")
    setUsername(studentData.student_username || "")
    setAbout(studentData.description || "")
    setProfileImg(studentData?.profile_img ? `https://cothink.az${studentData?.profile_img}` : "/images/admin.png")
    }
  if (user?.type === "mentor") {
  fetchingProfile()
  }
  else{
  fetchStudent()
  }
}, [apiUrl, user]);



    const handleUpload = (e) => {
    e.preventDefault();
    setEdit(true)
    fileInputRef.current.click();

  };
  const handleChange=(e)=>{
        const file=e.target.files[0]
    if(file){
      setProfileImg(URL.createObjectURL(file))
    }
  }

      const submitForm = async (e) => {
        e.preventDefault()
    const formData = new FormData();
 if(user.type==="mentor"){
     formData.append("mentor_id", user.id);
    formData.append("mentor_name", name);
    formData.append("mentor_username", username);
    formData.append("mentor_email", email);
    formData.append("description", about);
    formData.append("linkedn_link", linkedin);
  }


   if(user.type==="student"){
    formData.append("student_id", user.id);
    formData.append("student_name", name);
    formData.append("student_username", username);
    formData.append("student_email", email);
    formData.append("description", about);
  }
 
    if (fileInputRef.current.files[0]) {
      formData.append("profile_img", fileInputRef.current.files[0]);
    }
try{
  const url= user.type==="mentor" ? 
  `${apiUrl}/server/profile/updateProfile.php?mentor_id=${user.id}` 
  : `${apiUrl}/server/students/updateProfile.php?student_id=${user.id}`
   const res = await axios.post(url,  formData)
    console.log(res.data)
    if(res.data.status==="success"){
         setUser((prev)=>({
         ...prev,
        name:name,
        email:email,
        profile_img: res.data.image ? `https://cothink.az${res.data.image}` : prev.profile_img
      }))
     
       toast.success("Profil uğurla yeniləndi")
       setEdit(false)
    }
    if(res.data.status==="error"){
      console.log(res.data.error)
    }
}
catch(err){
  console.log(err)
}
}
  return (
    <>
    <ToastContainer/>
    <section>
      <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <div>
         
               <img 
              src={profileImg }
              className="rounded-full h-24 w-24 object-cover"
            />

          </div>
          <div className="flex flex-col gap-3 justify-center">
            <h4 className="font-bold text-xl text-center md:text-left">{mentor?.mentor_name || student?.student_name}</h4>
            <div className="flex gap-5">
              <span>0 tələbə</span>
              <span>{user.type==="mentor" ? mentorPosts.length : studentPosts.length} post</span>
              <span>0 izləyici</span>
              <span>0 izlədiklərim</span>
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
      <form onSubmit={submitForm}>
      <div className="flex md:flex-row flex-col gap-3 mt-3 mb-3">
          <input
                      ref={fileInputRef}
                      onChange={handleChange}
                      type="file"
                      className="sr-only"
                      accept="image/*"
                    />
                    {
                      edit ? (
                         <button className="flex-1 md:flex-none bg-blue-800 text-center text-white rounded-full py-3 px-5" type="submit">Yadda saxla</button> 
                      )
                      :   (<button
          className="flex-1 md:flex-none bg-blue-800 text-center text-white rounded-full py-3 px-5"
           onClick={handleUpload} type="button"
        >
          Profil şəklini dəyiş 
        </button>)
                    }
      
        <button className="flex-1 md:flex-none bg-blue-800 text-white rounded-full  py-3">
          <WhatsappShareButton url={window.location.href} title={user?.name}>    Profili paylaş</WhatsappShareButton>
      
        </button >
       
      </div>
      </form>
      <div className="flex justify-center mb-5 mt-5">
      {
        user.type==="mentor" ? <>
           <div className="switch-toogle flex justify-center items-center mb-5 max-w-3xl w-full  border border-gray-200">
          <button
            className={` whitespace-nowrap md:rounded-full rounded-md  w-full ${
              activeTab === "courses" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Kurslar
          </button> 
          <button
            className={` whitespace-nowrap md:rounded-full rounded-md  w-full ${
              activeTab === "mentorPosts" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("mentorPosts")}
          >
            Postlar
          </button>
          <button
            className={` whitespace-nowrap md:rounded-full rounded-md  w-full ${
              activeTab === "articles" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("articles")}
          >
            Bloqlar
          </button>
        </div>
        </> :

            <div className="switch-toogle flex justify-center items-center mb-5  md:rounded-full rounded-md max-w-3xl w-full  border border-gray-200">
          <button
            className={` whitespace-nowrap md:rounded-full rounded-md w-full ${
              activeTab === "studentPosts" ? "bg-blue-800 text-white" : ""
            }`}
            onClick={() => setActiveTab("studentPosts")}
          >
          Paylaşılan suallar
          </button>
          <button
            className={` whitespace-nowrap md:rounded-full rounded-md w-full ${
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
       { mentorPosts?.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Post yoxdur hazırda
            </p> ) :
    (   mentorPosts.map((item) => <PostCard  key={item._id} item={item} />)
    
    )} 
      </div>}
        {activeTab === "studentPosts" &&
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   
       {!Array.isArray(studentPosts) ||  studentPosts?.length >0 ? (    
             studentPosts.map((item) =>( <PostCard  key={item.post_id} item={item} />
          ))) :
    ( 
      <p className="text-center text-xl font-bold col-span-3">
              Postlar tapılmadı
            </p>
    )
  } 
      </div>
}
            {activeTab === "postComments" &&
      <>
       {!Array.isArray(postComments) || postComments?.length === 0 ? (
            <p className="text-center text-xl font-bold col-span-3">
              Cavablar tapılmadı
            </p> ) :
    (   postComments.map((item) => <CommentCard  key={item.id} item={item} />)
    
    )} 
      </>}
    </section>
    </>
   
  );
};

export default Profile;
