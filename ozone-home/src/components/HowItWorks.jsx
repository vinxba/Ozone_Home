import React from 'react';

const steps = [
  {
    num: "01",
    title: "Browse & Select",
    desc: "Filter thousands of certified appliances by brand, condition grade, price, and category to find your perfect match.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Test & Certify",
    desc: "Every unit passes a 100-point inspection. Worn parts are replaced with factory-original components before it ships.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "White-Glove Delivery",
    desc: "Professional installation included. We connect your appliance, test it in your home, and haul away the old one free.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Save & Enjoy",
    desc: "Save up to 70% vs. retail. Enjoy factory-grade performance backed by our 1-year comprehensive warranty.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">How It Works</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            From browsing to unboxing in just a few steps — buying refurbished has never been easier or safer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gray-800 border border-gray-700 group-hover:border-emerald-600 group-hover:bg-gray-800/80 flex items-center justify-center text-emerald-400 transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center shadow-lg">
                  {step.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
