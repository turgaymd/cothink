import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ApiContext } from "../ApiContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const {apiUrl}=useContext(ApiContext)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Bütün xanaları doldurun");
      return;
    }

    try {
      const res = await axios.post(
        `${apiUrl}/server/login.php`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
 console.log(res.data)
      if (res.data.success) {
        const user = {
          type: res.data.type,          
          id: res.data.type === "student" ? res.data.student_id : res.data.mentor_id,
          email: res.data.email,
          name:res.data.name,
          token: res.data.token
        };

        localStorage.setItem("user", JSON.stringify(user));
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        toast.success("Giriş uğurla tamamlandı");
        setTimeout(() => navigate("/home"), 1500);
      } else {
        setError(res.data.message || "İstifadəçi adı və ya şifrə yalnışdır");
      }
    } catch (err) {
      setError(err.response?.data?.error || "İstifadəçi adı və ya şifrə yalnışdır");
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-[90%] max-w-[500px]">
          <div className="card-body">
            <div className="login-title text-center mb-5">
              <h2 className="font-medium text-3xl text-black">Daxil ol</h2>
              <p className="text-gray-500 text-2xl">Hesabınıza daxil olun</p>
            </div>
            <form className="login-form mx-auto" onSubmit={handleLogin}>
              {error && (
                <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
                  {error}
                </p>
              )}
              <div className="mb-5">
                <label htmlFor="email" className="text-sm text-black font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email ünvanınızı daxil edin"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="text-gray-900 font-medium mb-4">
                  Şifrə
                </label>
                <div className="relative">
                  <input
                    type={hide ? "text" : "password"}
                    id="password"
                    minLength={8}
                    placeholder="*******"
                    className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i className="btn hide" onClick={() => setHide(!hide)}>
                    {hide ? <FaEyeSlash /> : <FaEye />}
                  </i>
                </div>
              </div>
              <div className="flex mb-4 justify-between">
                <div>
                  <input type="checkbox" onChange={() => setRememberMe(!rememberMe)} />
                  <label htmlFor="rememberMe" className="text-gray-500 ms-2">
                    Xatırla
                  </label>
                </div>
                <a className="forget-password" href="/forgot">
                  Şifrəni unutdum
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <button type="submit" className="text-white bg-blue-800 w-full outline-none">
                  Daxil ol
                </button>
              </div>
            
            </form>
              <p className="text-center mt-4">
                Hələ də hesabınız yoxdur ?{" "}
                <a href="/register" className="text-blue-700">
                  Qeydiyyat
                </a>
              </p>
              <p className="text-center pt-3 pb-3">Və ya</p>
                <button className="w-full border border-gray-300 flex items-center justify-center gap-2 pb-5">
                  <FcGoogle fontSize={28} /> Google ilə daxil ol
                </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;