import React from 'react';

export default function BestDeals() {
  const products = [
    {
      badge: "SAVE 45%", brand: "SAMSUNG", name: "WF45T6000AW High-Efficiency Front Load Washer",
      price: "$499.00", oldPrice: "$899.00",
      img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400",
      tags: [{ text: "LIKE NEW", color: "bg-emerald-100 text-emerald-800" }]
    },
    {
      badge: "SAVE 30%", brand: "LG ELECTRONICS", name: "Smart Wi-Fi Dishwasher with QuadWash",
      price: "$629.00", oldPrice: "$899.00",
      img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400",
      tags: [{ text: "GRADE A", color: "bg-gray-200 text-gray-800" }]
    },
    {
      badge: "SAVE 60%", brand: "KITCHENAID", name: "5-Element Electric Convection Range",
      price: "$799.00", oldPrice: "$1,999.00",
      img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=400",
      tags: [{ text: "LIKE NEW", color: "bg-emerald-100 text-emerald-800" }]
    },
    {
      badge: "SAVE $200", brand: "GE APPLIANCES", name: "French Door Energy Star Refrigerator",
      price: "$1,199.00", oldPrice: "$1,399.00",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
      tags: [{ text: "OPEN BOX", color: "bg-yellow-100 text-yellow-800" }]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">Limited Availability</span>
          <h2 className="text-3xl font-bold mt-2">This Week's Best Deals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white border p-4 group relative flex flex-col hover:shadow-md transition">
              <span className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-2 py-1 z-10">{product.badge}</span>
              <button className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow-sm z-10 hover:bg-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>

              <div className="h-48 bg-gray-100 mb-4 flex items-center justify-center p-4">
                <img src={product.img} alt={product.name} className="h-full object-contain mix-blend-multiply" />
              </div>

              <div className="flex-grow">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <h4 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h4>
                <div className="flex items-center space-x-2 mb-4">
                  {product.tags.map(tag => (
                    <span key={tag.text} className={`${tag.color} text-[10px] font-bold px-2 py-0.5 rounded-sm`}>{tag.text}</span>
                  ))}
                  <span className="text-[10px] text-gray-600 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Certified
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                </div>
                <button className="w-full bg-black text-white py-2.5 text-sm font-semibold hover:bg-gray-800 transition">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
