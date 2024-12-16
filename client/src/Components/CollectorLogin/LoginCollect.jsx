import React, { useState } from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const LoginCollect = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [visible,setVisible]=useState(false);
  return (
    <div className="h-screen w-screen min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="sm:mx-auto   sm:w-full sm:max-w-md bg-white rounded-xl py-12">
        <h1 className="  px-10 text-2xl text-center font-extrabold text-gray-900">
        Collector Login
            </h1>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-10 sm:rounded-lg ">
      <p className="text-black "> User name</p>
      <div className="mt-3 shadow-md">
        <input className="outline-none"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <p className="text-black mt-4 "> Password</p>
      <div className="mt-3 shadow-md relative">
        <input className=" outline-none"
          type={visible ? "text" : "password"}
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        {visible ? (
                      < BsFillEyeFill
                      size={25}
                      className="absolute right-2 top-0  cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <BsEyeSlashFill 
                      size={25}
                      className="absolute right-2 top-0 cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  )}
        </div>
        <div className="text-lime-950 mt-8 flex justify-between items-center">
            <div className=''>
                <input 
                type="checkbox" 
                id="remember"     
                        />
             <label className="ml-2 font-medium text-gray-900 ">
              Remember me
              </label>           
            </div>
          
            <Link
                    href="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forget Password
                  </Link>
            </div>
      </div>
      <div className="mt-6 px-10 text-center">
      <button
            type="submit"
            className="group relative w-full h-[40px] flex justify-center items-center border border-transparent  font-medium rounded-md text-white  bg-lime-950 hover:bg-lime-950"
            >Login
            </button>
      </div>
      
      </div>
        </div>

    </div>
  )
}

export default LoginCollect