import React, { useState } from "react";
import logo from "../assets/logo.png";
import green from "../assets/green.jpg";
import ocean from "../assets/ocean.jpg";
import nature2 from "../assets/nature2.jpg";
import haritha from "../assets/haritha.jpg";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";

const UserPage = () => {
  const [visible, setVisible] = useState(true);

  const menuitems = [
    { label: "Login" },
    { label: "Request" },
    { label: "Payment" },
    { label: "Complaint" },
    { label: "Payment History" },
  ];

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="px-4 py-10  shadow-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-20" />
          <h1 className="text-2xl font-bold text-green-900">Reduce Plastic</h1>
        </div>

        <div>
          {visible ? (
            <MdOutlineMenu
              size={30}
              className="cursor-pointer text-green-900"
              onClick={() => setVisible(false)}
            />
          ) : (
            <MdMenuOpen
              size={30}
              className="cursor-pointer text-green-900"
              onClick={() => setVisible(true)}
            />
          )}
        </div>
      </div>

      <div
        className={`absolute ${visible ? "block":"hidden"}  right-0  py-11 w-64 bg-white shadow-lg transform ${
          visible ? "w-0":"translate-x-24 "
        }  duration-200 overflow-hidden`}
      >
        <ul>
          {menuitems.map((item, index) => (
            <li
              key={index}
              className="p-3 rounded-md hover:bg-green-200 text-gray-700 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
        </div>
        <marquee className="bg-green-600 h-10 text-white font-medium flex items-center">
        Welcome to Reduce Plastic Initiative!
      </marquee>
      
        <div>
        <img src={green} alt="green" className="h-1/2 w-screen"/>
        
      </div>
      <div className="flex  justify-center ">
      <button type="submit"
            className="group relative  h-10 w-28 sm:w-60 sm:h-14 sm:bottom-40 flex items-center justify-center bottom-14  border  font-medium rounded-md text-white bg-green-900">
        Read more
      </button>
      </div>
       <div className="  flex w-full sm:flex-row flex-col justify-around  items-center  px-4">

        <div className="mt-10 py-10 bg-slate-200  rounded-md text-center ">
          
          <img src={ocean} alt="ocean"  className=" rounded-3xl w-[500px] h-[400px] gap-3 p-4"/>
          <p className="text-xl ">hghg
    
          </p>
        </div>
        <div className="mt-10 py-10 bg-slate-200  rounded-md text-center">
          <img src={nature2} alt="nature2" className=" rounded-3xl w-[500px] h-[400px] gap-3 p-4"/>
          <p>hgff</p>
        </div>
        <div className="mt-10 py-10 bg-slate-200  rounded-md text-center ">
          <img src={haritha} alt="haritha" className=" rounded-3xl w-[500px] h-[400px] gap-3 p-4"/>
          <p className="shadow-2xl ">gfhhh</p>
        </div>
        
       </div>
    </div>
  );
};

export default UserPage;