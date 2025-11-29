import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();
  setError("");
  if (!name || !email || !password) {
    setError("Bütün xanaları doldurun");
    return;
  }
  if (password.length < 8) {
    setError("Şifrə ən azı 8 simvol olmalıdır");
    return;
  }
  if (!agreed) {
    setError("Qaydalar və şərtləri qəbul edin");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost/test/register.php",
      { name, email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (res.data.success) {
      const userInfo = {
        name: res.data.name,
        email: res.data.email,
        token: res.data.token,
      };
      alert("Registration successful!");
      localStorage.setItem("user", JSON.stringify(userInfo));
    } else {
      // Burada res.data.error var, Unknown error olmayacaq
      setError(res.data.error || "Unknown error");
    }
  } catch (err) {
    console.error(err);

    // Əgər backend cavabı varsa onu oxu
    if (err.response && err.response.data && err.response.data.error) {
      setError(err.response.data.error);
    } else {
      setError(err.message);
    }
  }
};
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-[90%] max-w-[500px]">
        <div className="card-body">
          <div className="login-title text-center mb-5">
            <h2 className="font-medium text-3xl text-black"> Qeydiyyat</h2>
            <p className="text-gray-500 text-2xl">Hesabınızı yaradın</p>
          </div>
          <form className="login-form mx-auto pt-5" onSubmit={handleRegister}>
            {error && <p className="text-center text-red-600">{error}</p>}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="text-sm text-black font-medium mb-2"
              >
                {" "}
                Ad{" "}
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Adınızı daxil edin"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-sm text-black font-medium mb-2"
              >
                Email
              </label>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email ünvanınızı daxil edin"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="text-black font-medium mb-4">
                Şifrə
              </label>
              <div className="relative">
                <input
                  type={hide ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="*******"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <i className="btn hide" onClick={() => setHide(!hide)}>
                  {hide ? <FaEyeSlash /> : <FaEye />}
                </i>
              </div>
            </div>
            <div className="flex mb-4 justify-between">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                ></input>
                <label htmlFor="rememberMe" className="text-gray-500 ms-2">
                  Qaydalar və şərtlər
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="text-white bg-blue-800 w-full outline-none"
              >
                Qeydiyyat
              </button>
              <p className="text-center">Və ya</p>
              <button className="w-full border border-gray-300 flex items-center justify-center gap-2">
                {" "}
                <FcGoogle fontSize={28} />
                Google ilə daxil ol
              </button>
            </div>
            <p className="text-center mt-4">
              Mövcud hesabınız var idi?{" "}
              <a href="/" className="text-blue-700">
                Daxil ol
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
