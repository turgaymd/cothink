import axios from "axios";
import { useState, useRef, useContext, useEffect } from "react";
import { ApiContext } from "../ApiContext";
import { AuthContext } from "../AuthContext";

const EditProfile = () => {
   const {user}=useContext(AuthContext)
  const {apiUrl}=useContext(ApiContext)
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("+994 971");
  const [gender, setGender] = useState("Kişi");
  const [password, setPassword] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const fileInputRef = useRef(null);
useEffect(()=>{
  if(user){
    setName(user.name)
    setEmail(user.email)
  }
},[user])

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mentor_id", user.mentor_id);
    formData.append("mentor_name", name);
    formData.append("mentor_username", username);
    formData.append("mentor_email", email);
    formData.append("description", about);
    formData.append("mentor_password", password);
    formData.append("linkedin_link", linkedin);

    if (fileInputRef.current.files[0]) {
      formData.append("profile_img", fileInputRef.current.files[0]);
    }
try{
   const res = await axios.post(`${apiUrl}server/profile/updateProfile.php`,  formData)
    console.log(res.data)
}
catch(err){
  console.log(err)
}

  };

  return (
    <section>
    <div className="max-w-lg mx-auto">
      <h2 className="font-bold text-2xl text-center mb-5 pb-3">
        Profili redaktə et
      </h2>
      <form onSubmit={submitForm} className="space-y-4 mt-5 mb-5">

        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/images/emil.jpg"
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
        <div className="flex gap-5 items-center">
          <label className="font-bold w-40 shrink-0">Telefon nömrəsi</label>
          <input
            type="text"
            value={phone}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Cinsi</label>
          <input
            type="text"
            value={gender}
            className="w-full px-3 py-2 border border-gray-300 outline-none"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Şifrə</label>
          <input
            type="password"
            value={password} 
            className="w-full px-3 py-2 border border-gray-300 outline-none"
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
  );
};

export default EditProfile;
