import OTPInput from "react-otp-input";
import { useState } from "react";

const SentCode=()=>{
    const [otp,setOtp]=useState("")
    const [message, setMessage]=useState("")
    const [error, setError]=useState("")
    // const inputRefs=useRef([])
    // const handleFocus=(e)=>{
    //  e.target.select()
    // }
    const handleConfirm=(e)=>{
        e.preventDefault()
    }
return (
  <div className="flex justify-center items-center min-h-screen">
   <div className="card w-[90%] max-w-[500px]">
      <div className="card-body">
        <div className="login-title text-center mb-5">
          <h2 className="font-medium text-3xl text-black">Təsdiq kodu (OTP)
 </h2>
            <p className="text-gray-500 text-xl">Təsdiq kodunu daxil et</p>
        </div>
        <form className="login-form mx-auto" onSubmit={handleConfirm}>
          {message && <p className="font-bold text-green-600 text-center">{message}</p>} 
           {error && <p className="font-bold text-red-600 text-center">{error}</p>}
                     <div className="mb-5">
              <div className="flex justify-center gap-4">
                <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                isInputNum={true}
                renderSeparator={<span style={{width:"8px"}}> </span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                color:"#000",
                backgroundColor:"#fff",
                width:"54px",
                height:"54px",
                borderRadius:"8px",
                outline:"none",
                }}
                />
              </div>
    
            </div>
                      <p className="text-center font-bold mb-4">Kodu almadınız? Yenidən göndər</p>
            <div className="flex flex-col gap-3">
              <button type="submit" className="text-white bg-blue-800 w-full outline-none rounded-md">Kodu təsdiqləyin</button>
            </div>        
        </form>
      </div>
    </div>
    </div>

)
}
export default SentCode;