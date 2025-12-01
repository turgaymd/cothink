import { useState } from "react";

const About=()=>{
  const [name, setName]=useState("Şəms")
  const [lastName, setLastName]=useState("Məmmədzadə")
  const [email, setEmail]=useState("shamsmemmedzade@gmail.com")
  const [phone, setPhone]=useState("+994  055-123-45-67")
  
  const handleEdit=()=>{
    // setName("")
    // setLastName("")
    // setEmail("")
    // setPhone("")
  }
    return(
        <section>
 <div className="flex justify-center">
      <div className="card w-[90%] max-w-[500px]">
        <div className="card-body">
          <form className="login-form mx-auto" >
            <div className="flex justify-end text-blue-600 cursor-pointer" onClick={handleEdit}>Redaktə et</div>
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