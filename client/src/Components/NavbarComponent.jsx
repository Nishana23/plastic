import React from 'react'
import { Link } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
const NavbarComponent = () => {
  return (
    
    <div className="w-full h-full bg-slate-200 min-h-screen 
    ">
    <div className="shadow-md h-screen bg-green-800 w-64">
    <nav className="mt-4">
      <ul>
        <li className="flex items-center p-4 cursor-pointer">
        <CiLogin size={25}/>
        <span className="ml-4">
          Login
        </span>
        </li>
        <li className=" flex items-center p-4 cursor-pointer">
        <MdMessage size={25} />
        <span className="ml-4">
          Complaints
        </span>
        </li>
        <li className=" flex items-center p-4 cursor-pointer">
        <MdOutlinePayment size={25}/>
        <span className="ml-4">
          Payments
        </span>
        </li>
        <li className="flex items-center p-4 cursor-pointer">
        <CiLogin size={25}/>
        <span className="ml-4">
          Request
        </span>
        </li>
        <li className="flex items-center p-4 cursor-pointer">
        <CiLogin size={25}/>
        <span className="ml-4">
          User Details
        </span>
        </li>
        <li className="flex items-center p-4 cursor-pointer">
        <CiLogin size={25}/>
        <span className="ml-4">
          Collection Details
        </span>
        </li>
        <li className="flex items-center p-4 cursor-pointer">
        <CiLogin size={25}/>
        <span className="ml-4">
          Update and delete
        </span>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  )
}

export default NavbarComponent