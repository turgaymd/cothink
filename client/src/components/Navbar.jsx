import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // custom rəng
  const blue = "#3456BE";

  const activeClass =
    "text-white rounded-2xl px-4 py-2 transition";
  const normalClass =
    "text-gray-700 hover:text-[#3456BE] transition px-4 py-2";

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

      {/* ✅ Desktop */}
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
          style={{ backgroundColor: blue }}
          className="text-white rounded-3xl px-6 py-2 hover:opacity-90 transition"
        >
          Giriş
        </Link>
        <Link
          to="/register"
          style={{ backgroundColor: blue }}
          className="text-white rounded-3xl px-6 py-2 hover:opacity-90 transition"
        >
          Qeydiyyat
        </Link>
      </div>
      </div>
      

      {/* ✅ Mobile navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">

        {/* Menu icon */}
        <button onClick={() => setOpen(!open)}>
          {open ? <IoClose size={42} /> : <IoMenu size={42} />}
        </button>

        {/* Logo */}
        <Link to="/">
          <img
            src="/images/mobile_logo.png"
            alt="Logo"
            className="h-12"
          />
        </Link>

     <div className="flex gap-3">

               <Link
          to="/login"
          style={{ backgroundColor: blue }}
          className="text-white rounded-2xl px-4 py-1.5 text-sm hover:opacity-90 transition"
        >
          Giriş
        </Link>
        <Link
          to="/register"
          style={{ backgroundColor: blue }}
          className="text-white rounded-2xl px-4 py-1.5 text-sm hover:opacity-90 transition"
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
