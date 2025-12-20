import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // custom rəng
  const blue = "#3456BE";

  const activeClass =
    "text-white rounded-2xl px-4 py-2 transition whitespace-nowrap";
  const normalClass =
    "text-gray-700 hover:text-[#3456BE] transition px-4 py-2 whitespace-nowrap";

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

      {/* Desktop */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center px-5 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="h-10" />
        </Link>

        {/* Menu */}
        <ul className="flex gap-3 items-center">
          {[
            { path: "/", label: "Ana Səhifə", end: true },
            { path: "/services", label: "Xidmətlərimiz" },
            { path: "/about", label: "Haqqımızda" },
            { path: "/contact", label: "Əlaqə" },
          ].map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                end={item.end}
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: blue, color: "white", borderRadius: "1rem" }
                    : undefined
                }
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
      

      {/* ✅ Mobile navbar */}
      <div className="md:hidden flex items-center justify-between px-3 py-3">

        {/* Menu icon */}
        <button onClick={() => setOpen(!open)} className="flex-shrink-0">
          {open ? <IoClose size={32} /> : <IoMenu size={32} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/mobile_logo.png"
            alt="Logo"
            className="h-9"
          />
        </Link>

     <div className="flex gap-2 flex-shrink-0">

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

      {/* ✅ Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-5 bg-white shadow-md">

          {[
            { path: "/", label: "Ana Səhifə", end: true },
            { path: "/services", label: "Xidmətlərimiz" },
            { path: "/about", label: "Haqqımızda" },
            { path: "/contact", label: "Əlaqə" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              end={item.end}
              onClick={() => setOpen(false)}
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: blue, color: "white", borderRadius: "1rem" }
                  : undefined
              }
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {item.label}
            </NavLink>
          ))}

        </ul>
      </div>

    </header>
  );
};

export default Navbar;