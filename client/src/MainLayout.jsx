import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Settings from "./pages/Settings";
import About from "./components/About";
import ResetPassword from "./components/ResetPassword";
import TwoFactorAuth from "./components/TwoFactorAuth";
import Support from "./components/Support";
import Features from "./components/Features";
import { ThemeContext } from "./context/ThemeContext";
function MainLayout(){
  const [open, setOpen]=useState()
   const [settings, setSettings] =useState(false)
  const [activeTab, setActiveTab]=useState("about")
   const {theme}=useContext(ThemeContext)
  useEffect(()=>{
  if(window.innerWidth>=768){
    setOpen(false)
  }
  }, [])
const layoutClass=` ${settings ? "md:col-span-9 col-span-12" : open ?  "md:col-span-10 col-span-12" :"md:col-span-12 col-span-12"}  }`
  return(
  <div className={`${theme==="dark" ? "bg-gray-800 text-white": "bg-white text-black"}`}>
    <Header open={open} setOpen={setOpen} setSettings={setSettings}/>
    <div className={`grid grid-cols-12 ` } >
    
       
   <div className={`${ settings && open ? "md:grid md:col-span-3 border-r border-r-gray-300" : open ? "md:grid md:col-span-2  border-r border-r-gray-300" : "  md:col-span-1 " }   hidden min-h-screen`}>
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
   

    <div className= {layoutClass} >
    {
      settings ? 
      <>
      <div className="md:hidden" >
{
  activeTab==="" ? <Settings setActiveTab={setActiveTab} activeTab={activeTab} setSettings={setSettings}/> : (
       <>
    { activeTab==="about" && <About settings={settings} setSettings={setSettings} setActiveTab={setActiveTab}/> }
    {activeTab==="changePassword" && <ResetPassword setActiveTab={setActiveTab}/> }
    {activeTab ==="twofactorauth" && <TwoFactorAuth setActiveTab={setActiveTab}/> }
    {activeTab ==="support" && <Support setActiveTab={setActiveTab}/> }
    {activeTab ==="features" && <Features setActiveTab={setActiveTab}/> }
    </>
  )
}
      </div>
      <div className="hidden md:block">
    { activeTab==="about" && <About/> }
    {activeTab==="changePassword" && <ResetPassword/> }
    {activeTab ==="twofactorauth" && <TwoFactorAuth/> }
    {activeTab ==="support" && <Support/> }
    {activeTab ==="features" && <Features/>}
    </div>
      </>
      : <Outlet/>
    }

    </div>

    </div>
    </div>
  )
}
export default MainLayout;