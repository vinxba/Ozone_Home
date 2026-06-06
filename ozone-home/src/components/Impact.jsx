import React from 'react';

const steps = [
  { num: "01", title: "Rigorous Testing", desc: "Every appliance undergoes a 100-point inspection covering mechanical, electrical, and cosmetic standards." },
  { num: "02", title: "Component Certification", desc: "We replace worn components with factory-original parts to ensure performance identical to new units." },
  { num: "03", title: "Sanitization & Detailing", desc: 'Deep cleaning and cosmetic restoration so your appliance feels brand new from day one.' },
];

const stats = [
  { value: "12,496", label: "Appliances Reused" },
  { value: "4.3M", label: "Lbs Waste Reduced" },
  { value: "70%", label: "Avg. Customer Savings" },
];

export default function Impact() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Left */}
        <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
          <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">Quality Assurance</span>
          <h2 className="text-4xl font-extrabold mb-10 text-gray-900 leading-tight">
            Engineered for<br />Longevity
          </h2>
          <div className="space-y-7">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center font-mono font-bold text-sm text-gray-600">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-950 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-900/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-900/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 block">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Sustainability<br />in Motion</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              By choosing refurbished, our customers have collectively prevented massive landfill waste and significantly reduced carbon footprints.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-emerald-400 text-2xl lg:text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
