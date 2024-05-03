import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoCodepen } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   
  const smallMenu = ()=>{
    setIsOpen(!isOpen)
  }
  

  return (
    <div className="bg-gray-100">
      <div className="flex  items-center justify-between px-16 py-3">
        <div className="flex">
           <div className="flex items-center mr-20">
          <IoLogoCodepen className="logo text-3xl text-blue-600" />
          <span className="ml-1 font-semibold text-xl">Lookscout</span>
        </div>
      
        <div className="hidden md:flex  space-x-4 text-[16px] font-bold mt-4">
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <div className="dropdown relative flex">
            <button className="mb-2">
              Resources 
            </button>
            <button><RiArrowDropDownLine onClick={toggleMenu}  className="dropdown-toggle 
            mb-1 text-3xl"/><i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} /></button>
            {isOpen && (
              <div className="dropdown-content absolute w-40 bg-white shadow-md rounded-md z-10">
                <Link to="/resource1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resource 1</Link>
                <Link to="/resource2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resource 2</Link>
                <Link to="/resource3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resource 3</Link>
              </div>
            )}
          </div>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="dropdown-toggle">
            Resources <i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
          </button>
          {isOpen && (
            <div className="dropdown-content absolute w-40 bg-white shadow-md rounded-md z-10 mt-2">
              <Link to="/resource1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resource 1</Link>
              <Link to="/resource2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resource 2</Link>
              <Link to="/resource3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resource 3</Link>
            </div>
          )}
        </div>
        </div>

        <div className="mr-9">
          <Link to={'/signup'} className="text-blue-600 p-3 rounded-lg text-lg font-semibold hover:text-white hover:bg-blue-600
         mr-9">Sign Up</Link>
          <Link to={'/login'} className="text-blue-600 text-lg p-3 rounded-lg font-semibold hover:text-white hover:bg-blue-600
       ">Log In</Link>
        </div>
       
      </div>
      <hr />
    </div>
    
  );
};

export default Navbar;
