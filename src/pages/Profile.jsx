import { useState, useRef } from "react";
const Profile = () => {
  const [name, setName]=useState("Rauf")
  const [username, setUsername] = useState("Rauf_123");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("+994 971");
  const [gender, setGender]=useState("Kişi")

      const fileInputRef=useRef(null);

      const handleUpload=()=>{
            fileInputRef.current.click()
      }
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="font-bold text-2xl text-center mb-5 pb-3">Profili redaktə et</h2>
      <form className=" space-y-4 mt-5 mb-5">
        <div className="flex gap-3 items-center">
        <div>
          <img src="emil.jpg" className="rounded-full w-24 h-24 object-cover"/>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold flex justify-center">Rauf Quliyev</h4>
          <input  ref={fileInputRef} type="file" placeholder="Şəkilləri buraya sürükləyin və ya" className="sr-only" accept="image/*"/>
       <button className="text-blue-500" onClick={handleUpload}>Profil şəklini dəyiş</button>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Ad</label>
          <input
            type="text"
            id="name"
            placeholder={name}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">İstifadəçi adı</label>
          <input
            type="text"
            id="name"
            placeholder={username}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Email</label>
          <input
            type="text"
            id="name"
            placeholder={"Email"}
            className="grow w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Bio</label>
          <textarea
            type="text"
            id="about"
            rows={3}
            placeholder={about}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-5 items-center">
          <label className="font-bold w-40 shrink-0">Telefon nömrəsi</label>
          <input
            type="text"
            id="name"
            placeholder={phone}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
           <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Cinsi</label>
          <input
            type="text"
            id="gender"
            placeholder={gender}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setGender(e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center gap-5">
            <button type="submit" className="bg-blue-800 rounded-md text-white">Göndər</button>
            <button className="rounded-md text-blue-800">Hesabımı müvəqqəti deaktiv et</button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
