import React,{useState} from 'react'
import { BsEyeSlash } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const LoginComponent = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [visible,setVisible]=useState(false)
   
  return (
    <div className="min-h-screen  w-screen h-screen bg-gray-200  flex flex-col  items-center justify-center  ">
      <div className="sm:mx-auto   sm:w-full sm:max-w-md bg-white rounded-xl py-12">
      <h1 className="  px-10 text-3xl font-extrabold text-gray-900">
    Login
      </h1>
      <div className='font-medium text-gray-500 mt-4 px-10'>welcome back! Please login to your account.</div>
    
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-10 sm:rounded-lg ">
      <p className="text-slate-500 "> User name</p>
          
            <div className="mt-3">
            <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
              type="text"
              name="name"
              value={name}
              placeholder="Enter your Name"
              onChange={(e)=>setName(e.target.value)}
            />
            </div>
             
              <p className="text-slate-500 mt-3">  Password</p>
          
              
              <div className="mt-3 relative ">
            <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
              type={visible ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            {visible ? (
                    <BsEyeSlash 
                      size={25}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <BsEyeSlashFill 
                      size={25}
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  )}
             
            
            </div>
            <div className="text-blue-500 mt-8 flex justify-between items-center">
            <div className=" relative">
                <input 
                type="checkbox" 
                name="remember-me"
                id="remember-me"     
                        />
             <label className="ml-2 font-medium text-gray-900">
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
            <div>

            </div>
            <div className='mt-8  px-10 text-center'>
            <button
            type="submit"
            className="group relative w-full h-[40px] flex justify-center items-center border border-transparent  font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </button>
            </div>
           </div>
          </div>
</div>
  )
}

export default LoginComponent;