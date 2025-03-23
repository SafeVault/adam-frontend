import React from "react";
import bottomGradient from "../assets/bottomgradient.png"; // Import the bottom gradient image
import bgImage from "../assets/Group 135.png"; // Import the overlay image
import smallbox from "../assets/smallbox.png"; // Import the smallbox image

const Signup = () => {
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
        className="absolute w-20 h-20 md:w-24 md:h-24 top-24 left-24 md:top-32 md:left-32"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-20 h-20 md:w-24 md:h-24 top-2 right-2 md:top-4 md:right-4"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-20 h-20 md:w-24 md:h-24 top-48 right-2 md:top-56 md:right-4"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-20 h-20 md:w-24 md:h-24 bottom-48 left-48 md:bottom-56 md:left-64"
      />
      <img
        src={smallbox}
        alt="Small Box"
        className="absolute w-20 h-20 md:w-24 md:h-24 bottom-8 right-48 md:bottom-16 md:right-64"
      />

      {/* Signup Content */}
      <div className="w-full max-w-sm p-6 bg-transparent text-white">
        <div className="flex justify-center mb-6">
          <img
            alt="Placeholder logo"
            className="w-24 h-24 rounded-full"
            src="https://placehold.co/100x100"
          />
        </div>
        <h1 className="text-3xl font-semibold text-center mb-2">Get Started</h1>
        <p className="text-center text-gray-400 mb-6">Let's get you started</p>
        <form>
          <div className="mb-4">
            <input
              className="w-full p-3 border border-gray-600 rounded-xl bg-transparent text-white focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full p-3 border border-gray-600 rounded-xl bg-transparent text-white focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
              type="password"
            />
            <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
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
