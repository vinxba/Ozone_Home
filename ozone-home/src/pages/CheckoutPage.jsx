import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ORDER_ITEMS = [
  { id: 1, name: '8kg Front-Load Washing Machine', model: 'EW8F2166MA', grade: 'Grade B', price: 1702, qty: 1, img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=200' },
  { id: 2, name: 'American Side-by-Side Fridge Freezer', model: 'EQE5600A-S', grade: 'Open Box', price: 5248, qty: 1, img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200' },
  { id: 3, name: '90cm Electric Cooker with Double Oven', model: 'EFE946SD', grade: 'Grade B', price: 2875, qty: 1, img: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=200' },
];

const SUBTOTAL = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);

const PROVINCES = ['Eastern Cape','Free State','Gauteng','KwaZulu-Natal','Limpopo','Mpumalanga','North West','Northern Cape','Western Cape'];

function formatCard(val) {
  return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry(val) {
  const d = val.replace(/\D/g, '').slice(0, 4);
  return d.length >= 3 ? d.slice(0, 2) + '/' + d.slice(2) : d;
}
function detectCardType(num) {
  const n = num.replace(/\s/g, '');
  if (/^4/.test(n)) return 'visa';
  if (/^5[1-5]/.test(n)) return 'mastercard';
  return null;
}

function VisaIcon() {
  return (
    <svg viewBox="0 0 48 16" className="h-5 w-auto" fill="none">
      <text x="0" y="14" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#1A1F71">VISA</text>
    </svg>
  );
}
function MastercardIcon() {
  return (
    <svg viewBox="0 0 38 24" className="h-5 w-auto">
      <circle cx="15" cy="12" r="11" fill="#EB001B" />
      <circle cx="23" cy="12" r="11" fill="#F79E1B" opacity="0.85" />
    </svg>
  );
}

function StepBadge({ n, label, active, done }) {
  return (
    <div className={`flex items-center gap-2 text-sm font-semibold transition-colors ${active ? 'text-gray-900' : done ? 'text-emerald-600' : 'text-gray-400'}`}>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${active ? 'bg-gray-900 text-white' : done ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
        {done ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        ) : n}
      </div>
      <span className="hidden sm:block">{label}</span>
    </div>
  );
}

function SuccessScreen({ total }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-12 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Payment Successful!</h2>
        <p className="text-gray-500 text-sm mb-1">Order <span className="font-mono font-bold text-gray-800">#OZN-{Math.floor(100000 + Math.random() * 900000)}</span></p>
        <p className="text-3xl font-extrabold text-gray-900 mt-4 mb-1">R{total.toLocaleString()}</p>
        <p className="text-xs text-gray-400 mb-8">A confirmation has been sent to your email.</p>
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-left mb-8 space-y-2">
          {[
            'Our team will contact you within 24 hours to schedule delivery.',
            'Free professional installation included.',
            'Your warranty starts on the day of installation.',
          ].map(t => (
            <p key={t} className="flex items-start gap-2 text-xs text-emerald-800 font-medium">
              <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t}
            </p>
          ))}
        </div>
        <Link to="/" className="block w-full bg-gray-900 hover:bg-gray-700 text-white font-extrabold py-4 rounded-xl text-sm tracking-wide transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // 1=delivery, 2=payment, 3=done
  const [payMethod, setPayMethod] = useState('card');
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);

  const [delivery, setDelivery] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', suburb: '', city: '', province: '', postalCode: '',
  });
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [eft, setEft] = useState({ bank: '', ref: '' });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [cvvVisible, setCvvVisible] = useState(false);

  const cardType = detectCardType(card.number);
  const monthly = Math.round(SUBTOTAL / 24).toLocaleString();

  function validateDelivery() {
    const e = {};
    if (!delivery.firstName.trim()) e.firstName = 'Required';
    if (!delivery.lastName.trim()) e.lastName = 'Required';
    if (!delivery.email.includes('@')) e.email = 'Valid email required';
    if (delivery.phone.replace(/\D/g, '').length < 9) e.phone = 'Valid phone required';
    if (!delivery.address.trim()) e.address = 'Required';
    if (!delivery.city.trim()) e.city = 'Required';
    if (!delivery.province) e.province = 'Required';
    if (!delivery.postalCode.trim()) e.postalCode = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validatePayment() {
    const e = {};
    if (payMethod === 'card') {
      if (card.number.replace(/\s/g, '').length < 16) e.number = 'Enter a valid 16-digit card number';
      if (card.expiry.length < 5) e.expiry = 'Enter expiry MM/YY';
      if (card.cvv.length < 3) e.cvv = 'Enter CVV';
      if (!card.name.trim()) e.name = 'Enter name on card';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleDeliveryNext(e) {
    e.preventDefault();
    if (validateDelivery()) setStep(2);
  }

  function handlePayNow(e) {
    e.preventDefault();
    if (!validatePayment()) return;
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setStep(3); }, 2200);
  }

  if (step === 3) return <SuccessScreen total={SUBTOTAL} />;

  const Field = ({ label, name, value, onChange, error, type = 'text', placeholder = '', half = false }) => (
    <div className={half ? 'flex-1 min-w-0' : 'w-full'}>
      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => { onChange(e.target.value); setErrors(prev => ({ ...prev, [name]: undefined })); }}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${error ? 'border-red-400 bg-red-50 focus:ring-1 focus:ring-red-300' : 'border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100'}`}
      />
      {error && <p className="text-xs text-red-500 mt-1 font-medium">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Slim header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold text-gray-900 tracking-tight">
            OzoneHome
            <span className="text-[10px] text-emerald-600 font-bold tracking-widest block -mt-0.5 uppercase">Certified Refurbished</span>
          </Link>
          {/* Steps */}
          <div className="flex items-center gap-4">
            <StepBadge n={1} label="Delivery" active={step === 1} done={step > 1} />
            <div className="w-8 h-px bg-gray-200 hidden sm:block" />
            <StepBadge n={2} label="Payment" active={step === 2} done={step > 2} />
            <div className="w-8 h-px bg-gray-200 hidden sm:block" />
            <StepBadge n={3} label="Confirm" active={step === 3} done={false} />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            SSL Secured
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex gap-8 items-start flex-col lg:flex-row">

        {/* ── Left: form ───────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* ── STEP 1: Delivery ── */}
          {step === 1 && (
            <form onSubmit={handleDeliveryNext} noValidate>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-5">
                <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center font-extrabold">1</span>
                  Delivery Information
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Field label="First Name" name="firstName" value={delivery.firstName} onChange={v => setDelivery(d => ({ ...d, firstName: v }))} error={errors.firstName} placeholder="Thabo" half />
                    <Field label="Last Name" name="lastName" value={delivery.lastName} onChange={v => setDelivery(d => ({ ...d, lastName: v }))} error={errors.lastName} placeholder="Nkosi" half />
                  </div>
                  <div className="flex gap-4">
                    <Field label="Email Address" name="email" type="email" value={delivery.email} onChange={v => setDelivery(d => ({ ...d, email: v }))} error={errors.email} placeholder="you@email.com" half />
                    <Field label="Phone Number" name="phone" type="tel" value={delivery.phone} onChange={v => setDelivery(d => ({ ...d, phone: v }))} error={errors.phone} placeholder="082 000 0000" half />
                  </div>
                  <Field label="Street Address" name="address" value={delivery.address} onChange={v => setDelivery(d => ({ ...d, address: v }))} error={errors.address} placeholder="12 Main Road, Unit 4" />
                  <div className="flex gap-4">
                    <Field label="Suburb" name="suburb" value={delivery.suburb} onChange={v => setDelivery(d => ({ ...d, suburb: v }))} error={errors.suburb} placeholder="Sandton" half />
                    <Field label="City" name="city" value={delivery.city} onChange={v => setDelivery(d => ({ ...d, city: v }))} error={errors.city} placeholder="Johannesburg" half />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 min-w-0">
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Province</label>
                      <select
                        value={delivery.province}
                        onChange={e => { setDelivery(d => ({ ...d, province: e.target.value })); setErrors(p => ({ ...p, province: undefined })); }}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all bg-white ${errors.province ? 'border-red-400 focus:ring-1 focus:ring-red-300' : 'border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100'}`}
                      >
                        <option value="">Select province</option>
                        {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                      {errors.province && <p className="text-xs text-red-500 mt-1 font-medium">{errors.province}</p>}
                    </div>
                    <Field label="Postal Code" name="postalCode" value={delivery.postalCode} onChange={v => setDelivery(d => ({ ...d, postalCode: v }))} error={errors.postalCode} placeholder="2196" half />
                  </div>
                </div>
              </div>

              {/* Delivery estimate */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-6 flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-900">Free Delivery + Professional Installation</p>
                  <p className="text-xs text-emerald-700 mt-0.5">Estimated 3–5 business days. Our team will call to schedule a convenient time.</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-gray-900 hover:bg-gray-700 text-white font-extrabold py-4 rounded-xl text-sm tracking-wide transition-colors">
                Continue to Payment →
              </button>
            </form>
          )}

          {/* ── STEP 2: Payment ── */}
          {step === 2 && (
            <form onSubmit={handlePayNow} noValidate>

              {/* Delivery summary (collapsed) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5 flex items-center justify-between">
                <div className="text-sm">
                  <p className="font-bold text-gray-900">{delivery.firstName} {delivery.lastName}</p>
                  <p className="text-gray-500">{delivery.address}, {delivery.city}, {delivery.province}</p>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-xs font-bold text-emerald-600 hover:underline">Edit</button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-5">
                <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center font-extrabold">2</span>
                  Payment Method
                </h2>

                {/* Method tabs */}
                <div className="flex gap-3 mb-7">
                  {[
                    { id: 'card', label: 'Credit / Debit Card', icon: <div className="flex gap-1"><VisaIcon /><MastercardIcon /></div> },
                    { id: 'eft', label: 'EFT / Bank Transfer', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> },
                    { id: 'layby', label: 'Lay-by (24 months)', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPayMethod(m.id)}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-xs font-bold transition-all ${payMethod === m.id ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                    >
                      <span className="text-gray-700">{m.icon}</span>
                      <span className={payMethod === m.id ? 'text-gray-900' : 'text-gray-500'}>{m.label}</span>
                    </button>
                  ))}
                </div>

                {/* Credit/Debit card form */}
                {payMethod === 'card' && (
                  <div className="space-y-4">
                    {/* Card number */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          inputMode="numeric"
                          value={card.number}
                          onChange={e => { setCard(c => ({ ...c, number: formatCard(e.target.value) })); setErrors(p => ({ ...p, number: undefined })); }}
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                          className={`w-full border rounded-xl px-4 py-3 text-sm outline-none font-mono tracking-widest transition-all pr-20 ${errors.number ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100'}`}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          {cardType === 'visa' && <VisaIcon />}
                          {cardType === 'mastercard' && <MastercardIcon />}
                          {!cardType && (
                            <div className="flex gap-1 opacity-30">
                              <VisaIcon />
                              <MastercardIcon />
                            </div>
                          )}
                        </div>
                      </div>
                      {errors.number && <p className="text-xs text-red-500 mt-1 font-medium">{errors.number}</p>}
                    </div>

                    <div className="flex gap-4">
                      {/* Expiry */}
                      <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Expiry Date</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={card.expiry}
                          onChange={e => { setCard(c => ({ ...c, expiry: formatExpiry(e.target.value) })); setErrors(p => ({ ...p, expiry: undefined })); }}
                          placeholder="MM/YY"
                          maxLength={5}
                          className={`w-full border rounded-xl px-4 py-3 text-sm outline-none font-mono transition-all ${errors.expiry ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100'}`}
                        />
                        {errors.expiry && <p className="text-xs text-red-500 mt-1 font-medium">{errors.expiry}</p>}
                      </div>

                      {/* CVV */}
                      <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">CVV</label>
                        <div className="relative">
                          <input
                            type={cvvVisible ? 'text' : 'password'}
                            inputMode="numeric"
                            value={card.cvv}
                            onChange={e => { setCard(c => ({ ...c, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })); setErrors(p => ({ ...p, cvv: undefined })); }}
                            placeholder="•••"
                            maxLength={4}
                            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none font-mono transition-all pr-10 ${errors.cvv ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100'}`}
                          />
                          <button type="button" onClick={() => setCvvVisible(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {cvvVisible
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
                              }
                            </svg>
                          </button>
                        </div>
                        {errors.cvv && <p className="text-xs text-red-500 mt-1 font-medium">{errors.cvv}</p>}
                      </div>
                    </div>

                    {/* Name on card */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Name on Card</label>
                      <input
                        type="text"
                        value={card.name}
                        onChange={e => { setCard(c => ({ ...c, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })); }}
                        placeholder="As it appears on your card"
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100'}`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                    </div>

                    {/* Card logos */}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-xs text-gray-400">We accept:</span>
                      <div className="flex items-center gap-2">
                        {[
                          { label: 'Visa', bg: 'bg-blue-50 border-blue-100', text: 'text-blue-900 font-extrabold' },
                          { label: 'Mastercard', bg: 'bg-red-50 border-red-100', text: 'text-red-700 font-extrabold' },
                          { label: 'Amex', bg: 'bg-sky-50 border-sky-100', text: 'text-sky-700 font-extrabold' },
                        ].map(c => (
                          <span key={c.label} className={`px-2.5 py-1 rounded-md border text-[10px] ${c.bg} ${c.text}`}>{c.label}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* EFT form */}
                {payMethod === 'eft' && (
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 space-y-4">
                    <p className="text-sm font-bold text-gray-900">Bank Transfer Details</p>
                    {[
                      ['Bank', 'First National Bank (FNB)'],
                      ['Account Name', 'OzoneHome (Pty) Ltd'],
                      ['Account Number', '62 8849 2210'],
                      ['Branch Code', '250 655'],
                      ['Account Type', 'Business Cheque'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0 text-sm">
                        <span className="text-gray-500">{label}</span>
                        <span className="font-bold text-gray-900 font-mono">{value}</span>
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Your Reference (use your name)</label>
                      <input
                        type="text"
                        value={eft.ref}
                        onChange={e => setEft(f => ({ ...f, ref: e.target.value }))}
                        placeholder="e.g. Thabo Nkosi"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100"
                      />
                    </div>
                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-xl p-3">
                      Your order will be confirmed once payment reflects. This typically takes 1–2 business days.
                    </p>
                  </div>
                )}

                {/* Lay-by */}
                {payMethod === 'layby' && (
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-extrabold text-gray-900">R{monthly}<span className="text-base font-semibold text-gray-400">/mo</span></p>
                        <p className="text-xs text-gray-500 mt-0.5">over 24 months · 0% interest</p>
                      </div>
                      <div className="bg-emerald-100 text-emerald-700 text-xs font-extrabold px-3 py-1.5 rounded-full">0% Interest</div>
                    </div>
                    {[
                      ['Total amount', `R${SUBTOTAL.toLocaleString()}`],
                      ['Deposit (10%)', `R${Math.round(SUBTOTAL * 0.1).toLocaleString()}`],
                      ['Monthly payment', `R${monthly}`],
                      ['Term', '24 months'],
                      ['Interest rate', '0%'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between text-sm border-b border-gray-200 last:border-0 py-2">
                        <span className="text-gray-500">{label}</span>
                        <span className="font-bold text-gray-900">{value}</span>
                      </div>
                    ))}
                    <p className="text-xs text-gray-500 leading-relaxed">Subject to credit approval. A 10% deposit is required at checkout. OzoneHome lay-by terms apply.</p>
                  </div>
                )}
              </div>

              {/* Pay button */}
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-extrabold py-5 rounded-xl text-base tracking-wide transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-900/20"
              >
                {processing ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing payment…
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pay R{SUBTOTAL.toLocaleString()}
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                Your payment is encrypted and secure. We never store your card details.
              </p>
            </form>
          )}
        </div>

        {/* ── Right: order summary ──────────────────────────────── */}
        <div className="w-full lg:w-80 shrink-0">

          {/* Mobile toggle */}
          <button
            onClick={() => setOrderSummaryOpen(o => !o)}
            className="lg:hidden w-full flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4 mb-4 text-sm font-bold text-gray-900"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Order Summary ({ORDER_ITEMS.length} items)
            </span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">R{SUBTOTAL.toLocaleString()}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${orderSummaryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div className={`sticky top-6 space-y-4 ${orderSummaryOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Items */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-extrabold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-4">
                {ORDER_ITEMS.map(item => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden p-1.5">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug">{item.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">#{item.model}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{item.grade}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 shrink-0">R{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 mt-5 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">R{SUBTOTAL.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span className="font-bold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>VAT (15%)</span>
                  <span className="font-semibold text-gray-700">Included</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                <span className="font-extrabold text-gray-900">Total</span>
                <span className="text-xl font-extrabold text-gray-900">R{SUBTOTAL.toLocaleString()}</span>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-bold text-gray-900">Safe & Secure Checkout</span>
              </div>
              <div className="space-y-2">
                {['256-bit SSL encryption', 'PCI DSS Level 1 compliant', '3D Secure authenticated'].map(t => (
                  <p key={t} className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </p>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 px-2">
              Need help?{' '}
              <a href="tel:+27800000000" className="text-emerald-600 font-semibold hover:underline">0800 000 000</a>
              {' '}· Mon–Fri 8am–6pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
