import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: "Today's Deals", to: "/" },
  { label: "Laundry", to: "/category/washing-machines" },
  { label: "Kitchen", to: "/category/cookers" },
  { label: "Refrigerators", to: "/category/refrigerators" },
  { label: "Ovens & Ranges", to: "/category/ovens" },
  { label: "Hobs", to: "/category/hobs" },
  { label: "Dryers", to: "/category/dryers" },
  { label: "Refurbished Guide", to: "/" },
  { label: "Support", to: "/" },
];

export default function Navbar() {
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Primary bar */}
      <div className="bg-white px-4 lg:px-8 py-3 flex items-center gap-3 lg:gap-6">
        {/* Logo */}
        <Link to="/" className="shrink-0 group">
          <div className="text-xl lg:text-2xl font-extrabold tracking-tight text-gray-900 leading-none group-hover:text-emerald-700 transition-colors">
            OzoneHome
          </div>
          <div className="text-[9px] text-emerald-600 font-bold tracking-widest uppercase mt-0.5">
            Certified Refurbished
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 flex rounded-xl overflow-hidden border-2 border-emerald-600 shadow-sm focus-within:shadow-md focus-within:border-emerald-700 transition-all">
          <select className="hidden md:block bg-gray-50 text-xs text-gray-600 px-3 border-r border-gray-200 outline-none cursor-pointer hover:bg-gray-100 transition-colors font-medium">
            <option>All</option>
            <option>Laundry</option>
            <option>Kitchen</option>
            <option>Refrigerators</option>
            <option>Ovens & Ranges</option>
            <option>Hobs</option>
            <option>Dryers</option>
          </select>
          <input
            type="text"
            placeholder="Search appliances, brands, models..."
            className="flex-1 px-4 py-2.5 text-sm outline-none bg-white placeholder:text-gray-400"
          />
          <button className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-5 py-2.5 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 shrink-0">
          <button className="hidden lg:flex flex-col items-start px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors text-left">
            <span className="text-[10px] text-gray-400">Hello, Sign in</span>
            <span className="text-sm font-bold text-gray-800">Account & Lists</span>
          </button>
          <button className="hidden lg:flex flex-col items-start px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors text-left">
            <span className="text-[10px] text-gray-400">Free Returns</span>
            <span className="text-sm font-bold text-gray-800">Orders</span>
          </button>
          <button className="hidden md:flex p-2.5 hover:bg-gray-50 rounded-xl transition-colors group">
            <svg className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <Link to="/cart" className="relative flex items-center gap-2 bg-gray-900 hover:bg-gray-700 active:bg-black text-white px-4 py-2.5 rounded-xl transition-colors font-semibold text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="hidden sm:block">Cart</span>
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="bg-gray-900">
        <div className="px-4 lg:px-8 flex items-center overflow-x-auto">
          <button className="flex items-center gap-2 text-white px-3 py-2.5 hover:bg-white/10 transition-colors whitespace-nowrap font-bold text-sm shrink-0 border-r border-gray-700 mr-2 pr-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            All
          </button>
          {NAV_LINKS.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className="text-gray-300 hover:text-white px-3 py-2.5 hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
