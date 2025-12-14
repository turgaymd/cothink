import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Settings from "./pages/Settings";
import About from "./components/About";
import ResetPassword from "./components/ResetPassword";
import TwoFactorAuth from "./components/TwoFactorAuth";
import Support from "./components/Support";
function MainLayout(){
  const [open, setOpen]=useState(false)
   const [settings, setSettings] =useState(false)
  const [activeTab, setActiveTab]=useState("about")
 
  return(
    <>
    <Header open={open} setOpen={setOpen} setSettings={setSettings}/>
    <div className="grid grid-cols-12">
    
       
   <div className={`${ settings && open ? "md:col-span-3 col-span-12" : open ? "md:col-span-2  col-span-12" : "md:col-span-1  col-span-12" } hidden md:flex border-r border-r-gray-300 min-h-screen`}>
     { open ? ( 
      settings ? <Settings activeTab={activeTab} setActiveTab={setActiveTab} setSettings={setSettings}/> : <Sidebar setSettings={setSettings} setActiveTab={setActiveTab}/>
     ) :
     (
      <div className=" h-full"></div>
     )}
    </div>
  
 
    {
      open && (
         <div className="fixed flex inset-0 md:hidden  z-40 w-full">
          <div className="bg-white  h-full shadow-md transform transition-transform translate-x-0 duration-200  w-[80%]">
          <Sidebar open={open} setOpen={setOpen} setActiveTab={setActiveTab} setSettings={setSettings}/>
        </div>
        </div>
      )
    }
   

    <div className={ settings ? "md:col-span-9 col-span-12" : open ?  "md:col-span-10 col-span-12" :"md:col-span-11 col-span-12"  } >
    {
      settings ? 
      <>
      <div className="md:hidden">
{
  activeTab==="" ? <Settings setActiveTab={setActiveTab} activeTab={activeTab} setSettings={setSettings}/> : (
       <>
    { activeTab==="about" && <About settings={settings} setSettings={setSettings} setActiveTab={setActiveTab}/> }
    {activeTab==="changePassword" && <ResetPassword setActiveTab={setActiveTab}/> }
    {activeTab ==="twofactorauth" && <TwoFactorAuth setActiveTab={setActiveTab}/> }
    {activeTab ==="support" && <Support setActiveTab={setActiveTab}/> }
    </>
  )
}
      </div>
      <div className="hidden md:block">
    { activeTab==="about" && <About/> }
    {activeTab==="changePassword" && <ResetPassword/> }
    {activeTab ==="twofactorauth" && <TwoFactorAuth/> }
    {activeTab ==="support" && <Support/> }
    </div>
      </>
      : <Outlet/>
    }

    </div>

    </div>
    </>
  )
}
export default MainLayout;