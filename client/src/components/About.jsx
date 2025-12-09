import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MdOutlineEdit } from "react-icons/md";
import { AuthContext } from "../AuthContext";

const About=()=>{
  const {user}=useContext(AuthContext)
  const [name, setName]=useState(user?.name)
  const [lastName, setLastName]=useState("")
  const [email, setEmail]=useState(user?.email)
  const [phone, setPhone]=useState("+994  055-123-45-67")
  const [error, setError] = useState("");

  const handleEdit=async(e)=>{
    e.preventDefault()
  try{
         const res= await axios.put("http://localhost:8000/api/about/edit.php", {name, lastName, email, phone},
            {headers:{"Content-Type":"application/json"}}
          )
          if(res.data.success){
         toast.success("Profil yeniləni")
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
    return(
        <section>
          <h2 className="font-bold text-2xl text-center mb-3">Haqqımda</h2>
 <div className="flex justify-center p-5">
      <div className="card w-full ">
        <div className="card-body ">
         
             {error && (
          <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
            {error}
          </p>
        )}
            <div  className="flex justify-end text-blue-800 cursor-pointer"><button type="submit" className="flex gap-2"><MdOutlineEdit fontSize={24}/>Redaktə et</button></div>
             <form className="login-form mx-auto " onSubmit={handleEdit}>
              <div className="mb-5">
              <label
                htmlFor="name"
                className="text-gray-900 font-semibold mb-4"
              >
               Ad
              </label>
              <div className="relative">
                <input
                  type= "text"
                  id="name"
                  placeholder={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>
            </div>
              <div className="mb-5">
              <label
                htmlFor="lastName"
                className="font-semibold mb-4"
              >
               Soyad
              </label>
              <div className="relative">
                <input
                  type="text" 
                  id="lastName"
                  placeholder={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="font-semibold mb-4"
              >
                E-mail
              </label>
              <div className="relative">
                <input
                  type= "text" 
                  id="email"
                  placeholder={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>
            </div>
             <div className="mb-5">
              <label
                htmlFor="phone"
                className="font-semibold mb-4"
              >
                Telefon nömrəsi
              </label>
              <div className="relative">
                <input
                  type= "text" 
                  id="phone"
                  placeholder={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>

            </div>
          </form>
          
        </div>
      </div>
    </div>
    <div className="text-center mt-5">
                  <a className="bg-blue-700 text-white px-5 py-3 rounded-md" href="/settings">Geri</a>
    </div>

        </section>
    )
}
export default About;