import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const SignupComponent = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [address,setAddress]=useState("");
  const [number,setNumber]=useState("");
  const [ward,setWard]=useState("");
  const [visible,setVisible]=useState(false);

   const handleSubmit=()=>{
    
   }

  return (
    <div className="min-h-screen  w-screen h-screen bg-white  flex flex-col  items-center justify-center  ">
    <div className="sm:mx-auto   sm:w-full sm:max-w-md bg-slate-200 rounded-xl py-12">
    <h1 className="  px-10  text-3xl font-extrabold  text-center">
  Sign Up
    </h1>
    <div className=" mt-4 sm:mx-auto sm:w-full  sm:max-w-md">
    <div className="bg-slate-200 px-10  sm:rounded-lg ">
     User name
        
          <div className="mt-1">
          <input className=" text-black border border-gray-400 rounded-md outline-none  w-full px-3 py-2 "
            type="text"
            name="name"
            value={name}
            placeholder="Enter your Name"
            onChange={(e)=>setName(e.target.value)}
          />
          </div>
                <p className="mt-1">Email</p>

                <div className="mt-1">
          <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
          <p className="mt-1">Password</p>
          <div className="mt-1 relative">
          <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
            type={visible ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          {visible ? (
                    <IoEyeOffOutline
                      size={25}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <IoEyeOffSharp 
                      size={25}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  )}
          </div>
          
          <p className="mt-1">Phone Number</p>
          <div className="mt-1">
          <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
            type="text"
            name="number"
            value={number}
            placeholder="Enter your number"
            onChange={(e)=>setNumber(e.target.value)}
          />
          </div>
          <p className="mt-1">Ward Number</p>
          <div className="mt-1">
          <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
            type="text"
            name="ward"
            value={ward}
            placeholder="Enter your ward"
            onChange={(e)=>setWard(e.target.value)}
          />
          </div>
          <p className="mt-1">Address</p>
          <div className="mt-1">
            <textarea className="outline-none px-24 py-3
              text-black border border-gray-400  rounded-md  w-full"
            type="text"
            name="address"
            value={address}
            placeholder="Enter your address"
            onChange={(e)=>setAddress(e.target.value)}
          >
            </textarea>
          
          </div>
          <div className="mt-6">
          <button
          type="signup"
          className="group relative w-full h-12 flex items-center justify-center rounded-md text-white bg-blue-700 hover:bg-blue-700"
         onClick={handleSubmit} >
                Sign Up
          </button>
          </div>
          <div className="mt-2 text-center">
                <Link
                  to="/userlogin"
                  className="font-medium text-blue-600 hover:text-blue-300"
                >
                  Already have an Account ? Login
                </Link>
              </div>
          
        </div>
    </div>
        </div>
          </div>
  )
}

export default SignupComponent