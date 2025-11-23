import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
function MainLayout(){
  return(
    <>
    <Header/>
    <div className="grid grid-cols-12">
    <div className="md:col-span-2 border-r border-r-gray-300">
    <Sidebar/>       
    </div>
    <div className="md:col-span-10 col-span-12">
    <Outlet/>
    </div>
    </div>
    </>
  )
}
export default MainLayout;