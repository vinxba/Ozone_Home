import React from 'react';

export default function FlashSale() {
  return (
    <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
      <span className="text-emerald-400 font-semibold tracking-wider">FLASH SALE ENDING IN:</span>
      <span className="font-mono text-base">23:55:53</span>
      <button className="bg-white text-black px-4 py-1 rounded-full font-bold text-xs hover:bg-gray-200 transition">Shop Now</button>
    </div>
  );
}