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
    <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
      <span className="text-emerald-400 font-semibold tracking-wider">FLASH SALE ENDING IN:</span>
      <span className="font-mono text-base bg-gray-800 px-3 py-1 rounded">{h}:{m}:{s}</span>
      <button className="bg-white text-black px-4 py-1 rounded-full font-bold text-xs hover:bg-gray-200 transition">Shop Now</button>
    </div>
  );
}
