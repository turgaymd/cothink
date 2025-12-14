import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const logos = [
    "/images/Group 7.svg",
    "/images/Group 10.svg",
    "/images/Group 9.svg"
  ];

const handleContact = async (e) => {
  e.preventDefault();

  if (!email || !phone || !message) {
    alert("Bütün xanaları doldurun");
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);

  try {
    const res = await fetch("http://localhost/cothink1/cothink/server/settings/contactEmail.php", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    alert(data.message);

    if (data.status === "success") {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  } catch (err) {
    alert("Server xətası");
  }
};

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % logos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + logos.length) % logos.length);
  };

  return (
   <div>
     <section id="contact" className="max-w-[80vw] m-auto py-8">
      <h2 className="font-bold text-center text-3xl mb-7">Əlaqə</h2>
      
      {/* Əlaqə məlumatları - responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mt-5 mb-8">
        {/* Email kartı */}
        <div className="bg-blue-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <h4 className="font-bold text-xl">Email Address</h4>
          <p className="text-gray-100 whitespace-nowrap">cothink@gmail.com</p>
        </div>

        {/* Telefon kartı */}
        <div className="bg-blue-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <h4 className="font-bold text-xl">Phone Number</h4>
          <p className="text-gray-100 whitespace-nowrap">+012 123 45 67</p>
        </div>

        {/* Sosial media kartı */}
        <div className="bg-blue-800 rounded-lg p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <h4 className="font-bold text-xl">Social Media</h4>
          <button className="text-gray-100 hover:text-white transition-colors">
            <BsInstagram fontSize={24}/>
          </button>
        </div>
      </div>

      {/* Əlaqə forması */}
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
              onClick={handleContact}
            >
              Təsdiqlə
            </button>
          </div>
        </div>
      </div>
      
    </section>
    <section className="max-w-[95vw] m-auto mt-10 md:mt-14">
      <div className="rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 overflow-hidden">
        <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-8 md:gap-12 px-4 md:px-8 py-6 md:py-10">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-2xl md:text-3xl pb-3">
              Hər ehtiyacın — bir platformada
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              CoThink öyrənməni asanlaşdıran tam akademik mühit yaradır.
              Hazırlığınızı daha planlı, ardıcıl və effektiv edin.
            </p>
          </div>

          {/* Images Section */}
          <div className="flex-1 relative flex flex-col items-center min-h-[250px] md:min-h-[350px]">

            {/* Background Circle 1 */}
            <div className="absolute top-0 left-1/3 
                            w-28 h-28 md:w-44 md:h-44 
                            bg-blue-300 rounded-full opacity-60 z-0"></div>

            {/* Laptop Image */}
            <img
              src="/images/laptop.png"
              className="
                relative
                right-15
                max-w-70 md:max-w-[300px] lg:max-w-[350px]
                w-auto object-contain z-10
              "
              alt="Laptop"
            />

            {/* Background Circle 2 */}
            <div className="absolute bottom-4 right-1/3 
                            w-20 h-20 md:w-36 md:h-36 
                            bg-purple-300 rounded-full opacity-60 z-0"></div>

            {/* Articles Image */}
            <img
              src="/images/articles.jpg"
              className="
                mt-30
                ml-25
                max-w-50 md:max-w-[200px] lg:max-w-[250px]
                w-auto object-contain shadow-lg rounded-lg z-20

                /* Tablet (md): absolute positioning */
                md:mt-0 md:ml-0
                md:translate-x-10
                md:absolute md:right-5

                /* Desktop (lg+) */
                lg:translate-x-0
                lg:absolute lg:top-2 lg:right-25
              "
              alt="Articles"
            />

          </div>

        </div>
      </div>
    </section>

    {/* Desktop view - 3 images side by side */}
    <div className="hidden md:flex justify-center mt-30 gap-10">
      <div><img src="/images/Group 7.svg" alt="Feature 1" /></div>
      <div><img src="/images/Group 10.svg" alt="Feature 2" /></div>
      <div><img src="/images/Group 9.svg" alt="Feature 3" /></div>
    </div>

    {/* Mobile view - Slider with arrow buttons */}
    <div className="md:hidden relative w-full mt-10">
      <div className="flex items-center justify-between px-4">
        {/* Left Arrow */}
        <button 
          onClick={handlePrevSlide}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 z-10"
          aria-label="Previous slide"
        >
          <IoIosArrowBack fontSize={28} />
        </button>

        {/* Slider Container */}
        <div className="flex-1 mx-2 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="w-full flex-shrink-0 flex justify-center items-center py-5">
                <img 
                  src={logo} 
                  alt={`Feature ${index + 1}`} 
                  className="max-w-[300px] w-full h-auto object-contain px-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNextSlide}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 z-10"
          aria-label="Next slide"
        >
          <IoIosArrowForward fontSize={28} />
        </button>
      </div>
    </div>

    <section className="max-w-[80vw] m-auto mt-10 mb-10">
      <div>
        <h2 className="text-xl md:text-3xl text-center pb-8 md:pb-12 mt-5">
          <span className="font-bold">Tez-tez</span> Soruşulan <span className="font-bold">Suallar</span>
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-3">
          <div className="border border-gray-200 px-4 md:px-5 py-2 rounded-md">
            <div className="flex justify-between items-center pt-3 pb-3 border-b border-b-gray-200 gap-3">
              <h6 className="font-medium text-sm md:text-base">CoThink-də dərsləri necə tapa bilərəm?</h6>
              <IoMdAdd fontSize={24} className="flex-shrink-0"/>
            </div>
            <div className="flex justify-between items-center pt-3 pb-3 border-b border-b-gray-200 gap-3">
              <h6 className="font-medium text-sm md:text-base">Məzmunu kim hazırlayır?</h6>
              <IoMdAdd fontSize={24} className="flex-shrink-0"/>
            </div>
            <div className="flex justify-between items-center pt-3 pb-3 border-b border-b-gray-200 gap-3">
              <h6 className="font-medium text-sm md:text-base">Sual verdikdə nə qədər vaxta cavab gəlir?</h6>
              <IoMdAdd fontSize={24} className="flex-shrink-0"/>
            </div>
            <div className="flex justify-between items-center pt-3 pb-3 border-b border-b-gray-200 gap-3">
              <h6 className="font-medium text-sm md:text-base">Platformadan istifadə ödənişlidir?</h6>
              <IoMdAdd fontSize={24} className="flex-shrink-0"/>
            </div>
            <div className="flex justify-between items-center pt-3 pb-3 gap-3">
              <h6 className="font-medium text-sm md:text-base">Məzmunun düzgünlüyü necə yoxlanılır?</h6>
              <IoMdAdd fontSize={24} className="flex-shrink-0"/>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-5 items-center justify-center py-5">
            <img src="/images/faq.png" className="object-cover max-w-[200px] md:max-w-full" alt="FAQ"/>
            <h6 className="font-bold text-xl md:text-2xl pt-2 md:pt-4 pb-2 md:pb-4 text-center">Başqa sualınız var?</h6>
            <button className="rounded-full contact-btn px-6 py-2 bg-blue-800 text-white hover:bg-blue-900 transition-colors">Əlaqə saxlayın</button>
          </div>
        </div>
      </div>
    </section>


   </div>
    
  );
};

export default Contact;