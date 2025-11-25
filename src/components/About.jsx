
const About=()=>{
    return(
        <section>
 <div className="flex justify-center">
      <div className="card w-[90%] max-w-[500px]">
        <div className="card-body">
          <form className="login-form mx-auto" >
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
                  placeholder="Şəms"
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
                  placeholder="Məmmədzadə"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="text-gray-900 font-medium mb-4"
              >
                E-mail
              </label>
              <div className="relative">
                <input
                  type= "text" 
                  id="email"
                  placeholder="shamsmemmedzade@gmail.com"
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
                  placeholder="+994  055-123-45-67"
                  className="w-full rounded-md px-3 py-2 mt-2 bg-white text-gray-500 outline-none"
                  required
                ></input>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
        </section>
    )
}
export default About;