import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems=[
            { path: "/", label: "Ana Səhifə", end: true },
            { path: "/services", label: "Xidmətlərimiz" },
            { path: "/about", label: "Haqqımızda" },
            { path: "/contact", label: "Əlaqə" },
          ]


  const activeClass =
    "text-white rounded-2xl bg-[#3456BE]  px-4 py-2 whitespace-nowrap";
  const normalClass =
    "text-gray-700 hover:text-[#3456BE]  px-4 py-2 whitespace-nowrap";

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center px-5 py-4">

        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="h-10" />
        </Link>

        <ul className="flex gap-3 items-center">
          {menuItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

       <div className="flex gap-3">
           <Link
          to="/login"
          className="text-blue-800 border border-blue-800  rounded-3xl px-6 py-2 hover:opacity-90 transition whitespace-nowrap"
        >
          Giriş
        </Link>
        <Link
          to="/register"
          className="text-blue-800 rounded-3xl border border-blue-800  px-6 py-2 hover:opacity-90 transition whitespace-nowrap"
        >
          Qeydiyyat
        </Link>
      </div>
      </div>
      
      <div className="md:hidden flex items-center justify-between px-3 py-3">

        <button onClick={() => setOpen(!open)} className="shrink-0" id="burgerBtn" aria-labelledby="burgermenu">
          {open ? <IoClose size={32} /> : <IoMenu size={32} />}
        </button>
        <Link to="/" className="shrink-0">
          <img
            src="/images/mobile_logo.png"
            alt="Logo"
            className="h-9"
          />
        </Link>

     <div className="flex gap-2 shrink-0">

               <Link
          to="/login"
          className="text-blue-800 rounded-2xl border border-blue-800 px-3 py-1.5 text-xs hover:opacity-90 transition whitespace-nowrap"
        >
          Giriş
        </Link>
        <Link
          to="/register"
          className="text-blue-800 rounded-2xl border border-blue-800 px-3 py-1.5 text-xs hover:opacity-90 transition whitespace-nowrap"
        >
          Qeydiyyat
        </Link>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-5 bg-white shadow-md">

          {menuItems.map((item, i) => (
              <li key={i}>
            <NavLink
              key={i}
              to={item.path}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {item.label}
            </NavLink>
            </li>
          ))}

        </ul>
      </div>

    </header>
  );
};

export default Navbar;