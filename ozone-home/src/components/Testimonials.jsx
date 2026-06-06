import React from 'react';

const reviews = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    appliance: "Samsung Washer",
    rating: 5,
    text: "Absolutely blown away by the quality. It looks and works like brand new — I honestly can't tell it's refurbished. Saved over $400 and the delivery crew was incredibly professional.",
    initials: "SM",
  },
  {
    name: "James R.",
    location: "Chicago, IL",
    appliance: "LG Refrigerator",
    rating: 5,
    text: "I was skeptical at first, but after my refrigerator arrived I was converted. The 100-point inspection is legit — every surface is spotless and it runs perfectly quiet.",
    initials: "JR",
  },
  {
    name: "Priya K.",
    location: "San Francisco, CA",
    appliance: "KitchenAid Range",
    rating: 4,
    text: "Great value and the whole experience was smooth from order to installation. The 1-year warranty really gave me peace of mind. Would absolutely recommend to friends.",
    initials: "PK",
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= count ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">Customer Reviews</span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-extrabold text-gray-900 text-lg">4.8</span>
            <span className="text-gray-400 text-sm">from 12,400+ verified reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <Stars count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 grow">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0">
                  {r.initials}
                </div>
                <div className="grow">
                  <div className="font-semibold text-sm text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.location} · {r.appliance}</div>
                </div>
                <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
