import { useContext, useState } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Faqs from "./FAQ";
import axios from "axios";
import { ApiContext } from "../../context/ApiContext";
import { toast, ToastContainer } from "react-toastify";
import Team from "./Team";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const {apiUrl}=useContext(ApiContext)



const handleContact = async (e) => {
  e.preventDefault();

  if (!email || !phone || !message) {
   toast.error("Bütün xanaları doldurun");
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);

  try {
    const res = await axios.post(`${apiUrl}/server/settings/contactEmail.php`, formData)
console.log(res.data)


    if (res.data.status === "success") {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  } catch (err) {
    alert("Server xətası");
  }
};



  return (
  <>
    <ToastContainer/>
   <div>
     <section id="contact" className="max-w-[80vw] m-auto py-8">
      <h2 className="font-bold text-center text-3xl mb-7">Əlaqə</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mt-5 mb-8">
        <div className="bg-blue-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <h4 className="font-bold text-xl">Email Address</h4>
          <p className="text-gray-100 whitespace-nowrap">contact@cothink.az</p>
        </div>

        <div className="bg-blue-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <h4 className="font-bold text-xl">Phone Number</h4>
          <p className="text-gray-100 whitespace-nowrap">+994 77 633 09 33</p>
        </div>

        <div className="bg-blue-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <h4 className="font-bold text-xl">Social Media</h4>
          <div className="flex gap-3">
          <a className="text-gray-100 hover:text-white transition-colors" href="https://www.instagram.com/cothink.az/#">
            <BsInstagram fontSize={24}/>
          </a>
           <a className="text-gray-100 hover:text-white transition-colors" href="https://www.linkedin.com/company/cothink-az/">
            <BsLinkedin   fontSize={24}/>
          </a>
          </div>
        </div>
      </div>

       <form onSubmit={handleContact}>
      <div className="mt-8 max-w-2xl mx-auto">
        <div>
              
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
       
            <div className="w-full">
              <label className="block font-bold pb-2">Ad</label>
              <input 
                type="text" 
                className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md" 
                placeholder="Adınızı daxil edin" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="block font-bold pb-2">Mobil nömrə</label>
              <input 
                type="tel" 
                className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md" 
                placeholder="Mobil nömrənizi daxil edin" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block font-bold pb-2">Email</label>
            <input 
              type="email" 
              className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md" 
              placeholder="E-mailinizi daxil edin" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-bold pb-2">Qeyd*</label>
            <textarea 
              className="w-full shadow-sm bg-gray-200 outline-none px-5 py-3 rounded-md" 
              rows={5} 
              placeholder="Mesajınızı yazın" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          
          <div className='text-center mt-6'>
            <button 
              className="w-full md:w-auto px-12 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors" 
              type="submit"
            >
              Təsdiqlə
            </button>
          </div>
        </div>
      </div>
      </form>
    </section>
      <section className="max-w-[95vw] m-auto mt-10 md:mt-14">
        <div className="rounded-2xl bg-linear-to-r from-blue-100 to-purple-100 overflow-hidden">
          <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-0 md:gap-8  px-4 md:px-8 pb-8 md:py-2">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left ">
              <h2 className="font-bold text-2xl md:text-3xl pb-3">
                Hər ehtiyacın — bir platformada
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                CoThink öyrənməni asanlaşdıran tam akademik mühit yaradır.
                Hazırlığınızı daha planlı, ardıcıl və effektiv edin.
              </p>
            </div>

     
            <div className="flex-1 relative flex flex-col items-center min-h-[250px] md:min-h-[350px] mt-10">

     
              <div className="absolute top-0 left-1/3 
                              w-28 h-28 md:w-44 md:h-44 
                              bg-blue-300 rounded-full opacity-60 z-0"></div>

              <img
                src="/images/laptop.webp"
                className="
                hidden
                md:block
                  relative
                  right-15
                  max-w-70 md:max-w-[300px] lg:max-w-[500px]
                  w-auto object-contain z-10 ml-2
                "
                alt="Laptop"
              />


              <div className="absolute bottom-4 right-1/3 hidden mdLabsolute
                              w-20 h-10 md:w-36 md:h-36 
                              bg-purple-300 rounded-full opacity-60 z-0"></div>


              <img
                src="/images/articles.webp"
                className="
                  
                  
                  max-w-60 md:max-w-[200px] lg:max-w-[350px]
                  w-auto object-contain shadow-lg rounded-lg z-20

                  /* Tablet (md): absolute positioning */
                  md:mt-0 md:ml-0
                  md:translate-x-10
                  md:absolute md:right-5

                  /* Desktop (lg+) */
                  lg:translate-x-0
                  lg:absolute lg:top-2 lg:right-0
                "
                alt="Articles"
              />

            </div>

          </div>
        </div>
      </section>

<Team/>
<Faqs/>

   </div>
   </>
    
  );
};

export default Contact;