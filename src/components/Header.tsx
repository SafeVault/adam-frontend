import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <FiBell className="text-gray-400 text-xl cursor-pointer" />
        {/* <Avatar username="D" /> */}
        <button className="flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-[3pxflex items-center bg-[linear-gradient(90deg,#3C005A_0%,#800080_100%)] text-white rounded-[3px] px-4 py-2 space-x-2] px-4 py-2 space-x-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span className="text-sm font-medium">0x4543...f8w97</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
