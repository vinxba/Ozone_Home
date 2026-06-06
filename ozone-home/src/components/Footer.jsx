import React from 'react';

const columns = [
  {
    heading: "Get to Know Us",
    links: ["About OzoneHome", "Careers", "Press & Media", "Sustainability", "Blog"],
  },
  {
    heading: "Shop With Us",
    links: ["All Appliances", "Today's Deals", "New Arrivals", "Best Sellers", "Certified Grades"],
  },
  {
    heading: "Customer Service",
    links: ["Your Account", "Track Your Order", "Returns & Exchanges", "FAQ", "Contact Us"],
  },
  {
    heading: "Policies",
    links: ["Warranty Policy", "Privacy Policy", "Terms of Service", "Cookie Policy", "Affiliate Program"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-gray-800 hover:bg-gray-700 text-white text-sm py-3.5 text-center transition-colors font-medium tracking-wide"
      >
        Back to top ↑
      </button>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {columns.map(col => (
          <div key={col.heading}>
            <h4 className="text-white font-bold text-sm mb-5">{col.heading}</h4>
            <ul className="space-y-3">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-white font-extrabold text-xl tracking-tight">OzoneHome</span>
          <span className="text-xs text-gray-600 hidden sm:block">© 2024 OzoneHome, Inc. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-600">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <span className="text-gray-800">·</span>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          <span className="text-gray-800">·</span>
          <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
        </div>

        <div className="flex items-center gap-3">
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          {/* Globe */}
          <a href="#" aria-label="Website" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
