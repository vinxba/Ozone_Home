import React from 'react';

const categories = [
  { title: "Washing Machines", sub: "Front load, top load, and combo units.", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800", count: "124 items" },
  { title: "Refrigerators", sub: "French door, side-by-side, and compact.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", count: "89 items" },
  { title: "Ovens & Ranges", sub: "Electric, gas, and induction cooktops.", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800", count: "67 items" },
  { title: "Dishwashers", sub: "Built-in, portable, and countertop models.", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800", count: "45 items" },
  { title: "Dryers", sub: "Electric, gas, and ventless models.", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800", count: "56 items" },
  { title: "Small Appliances", sub: "Microwaves, hoods, and countertop units.", img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800", count: "112 items" },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">Browse</span>
            <h2 className="text-3xl font-bold mt-1 text-gray-900">Shop by Category</h2>
            <p className="text-gray-500 text-sm mt-1">Engineered performance across every room.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm font-bold border-b-2 border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative h-60 group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-1">{cat.count}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{cat.title}</h3>
                <p className="text-gray-300 text-xs mt-1 mb-3">{cat.sub}</p>
                <span className="inline-flex items-center text-white text-xs font-bold bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit group-hover:bg-emerald-600 transition-colors duration-300">
                  Explore
                  <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
