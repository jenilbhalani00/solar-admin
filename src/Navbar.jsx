import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <header
      className={`shadow-lg  lg:bg-zinc-900 sticky top-0 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex  ">
        <ul className=" lg:flex lg:gap-[90px] lg:mt-[10px] lg:ml-[120px] md:hidden sm:hidden">
          {["/", "/about", "/products", "/service", "/blog", "/contacts"].map(
            (path, index) => (
              <li key={index} className="lg:mt-[20px] lg:mb-[20px]">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* login and registration */}

        <ul className="lg:flex lg:gap-[90px] lg:mt-[25px] text-[18px] lg:ml-[120px] md:hidden sm:hidden">
          <NavLink
            to="/login"
            className={  ({ isActive }) =>
              `transition-all cursor-pointer text-gray-400  font-bold duration-500 hover:scale-110 ${
                isActive ? "text-white" : "hover:text-white"
              }` 
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                isActive ? "text-white" : "hover:text-white"
              }`
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/manage"
            className={({ isActive }) =>
              `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                isActive ? "text-white" : "hover:text-white"
              }`
            }
          >
            Manage 
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
