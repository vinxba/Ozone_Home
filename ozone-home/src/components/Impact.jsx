import React from 'react';

export default function Impact() {
  const steps = [
    { num: "01", title: "Rigorous Testing", desc: "Every appliance undergoes a 100-point inspection covering mechanical, electrical, and cosmetic standards." },
    { num: "02", title: "Component Certification", desc: "We replace worn components with factory-original parts to ensure performance identical to new units." },
    { num: "03", title: "Sanitization & Detailing", desc: 'Deep cleaning and cosmetic restoration so your "new" appliance feels brand new from day one.' }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg border">
        {/* Left Side */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">Quality Assurance</span>
          <h2 className="text-4xl font-bold mb-10">Engineered for<br/>Longevity</h2>
          
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="flex-shrink-0 font-mono border border-gray-300 w-10 h-10 flex items-center justify-center font-bold">{step.num}</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#0a0f0d] text-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 block">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainability in Motion</h2>
            <p className="text-gray-400 text-sm mb-16 max-w-sm">
              By choosing refurbished, our customers have collectively prevented massive landfill waste and reduced carbon footprints.
            </p>
            
            <div className="flex space-x-12">
              <div>
                <div className="text-emerald-400 text-4xl font-bold mb-1">12,512</div>
                <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Appliances Reused</div>
              </div>
              <div>
                <div className="text-emerald-400 text-4xl font-bold mb-1">4.5M</div>
                <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Lbs Waste Reduced</div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        </div>
      </div>
    </section>
  );
}