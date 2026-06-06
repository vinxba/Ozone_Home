import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const INITIAL_ITEMS = [
  {
    id: 1,
    productId: 1,
    model: 'EW8F2166MA',
    brand: 'ELECTROLUX',
    series: 'PerfectCare 800',
    name: '8kg Front-Load Washing Machine',
    grade: 'Grade B',
    warranty: '1 Year',
    price: 1702,
    originalPrice: 3623,
    img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400',
    delivery: 'Free Delivery + Installation',
    stock: 2,
    qty: 1,
    checked: true,
  },
  {
    id: 2,
    productId: 13,
    model: 'EQE5600A-S',
    brand: 'ELECTROLUX',
    series: 'CustomFlex',
    name: 'American Side-by-Side Fridge Freezer — Stainless',
    grade: 'Open Box',
    warranty: '6 Month',
    price: 5248,
    originalPrice: null,
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400',
    delivery: 'Free Delivery + Installation',
    stock: 12,
    qty: 1,
    checked: true,
  },
  {
    id: 3,
    productId: 22,
    model: 'EFE946SD',
    brand: 'ELECTROLUX',
    series: 'ProSteam',
    name: '90cm Freestanding Electric Cooker with Double Oven',
    grade: 'Grade B',
    warranty: '1 Year',
    price: 2875,
    originalPrice: 6373,
    img: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=400',
    delivery: 'Free Delivery + Installation',
    stock: 4,
    qty: 1,
    checked: true,
  },
];

const GRADE_COLORS = {
  'Grade A': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Grade B': 'bg-gray-100 text-gray-600 border-gray-200',
  'Open Box': 'bg-teal-50 text-teal-700 border-teal-200',
};

function CartItem({ item, onQtyChange, onRemove, onToggle }) {
  const saving = item.originalPrice ? item.originalPrice - item.price : null;
  const savePct = item.originalPrice ? Math.round((1 - item.price / item.originalPrice) * 100) : null;

  return (
    <div className={`flex gap-4 p-5 border-b border-gray-100 last:border-0 transition-opacity ${!item.checked ? 'opacity-50' : ''}`}>
      {/* Checkbox */}
      <div className="pt-1 shrink-0">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
          className="w-4 h-4 accent-emerald-600 cursor-pointer"
        />
      </div>

      {/* Image */}
      <Link to={`/product/${item.productId}`} className="shrink-0 w-32 h-32 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-gray-100 hover:border-emerald-300 transition-colors">
        <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">{item.brand} · {item.series}</p>
            <Link to={`/product/${item.productId}`} className="text-sm font-bold text-gray-900 hover:text-emerald-700 transition-colors line-clamp-2 leading-snug block mb-2">
              {item.name}
            </Link>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${GRADE_COLORS[item.grade]}`}>
                {item.grade}
              </span>
              <span className="text-[10px] text-blue-600 font-bold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                {item.warranty} Warranty
              </span>
              {item.stock <= 4 && (
                <span className="text-[10px] text-red-600 font-semibold">Only {item.stock} left!</span>
              )}
            </div>
            <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mb-3">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              {item.delivery}
            </p>

            {/* Qty + actions */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => onQtyChange(item.id, item.qty - 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-600 font-bold text-lg transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-bold text-gray-900">{item.qty}</span>
                <button
                  onClick={() => onQtyChange(item.id, item.qty + 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-600 font-bold text-lg transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-xs text-gray-500 hover:text-red-600 font-semibold border-r border-gray-200 pr-3 transition-colors"
              >
                Delete
              </button>
              <button className="text-xs text-gray-500 hover:text-gray-800 font-semibold transition-colors">
                Save for later
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="text-right shrink-0">
            <p className="text-lg font-extrabold text-gray-900">R{(item.price * item.qty).toLocaleString()}</p>
            {savePct && (
              <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Save {savePct}%</p>
            )}
            {item.originalPrice && (
              <p className="text-xs text-gray-400 line-through mt-0.5">R{(item.originalPrice * item.qty).toLocaleString()}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [savedItems, setSavedItems] = useState([]);
  const [giftOption, setGiftOption] = useState(false);

  const checkedItems = items.filter(i => i.checked);
  const subtotal = checkedItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalItems = checkedItems.reduce((sum, i) => sum + i.qty, 0);
  const totalSavings = checkedItems.reduce((sum, i) => {
    if (i.originalPrice) return sum + (i.originalPrice - i.price) * i.qty;
    return sum;
  }, 0);
  const allChecked = items.length > 0 && items.every(i => i.checked);

  const handleQtyChange = (id, newQty) => {
    if (newQty < 1) return;
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: newQty } : i));
  };

  const handleRemove = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const handleToggle = (id) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  const handleToggleAll = () => {
    setItems(prev => prev.map(i => ({ ...i, checked: !allChecked })));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs font-medium text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-semibold">Shopping Cart</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-7 items-start flex-col lg:flex-row">

          {/* ── Left: cart items ───────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-2xl font-extrabold text-gray-900">Shopping Cart</h1>
              {items.length > 0 && (
                <button
                  onClick={handleToggleAll}
                  className="text-sm text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
                >
                  {allChecked ? 'Deselect all items' : 'Select all items'}
                </button>
              )}
            </div>

            {/* Cart items */}
            {items.length > 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 mb-5">
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQtyChange={handleQtyChange}
                    onRemove={handleRemove}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center mb-5">
                <svg className="w-20 h-20 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-500 mb-6">Browse our certified Electrolux appliances and find your perfect match.</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-700 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            )}

            {/* Subtotal summary under items (mobile-style) */}
            {checkedItems.length > 0 && (
              <p className="text-right text-sm text-gray-600 font-medium px-1">
                Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):{' '}
                <span className="text-lg font-extrabold text-gray-900">R{subtotal.toLocaleString()}</span>
              </p>
            )}

            {/* Saved for later (empty state placeholder) */}
            {savedItems.length === 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Saved for Later</h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-sm text-gray-400">
                  No saved items yet. Use "Save for later" to keep items without removing them from your wishlist.
                </div>
              </div>
            )}
          </div>

          {/* ── Right: order summary ───────────────────────────── */}
          <div className="w-full lg:w-80 shrink-0 sticky top-28 space-y-4">

            {/* Gift option */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftOption}
                  onChange={e => setGiftOption(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-emerald-600"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">This order contains a gift</p>
                  <p className="text-xs text-gray-400 mt-0.5">We'll hide prices on the delivery note</p>
                </div>
              </label>
            </div>

            {/* Summary card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              {/* Subtotal */}
              <div className="mb-5">
                <div className="flex items-baseline justify-between mb-1">
                  <p className="text-sm text-gray-600">
                    Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                  </p>
                  <p className="text-xl font-extrabold text-gray-900">R{subtotal.toLocaleString()}</p>
                </div>
                {totalSavings > 0 && (
                  <p className="text-xs text-emerald-600 font-semibold text-right">
                    You save R{totalSavings.toLocaleString()} on selected items
                  </p>
                )}
              </div>

              {/* Line items */}
              <div className="border-t border-gray-100 pt-4 space-y-2.5 mb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">VAT (15%)</span>
                  <span className="text-gray-700 font-semibold">Included</span>
                </div>
                {giftOption && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Gift packaging</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between mb-5">
                <span className="text-base font-bold text-gray-900">Order Total</span>
                <span className="text-2xl font-extrabold text-gray-900">R{subtotal.toLocaleString()}</span>
              </div>

              {/* Checkout CTA */}
              <button
                disabled={checkedItems.length === 0}
                onClick={() => navigate('/checkout')}
                className="w-full bg-gray-900 hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-xl text-sm tracking-wide transition-colors mb-3"
              >
                Proceed to Checkout ({totalItems})
              </button>
              <button className="w-full bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-bold py-3.5 rounded-xl text-sm transition-colors">
                Continue Shopping
              </button>

              {/* Secure badge */}
              <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure transaction
              </div>
            </div>

            {/* Trust signals */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 space-y-3">
              {[
                { icon: '🛡️', text: '100-point certified inspection on every unit' },
                { icon: '🚚', text: 'Free delivery + professional installation' },
                { icon: '↩️', text: '30-day hassle-free returns' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-xs text-emerald-800 font-medium">
                  <span className="text-base leading-none shrink-0">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Financing teaser */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-bold text-gray-900 mb-1">OzoneCredit Available</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Split your order into 24 monthly payments from{' '}
                <span className="font-bold text-gray-800">
                  R{subtotal > 0 ? Math.round(subtotal / 24).toLocaleString() : '0'}/mo
                </span>
                . Apply at checkout.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
