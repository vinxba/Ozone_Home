import React from 'react';

export default function FooterCTA() {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Home?</h2>
      <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">
        Join 50,000+ happy customers who saved big without compromising on quality or the environment.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition">Explore All Inventory</button>
        <button className="bg-white border border-gray-300 text-black px-8 py-3 font-semibold hover:bg-gray-50 transition">Speak to an Expert</button>
      </div>
    </section>
  );
}