import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070')] bg-cover bg-center px-6 md:px-16">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-xl bg-white/20 backdrop-blur-md border border-white/30 p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
          Premium Refurbished <br />
          <span className="bg-[#9A91C6] px-2 py-1 mt-2 inline-block shadow-sm text-white">
            Home Appliances at
          </span><br/>
          <span className="bg-[#9A91C6] px-2 py-1 mt-1 inline-block shadow-sm text-white">
            Unbeatable Prices
          </span>
        </h1>
        <p className="text-white text-sm md:text-base mb-8 drop-shadow-md font-medium">
          Professionally Tested • Warranty Included • Save Up To 70%
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition">Browse Inventory</button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition">Our Process</button>
        </div>
      </div>
    </section>
  );
}