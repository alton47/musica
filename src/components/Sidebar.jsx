import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="cursor-pointer flex items-center gap-3 pl-8">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Homee</p>
        </div>

        <div className="cursor-pointer flex items-center gap-3 pl-8">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
