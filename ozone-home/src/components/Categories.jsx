import React from 'react';

export default function Categories() {
  const categories = [
    { title: "Washing Machines", sub: "Front load, top load, and combo units.", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800" },
    { title: "Refrigerators", sub: "French door, side-by-side, and compact.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800" },
    { title: "Ovens & Ranges", sub: "Electric, gas, and induction cooktops.", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800" }
  ];

  return (
    <section className="py-16 bg-white max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-gray-500 text-sm">Engineered performance across every room.</p>
        </div>
        <a href="#" className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 transition">View All Categories</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="relative h-96 group overflow-hidden bg-gray-100 cursor-pointer">
            <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{cat.sub}</p>
              <span className="text-white text-sm font-semibold flex items-center group-hover:underline">
                Explore <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}