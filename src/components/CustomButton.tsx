import { useState } from "react";
import Avater from "../assets/avater1.jpeg";
import ChatModal from "./CommentModal";

const CustomButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div
      className="relative inline-block sm:w-[40px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <button className="flex items-center px-1 py-2 bg-white rounded-tl-full rounded-bl-lg rounded-r-full border border-gray-300 shadow-md hover:shadow-lg">
          {/* Left Icon */}
          <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img
              src={Avater}
              alt="Icon"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular Styled Letter */}
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold">
            D
          </div>
        </button>
      ) : (
        <div
          className="absolute lg:w-64 md:w-44 sm:w-[20px] p-3 bg-white rounded-tl-[20px] rounded-bl-0 rounded-r-[20px] border border-gray-300 shadow-md hover:shadow-lg text-sm"
          onClick={() => setIsModalVisible(!isModalVisible)}
        >
          <p className="font-bold">The Founder (Work)</p>
          <p className="text-gray-500 text-xs">3 days ago</p>
          <p className="mt-1 text-gray-700">
            I think there should be a tab here for active employees and
            inactive. (Inactive would be those that are no...
          </p>
          <p className="mt-1 text-blue-500 text-xs">2 replies</p>
        </div>
      )}

      {isModalVisible && (
        <div className="absolute top-12 right-0 z-10">
          <ChatModal />
        </div>
      )}
    </div>
  );
};

export default CustomButton;
