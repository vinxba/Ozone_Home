const IMGS = {
  washer: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=600',
  fridge: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600',
  cooker: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=600',
  hob:    'https://images.unsplash.com/photo-1585223363606-44473b644161?q=80&w=600',
  dryer:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600',
};

export const products = [
  // ── WASHING MACHINES ──────────────────────────────────────────────────────
  { id: 1,  model: 'EW8F2166MA',  brand: 'ELECTROLUX', series: 'PerfectCare 800',  name: '8kg Front-Load Washing Machine',                   category: 'washing-machines', grade: 'Grade B',  price: 1702,  originalPrice: 3623, energyRating: 'B', warranty: '1 Year',  img: IMGS.washer },
  { id: 2,  model: 'EW8F1168MS',  brand: 'ELECTROLUX', series: 'PerfectCare 800',  name: '8kg Front-Load Washing Machine — Silver',          category: 'washing-machines', grade: 'Open Box', price: 1686,  originalPrice: 4373, energyRating: 'A', warranty: '6 Month', img: IMGS.washer },
  { id: 3,  model: 'EWF8241SB5',  brand: 'ELECTROLUX', series: 'UltraMix 500',     name: '8kg UltraMix Front-Load Washer',                   category: 'washing-machines', grade: 'Grade A',  price: 821,   originalPrice: 1702, energyRating: 'A', warranty: '2 Year',  img: IMGS.washer },
  { id: 4,  model: 'EWT1174M7WA', brand: 'ELECTROLUX', series: 'AgileWave',        name: '11kg Top-Load Washing Machine',                    category: 'washing-machines', grade: 'Grade A',  price: 2123,  originalPrice: null, energyRating: 'B', warranty: '2 Year',  img: IMGS.washer },
  { id: 5,  model: 'EWF1042R7SB', brand: 'ELECTROLUX', series: 'PerfectCare 700',  name: '10kg Front-Load Washing Machine',                  category: 'washing-machines', grade: 'Open Box', price: 2390,  originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.washer },
  { id: 6,  model: 'EW7F4722NFB', brand: 'ELECTROLUX', series: 'PerfectCare 700',  name: '7kg Front-Load Washing Machine with Steam',        category: 'washing-machines', grade: 'Open Box', price: 3811,  originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.washer },
  { id: 7,  model: 'EW6F5722BB',  brand: 'ELECTROLUX', series: 'PerfectCare 600',  name: '6kg Front-Load Washing Machine',                   category: 'washing-machines', grade: 'Grade B',  price: 1811,  originalPrice: null, energyRating: 'B', warranty: '1 Year',  img: IMGS.washer },
  { id: 8,  model: 'EWT1274M7SA', brand: 'ELECTROLUX', series: 'AgileWave',        name: '12kg Top-Load Washing Machine',                    category: 'washing-machines', grade: 'Grade A',  price: 2998,  originalPrice: null, energyRating: 'B', warranty: '2 Year',  img: IMGS.washer },
  { id: 9,  model: 'EW7W4742HB',  brand: 'ELECTROLUX', series: 'PerfectCare 700',  name: '7kg Washer Dryer Combo',                           category: 'washing-machines', grade: 'Open Box', price: 2998,  originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.washer },
  { id: 10, model: 'EW7W3164LS',  brand: 'ELECTROLUX', series: 'PerfectCare 700',  name: '7kg Washer Dryer Combo — Silver',                  category: 'washing-machines', grade: 'Grade B',  price: 1803,  originalPrice: 4123, energyRating: 'B', warranty: '1 Year',  img: IMGS.washer },
  { id: 11, model: 'EWW1042R7MB', brand: 'ELECTROLUX', series: 'PerfectCare 900',  name: '10kg Washer Dryer with Heat Pump',                 category: 'washing-machines', grade: 'Open Box', price: 3998,  originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.washer },
  { id: 12, model: 'EWW9024P5SB', brand: 'ELECTROLUX', series: 'PerfectCare 900',  name: '9kg Washer Dryer Combo',                           category: 'washing-machines', grade: 'Grade B',  price: 1923,  originalPrice: 2880, energyRating: 'B', warranty: '1 Year',  img: IMGS.washer },

  // ── REFRIGERATORS & FRIDGE FREEZERS ────────────────────────────────────────
  { id: 13, model: 'EQE5600A-S',  brand: 'ELECTROLUX', series: 'CustomFlex',       name: 'American Side-by-Side Fridge Freezer — Stainless', category: 'refrigerators', grade: 'Open Box', price: 5248, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.fridge },
  { id: 14, model: 'EQA6000X',    brand: 'ELECTROLUX', series: 'CustomFlex',       name: 'Large American Side-by-Side Fridge Freezer',       category: 'refrigerators', grade: 'Open Box', price: 4373, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.fridge },
  { id: 15, model: 'EBE5304B-A',  brand: 'ELECTROLUX', series: 'FrostFree',        name: 'No-Frost Fridge Freezer — Black',                  category: 'refrigerators', grade: 'Grade A',  price: 3998, originalPrice: null, energyRating: 'A', warranty: '2 Year',  img: IMGS.fridge },
  { id: 16, model: 'ETM5002C-B',  brand: 'ELECTROLUX', series: 'FrostFree',        name: 'Freestanding Fridge Freezer — Black',              category: 'refrigerators', grade: 'Grade B',  price: 3186, originalPrice: null, energyRating: 'B', warranty: '1 Year',  img: IMGS.fridge },
  { id: 17, model: 'EQE4900A-B',  brand: 'ELECTROLUX', series: 'CustomFlex',       name: 'American Fridge Freezer 490L — Black',             category: 'refrigerators', grade: 'Open Box', price: 4436, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.fridge },
  { id: 18, model: 'ERB5007A-S',  brand: 'ELECTROLUX', series: 'FreshPlus',        name: '500L Upright Refrigerator — Stainless',            category: 'refrigerators', grade: 'Grade A',  price: 3873, originalPrice: null, energyRating: 'A', warranty: '2 Year',  img: IMGS.fridge },
  { id: 19, model: 'ERB5004A-W',  brand: 'ELECTROLUX', series: 'FreshPlus',        name: '500L Upright Refrigerator — White',                category: 'refrigerators', grade: 'Grade B',  price: 1310, originalPrice: 2548, energyRating: 'B', warranty: '1 Year',  img: IMGS.fridge },
  { id: 20, model: 'ESE5401A-AME',brand: 'ELECTROLUX', series: 'FreshPlus',        name: '540L Single-Door Upright Refrigerator',            category: 'refrigerators', grade: 'Open Box', price: 3498, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.fridge },
  { id: 21, model: 'EBE4500B-A',  brand: 'ELECTROLUX', series: 'FrostFree',        name: '450L Fridge Freezer Combi — Black',                category: 'refrigerators', grade: 'Grade A',  price: 3373, originalPrice: null, energyRating: 'A', warranty: '2 Year',  img: IMGS.fridge },

  // ── COOKERS & RANGES ──────────────────────────────────────────────────────
  { id: 22, model: 'EFE946SD',    brand: 'ELECTROLUX', series: 'ProSteam',         name: '90cm Freestanding Electric Cooker with Double Oven',category: 'cookers', grade: 'Grade B',  price: 2875, originalPrice: 6373, energyRating: 'B', warranty: '1 Year',  img: IMGS.cooker },
  { id: 23, model: 'EFE915SD',    brand: 'ELECTROLUX', series: 'ProSteam',         name: '90cm Freestanding Electric Cooker',                category: 'cookers', grade: 'Grade B',  price: 2500, originalPrice: 5311, energyRating: 'B', warranty: '1 Year',  img: IMGS.cooker },
  { id: 24, model: 'EKG9241Z7X',  brand: 'ELECTROLUX', series: 'SteamBake',        name: '90cm Freestanding Gas Cooker — Stainless',         category: 'cookers', grade: 'Open Box', price: 3438, originalPrice: null, energyRating: 'B', warranty: '6 Month', img: IMGS.cooker },
  { id: 25, model: 'EKG913A2OX',  brand: 'ELECTROLUX', series: 'SteamBake',        name: '90cm Freestanding Gas Cooker',                     category: 'cookers', grade: 'Grade A',  price: 2973, originalPrice: null, energyRating: 'B', warranty: '2 Year',  img: IMGS.cooker },
  { id: 26, model: 'EKG613A1OX',  brand: 'ELECTROLUX', series: 'SteamBake',        name: '60cm Freestanding Gas Cooker',                     category: 'cookers', grade: 'Grade A',  price: 1592, originalPrice: null, energyRating: 'C', warranty: '2 Year',  img: IMGS.cooker },
  { id: 27, model: 'LKR620002X',  brand: 'ELECTROLUX', series: 'Essentials',       name: '60cm Freestanding Gas Cooker — Stainless',         category: 'cookers', grade: 'Grade B',  price: 2610, originalPrice: null, energyRating: 'C', warranty: '1 Year',  img: IMGS.cooker },
  { id: 28, model: 'LKR64000BX',  brand: 'ELECTROLUX', series: 'Essentials',       name: '60cm Freestanding Gas Cooker — Black',             category: 'cookers', grade: 'Grade B',  price: 1275, originalPrice: 2873, energyRating: 'C', warranty: '1 Year',  img: IMGS.cooker },
  { id: 29, model: 'EKK925A0OX',  brand: 'ELECTROLUX', series: 'SteamBake',        name: '90cm Dual Fuel Cooker — Stainless',                category: 'cookers', grade: 'Open Box', price: 3167, originalPrice: null, energyRating: 'B', warranty: '6 Month', img: IMGS.cooker },

  // ── BUILT-IN OVENS ────────────────────────────────────────────────────────
  { id: 30, model: 'EVE916SE',    brand: 'ELECTROLUX', series: 'SteamPro',         name: '60cm Pyrolytic Built-In Oven with Steam',          category: 'ovens', grade: 'Open Box', price: 7498, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.cooker },
  { id: 31, model: 'EOM5420AAX',  brand: 'ELECTROLUX', series: 'SteamPro',         name: '60cm Multi-Function Pyrolytic Oven',               category: 'ovens', grade: 'Open Box', price: 5623, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.cooker },
  { id: 32, model: 'KOAAS31X',    brand: 'ELECTROLUX', series: 'AirFry',           name: '60cm Built-In Oven with AirFry & SteamBoost',      category: 'ovens', grade: 'Grade A',  price: 7100, originalPrice: null, energyRating: 'A', warranty: '2 Year',  img: IMGS.cooker },
  { id: 33, model: 'KVLBE00X',    brand: 'ELECTROLUX', series: 'SteamPro',         name: '60cm Multifunction Built-In Oven',                 category: 'ovens', grade: 'Grade A',  price: 4837, originalPrice: null, energyRating: 'A', warranty: '2 Year',  img: IMGS.cooker },
  { id: 34, model: 'KOH2H00BX',   brand: 'ELECTROLUX', series: 'Essentials',       name: '45cm Compact Built-In Oven — Stainless',           category: 'ovens', grade: 'Grade B',  price: 1917, originalPrice: null, energyRating: 'B', warranty: '1 Year',  img: IMGS.cooker },
  { id: 35, model: 'KOFEH70X',    brand: 'ELECTROLUX', series: 'SteamBake',        name: '60cm Fan-Assisted Built-In Oven',                  category: 'ovens', grade: 'Grade B',  price: 3373, originalPrice: null, energyRating: 'B', warranty: '1 Year',  img: IMGS.cooker },

  // ── HOBS & COOKTOPS ───────────────────────────────────────────────────────
  { id: 36, model: 'EHF9557XOK',  brand: 'ELECTROLUX', series: 'LuxuryGlide',      name: '90cm Induction Hob with FlexiBridge',              category: 'hobs', grade: 'Open Box', price: 4248, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.hob },
  { id: 37, model: 'EIT913',      brand: 'ELECTROLUX', series: 'LuxuryGlide',      name: '90cm FlexiBridge Induction Hob',                   category: 'hobs', grade: 'Open Box', price: 3623, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.hob },
  { id: 38, model: 'KGV9539IK',   brand: 'ELECTROLUX', series: 'PrecisionFlame',   name: '90cm 5-Burner Gas Hob — Black',                    category: 'hobs', grade: 'Grade A',  price: 6622, originalPrice: null, energyRating: 'B', warranty: '2 Year',  img: IMGS.hob },
  { id: 39, model: 'KGG95376K',   brand: 'ELECTROLUX', series: 'PrecisionFlame',   name: '90cm 6-Burner Gas Hob — Black',                    category: 'hobs', grade: 'Grade A',  price: 6802, originalPrice: null, energyRating: 'B', warranty: '2 Year',  img: IMGS.hob },
  { id: 40, model: 'EHR64441CK',  brand: 'ELECTROLUX', series: 'Essentials',       name: '60cm 4-Zone Electric Hob',                         category: 'hobs', grade: 'Grade B',  price: 416,  originalPrice: 1686, energyRating: 'B', warranty: '1 Year',  img: IMGS.hob },
  { id: 41, model: 'EHF6240XOK',  brand: 'ELECTROLUX', series: 'Essentials',       name: '60cm 4-Zone Induction Hob',                        category: 'hobs', grade: 'Grade B',  price: 1167, originalPrice: null, energyRating: 'A', warranty: '1 Year',  img: IMGS.hob },
  { id: 42, model: 'KGS6436X',    brand: 'ELECTROLUX', series: 'PrecisionFlame',   name: '60cm 4-Burner Gas Hob — Stainless',                category: 'hobs', grade: 'Grade A',  price: 1631, originalPrice: null, energyRating: 'C', warranty: '2 Year',  img: IMGS.hob },
  { id: 43, model: 'LIB60420CK',  brand: 'ELECTROLUX', series: 'Essentials',       name: '60cm Built-In Induction Hob',                      category: 'hobs', grade: 'Grade B',  price: 2298, originalPrice: null, energyRating: 'A', warranty: '1 Year',  img: IMGS.hob },

  // ── TUMBLE DRYERS ─────────────────────────────────────────────────────────
  { id: 44, model: 'EW6C4824CB',  brand: 'ELECTROLUX', series: 'PerfectCare',      name: '6kg Heat Pump Condenser Dryer — Black',            category: 'dryers', grade: 'Open Box', price: 2698, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.dryer },
  { id: 45, model: 'TX7E8R1B',    brand: 'ELECTROLUX', series: 'PerfectCare 700',  name: '7kg Heat Pump Tumble Dryer',                       category: 'dryers', grade: 'Grade B',  price: 1364, originalPrice: 4811, energyRating: 'A', warranty: '1 Year',  img: IMGS.dryer },
  { id: 46, model: 'EW8H1966TBS', brand: 'ELECTROLUX', series: 'PerfectCare 800',  name: '8kg Heat Pump Dryer with SteamCare',               category: 'dryers', grade: 'Grade B',  price: 1756, originalPrice: 4498, energyRating: 'A', warranty: '1 Year',  img: IMGS.dryer },
  { id: 47, model: 'EDH903R7SC',  brand: 'ELECTROLUX', series: 'PerfectCare 900',  name: '9kg Heat Pump Dryer with SensiCare',               category: 'dryers', grade: 'Open Box', price: 4211, originalPrice: null, energyRating: 'A', warranty: '6 Month', img: IMGS.dryer },
  { id: 48, model: 'EW8H1968IS',  brand: 'ELECTROLUX', series: 'PerfectCare 800',  name: '8kg Large Heat Pump Condenser Dryer',              category: 'dryers', grade: 'Grade A',  price: 4498, originalPrice: null, energyRating: 'A', warranty: '2 Year',  img: IMGS.dryer },
];

export const categoryConfig = {
  'washing-machines': {
    title: 'Washing Machines & Dryers',
    sub: 'Front-load, top-load, washer-dryer combos.',
    subCategories: ['Front Load Washers', 'Top Load Washers', 'Washer Dryers'],
  },
  'refrigerators': {
    title: 'Refrigerators & Fridge Freezers',
    sub: 'American side-by-side, upright fridges, and fridge freezers.',
    subCategories: ['Upright Refrigerators', 'Fridge Freezers', 'American Style'],
  },
  'cookers': {
    title: 'Cookers & Ranges',
    sub: 'Freestanding gas and electric cookers.',
    subCategories: ['Gas Cookers', 'Electric Cookers', 'Dual Fuel'],
  },
  'ovens': {
    title: 'Built-in Ovens',
    sub: 'Single and double built-in electric ovens.',
    subCategories: ['Single Ovens', 'Pyrolytic Ovens', 'Steam Ovens'],
  },
  'hobs': {
    title: 'Hobs & Cooktops',
    sub: 'Gas, ceramic, and induction hobs.',
    subCategories: ['Induction Hobs', 'Gas Hobs', 'Electric Hobs'],
  },
  'dryers': {
    title: 'Tumble Dryers',
    sub: 'Heat pump, condenser, and vented dryers.',
    subCategories: ['Heat Pump Dryers', 'Condenser Dryers', 'Vented Dryers'],
  },
};
