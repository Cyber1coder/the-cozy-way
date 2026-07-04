import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const baseStyle =
    "block px-3 py-2 text-[#6b5c61] transition duration-300";

  const activeStyle =
    "text-[#a4345d] font-semibold";

  return (
    <nav className="bg-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        <h1 className="text-lg sm:text-xl font-semibold text-[#4f3f44] whitespace-nowrap">
          ︵‿୨♡ Ｔｈｅ Ｃｏｚｙ Ｈｏｏｋ ♡୧‿︵
        </h1>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#4f3f44]"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : "hover:text-[#c08497]"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/learn"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : "hover:text-[#c08497]"}`
            }
          >
            Learn
          </NavLink>

          <NavLink
            to="/yarn"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : "hover:text-[#c08497]"}`
            }
          >
            Yarn Guide
          </NavLink>

          <NavLink
            to="/patterns"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : "hover:text-[#c08497]"}`
            }
          >
            Patterns
          </NavLink>

          <NavLink
            to="/supplies"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : "hover:text-[#c08497]"}`
            }
          >
            Essentials
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-5 pb-4 bg-pink-100">
          <NavLink to="/" onClick={() => setOpen(false)} className={baseStyle}>
            Home
          </NavLink>

          <NavLink to="/learn" onClick={() => setOpen(false)} className={baseStyle}>
            Learn
          </NavLink>

          <NavLink to="/yarn" onClick={() => setOpen(false)} className={baseStyle}>
            Yarn Guide
          </NavLink>

          <NavLink to="/patterns" onClick={() => setOpen(false)} className={baseStyle}>
            Patterns
          </NavLink>

          <NavLink to="/supplies" onClick={() => setOpen(false)} className={baseStyle}>
            Essentials
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;