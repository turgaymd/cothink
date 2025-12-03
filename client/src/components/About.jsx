import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const About=()=>{
  const [name, setName]=useState("Şəms")
  const [lastName, setLastName]=useState("Məmmədzadə")
  const [email, setEmail]=useState("shamsmemmedzade@gmail.com")
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
 <div className="flex justify-center">
      <div className="card w-[90%] max-w-[500px]">
        <div className="card-body">
         
             {error && (
          <p className="text-center text-red-600 bg-red-50 rounded-md p-2 font-bold text-lg mb-3">
            {error}
          </p>
        )}
            <div  className="flex justify-end text-blue-600 cursor-pointer"><button type="submit">Redaktə et</button></div>
             <form className="login-form mx-auto" onSubmit={handleEdit}>
              <div className="mb-5">
              <label
                htmlFor="name"
                className="text-gray-900 font-medium mb-4"
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
                className="text-gray-900 font-medium mb-4"
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
                className="text-gray-900 font-medium mb-4"
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
                className="text-gray-900 font-medium mb-4"
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