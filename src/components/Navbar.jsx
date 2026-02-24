import { NavLink } from "react-router-dom"

const Navbar = () => {
  const baseStyle =
    "relative px-3 py-2 text-[#6b5c61] transition duration-300"

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-pink-100 shadow-sm">
      
      <h1 className="text-xl font-semibold text-[#4f3f44]">
        ︵‿︵‿୨♡ Ｔｈｅ Ｃｏｚｙ Ｈｏｏｋ ♡୧‿︵‿︵
      </h1>

      <div className="flex gap-8">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseStyle} ${
              isActive
                ? "text-[#a4345d] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#b34d73]"
                : "hover:text-[#c08497]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/learn"
          className={({ isActive }) =>
            `${baseStyle} ${
              isActive
                ? "text-[#a4345d] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#b34d73]"
                : "hover:text-[#c08497]"
            }`
          }
        >
          Learn
        </NavLink>

        <NavLink
          to="/yarn"
          className={({ isActive }) =>
            `${baseStyle} ${
              isActive
                ? "text-[#a4345d] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#b34d73]"
                : "hover:text-[#c08497]"
            }`
          }
        >
          Yarn Guide
        </NavLink>

        <NavLink
          to="/patterns"
          className={({ isActive }) =>
            `${baseStyle} ${
              isActive
                ? "text-[#a4345d] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#b34d73]"
                : "hover:text-[#c08497]"
            }`
          }
        >
          Patterns
        </NavLink>

      </div>
    </nav>
  )
}

export default Navbar