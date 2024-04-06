import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="px-10 py-4 flex w-full justify-between text-white bg-[#06031d] sticky top-0 bg-opacity-100 z-50 backdrop-blur-md">
      <a className="text-3xl font-bold text-green-500" href="">
        i<span className="text-white">amcoding</span>
      </a>
      <div className="flex gap-4 items-center">
        <a className=" font-normal hover:underline" href="">
          learn
        </a>
        <a className=" font-normal hover:underline" href="">
          bootcamps
        </a>
        <a className=" font-normal hover:underline" href="">
          teach
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <a href="">Register</a>
        <a className="bg-green-600 hover:bg-green-500 p-3 rounded-md" href="">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
