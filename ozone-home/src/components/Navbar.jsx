import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between border-b sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-tight">OzoneHome</div>
      <nav className="hidden lg:flex space-x-8 text-sm font-medium text-gray-600">
        <a href="#" className="text-black border-b-2 border-black pb-1">Shop All</a>
        <a href="#" className="hover:text-black transition-colors">Laundry</a>
        <a href="#" className="hover:text-black transition-colors">Kitchen</a>
        <a href="#" className="hover:text-black transition-colors">Refurbished Guide</a>
        <a href="#" className="hover:text-black transition-colors">Support</a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2">
          <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="text" placeholder="Search appliances..." className="bg-transparent border-none outline-none text-sm w-40" />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></button>
      </div>
    </header>
  );
}