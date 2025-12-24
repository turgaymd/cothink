import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ApiContext } from "../context/ApiContext";
import Select from "react-select";
import { AuthContext } from "../context/AuthContext";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState(""); 
  const [linkedin, setLinkedin] = useState("");
  const [hide, setHide] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("student");
  const {apiUrl}=useContext(ApiContext)
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
const {setUser}=useContext(AuthContext)

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
        if(activeTab==="student" ){
       if ( !username || !email || !password  ) {
      setError("Bütün xanaları doldurun");
      return;
    }
        }
  
   if(activeTab==="mentor"){
    if(!username || !email || !password || !subject){
        setError("Bütün xanaları doldurun");
      return;
    }
   }  
    if (password.length < 8) {
      setError("Şifrə ən azı 8 simvol olmalıdır");
      return;
    }

    if (!agreed) {
      setError("Qaydalar və şərtləri qəbul edin");
      return;
    }
   const formData=  activeTab === "student"
      ? {
            type: "student",
            username,
            email,
            password,
          }
        : {
            type: "mentor",
            name: username,
            email,
            password,
            linkednLink: linkedin,
            category:subject
          };

    try {
      const res = await axios.post(`${apiUrl}/server/register.php`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      if(res.data.error){
        setError(res.data.error)
        return;
      }
    if (res.data.success) {
        toast.success("Qeydiyyat uğurla tamamlandı");
      
        const userInfo = {
          type: res.data.type,          
          id: res.data.student_id || res.data.mentor_id,
          email: res.data.email,
          name:res.data.name,
          token: res.data.token,
        };
        setUser(userInfo)
        localStorage.setItem("user", JSON.stringify(userInfo));
          setTimeout(() => navigate("/home"), 1500);
      
    }

    } catch (err) {
      const msg = err.response?.data?.error || "Xəta baş verdi";
      toast.error(msg);
    }
  };

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

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-[90%] max-w-[500px]">
          <div className="card-body">
            <div className="login-title text-center mb-5">
              <h2 className="font-medium text-2xl text-black">Qeydiyyat</h2>
              <p className="text-gray-500 text-2xl">Hesabınızı yaradın</p>
            </div>

            <div className="flex justify-center">
              <div className="switch-toogle flex justify-center items-center mb-2 max-w-3xl w-full bg-white border border-gray-200">
                <button
                  className={`w-full ${activeTab === "student" ? "bg-blue-800 text-white" : ""}`}
                  onClick={() => setActiveTab("student")}
                  type="button"
                >
                  Tələbə
                </button>
                <button
                  className={`w-full ${activeTab === "mentor" ? "bg-blue-800 text-white" : ""}`}
                  onClick={() => setActiveTab("mentor")}
                  type="button"
                >
                  Mentor
                </button>
              </div>
            </div>

            <form className="login-form mx-auto" onSubmit={handleRegister}>
  {error && (
                <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
                  {error}
                </p>
              )}
              <div className="mb-2">
                <label htmlFor="name" className="text-sm font-bold mb-2">Ad</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Adınızı daxil edin"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {activeTab === "mentor" && (
                <>
                  <div className="mb-2">
                    <label htmlFor="linkedin" className="text-sm font-bold mb-2">Linkedin profiliniz</label>
                    <input
                      type="text"
                      id="linkedin"
                      placeholder="Linkedin linki daxil edin"
                      className="w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="subject" className="text-sm font-bold mb-2">Fənn</label>
                     <Select
            options={categories.map((item) => ({
              value: item.category_id,
              label: item.category,
            }))}
            onChange={handleSelect}
            placeholder="Kategoriya seçin"
          />
                  </div>
                </>
              )}

              <div className="mb-2">
                <label htmlFor="email" className="text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email ünvanınızı daxil edin"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="font-bold mb-4">Şifrə</label>
                <div className="relative">
                  <input
                    type={hide ? "text" : "password"}
                    id="password"
                    placeholder="*******"
                    className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i className="btn hide" onClick={() => setHide(!hide)}>
                    {hide ? <FaEyeSlash /> : <FaEye />}
                  </i>
                </div>
              </div>

              <div className="flex mb-2 justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                  />
                 
                  <label htmlFor="rememberMe" className="text-gray-500 ms-2">
                   <a href="/privacy" className="rules"> Qaydalar və şərtlərlə tanış oldum</a> 
                  </label>
              
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button type="submit" className="text-white bg-blue-800 w-full outline-none">
                  Qeydiyyat
                </button>
                    </div>
              
            </form>
              {/* <p className="text-center pb-4 pt-4">Və ya</p>
                <button className="w-full border border-gray-300 flex items-center justify-center gap-2">
                  <FcGoogle fontSize={28} />
                  Google ilə daxil ol
                </button> */}
          

              <p className="text-center mt-2">
                Mövcud hesabınız var idi?{" "}
                <a href="/login" className="text-blue-700">Daxil ol</a>
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;