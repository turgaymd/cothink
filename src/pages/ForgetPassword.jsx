import {useState} from "react";
import axios from "axios";
const ForgotPassword=()=>{
      const [email, setEmail]=useState("")
      const [message, setMessage]=useState("")
      const [error, setError]=useState("")

      const handlePassword=async (e)=>{
        e.preventDefault()
        if(!email){
          setError("Email ünvanını daxil edin")
          return;
        }
        try{
         const res= await axios.post("http://localhost:8000/api/forget.php", {email},
            {headers:{"Content-Type":"application/json"}}
          )
          setMessage(res.data.message || "Şifrəni yeniləmək üçün link email ünvanına göndərildi")
        }
        catch(err){
          setError(err.response?.data?.message )
          console.log(err)
        }
      }
    return(
  <div className="flex justify-center items-center min-h-screen">
   <div className="card">
      <div className="card-body">
        <div className="login-title text-center mb-5">
          <h2 className="font-medium text-3xl text-black">Şifrəni unutduz? </h2>
            <p className="text-gray-500 text-xl">Email ünvanınızı daxil edin</p>
        </div>
        <form className="login-form mx-auto" onSubmit={handlePassword}>
          {message && <p className="font-bold text-green-600 text-center">{message}</p>}
          {error && <p className="font-bold text-red-600 text-center">{error}</p>}
                     <div className="mb-5">
              <label
                htmlFor="email"
                className="text-sm font-bold mb-2 text-black"
              >
                Email
              </label>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email ünvanınızı daxil edin"
                  className=" w-full rounded-md px-3 py-2 mt-2 bg-white text-black placeholder-gray-400 outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button type="submit" className="text-white bg-blue-800 w-full outline-none">Göndər</button>
            </div>        
        </form>
      </div>
    </div>
    </div>

    )
}
export default ForgotPassword;