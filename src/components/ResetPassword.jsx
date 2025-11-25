
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const ResetPassword=()=>{
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState('')
  const [rememberMe,setRememberMe]=useState(false)
  const [error, setError] = useState("");

  const PasswordInput=({label, value, setValue})=>{
      const [hide, setHide] = useState(false);
    return(
      <div className="mb-3">
              <label
                htmlFor="password"
                className="text-gray-900 font-bold mb-4"
              >
               {label}
              </label>
              <div className="relative">
                <input
                  type={hide ? "text" : "password"}
                  id="password"
                  minLength={8}
                  placeholder="*******"
                  value={value}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  onChange={(e) => setValue(e.target.value)}
                  required
                ></input>
                <i className="btn hide" onClick={() => setHide(!hide)}>
                  {hide ? <FaEyeSlash /> : <FaEye />}
                </i>
              </div>
            </div>
    )
  }

    const handleReset=(e)=>{
         e.preventDefault()
         if(newPassword!==confirmPassword){
            setError("Şifrələr uyğun gəlmir")
         }
    }
    return (
        <>
        <h2 className="text-center font-bold text-2xl pb-5">Şifrəni dəyiş</h2>
 <div className="flex justify-center">
      <div className="card w-[90%] max-w-[500px]">
        <div className="card-body">
          <form className="login-form mx-auto" onSubmit={handleReset}>
          {error && <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">{error}</p>}
            
            <PasswordInput
             label={"Cari Şifrə"}
             value={currentPassword}
             setValue={setCurrentPassword}
            />
               <PasswordInput
             label={"Yeni şifrə"}
             value={newPassword}
             setValue={setNewPassword}
            />
               <PasswordInput
             label={"Yeni şifrəni təsdiqləyin"}
             value={confirmPassword}
             setValue={setConfirmPassword}
            />
            
               
  <p className="text-gray-400 mb-3">Ən azı 8 simvoldan istifadə edin, rəqəmlər və simvollar daxil edin.</p>
            <div className="flex mb-4 justify-between">
              <div>
                <input type="checkbox" onChange={()=>setRememberMe(!rememberMe)}></input>
                <label htmlFor="rememberMe" className="text-gray-500 ms-2">
                  Xatırla
                </label>
              </div>
              <a className="forget-password" href="/forgot">
                Şifrəni unutdum
              </a>
            </div>
            <div className="gap-3">
              <button
                type="submit"
                className="text-white bg-blue-800 w-full outline-none"
>
                Daxil ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    )
}
export  default ResetPassword;