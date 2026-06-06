import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categoryConfig } from '../data/products';
import Footer from '../components/Footer';

const GRADE_COLORS = {
  'Grade A': 'bg-emerald-600 text-white',
  'Grade B': 'bg-gray-700 text-white',
  'Open Box': 'bg-teal-500 text-white',
};

const GRADE_ICONS = {
  'Grade A': (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  'Grade B': (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  'Open Box': (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
  ),
};

const WARRANTY_COLORS = {
  '2 Year':  'bg-blue-100 text-blue-700',
  '1 Year':  'bg-blue-50 text-blue-600',
  '6 Month': 'bg-gray-100 text-gray-600',
};

const ITEMS_PER_PAGE = 9;

function ProductCard({ product }) {
  const saving = product.originalPrice ? product.originalPrice - product.price : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      {/* Top badges */}
      <div className="relative">
        <div className="h-52 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Grade badge */}
        <span className={`absolute top-3 left-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide shadow-sm ${GRADE_COLORS[product.grade]}`}>
          {GRADE_ICONS[product.grade]}
          {product.grade.toUpperCase()}
        </span>
        {/* Save badge */}
        {saving && (
          <span className="absolute top-3 right-3 bg-white border border-gray-200 text-gray-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
            SAVE R{saving.toLocaleString()}
          </span>
        )}
        {!saving && (
          <span className="absolute top-3 right-3 bg-white border border-gray-200 text-gray-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
            OPEN UNIT
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col grow">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">
            {product.brand} · {product.series}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${WARRANTY_COLORS[product.warranty]}`}>
            {product.warranty.toUpperCase()} WARRANTY
          </span>
        </div>

        <h3 className="font-bold text-sm text-gray-900 leading-snug mb-1 line-clamp-2 grow">
          {product.name}
        </h3>
        <p className="text-[10px] text-emerald-600 font-mono mb-3">#{product.model}</p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-extrabold text-gray-900">R{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">R{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <Link
          to={`/product/${product.id}`}
          className="block w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold py-3 rounded-xl text-center transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  const pages = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3);
    if (current > 4) pages.push('...');
    if (current > 3 && current < total - 2) pages.push(current);
    if (current < total - 3) pages.push('...');
    pages.push(total);
  }

  return (
    <div className="flex items-center justify-center gap-1 mt-10">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
              p === current
                ? 'bg-gray-900 text-white'
                : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function OzoneStandard() {
  const steps = [
    {
      title: 'Rigorous Testing',
      desc: 'Every component is tested under maximum load for 24 hours.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Deep Sanitization',
      desc: 'Hospital-grade steam cleaning and ozone treatment as standard.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Eco Optimisation',
      desc: 'Sensors recalibrated to ensure peak energy efficiency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Final Certification',
      desc: 'Approved by master technicians with a full performance report.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-extrabold text-gray-900">The OzoneHome Standard</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Every appliance undergoes our rigorous 100-point inspection process before being certified for sale.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h4 className="font-bold text-sm text-gray-900 mb-2">{step.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CategoryPage() {
  const { slug } = useParams();
  const config = categoryConfig[slug] || { title: 'All Products', sub: '', subCategories: [] };

  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('best-match');
  const [page, setPage] = useState(1);

  const toggle = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);

  const clearFilters = () => {
    setSelectedGrades([]);
    setSelectedRatings([]);
    setMinPrice('');
    setMaxPrice('');
  };

  const filtered = useMemo(() => {
    let list = products.filter(p => p.category === slug);
    if (selectedGrades.length) list = list.filter(p => selectedGrades.includes(p.grade));
    if (selectedRatings.length) list = list.filter(p => selectedRatings.includes(p.energyRating));
    if (minPrice) list = list.filter(p => p.price >= Number(minPrice));
    if (maxPrice) list = list.filter(p => p.price <= Number(maxPrice));
    if (sortBy === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'savings') list = [...list].sort((a, b) => {
      const sa = a.originalPrice ? a.originalPrice - a.price : 0;
      const sb = b.originalPrice ? b.originalPrice - b.price : 0;
      return sb - sa;
    });
    return list;
  }, [slug, selectedGrades, selectedRatings, minPrice, maxPrice, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeFilterCount = selectedGrades.length + selectedRatings.length + (minPrice ? 1 : 0) + (maxPrice ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">{config.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8 items-start">
        {/* ── Sidebar ──────────────────────────────────────────────── */}
        <aside className="w-60 shrink-0 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-28">
          <div className="flex items-center justify-between mb-6">
            <span className="font-extrabold text-gray-900 text-base">Filters</span>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-emerald-600 font-semibold hover:underline">
                Clear all
              </button>
            )}
          </div>

          {/* Condition Grade */}
          <div className="mb-6">
            <h4 className="text-[11px] font-extrabold text-gray-400 tracking-widest uppercase mb-3">Condition Grade</h4>
            <div className="flex flex-col gap-2">
              {['Grade A', 'Grade B', 'Open Box'].map(g => (
                <label key={g} className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedGrades.includes(g)}
                    onChange={() => { toggle(selectedGrades, setSelectedGrades, g); setPage(1); }}
                    className="w-4 h-4 accent-emerald-600 rounded"
                  />
                  <span className={`text-sm font-medium group-hover:text-gray-900 transition-colors ${selectedGrades.includes(g) ? 'text-gray-900' : 'text-gray-600'}`}>{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-[11px] font-extrabold text-gray-400 tracking-widest uppercase mb-3">Price Range (R)</h4>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={e => { setMinPrice(e.target.value); setPage(1); }}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100"
              />
              <span className="text-gray-400 text-sm">–</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={e => { setMaxPrice(e.target.value); setPage(1); }}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Energy Rating */}
          <div className="mb-2">
            <h4 className="text-[11px] font-extrabold text-gray-400 tracking-widest uppercase mb-3">Energy Rating</h4>
            <div className="flex gap-2">
              {['A', 'B', 'C'].map(r => (
                <button
                  key={r}
                  onClick={() => { toggle(selectedRatings, setSelectedRatings, r); setPage(1); }}
                  className={`flex-1 py-1.5 text-sm font-bold rounded-lg border transition-colors ${
                    selectedRatings.includes(r)
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'border-gray-200 text-gray-600 hover:border-emerald-400 hover:text-emerald-600'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────────── */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">{config.title}</h1>
              <p className="text-emerald-600 text-sm font-medium mt-0.5">
                {filtered.length} premium refurbished unit{filtered.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={e => { setSortBy(e.target.value); setPage(1); }}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm font-medium bg-white outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="best-match">Best Match</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="savings">Biggest Savings</option>
              </select>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedGrades.map(g => (
                <span key={g} className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
                  {g}
                  <button onClick={() => toggle(selectedGrades, setSelectedGrades, g)} className="hover:text-emerald-900 ml-0.5">×</button>
                </span>
              ))}
              {selectedRatings.map(r => (
                <span key={r} className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
                  Energy {r}
                  <button onClick={() => toggle(selectedRatings, setSelectedRatings, r)} className="hover:text-emerald-900 ml-0.5">×</button>
                </span>
              ))}
            </div>
          )}

          {/* Product grid */}
          {paged.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paged.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-semibold text-gray-600 mb-2">No products match your filters</p>
              <button onClick={clearFilters} className="text-emerald-600 text-sm hover:underline font-medium">Clear all filters</button>
            </div>
          )}

          <Pagination current={page} total={totalPages} onChange={handlePageChange} />
        </main>
      </div>

      <OzoneStandard />
      <Footer />
    </div>
  );
}
