import React, { useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';
import { GiPoisonGas } from 'react-icons/gi';

const Navbar = () => {
  // State to manage the visibility of the Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close the Sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Add 'no-scroll' class to <html> when the sidebar is open
    if (isSidebarOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    // Clean up the class when the component is unmounted
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isSidebarOpen]);

  return (
    <nav className={`nav p-4 py-5 bg-black text-white ${isSidebarOpen ? 'sm:bg-black' : 'sm:bg-black'}`}>
      <div className="navbar_content w-full flex justify-between p-1 items-center">
        <div>
          <GiPoisonGas className="text-white" size={30} />
        </div>

        <div className="flex justify-between gap-5 list-none sm:hidden">
          <button
            className=""
            onClick={toggleSidebar}
          >
            <RiMenu3Fill size={30} className="text-white" />
          </button>
        </div>
        <ul className={`hidden sm:flex sm:gap-5 text-white sm:list-none ${isSidebarOpen ? 'bg-black' : 'bg-black'}`}>

          <li href="/" className="cursor-pointer  text-base  font-medium" onClick={closeSidebar}>
            Home
          </li>

          <li href="/" className="cursor-pointer  text-base  font-medium  " onClick={closeSidebar}>
            News
          </li>

          <li href="/" className="cursor-pointer  text-base  font-medium  " onClick={closeSidebar}>
            About
          </li>
          <li href="/" className="cursor-pointer  text-base  font-medium  " onClick={closeSidebar}>
            Contact
          </li>
        </ul>
      </div>
      <ul
        className={`${isSidebarOpen ? 'block' : 'hidden'} sm:hidden sm:flex sm:gap-5 sm:list-none bg-black text-white p-4 absolute top-0 right-0 h-full w-screen backdrop-blur-lg z-10`}
      >
        <li className="flex justify-end">
          <button
            className="font-extrabold"
            onClick={toggleSidebar}
          >
            <IoIosClose size={30} className="text-white" />
          </button>
        </li>
        <div className="flex flex-col justify-center gap-5 pt-[20%] items-center">
          <li href="/" className="cursor-pointer  text-base  font-medium  text-white" onClick={closeSidebar}>
            Home
          </li>

          <li href="/" className="cursor-pointer  text-base  font-medium  text-white" onClick={closeSidebar}>
            News
          </li>

          <li href="/" className="cursor-pointer  text-base  font-medium  text-white" onClick={closeSidebar}>
            About
          </li>
          <li href="/" className="cursor-pointer  text-base  font-medium  text-white" onClick={closeSidebar}>
            Contact
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
