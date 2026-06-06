import React from 'react';

function Stars({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? 'text-yellow-400' : i - 0.5 <= rating ? 'text-yellow-300' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500">({count.toLocaleString()})</span>
    </div>
  );
}

const products = [
  {
    badge: "SAVE 45%", brand: "SAMSUNG", name: "WF45T6000AW High-Efficiency Front Load Washer",
    price: "$499.00", oldPrice: "$899.00",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400",
    tags: [{ text: "LIKE NEW", color: "bg-emerald-100 text-emerald-800" }],
    rating: 4.5, reviews: 2341, stock: 3, shipping: "Free Delivery + Install", featured: true,
  },
  {
    badge: "SAVE 30%", brand: "LG ELECTRONICS", name: "Smart Wi-Fi Dishwasher with QuadWash",
    price: "$629.00", oldPrice: "$899.00",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400",
    tags: [{ text: "GRADE A", color: "bg-gray-100 text-gray-700" }],
    rating: 4.3, reviews: 1872, stock: 8, shipping: "Free Delivery", featured: false,
  },
  {
    badge: "SAVE 60%", brand: "KITCHENAID", name: "5-Element Electric Convection Range",
    price: "$799.00", oldPrice: "$1,999.00",
    img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=400",
    tags: [{ text: "LIKE NEW", color: "bg-emerald-100 text-emerald-800" }],
    rating: 4.7, reviews: 934, stock: 2, shipping: "Free Delivery + Install", featured: false,
  },
  {
    badge: "SAVE $200", brand: "GE APPLIANCES", name: "French Door Energy Star Refrigerator",
    price: "$1,199.00", oldPrice: "$1,399.00",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
    tags: [{ text: "OPEN BOX", color: "bg-yellow-100 text-yellow-800" }],
    rating: 4.4, reviews: 567, stock: 5, shipping: "Free Delivery + Install", featured: false,
  },
];

export default function BestDeals() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">Limited Availability</span>
            <h2 className="text-3xl font-bold mt-1 text-gray-900">This Week's Best Deals</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 border-b border-emerald-600 pb-0.5 transition-colors">
            View all deals
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border p-4 relative flex flex-col hover:shadow-xl transition-shadow duration-300 ${product.featured ? 'ring-2 ring-emerald-500 border-emerald-200' : 'border-gray-100'}`}
            >
              {product.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider shadow-lg shadow-emerald-900/30 whitespace-nowrap">
                  DEAL OF THE DAY
                </div>
              )}

              <span className="absolute top-4 left-4 bg-gray-900 text-white text-[10px] font-extrabold px-2.5 py-1 z-10 rounded-lg">
                {product.badge}
              </span>
              <button className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow-md z-10 hover:bg-red-50 hover:text-red-500 transition-colors border border-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <div className="h-48 bg-gray-50 rounded-xl mb-4 flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="grow">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{product.brand}</p>
                <h4 className="font-semibold text-sm mb-2 line-clamp-2 text-gray-900 leading-snug">{product.name}</h4>
                <Stars rating={product.rating} count={product.reviews} />

                <div className="flex items-center gap-2 mt-2 mb-1 flex-wrap">
                  {product.tags.map(tag => (
                    <span key={tag.text} className={`${tag.color} text-[10px] font-bold px-2 py-0.5 rounded-md`}>
                      {tag.text}
                    </span>
                  ))}
                  <span className="text-[10px] text-emerald-700 flex items-center gap-0.5 font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Certified
                  </span>
                </div>

                {product.stock <= 3 && (
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    Only {product.stock} left in stock!
                  </p>
                )}
                <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  {product.shipping}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-700 active:bg-black text-white py-3 text-sm font-bold rounded-xl transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
