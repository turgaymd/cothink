import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
function MainLayout(){
  const [open, setOpen]=useState(false)
  return(
    <>
    <Header open={open} setOpen={setOpen}/>
    <div className="grid grid-cols-12">
    <div className="md:col-span-2 hidden md:flex border-r border-r-gray-300 min-h-screen">
    <Sidebar/>
    </div>
    {
      open && (
         <div className="fixed flex inset-0 md:hidden  z-40 w-full">
          <div className="bg-white  h-full shadow-md transform transition-transform translate-x-0 duration-200  w-[80%]">
          <Sidebar open={open} setOpen={setOpen}/>
        </div>
        </div>
      )
    }
       

    <div className="md:col-span-10 col-span-12">
    <Outlet/>
    </div>
    </div>
    </>
  )
}
export default MainLayout;