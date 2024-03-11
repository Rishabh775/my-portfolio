import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const MobileMenu = ({ open }) => (
    <div
      onClick={() => setOpen(false)}
      className={`fixed left-0 top-0 w-[60%] z-50 bg-[#202121] ease-in-out duration-500 ${
        open ? "h-full" : "left-[-100%]"
      }`}
    >
      <h1 className="text-3xl  m-4">RISHABH SINGH</h1>
      <div className="flex flex-col items-center pt-40 text-2xl">
        <ul className="text-center   ">
          <li className="py-8 ease-in-out duration-500  hover:scale-110 hover:after:content-['➜']">
            <a href="#HOME">HOME</a>
          </li>
          <li className="py-8 ease-in-out duration-500  hover:scale-110 hover:after:content-['➜'] ">
            <a href="#PROJECTS">PROJECTS</a>
          </li>
          <li className="py-8 ease-in-out duration-500   hover:scale-110 hover:after:content-['➜'] ">
            <a href="#CONTACT">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );

  const toggleMenu = () => {
    setOpen(!open);
  };

  MobileMenu.propTypes = {
    open: PropTypes.bool.isRequired,
  };

  return (
    <div className="bg-gradient-to-b from-black to-neutral-950 h-24 sm:h-28  text-gray-100 font-DM Sans w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="sm:w-4/6 max-sm:px-4 m-auto h-full flex items-center justify-between"
      >
        <div className="  text-xl lg:text-2xl font-bold cursor-pointer">
          RISHABH SINGH
        </div>
        <div className="hidden lg:flex lg:items-center gap-8">
          <NavItem title="HOME" />
          <NavItem title="PROJECTS" />
          <NavItem title="CONTACT" />
          <div className="flex flex-wrap gap-3 items-center ">
            <a target="_blank" href="https://github.com/Rishabh775">
              <img
                className="w-8 cursor-pointer hover:scale-110"
                src="/github.png"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rishabh-singh-794171205/"
            >
              <img
                className="w-9  cursor-pointer hover:scale-110"
                src="/linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>

        <div onClick={toggleMenu} className="block lg:hidden">
          {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </motion.div>
      <MobileMenu open={open} />
    </div>
  );
}

const NavItem = ({ title }) => (
  <a href={`#${title}`} className="hover:scale-125 duration-200 ease-in-out">
    <button>{title}</button>
  </a>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};
