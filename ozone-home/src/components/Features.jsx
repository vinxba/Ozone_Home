import React from 'react';

export default function Features() {
  const features = [
    { title: "Quality Tested", sub: "100+ Point Inspection" },
    { title: "Warranty Included", sub: "1 Year Full Coverage" },
    { title: "Certified Refurbished", sub: "Factory Grade Standards" },
    { title: "Fast Delivery", sub: "Professional Installation" }
  ];

  return (
    <section className="bg-white py-10 border-b">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}