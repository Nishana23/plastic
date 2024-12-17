import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { IoEyeOffOutline, IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
import { server } from "../Server";

const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [ward, setWard] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(""); // For success or error message
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${server}/create-user`, { name, email, password, address, number, ward })
      .then((res) => {
        console.log(res);
        window.alert("Account created successfully!")
        setMessage("Account created successfully!"); 
        navigate("/")// Success message
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong, please try again."); // Error message
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl px-8 py-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Sign Up</h1>

        {/* Grid Layout */}
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6" onSubmit={handleSubmit}>
          {/* User Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">User Name</label>
            <input
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-blue-500"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-blue-500"
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-blue-500"
              type={visible ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {visible ? (
              <IoEyeOffOutline
                size={25}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={() => setVisible(false)}
              />
            ) : (
              <IoEyeOffSharp
                size={25}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={() => setVisible(true)}
              />
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-blue-500"
              type="tel"
              placeholder="Enter your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          {/* Ward Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Ward Number</label>
            <input
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-blue-500"
              type="text"
              placeholder="Enter your Ward Number"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="lg:col-span-3 sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-blue-500"
              rows="3"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-3 sm:col-span-2">
            <button
              type="submit" // Changed to "submit" so the form gets submitted
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Message */}
        {message && (
          <div className="mt-4 text-center text-gray-700 font-medium">
            <p>{message}</p>
          </div>
        )}

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:text-blue-400 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
