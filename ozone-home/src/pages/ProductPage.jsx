import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categoryConfig } from '../data/products';
import Footer from '../components/Footer';

const GRADE_BADGE = {
  'Grade A': 'bg-emerald-600 text-white',
  'Grade B': 'bg-gray-700 text-white',
  'Open Box': 'bg-teal-500 text-white',
};

const GRADE_CONDITION = {
  'Grade A': 'Like New',
  'Grade B': 'Very Good',
  'Open Box': 'Open Box',
};

function getCapacity(product) {
  const kg = product.name.match(/(\d+(?:\.\d+)?)\s*kg/i);
  if (kg) return `${kg[1]}kg Load`;
  const cm = product.name.match(/(\d+)\s*cm/i);
  if (cm) return `${cm[1]}cm Wide`;
  return 'See Specs';
}

function getEngineeringSpecs(product) {
  const base = [
    { label: 'Model Number', value: product.model },
    { label: 'Brand / Series', value: `${product.brand} ${product.series}` },
    { label: 'Energy Rating', value: `${product.energyRating} Rated` },
    { label: 'Condition Grade', value: product.grade },
    { label: 'Warranty', value: product.warranty },
  ];
  const name = product.name.toLowerCase();
  if (product.category === 'washing-machines') {
    const cap = product.name.match(/(\d+(?:\.\d+)?)\s*kg/i);
    if (cap) base.splice(2, 0, { label: 'Load Capacity', value: `${cap[1]} kg` });
    base.push({ label: 'Spin Speed', value: '1400 RPM' });
    base.push({ label: 'Load Type', value: name.includes('front') ? 'Front Load' : 'Top Load' });
    base.push({ label: 'Dimensions (HxWxD)', value: '850 × 600 × 600 mm' });
  } else if (product.category === 'dryers') {
    const cap = product.name.match(/(\d+(?:\.\d+)?)\s*kg/i);
    if (cap) base.splice(2, 0, { label: 'Drum Capacity', value: `${cap[1]} kg` });
    base.push({ label: 'Dryer Type', value: name.includes('heat') ? 'Heat Pump' : 'Condenser' });
    base.push({ label: 'Dimensions (HxWxD)', value: '850 × 600 × 600 mm' });
  } else if (product.category === 'refrigerators') {
    base.push({ label: 'Fridge Type', value: name.includes('side') ? 'American Side-by-Side' : 'Upright' });
    base.push({ label: 'Climate Class', value: 'SN-T (10°C–43°C)' });
    base.push({ label: 'Dimensions (HxWxD)', value: '1770 × 912 × 714 mm' });
  } else if (product.category === 'cookers') {
    const w = product.name.match(/(\d+)\s*cm/i);
    if (w) base.splice(2, 0, { label: 'Width', value: `${w[1]} cm` });
    base.push({ label: 'Oven Type', value: 'Fan-Assisted Electric' });
    base.push({ label: 'Burners', value: name.includes('90') ? '5 Zones' : '4 Zones' });
  } else if (product.category === 'ovens') {
    base.push({ label: 'Oven Capacity', value: '65 L' });
    base.push({ label: 'Heating Functions', value: '8 Functions' });
    base.push({ label: 'Dimensions (HxWxD)', value: '595 × 595 × 548 mm' });
  } else if (product.category === 'hobs') {
    base.push({ label: 'Cooking Zones', value: '4' });
    base.push({ label: 'Hob Type', value: name.includes('induction') ? 'Induction' : name.includes('gas') ? 'Gas' : 'Ceramic' });
    base.push({ label: 'Dimensions (WxD)', value: '580 × 510 mm' });
  }
  return base;
}

function Stars({ rating = 4.3, count = 0 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <svg key={i} className={`w-4 h-4 ${i <= Math.floor(rating) ? 'text-yellow-400' : i - 0.5 <= rating ? 'text-yellow-300' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {count > 0 && <span className="text-sm text-gray-500">({count} Reviews)</span>}
    </div>
  );
}

function RelatedCard({ product }) {
  const savePct = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow block">
      <div className="relative h-44 bg-gray-50 flex items-center justify-center p-5">
        {savePct && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-1 rounded-md">
            SAVE {savePct}%
          </span>
        )}
        <img src={product.img} alt={product.name} className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{product.brand}</p>
        <h4 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 leading-snug">{product.name}</h4>
        <div className="flex items-baseline gap-2">
          <span className="font-extrabold text-gray-900">R{product.price.toLocaleString()}</span>
          {product.originalPrice && <span className="text-xs text-gray-400 line-through">R{product.originalPrice.toLocaleString()}</span>}
        </div>
      </div>
    </Link>
  );
}

const TABS = [
  { id: 'specs', label: 'Technical Specs' },
  { id: 'warranty', label: 'Warranty Details' },
  { id: 'delivery', label: 'Delivery & Install' },
  { id: 'reviews', label: 'Reviews (124)' },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find(p => p.id === parseInt(id)), [id]);
  const [activeTab, setActiveTab] = useState('specs');
  const [activeThumb, setActiveThumb] = useState(0);
  const [qty, setQty] = useState(1);

  const related = useMemo(
    () => product ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4) : [],
    [product]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900 mb-2">Product not found</p>
          <Link to="/" className="text-emerald-600 hover:underline text-sm">Return home</Link>
        </div>
      </div>
    );
  }

  const saving = product.originalPrice ? product.originalPrice - product.price : null;
  const savePct = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  const config = categoryConfig[product.category] || {};
  const specs = getEngineeringSpecs(product);
  const capacity = getCapacity(product);
  const thumbs = [product.img, product.img, product.img, product.img];
  const monthly = Math.round(product.price / 24).toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-[11px] font-semibold text-gray-500 tracking-wide uppercase">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-gray-900 transition-colors">
            {config.title || product.category}
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-bold">{product.series}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ── Top: image + info ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Image gallery */}
          <div>
            <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8 shadow-sm aspect-square">
              <span className={`absolute top-4 left-4 flex items-center gap-1.5 text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-sm ${GRADE_BADGE[product.grade]}`}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CERTIFIED REFURBISHED
              </span>
              {savePct && (
                <span className="absolute top-14 left-4 bg-gray-900 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full">
                  SAVE {savePct}%
                </span>
              )}
              <img
                src={thumbs[activeThumb]}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {thumbs.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`w-20 h-20 rounded-xl border-2 bg-white flex items-center justify-center p-2 transition-all overflow-hidden ${
                    activeThumb === i ? 'border-gray-900 shadow-md' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <p className="text-[11px] font-extrabold text-gray-400 tracking-widest uppercase mb-2">
              {product.brand} · {product.series}
            </p>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-5">
              Model <span className="font-mono font-semibold text-emerald-700">#{product.model}</span> · Open-unit from authorised Electrolux warehouse stock
            </p>

            <div className="flex items-center gap-3 mb-7 flex-wrap">
              <Stars rating={4.3} count={124} />
              <span className="text-gray-200">|</span>
              <span className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                In Stock
              </span>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-5 shadow-sm">
              <div className="flex items-center gap-3 flex-wrap mb-1.5">
                <span className="text-3xl font-extrabold text-gray-900">R{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">R{product.originalPrice.toLocaleString()}</span>
                )}
                {saving && (
                  <span className="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-full">
                    SAVE R{saving.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Financing as low as{' '}
                <span className="font-bold text-gray-800">R{monthly}/mo</span>{' '}
                with OzoneCredit.
              </p>
            </div>

            {/* Qty */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-gray-200 rounded-xl bg-white overflow-hidden">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-11 flex items-center justify-center hover:bg-gray-50 text-gray-600 font-bold text-xl transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-bold text-gray-900">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-11 flex items-center justify-center hover:bg-gray-50 text-gray-600 font-bold text-xl transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-400">Free delivery included</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-7">
              <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-extrabold py-4 rounded-xl text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button className="w-full bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-extrabold py-4 rounded-xl text-sm tracking-widest uppercase transition-colors">
                Buy Now
              </button>
            </div>

            {/* Spec cards 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: 'CAPACITY',
                  value: capacity,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                },
                {
                  label: 'ENERGY RATING',
                  value: `${product.energyRating}+ Rated`,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  label: 'CONDITION',
                  value: GRADE_CONDITION[product.grade],
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  label: 'WARRANTY',
                  value: `${product.warranty} Core`,
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map(spec => (
                <div key={spec.label} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                    {spec.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-400 tracking-widest uppercase">{spec.label}</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs ─────────────────────────────────────────────────── */}
        <div className="mt-16">
          <div className="border-b border-gray-200 flex overflow-x-auto">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-10">

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-6">Engineering Specifications</h3>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    {specs.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex items-center justify-between px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <span className="text-gray-500">{row.label}</span>
                        <span className="font-bold text-gray-900 text-right max-w-[50%]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm h-fit">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">The OzoneHome Advantage</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    This Electrolux {product.series} unit has undergone our rigorous 100-point diagnostic
                    inspection. Certified by our master technicians, it operates at peak efficiency. By
                    choosing this refurbished unit, you're giving a quality appliance a second life and
                    keeping it out of landfill.
                  </p>
                  <div className="flex gap-3 flex-wrap mb-6">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Eco-Certified
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      Carbon Offset
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-sm font-extrabold text-gray-900 mb-2">Delivery & Installation</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Free curbside delivery included. White-glove installation available for R499,
                      including haul-away of your old appliance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-extrabold text-gray-900 mb-5">Warranty Details</h3>
                <div className="bg-white rounded-2xl border border-gray-100 p-7 space-y-4 text-sm text-gray-600 leading-relaxed shadow-sm">
                  {[
                    ['Coverage Period', `${product.warranty} from date of purchase`],
                    ["What's Covered", 'All mechanical and electrical components — motor, drum, control board, pump, and seals.'],
                    ["What's Not Covered", 'Cosmetic damage, misuse, accidental damage, or damage from improper installation.'],
                    ['Service', 'In-home service by certified Electrolux-trained technicians within 48 hours of claim approval.'],
                    ['Claim Process', 'Contact OzoneHome support. Our team will assess and dispatch a technician within 2 business days.'],
                  ].map(([label, value]) => (
                    <p key={label}>
                      <strong className="text-gray-900">{label}:</strong> {value}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-extrabold text-gray-900 mb-5">Delivery & Installation</h3>
                <div className="bg-white rounded-2xl border border-gray-100 p-7 space-y-4 text-sm text-gray-600 leading-relaxed shadow-sm">
                  {[
                    ['Free Delivery', 'All orders include free curbside delivery within major South African cities. Estimated 3–5 business days.'],
                    ['White-Glove Installation (R499)', 'Our certified technicians install the appliance, test all functions, and haul away your old unit.'],
                    ['Scheduling', "You'll receive a call within 24 hours of order confirmation to schedule delivery."],
                    ['Delivery Areas', 'Johannesburg, Cape Town, Durban, Pretoria, and surrounding areas. Contact us for outlying regions.'],
                  ].map(([label, value]) => (
                    <p key={label}>
                      <strong className="text-gray-900">{label}:</strong> {value}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-3xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-5xl font-extrabold text-gray-900">4.3</p>
                    <Stars rating={4.3} />
                    <p className="text-xs text-gray-400 mt-1">124 reviews</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {[
                    { name: 'Sarah M.', loc: 'Cape Town', rating: 5, text: 'Absolutely thrilled — runs like new and the delivery team was incredibly professional.', date: '2 weeks ago' },
                    { name: 'James R.', loc: 'Johannesburg', rating: 4, text: 'Great value. Works perfectly and the energy savings are already showing on my electricity bill.', date: '1 month ago' },
                    { name: 'Priya K.', loc: 'Durban', rating: 5, text: 'Quick delivery, perfect installation, and the appliance is in pristine condition.', date: '6 weeks ago' },
                  ].map(r => (
                    <div key={r.name} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-600 shrink-0">
                            {r.name[0]}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-gray-900">{r.name}</p>
                            <p className="text-xs text-gray-400">{r.loc}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 shrink-0">{r.date}</span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < r.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{r.text}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs text-emerald-600 font-semibold">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Purchase
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── You Might Also Like ───────────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">You Might Also Like</h2>
                <p className="text-sm text-gray-500 mt-1">Complementary laundry solutions and upgrades.</p>
              </div>
              <Link
                to={`/category/${product.category}`}
                className="hidden md:flex items-center gap-1.5 text-sm font-extrabold tracking-widest uppercase border-b-2 border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                View All {config.title} →
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(p => <RelatedCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
