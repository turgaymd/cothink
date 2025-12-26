import { BsBook } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { SiReaddotcv } from "react-icons/si";
import Faqs from "./FAQ";
import Team from "./Team";

const Services = () => {
  return (
    <section id="services">
      <div className="mt-5 max-w-[80vw] m-auto">
        <h2 className="font-bold text-2xl text-center pb-4">Xidmətlərimiz</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5">
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <BsBook fontSize={26} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Dərs izahları</h5>
                <p className="text-gray-500">Fənlər üzrə hazırlanan qısa, aydın və sistemli video izahlar.</p>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <HiOutlineUsers fontSize={28} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Mentor dəstəyi</h5>
                <p className="text-gray-500">Sualını göndər və mövzunu izah etməyini mentorlarımızdan istə.</p>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <LuBookText fontSize={28} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Akademik resurslar</h5>
                <p className="text-gray-500">PDF-lər, konspektlər, xülasələr və sınaq sualları — hamısı əlçatan.</p>
              </div>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-md service-item">
            <div className="flex justify-between items-center gap-7">
              <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
                <RiQuestionnaireLine fontSize={28} className="text-blue-800"/>
              </div>
              <div>
                <h5 className="font-bold text-xl">Sual–Cavab</h5>
                <p className="text-gray-500">Tələbələr və mentorlar tərəfindən verilən real cavablar; ən faydalıları önə çıxır.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border border-gray-200 mt-4 rounded-md service-item">
          <div className="flex justify-between items-center gap-7 m-auto">
            <div className="service-icon rounded-full flex justify-center items-center px-5 py-5">
              <SiReaddotcv fontSize={28} className="text-blue-800"/>
            </div>
            <div >
              <h5 className="font-bold text-xl ">Fənn icmaları</h5>
              <p className="text-gray-500">Mövzu müzakirələrinə qoşul, başqalarından öyrən,  öz biliklərini paylaş.</p>
            </div>
          </div>
        </div>
      </div>

    <Team/>
    <Faqs/>
    </section>
  );
};

export default Services;