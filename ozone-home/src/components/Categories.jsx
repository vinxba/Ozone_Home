import React from 'react';
import { Link } from 'react-router-dom';

const featured = [
  {
    title: "Washing Machines & Dryers",
    sub: "Front load, washer-dryer combos, and tumble dryers.",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200",
    count: "150+ items in stock",
    color: "from-black/75 via-black/30 to-transparent",
    slug: "washing-machines",
  },
  {
    title: "Refrigerators & Fridge Freezers",
    sub: "American side-by-side, upright, and fridge freezer combos.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    count: "60+ items in stock",
    color: "from-black/75 via-black/30 to-transparent",
    slug: "refrigerators",
  },
];

const regular = [
  {
    title: "Cookers & Ranges",
    sub: "Freestanding gas and electric cookers.",
    img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800",
    count: "80+ items",
    slug: "cookers",
  },
  {
    title: "Built-in Ovens",
    sub: "Single and double built-in electric ovens.",
    img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800",
    count: "25+ items",
    slug: "ovens",
  },
  {
    title: "Hobs & Cooktops",
    sub: "Gas, ceramic, and induction hobs.",
    img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800",
    count: "30+ items",
    slug: "hobs",
  },
  {
    title: "Tumble Dryers",
    sub: "Heat pump, condenser, and vented dryers.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    count: "15+ items",
    slug: "dryers",
  },
];

function CategoryCard({ cat, tall = false }) {
  return (
    <Link
      to={`/category/${cat.slug}`}
      className={`relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 ${tall ? 'h-80' : 'h-52'}`}
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-linear-to-t ${cat.color ?? 'from-black/80 via-black/25 to-transparent'}`} />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-1">{cat.count}</span>
        <h3 className="text-white font-bold text-xl leading-tight">{cat.title}</h3>
        <p className="text-gray-300 text-xs mt-1 mb-3">{cat.sub}</p>
        <span className="inline-flex items-center text-white text-xs font-bold bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit group-hover:bg-emerald-600 transition-colors duration-300">
          Explore
          <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">Browse</span>
            <h2 className="text-3xl font-bold mt-1 text-gray-900">Shop by Category</h2>
            <p className="text-gray-500 text-sm mt-1">Certified Electrolux open-unit appliances across every room.</p>
          </div>
          <Link to="/category/washing-machines" className="hidden md:flex items-center gap-1 text-sm font-bold border-b-2 border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Two large featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {featured.map(cat => (
            <CategoryCard key={cat.title} cat={cat} tall />
          ))}
        </div>

        {/* Four regular cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {regular.map(cat => (
            <CategoryCard key={cat.title} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}
