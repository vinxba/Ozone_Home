import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative h-[600px] flex items-center bg-cover bg-center px-6 md:px-16"
      style={{ backgroundImage: "url('https://img.magnific.com/free-photo/happy-african-american-young-family-bought-new-house_7861-3095.jpg?semt=ais_hybrid&w=740&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-xl bg-white/20 backdrop-blur-md border border-white/30 p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
          Premium Refurbished<br />
          Home Appliances at<br />
          Unbeatable Prices
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
