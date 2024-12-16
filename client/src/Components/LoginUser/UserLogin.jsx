import React,{useState} from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [visible,setVisible]=useState(false)
   
  return (
    <div className="min-h-screen  w-screen h-screen bg-gray-200  flex flex-col  items-center justify-center  ">
      <div className="sm:mx-auto   sm:w-full sm:max-w-md bg-white rounded-xl py-12">
      <h1 className="  px-10 text-3xl font-extrabold text-green-900 text-center">
    User Login
      </h1>
     
    
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-10 sm:rounded-lg ">
       
             
              <p className=" mt-3">  Password</p>
          
              
              <div className="mt-3 relative ">
            <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
              type={visible ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter your Password"
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
             
              
              <p className="mt-3">Email</p>
               <div className="mt-3">
            <input className=" text-black border border-gray-400 rounded-md outline-none w-full px-3 py-2 "
              type="text"
              name="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            
            </div>
            <div className="text-green-900 mt-8 flex justify-between items-center">
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
            className="group relative w-full h-[40px] flex justify-center items-center border border-transparent  font-medium rounded-md text-white bg-green-900 hover:bg-green-900"
            >
              Login
            </button>
            </div>
           </div>
          </div>
</div>
  )
}

export default UserLogin