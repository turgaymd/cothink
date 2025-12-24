
import axios from "axios";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { ApiContext } from "../context/ApiContext";
import { AuthContext } from "../context/AuthContext";


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
const ResetPassword=({setActiveTab})=>{
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState('')
  const [rememberMe,setRememberMe]=useState(false)
  const [error, setError] = useState("");
 const {apiUrl}=useContext(ApiContext)
 const {user}=useContext(AuthContext)

    const handleReset=async(e)=>{
         e.preventDefault();
         setError("")
         if(newPassword!==confirmPassword){
            setError("Şifrələr uyğun gəlmir");
            return;
         }
          try{
         const res= await axios.post(`${apiUrl}/server/settings/changePass.php`, 
          { 
             user_id:user.id,
             user_type:user.type,
             current_password:currentPassword, 
             new_password:newPassword,
             confirm_password:confirmPassword
            },
            {headers:{"Content-Type":"application/json"}}
          )
          if(res.data.status==="success"){
         toast.success("Şifrəniz yeniləndi")
          }
          else{
            setError(res.data.message || "Xəta baş verdi")
          }
        }
        catch(err){
          setError(err.response?.data?.message || "Xəta baş verdi" )
          console.log(err)
        }
    }
    return (
        <>
        <ToastContainer/>
             <div className="back md:hidden flex">
                                       <button onClick={()=>setActiveTab("")}><MdOutlineArrowBackIosNew fontSize={24}/></button>
                                     </div>
        <h2 className="text-center font-bold text-2xl pb-5">Şifrəni dəyiş</h2>
 <div className="md:p-12 p-2">
      <div className="card w-full pb-5">
        <div className="card-body pb-5">
          <form className="login-form mx-auto max-w-4xl px-5 py-3" onSubmit={handleReset}>
          {error && <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">{error}</p>}
            
            <PasswordInput
            id="currentPassword"
             label={"Cari Şifrə"}
             value={currentPassword}
             setValue={setCurrentPassword}
            />
               <PasswordInput
               id="newPassword"
             label={"Yeni şifrə"}
             value={newPassword}
             setValue={setNewPassword}
            />
               <PasswordInput
               id="confirmPassword"
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
            <div className="gap-3 pb-5 mt-12">
              <button
                type="submit"
                className="text-white bg-blue-800 w-full outline-none rounded-md"
>
                Şifrəni yenilə
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