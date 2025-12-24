import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { BsBack } from "react-icons/bs";
import { ApiContext } from "../context/ApiContext";
import Select from "react-select"
const About=({ setActiveTab})=>{
  const {user,setUser}=useContext(AuthContext)
  const [name, setName]=useState("")
  const [lastName, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [linkedin, setLinkedin] = useState("");
  const [subject, setSubject] = useState(""); 
  const [phone, setPhone]=useState("+994  ")
  const [error, setError] = useState("");
  const {apiUrl}=useContext(ApiContext)
  const [edit ,setEdit]=useState(false)
  const [categories,setCategories]=useState([])


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

  const handleSelect = (selectedCategory) => {
    setSubject(selectedCategory.value);
  };


  useEffect(()=>{
    if(!user) return;
    if(user.type==="mentor"){
  axios.get(`${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`)
        .then(res => {
          const data=res.data.data
      setName(data.mentor_name || "")
      setEmail(data.mentor_email || "")
      setLinkedin(data.linkedn_link || "")
    });
    }
    else{
  axios.get(`${apiUrl}/server/students/studentProfil.php?id=${user.id}`)
        .then(res => {
          const data=res.data.data
          console.log(data)
      setName(data.student_name || "")
      setEmail(data.student_email || "")
    });
    }
  },[user])


 const handleEdit= async (e) => {
    e.preventDefault();
    setEdit(true)
    const formData = new FormData();
    if(user.type==="mentor" ){
      if(!name || !email ){
        toast.error("İstifadəçi adı, email boş ola bilməz")
        return;
      }
    formData.append("mentor_id", user.id);
    formData.append("mentor_name", name);
    formData.append("mentor_email", email);
    formData.append("linkedn_link", linkedin);
    
  }
   if(user.type==="student"){
         if(!name || !email ){
        toast.error("İstifadəçi adı, email boş ola bilməz")
        return;
      }
    formData.append("student_id", user.id);
    formData.append("student_name", name);
    formData.append("student_email", email);
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
    }
    if(res.data.status==="error"){
      console.log(res.data.error)
    }
}
 
catch(err){
  console.log(err)
}
   }


    return(
      <>
      <ToastContainer/>
        <section>
          <div className="back md:hidden flex" onClick={()=>setActiveTab("")}>
            <button ><MdOutlineArrowBackIosNew fontSize={24}/></button>
          </div>
          <h2 className="font-bold text-2xl text-center mb-3">Haqqımda</h2>
 <div className="flex justify-center md:p-5 p-0">
      <div className="card w-full ">
        <div className="card-body ">
         
             {error && (
          <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
            {error}
          </p>
        )}
            <div  className="flex justify-end text-blue-800 cursor-pointer"><button  className="flex gap-2" onClick={()=>setEdit(true)}><MdOutlineEdit fontSize={24} />Redaktə et</button></div>
             <form className="login-form mx-auto " onSubmit={handleEdit}>
              <div className="mb-5">
              <label
                htmlFor="name"
                className="text-gray-900 font-semibold mb-4"
              >
               Ad
              </label>
              <div className="relative">
                <input
                  type= "text"
                  id="name"
                   value={name}
                   disabled={!edit ? true : false}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>
            </div>
              <div className="mb-5">
              <label
                htmlFor="lastName"
                className="font-semibold mb-4"
              >
               Soyad
              </label>
              <div className="relative">
                <input
                  type="text" 
                  value={lastName}
                   disabled={!edit ? true : false}
                  onChange={(e)=>setLastName(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                ></input>
              </div>
            </div>
                  <div className="mb-5">
              <label
                htmlFor="email"
                className="font-semibold mb-4"
              >
                E-mail
              </label>
              <div className="relative">
                <input
                  type= "text" 
                  id="email"
                  value={email}
                  disabled={!edit ? true : false}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
  
                ></input>
              </div>
            </div>
            {
              user.type==="mentor" && (
                <>
                 <div className="mb-5">
              <label
                htmlFor="email"
                className="font-semibold mb-4"
              >
                LinkedIn hesabım
              </label>
              <div className="relative">
                <input
                  type= "text" 
                  id="email"
                  value={linkedin}
                  disabled={!edit ? true : false}
                  onChange={(e)=>setLinkedin(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
  
                ></input>
              </div>
            </div>
            
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="font-semibold mb-4"
              >
                Fənn
              </label>
              <div className="relative">
            <Select
            options={categories.map((item) => ({
              value: item.category_id,
              label: item.category,
            }))}
            onChange={handleSelect}
            placeholder="Fənn seçin"
          />
                 
              </div>
            </div>
            </>
              )
            }
      
            
             <div className="mb-5">
              <label
                htmlFor="phone"
                className="font-semibold mb-4"
              >
                Telefon nömrəsi
              </label>
              <div className="relative">
                <input
                  type= "text" 
                  id="phone"
                   disabled={!edit ? true : false}
                  placeholder={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                ></input>
              </div>

            </div>
            {
              edit ? ( <div className="submit-form mt-5 gap-3 flex flex-col md:flex-row justify-center items-center">
         
            <button type="button"
              className="border md:w-64 w-full border-blue-800 text-blue-800 px-7 py-4 rounded-md"
              onClick={()=>setEdit(false)}
            >
              Ləğv et
            </button>
            <button
              type="submit"
              className="md:w-64 w-full text-white bg-blue-800 px-7 py-4 rounded-md"
            >
              Yadda Saxla
            </button>
            </div> ) : <></>
            } 
          </form>
          
        </div>
      </div>
    </div>


        </section>
        </>
    )
}
export default About;