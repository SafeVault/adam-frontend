function WalletAddress(){
    return (    
        <div className="w-full flex justify-end p-4">
        <div className="bg-gradient-to-r from-[#3C005A] to-[#800080] h-[34px] w-[186px] cursor-pointer rounded-sm px-4 py-5 flex items-center gap-2">
          <div className="h-[28px] w-[28px] bg-[#D9D9D9]  rounded-full"></div>
          <span className="text-xs text-white">0x4543...r8onwYT</span>
        </div>
      </div>)
};

export default WalletAddress;