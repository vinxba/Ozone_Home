import React from 'react';

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 px-6">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-900/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-block text-emerald-400 text-xs font-bold tracking-widest uppercase mb-5">
          Join 50,000+ Happy Customers
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Ready to Upgrade<br />Your Home?
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
          Save up to 70% on premium certified appliances. Every purchase includes free delivery, professional installation, and a full 1-year warranty.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-4 font-bold text-sm rounded-xl transition-colors shadow-xl shadow-emerald-900/50">
            Explore All Inventory →
          </button>
          <button className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 font-semibold text-sm rounded-xl transition-colors">
            Speak to an Expert
          </button>
        </div>
        <p className="text-gray-600 text-xs mt-6">No credit card required · Free 30-day returns · Cancel anytime</p>
      </div>
    </section>
  );
}
