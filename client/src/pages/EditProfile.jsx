import axios from "axios";
import { useState, useRef, useContext, useEffect } from "react";
import { ApiContext } from "../ApiContext";
import { AuthContext } from "../AuthContext";
import { toast, ToastContainer } from "react-toastify";

const EditProfile = () => {
   const {user ,setUser}=useContext(AuthContext)
  const {apiUrl}=useContext(ApiContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("+994");
  // const [gender, setGender] = useState("Kişi");
  const [password, setPassword] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [profileImg, setProfileImg]=useState("")
  const [username, setUsername] = useState("");
  const fileInputRef = useRef(null);

useEffect(()=>{
  if(!user) return;
  if(user.type==="mentor"){
axios.get(`${apiUrl}/server/mentors/mentorDetail.php?id=${user.id}`)
      .then(res => {
        const data=res.data.data
  
    setName(data.mentor_name || "")
    setEmail(data.mentor_email || "")
    setPassword(data.mentor_password || "")
    setUsername(data.mentor_username || "")
    setAbout(data.description || "")
    setLinkedin(data.linkedn_link || "")
    setProfileImg(data.profile_img || "")
  });
  }
  else{
axios.get(`${apiUrl}/server/students/studentProfil.php?id=${user.id}`)
      .then(res => {
        const data=res.data.data
        console.log(res)
    setName(data.student_name || "")
    setEmail(data.student_email || "")
    setPassword(data.student_password || "")
    setUsername(data.student_username || "")
    setAbout(data.description || "")
    setLinkedin(data.linkedn_link || "")
    setProfileImg(data.profile_img || "")
  });
  }
},[user])

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if(user.type==="mentor"){
    formData.append("mentor_id", user.id);
    formData.append("mentor_name", name);
    formData.append("mentor_username", username);
    formData.append("mentor_email", email);
    formData.append("description", about);
    formData.append("linkedn_link", linkedin);
    if(password.trim()){
    formData.append("mentor_password", password);
    }
  }
   if(user.type==="student"){
    formData.append("student_id", user.id);
    formData.append("student_name", name);
    formData.append("student_username", username);
    formData.append("student_email", email);
    formData.append("description", about);
    if(password.trim()){
    formData.append("student_password", password);
    }
    formData.append("linkedn_link", linkedin);
  }
 
    if (fileInputRef.current.files[0]) {
      formData.append("profile_img", fileInputRef.current.files[0].value);
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

  };

  return (
    <>
    <ToastContainer/>
    <section>
    <div className="max-w-lg mx-auto">
      <h2 className="font-bold text-2xl text-center mb-5 pb-3">
        Profili redaktə et
      </h2>
      <form onSubmit={submitForm} className="space-y-4 mt-5 mb-5">

        <div className="flex gap-3 items-center">
          <div>
            <img
              src={profileImg || "/images/admin.png"}
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold flex justify-center">{user?.name}</h4>

            <input
              ref={fileInputRef}
              type="file"
              className="sr-only"
              accept="image/*"
            />

            <button type="button" className="text-blue-500" onClick={handleUpload}>
              Profil şəklini dəyiş
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Ad</label>
          <input
            type="text"
            value={name}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">İstifadəçi adı</label>
          <input
            type="text"
            value={username}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Email</label>
          <input
            type="text"
            value={email}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Bio</label>
          <textarea
            rows={3}
            value={about}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        {/* <div className="flex gap-5 items-center">
          <label className="font-bold w-40 shrink-0">Telefon nömrəsi</label>
          <input
            type="text"
            value={phone}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div> */}
        {/* <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Cinsi</label>
          <select>
            <option >Kişi</option>
          </select>
          <input
            type="text"
            value={gender}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setGender(e.target.value)}
          />
        </div> */}

        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Şifrə</label>
          <input
            type="password"
            value={password} 
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            placeholder="12345"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">LinkedIn</label>
          <input
            type="text"
            value={linkedin}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-5 ">
          <button
            type="submit"
            className="bg-blue-800 rounded-md text-white px-4 py-2"
          >
            Göndər
          </button>

          <button type="button" className="rounded-md text-blue-800">
            Hesabımı müvəqqəti deaktiv et
          </button>
        </div>

      </form>
    </div>
    </section>
    </>
  );
};

export default EditProfile;
