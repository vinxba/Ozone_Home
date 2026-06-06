import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-white font-extrabold text-lg tracking-tight mb-1">OzoneHome</div>
          <p className="text-xs text-gray-500">© 2024 OzoneHome. Engineered Sustainability.</p>
        </div>

        <nav className="flex flex-col items-start md:items-center gap-2 text-sm">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sustainability Report</a>
          </div>
          <a href="#" className="hover:text-white transition-colors">Affiliate Program</a>
        </nav>

        <div className="flex items-center space-x-3">
          <a href="#" aria-label="Video" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Website" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
