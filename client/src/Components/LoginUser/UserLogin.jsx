import axios from "axios";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../Server";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(""); // For displaying login errors
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError(""); // Clear previous errors
    setLoading(true); // Set loading to true

    axios
      .post(`${server}/login-user`, { email, password })
      .then((res) => {
        if (res.data.msg === "success") {
          navigate("/home"); // Navigate to home on success
        } else {
          setError("Invalid email or password. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred. Please try again later.");
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-8 py-10 sm:px-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-green-900 text-center mb-6">
          User Login
        </h1>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-center text-red-500 font-medium">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={visible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
            />
            {visible ? (
              <IoEyeOffOutline
                size={22}
                className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                onClick={() => setVisible(false)}
              />
            ) : (
              <IoEyeSharp
                size={22}
                className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 text-green-900 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-gray-700">
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleLogin}
          className={`w-full py-2 text-white font-semibold rounded-md transition duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-900 hover:bg-green-700"
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline hover:text-blue-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
