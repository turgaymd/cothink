import { useState } from "react";
const Profile = () => {
  const [username, setUsername] = useState("Rauf");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("+994 971");
  const [gender, setGender]=useState("Kişi")
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="font-bold text-2xl text-center mb-5">Profili redaktə et</h2>
      <form className=" space-y-4 mt-5">
        <div className="flex gap-5 items-center">
          <label className="font-bold">Ad</label>
          <input
            type="text"
            id="name"
            placeholder={username}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-5 items-center">
          <label className="font-bold">Email</label>
          <input
            type="text"
            id="name"
            placeholder={email}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-5 items-center">
          <label className="font-bold">Bio</label>
          <textarea
            type="text"
            id="about"
            placeholder={about}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-5 items-center">
          <label className="font-bold">Telefon nömrəsi</label>
          <input
            type="text"
            id="name"
            placeholder={phone}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
           <div className="flex gap-5 items-center">
          <label className="font-bold">Cinsi</label>
          <input
            type="text"
            id="gender"
            placeholder={gender}
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 placeholder-gray-400 outline-none"
            onChange={(e) => setGender(e.target.value)}
          ></input>
        </div>
        <div className="submit flex gap-5">
            <button type="submit" className="bg-blue-800 rounded-md text-white">Göndər</button>
            <button className="rounded-md text-blue-700">Hesabımı müvəqqəti deaktiv et</button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
