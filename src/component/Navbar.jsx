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
      <h1 className="text-3xl primary-color m-4">RISHABH SINGH</h1>
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
    <div className="bg-black h-28  text-gray-100 font-DM Sans w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="w-4/6 m-auto h-full flex items-center justify-between"
      >
        <div className=" primary-color text-xl lg:text-2xl font-bold cursor-pointer">
          RISHABH SINGH
        </div>
        <motion.div
          transition={{ staggerChildren: 0.1 }}
          className="hidden lg:flex gap-8"
        >
          <NavItem title="HOME" />
          <NavItem title="PROJECTS" />
          <NavItem title="CONTACT" />
        </motion.div>

        <div onClick={toggleMenu} className="block lg:hidden">
          {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </motion.div>
      <MobileMenu open={open} />
    </div>
  );
}

const NavItem = ({ title }) => (
  <a href={`#${title}`} className="hover:scale-125 duration-500 ease-in-out">
    <button>{title}</button>
  </a>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};
