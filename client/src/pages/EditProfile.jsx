import { useState, useRef } from "react";

const EditProfile = () => {
  const [name, setName] = useState("Rauf");
  const [username, setUsername] = useState("Rauf_123");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("+994 971");
  const [gender, setGender] = useState("Kişi");
  const [password, setPassword] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mentor_id", 5);
    formData.append("mentor_name", name);
    formData.append("mentor_username", username);
    formData.append("mentor_email", email);
    formData.append("description", about);
    formData.append("mentor_password", password);
    formData.append("linkedin_link", linkedin);

    if (fileInputRef.current.files[0]) {
      formData.append("profile_img", fileInputRef.current.files[0]);
    }

    const res = await fetch("http://localhost/server/mentor/update.php", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="font-bold text-2xl text-center mb-5 pb-3">
        Profili redaktə et
      </h2>

      {/* FORM SUBMIT BURDADIR */}
      <form onSubmit={submitForm} className="space-y-4 mt-5 mb-5">

        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/emil.jpg"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold flex justify-center">Rauf Quliyev</h4>

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

        {/* Ad */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Ad</label>
          <input
            type="text"
            value={name}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Username */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">İstifadəçi adı</label>
          <input
            type="text"
            value={username}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Email</label>
          <input
            type="text"
            value={email}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Bio */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Bio</label>
          <textarea
            rows={3}
            value={about}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        {/* Telefon */}
        <div className="flex gap-5 items-center">
          <label className="font-bold w-40 shrink-0">Telefon nömrəsi</label>
          <input
            type="text"
            value={phone}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Cinsi */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Cinsi</label>
          <input
            type="text"
            value={gender}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        {/* Parol */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">Şifrə</label>
          <input
            type="password"
            value={password}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* LinkedIn */}
        <div className="flex gap-5 items-center">
          <label className="block font-bold w-40 shrink-0">LinkedIn</label>
          <input
            type="text"
            value={linkedin}
            className="w-full px-3 py-2 border border-gray-300"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center gap-5">
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
  );
};

export default EditProfile;
