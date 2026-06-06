import React, { useState, useEffect } from 'react';

const SALE_DURATION = 24 * 60 * 60;

function getInitialSeconds() {
  try {
    const end = localStorage.getItem('flashSaleEnd');
    if (end) {
      const remaining = Math.floor((parseInt(end) - Date.now()) / 1000);
      if (remaining > 0) return remaining;
    }
  } catch (_) {}
  const newEnd = Date.now() + SALE_DURATION * 1000;
  try { localStorage.setItem('flashSaleEnd', String(newEnd)); } catch (_) {}
  return SALE_DURATION;
}

function Segment({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white text-gray-900 font-mono font-extrabold text-lg leading-none px-3 py-2 rounded-lg min-w-12 text-center shadow-inner">
        {value}
      </div>
      <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(getInitialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          const newEnd = Date.now() + SALE_DURATION * 1000;
          try { localStorage.setItem('flashSaleEnd', String(newEnd)); } catch (_) {}
          return SALE_DURATION;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const s = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="bg-gray-950 py-3 px-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">Flash Sale Ending In</span>
        </div>
        <div className="flex items-end gap-2">
          <Segment value={h} label="Hours" />
          <span className="text-gray-500 font-bold text-xl mb-3.5">:</span>
          <Segment value={m} label="Mins" />
          <span className="text-gray-500 font-bold text-xl mb-3.5">:</span>
          <Segment value={s} label="Secs" />
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-emerald-900/40">
          Shop Now →
        </button>
      </div>
    </div>
  );
}
