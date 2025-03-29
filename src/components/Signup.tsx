import React, { useState } from "react";

import logocircle from "../assets/logocircle.png"; // Import the logo image
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import bottomGradient from "../assets/bottomgradient.png"; // Import the bottom gradient image
import logobox from "../assets/logobox.png"; // Import the logobox image
import bgImage from "../assets/Group 135.png"; // Import the overlay image
import smallbox from "../assets/smallbox.png"; // Import the smallbox image

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  return (
    <div
      className="bg-black min-h-screen w-full flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage}), url(${bottomGradient})`, // Set the overlay and bottom gradient images
        backgroundSize: "cover, 100% auto", // Ensure the overlay covers the div and the gradient spans the width
        backgroundPosition: "center, bottom", // Center the overlay image and position the gradient at the bottom
        backgroundRepeat: "no-repeat", // Prevent the images from repeating
      }}
    >
      {/* Small Box Images */}
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 top-12 left-12 sm:top-16 sm:left-16 md:top-24 md:left-24 lg:top-32 lg:left-32"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 lg:top-16 lg:right-16"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 top-48 right-12 sm:top-56 sm:right-16 md:top-64 md:right-24 lg:top-72 lg:right-32"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bottom-48 left-12 sm:bottom-56 sm:left-16 md:bottom-64 md:left-24 lg:bottom-72 lg:left-32"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bottom-8 right-12 sm:bottom-16 sm:right-16 md:bottom-24 md:right-24 lg:bottom-32 lg:right-32"
      />

      {/* Signup Content */}
      <div className="w-full max-w-sm p-6 bg-transparent text-white">
        <div className="flex justify-center mb-6 relative">
          <img
            alt="Logobox"
            className="w-32 h-32" // Adjust size as needed
            src={logobox}
          />
          <img
            alt="Company Logo"
            className="absolute w-24 h-24 rounded-full top-29 left-30 transform translate-x-1/2 -translate-y-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
            src={logocircle}
          />
        </div>
        <h1 className="text-3xl font-semibold text-center pt-7 mb-2">
          Get Started
        </h1>
        <p className="text-center text-gray-400 mb-6">Let's get you started</p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-600 rounded-xl bg-transparent text-white focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              className="w-full p-3 border border-gray-600 rounded-xl bg-transparent text-white focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-4 text-gray-400 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            className="w-full p-3 bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl text-white font-semibold"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <button className="w-full p-3 border border-gray-600 rounded-lg flex items-center justify-center text-white">
          <img
            alt="Google logo"
            className="w-5 h-5 mr-2"
            src="src/assets/google.svg"
          />
          Sign up with Google
        </button>
        <p className="text-center text-gray-400 mt-6">
          Already have an account?
          <a className="text-white font-semibold ml-2" href="#">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
