/**
 * National Engineering Company - Master Site Data Store
 * Default dataset used across all pages.
 * Stored in localStorage for instant live editing via Admin Panel.
 */

const DEFAULT_NEC_DATA = {
  general: {
    siteName: "National Engineering Company",
    tagline: "World Class Air Compressors & Industrial Equipment, Roorkee",
    experienceYears: "15+",
    happyClients: "100+",
    installations: "500+",
    supportHours: "24/7",
    primaryPhone: "+91 74092 78477",
    officePhone: "+91 90584 65810",
    email: "nationalengineeringcompanyrke@gmail.com",
    address: "First Floor, Near Saini Cricket Academy, Gas Godown Road, Ramnagar Industrial Area, Salempur Rajputana, Roorkee, Uttarakhand – 247667",
    googleMapsUrl: "https://maps.google.com/?q=Salempur+Rajputana+Roorkee+Uttarakhand",
    whatsappNumber: "917409278477",
    logoText: "NATIONAL",
    logoSubtext: "ENGINEERING COMPANY",
    bannerHeading: "Powering Performance • Delivering Reliability",
    bannerTitle: "Complete Solution For All Your Industrial Needs",
    bannerSubtitle: "For 15 years, we have been the trusted engineering partner for manufacturing plants, commercial setups, and engineering facilities across India."
  },
  hero: {
    badge: "15 Years of Excellence & Commitment",
    title: "World Class <span class='text-primary'>Air Compressor</span> & Industrial Solutions",
    description: "Your trusted partner for <strong>Screw Compressors, Piston Compressors, Air Dryers, DG Sets, Servo Stabilizers, Transformers</strong> and Material Handling Equipment. Complete sales, genuine spares and 24x7 service support from Roorkee, Uttarakhand.",
    image: "images/products-lineup-wide.jpg",
    calloutTitle: "Service Hotline",
    calloutSubtitle: "Fast Breakdown Response"
  },
  products: [
    {
      id: "prod-1",
      badge: "7.5 HP to 75 HP",
      name: "Rotary Screw Air Compressor",
      category: "Air Compressors",
      description: "Advanced German design airend, heavy-duty oil cooler, microprocessor controller, and whisper-quiet acoustic cabinet designed for 24/7 continuous duty cycles.",
      specs: [
        { label: "Power Range", value: "7.5 HP – 75 HP" },
        { label: "Air Delivery", value: "30 CFM – 380 CFM" },
        { label: "Pressure", value: "7.5 to 13 Bar" },
        { label: "Duty Cycle", value: "100% Continuous" }
      ],
      image: "images/prod-screw-compressor.jpg",
      featured: true
    },
    {
      id: "prod-2",
      badge: "5 HP to 30 HP",
      name: "Reciprocating Piston Compressor",
      category: "Air Compressors",
      description: "Robust cast-iron block piston compressor engineered for rugged garage, workshop, and intermittent manufacturing operations.",
      specs: [
        { label: "Power Range", value: "5 HP – 30 HP" },
        { label: "Cylinders", value: "Multi-Stage Cast Iron" },
        { label: "Tank Capacity", value: "220L – 500L ASME Tank" },
        { label: "Working Pressure", value: "8 to 14 Bar" }
      ],
      image: "images/prod-piston-compressor.jpg",
      featured: true
    },
    {
      id: "prod-3",
      badge: "20 CFM to 500 CFM",
      name: "Refrigerated Compressed Air Dryer",
      category: "Air Treatment",
      description: "High-efficiency moisture separator and heat exchanger providing +3°C pressure dew point for moisture-free pneumatic air supply.",
      specs: [
        { label: "Capacity Range", value: "20 CFM – 500 CFM" },
        { label: "Dew Point", value: "+3°C PDP" },
        { label: "Refrigerant", value: "Eco-Friendly R134a / R410a" },
        { label: "Condensate Drain", value: "Auto Electronic Timer Drain" }
      ],
      image: "images/prod-air-dryer.jpg",
      featured: true
    },
    {
      id: "prod-4",
      badge: "15 kVA to 500 kVA",
      name: "Silent Diesel Generator (DG Set)",
      category: "Power Systems",
      description: "Acoustic canopy enclosed silent diesel generator sets powered by industry leading engines with digital AMF automatic changeover panels.",
      specs: [
        { label: "Rating Range", value: "15 kVA – 500 kVA" },
        { label: "Noise Level", value: "<75 dBA CPCB-II Certified" },
        { label: "Cooling", value: "Liquid / Radiator Cooled" },
        { label: "Panel", value: "Automatic AMF / Manual" }
      ],
      image: "images/prod-dg-set.jpg",
      featured: true
    },
    {
      id: "prod-5",
      badge: "10 kVA to 1000 kVA",
      name: "Industrial Servo Voltage Stabilizer",
      category: "Power Systems",
      description: "Micro-controlled copper wound servo stabilizers providing ultra-fast precision voltage correction for high-value CNC and industrial machines.",
      specs: [
        { label: "Capacity Range", value: "10 kVA – 1000 kVA" },
        { label: "Input Range", value: "300V – 470V / Wide Range" },
        { label: "Output Voltage", value: "400V / 415V ± 1%" },
        { label: "Cooling Type", value: "Air Cooled / Oil Cooled" }
      ],
      image: "images/prod-servo-stabilizer.jpg",
      featured: true
    },
    {
      id: "prod-6",
      badge: "Up to 2500 kVA",
      name: "Distribution Transformer",
      category: "Power Systems",
      description: "Heavy duty oil immersed and dry type power transformers built with low-loss CRGO silicon steel laminations for maximum energy conservation.",
      specs: [
        { label: "Rating Range", value: "25 kVA – 2500 kVA" },
        { label: "Voltage Ratio", value: "11 kV / 433 V / 33 kV" },
        { label: "Standards", value: "IS 1180 / IS 2026 Compliant" },
        { label: "Efficiency", value: "BEE Star Rated / Ultra Low Loss" }
      ],
      image: "images/prod-transformer.jpg",
      featured: true
    }
  ],
  services: [
    {
      id: "srv-1",
      badge: "Screw Compressor Care",
      title: "Comprehensive Screw Compressor Servicing",
      description: "Screw compressors require precise maintenance intervals to prevent airend degradation, oil overheating, and unnecessary downtime. Our certified team performs detailed routine servicing and emergency overhauls.",
      features: [
        "Complete Inspection: Checking airend screws, vibration, bearings, and safety valves.",
        "Air & Oil Filter Replacement: Installing high-micron OEM filtration.",
        "Oil Change & Flushing: Specialized screw compressor synthetic oil.",
        "Control Calibration: Pressure switches, sensors & electronic timers."
      ],
      image: "images/item-screw-service.jpg"
    },
    {
      id: "srv-2",
      badge: "Piston & Reciprocating Care",
      title: "Piston Compressor Overhauling & Rebuilding",
      description: "Complete mechanical overhauling for multi-stage reciprocating piston compressors. We restore cylinder bore clearances, piston rings, valves, and crankshaft bearings to factory specifications.",
      features: [
        "Head & Valve De-carbonizing: Cleaning & replacing valve plates & springs.",
        "Piston Ring Replacement: High tensile rings for restored CFM air output.",
        "Crankcase Maintenance: Connecting rods, bearings, and crank inspection.",
        "Pressure Vessel Testing: Hydraulic test and safety relief validation."
      ],
      image: "images/compressor-service-piston.jpg"
    },
    {
      id: "srv-3",
      badge: "Power & Electrical Service",
      title: "DG Sets, Stabilizers & Transformers Maintenance",
      description: "Prevent sudden power outages and equipment damage with comprehensive diagnostic servicing of diesel generators, servo controllers, and transformers.",
      features: [
        "DG Set 'B' & 'C' Check Services: Lube oil, fuel filters & AMF testing.",
        "Servo Stabilizer Motor Servicing: Variac carbon brushes & drive chain.",
        "Transformer Oil Testing: BDV breakdown voltage test and dehydration.",
        "Chemical Earthing: Earth pit resistance testing & chemical compound refilling."
      ],
      image: "images/services-electrical-equipment.jpg"
    }
  ],
  spares: [
    {
      id: "sp-1",
      badge: "Clean Air • High Life",
      name: "Compressor Air Filters",
      description: "Captures dust, grit, and airborne micro-particles to protect the compressor airend and maintain high flow efficiency.",
      specs: [
        { label: "Filtration", value: "High Efficiency Nano Media" },
        { label: "Suitable For", value: "Screw & Piston Compressors" },
        { label: "Protection", value: "Prevents Airend Wear" }
      ],
      image: "images/item-air-filter.jpg"
    },
    {
      id: "sp-2",
      badge: "Peak Engine Protection",
      name: "Heavy Duty Oil Filters",
      description: "Engineered for high burst pressure and continuous oil filtration to prevent bearing wear and extend engine life.",
      specs: [
        { label: "Pressure Rating", value: "Up to 35 Bar" },
        { label: "Efficiency", value: "99.2% Particle Retention" },
        { label: "Application", value: "Screw Compressors & DG Sets" }
      ],
      image: "images/item-oil-filter.jpg"
    },
    {
      id: "sp-3",
      badge: "<3 PPM Carryover",
      name: "Air-Oil Separator Elements",
      description: "Multi-layered borosilicate glass fiber separators reducing oil carryover to less than 3 ppm for clean compressed air.",
      specs: [
        { label: "Residual Oil", value: "< 3 mg/m³ (3 PPM)" },
        { label: "Differential Pressure", value: "< 0.2 Bar Initial" },
        { label: "Life Expectancy", value: "Up to 4000 Working Hours" }
      ],
      image: "images/air-oil-filter-pallet.jpg"
    },
    {
      id: "sp-4",
      badge: "2.5 Ton & 3.0 Ton",
      name: "Hydraulic Hand Pallet Trucks",
      description: "Heavy duty tandem PU wheel pallet trucks with leak-proof hydraulic pump system for tough shop-floor material transport.",
      specs: [
        { label: "Load Capacity", value: "2500 kg / 3000 kg (2.5T / 3T)" },
        { label: "Fork Dimensions", value: "550 x 1150 mm / 685 x 1220 mm" },
        { label: "Wheels", value: "Dual Polyurethane (PU) Tandem" }
      ],
      image: "images/item-hand-pallet.jpg"
    },
    {
      id: "sp-5",
      badge: "Heavy Duty Racking",
      name: "Industrial Plastic Pallets",
      description: "Virgin HDPE / PP stackable and rackable plastic pallets engineered for hygienic, waterproof, and heavy warehouse storage.",
      specs: [
        { label: "Material", value: "Virgin HDPE / Polypropylene" },
        { label: "Static Load", value: "Up to 4000 kg" },
        { label: "Dynamic Load", value: "Up to 1500 kg" }
      ],
      image: "images/item-plastic-pallet.jpg"
    },
    {
      id: "sp-6",
      badge: "IS 3043 Standard",
      name: "Chemical Earthing Electrodes & Compound",
      description: "Copper bonded steel grounding electrodes and moisture retaining earth enhancement chemical compound for electrical safety.",
      specs: [
        { label: "Electrode Material", value: "Copper Bonded Carbon Steel" },
        { label: "Coating Thickness", value: "250 Microns Copper" },
        { label: "Compound", value: "Bentonite / Carbon Based Mineral" }
      ],
      image: "images/item-chemical-earthing.jpg"
    }
  ],
  about: {
    badge: "Corporate Profile",
    title: "About National Engineering Company",
    subtitle: "15 Years of Excellence & Commitment. Complete solution for all your industrial compressed air, electrical power and material handling needs.",
    journeyTitle: "Powering Industries, Building Trust & Delivering Excellence",
    p1: "Founded with the vision to deliver world-class air compression and industrial equipment, <strong>National Engineering Company</strong> has grown over the past 15 years to become the trusted machinery partner for 100+ prominent companies with more than 500 successful installations across India.",
    p2: "We operate from Roorkee’s thriving industrial sector in Salempur Rajputana, providing complete turnkey integration: technical consulting, precise machine sizing, installation, genuine spares stock, and proactive 24x7 maintenance backup.",
    mission: "To deliver zero-downtime compressed air and electrical solutions that empower industrial efficiency.",
    vision: "To remain Northern India's premier engineering partner through transparency, quality, and quick service response.",
    directorName: "Sunil Kumar",
    directorTitle: "Managing Director",
    directorImage: "images/md-office-portrait.jpg"
  },
  theme: {
    primaryColor: "#006bba",
    primaryDeep: "#00306f",
    accentColor: "#f59e0b",
    fontHeading: "'Space Grotesk', 'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    customCss: ""
  }
};

class NecCMS {
  constructor() {
    this.STORAGE_KEY = 'NEC_WEBSITE_CMS_DATA';
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Deep merge with default to ensure no missing keys
        return Object.assign({}, DEFAULT_NEC_DATA, parsed);
      }
    } catch (e) {
      console.warn("CMS Load Error:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_NEC_DATA));
  }

  saveData(newData) {
    this.data = newData;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    this.broadcastUpdate();
  }

  resetToDefault() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.data = JSON.parse(JSON.stringify(DEFAULT_NEC_DATA));
    this.broadcastUpdate();
    return this.data;
  }

  exportDataJson() {
    return JSON.stringify(this.data, null, 2);
  }

  importDataJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      this.saveData(parsed);
      return true;
    } catch (e) {
      console.error("Invalid JSON:", e);
      return false;
    }
  }

  broadcastUpdate() {
    window.dispatchEvent(new CustomEvent('nec-cms-updated', { detail: this.data }));
  }

  // Dynamic DOM replacement helper
  applyToPage() {
    const d = this.data;
    if (!d) return;

    // Apply Theme Colors if custom
    if (d.theme) {
      const root = document.documentElement;
      if (d.theme.primaryColor) root.style.setProperty('--primary', d.theme.primaryColor);
      if (d.theme.primaryDeep) root.style.setProperty('--primary-deep', d.theme.primaryDeep);
      if (d.theme.customCss) {
        let styleTag = document.getElementById('nec-custom-style-tag');
        if (!styleTag) {
          styleTag = document.createElement('style');
          styleTag.id = 'nec-custom-style-tag';
          document.head.appendChild(styleTag);
        }
        styleTag.innerHTML = d.theme.customCss;
      }
    }

    // Apply General Contact & Phone Numbers
    document.querySelectorAll('[data-cms="primaryPhone"]').forEach(el => {
      el.textContent = d.general.primaryPhone;
      if (el.tagName === 'A' && el.href.startsWith('tel:')) el.href = `tel:${d.general.primaryPhone.replace(/\s+/g, '')}`;
    });

    document.querySelectorAll('[data-cms="officePhone"]').forEach(el => {
      el.textContent = d.general.officePhone;
      if (el.tagName === 'A' && el.href.startsWith('tel:')) el.href = `tel:${d.general.officePhone.replace(/\s+/g, '')}`;
    });

    document.querySelectorAll('[data-cms="email"]').forEach(el => {
      el.textContent = d.general.email;
      if (el.tagName === 'A') el.href = `mailto:${d.general.email}`;
    });

    document.querySelectorAll('[data-cms="address"]').forEach(el => {
      el.textContent = d.general.address;
    });

    document.querySelectorAll('[data-cms="siteName"]').forEach(el => {
      el.textContent = d.general.siteName;
    });

    // Update WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
      el.href = `https://wa.me/${d.general.whatsappNumber}?text=Hello%20${encodeURIComponent(d.general.siteName)},%20I%20am%20interested%20in%20your%20products.`;
    });

    // Stats
    document.querySelectorAll('[data-cms="experienceYears"]').forEach(el => el.textContent = d.general.experienceYears);
    document.querySelectorAll('[data-cms="happyClients"]').forEach(el => el.textContent = d.general.happyClients);
    document.querySelectorAll('[data-cms="installations"]').forEach(el => el.textContent = d.general.installations);
    document.querySelectorAll('[data-cms="supportHours"]').forEach(el => el.textContent = d.general.supportHours);

    // Hero elements if present
    const heroTitle = document.querySelector('[data-cms="heroTitle"]');
    if (heroTitle && d.hero.title) heroTitle.innerHTML = d.hero.title;

    const heroDesc = document.querySelector('[data-cms="heroDesc"]');
    if (heroDesc && d.hero.description) heroDesc.innerHTML = d.hero.description;

    const heroBadge = document.querySelector('[data-cms="heroBadge"]');
    if (heroBadge && d.hero.badge) heroBadge.innerHTML = `<span class="line"></span> ${d.hero.badge}`;

    // Render Products Grid if container exists
    const prodContainer = document.getElementById('cms-dynamic-products-grid');
    if (prodContainer && d.products) {
      prodContainer.innerHTML = d.products.map(p => `
        <article class="product-card" data-id="${p.id}">
          <div class="product-card-media">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='images/prod-screw-compressor.jpg'">
          </div>
          <div class="product-card-body">
            <span class="product-badge">${p.badge}</span>
            <h3 class="product-card-title">${p.name}</h3>
            <p class="product-card-desc">${p.description}</p>
            <ul class="product-specs-list">
              ${p.specs.map(s => `<li><span>${s.label}:</span> <strong>${s.value}</strong></li>`).join('')}
            </ul>
          </div>
          <div class="product-card-action">
            <a href="contact.html?product=${encodeURIComponent(p.name)}" class="btn btn-primary" style="width: 100%;">
              <span>Get Price Quote</span>
              <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
            </a>
          </div>
        </article>
      `).join('');
      if (window.lucide) window.lucide.createIcons();
    }

    // Render Spares Grid if container exists
    const sparesContainer = document.getElementById('cms-dynamic-spares-grid');
    if (sparesContainer && d.spares) {
      sparesContainer.innerHTML = d.spares.map(s => `
        <article class="product-card" data-id="${s.id}">
          <div class="product-card-media">
            <img src="${s.image}" alt="${s.name}" onerror="this.src='images/item-air-filter.jpg'">
          </div>
          <div class="product-card-body">
            <span class="product-badge">${s.badge}</span>
            <h3 class="product-card-title">${s.name}</h3>
            <p class="product-card-desc">${s.description}</p>
            <ul class="product-specs-list">
              ${s.specs.map(sp => `<li><span>${sp.label}:</span> <strong>${sp.value}</strong></li>`).join('')}
            </ul>
          </div>
          <div class="product-card-action">
            <a href="contact.html?part=${encodeURIComponent(s.name)}" class="btn btn-primary" style="width: 100%;">
              <span>Order Part</span>
              <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
            </a>
          </div>
        </article>
      `).join('');
      if (window.lucide) window.lucide.createIcons();
    }
  }
}

// Global Singleton
window.necCMS = new NecCMS();

// Auto apply when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.necCMS.applyToPage();

  // Floating Quick Edit button for easy Admin access
  if (!document.getElementById('nec-admin-float-btn')) {
    const btn = document.createElement('a');
    btn.id = 'nec-admin-float-btn';
    btn.href = 'admin.html';
    btn.title = 'Open Admin Panel / Customize Site';
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <span>Edit Site / Admin</span>
    `;
    btn.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 99999;
      background: #00306f;
      color: #ffffff;
      padding: 10px 18px;
      border-radius: 9999px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      box-shadow: 0 10px 25px rgba(0, 48, 111, 0.4);
      text-decoration: none;
      transition: all 0.25s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    btn.onmouseover = () => {
      btn.style.transform = 'translateY(-2px) scale(1.04)';
      btn.style.boxShadow = '0 15px 30px rgba(0, 48, 111, 0.5)';
      btn.style.background = '#006bba';
    };
    btn.onmouseout = () => {
      btn.style.transform = 'none';
      btn.style.boxShadow = '0 10px 25px rgba(0, 48, 111, 0.4)';
      btn.style.background = '#00306f';
    };
    document.body.appendChild(btn);
  }
});
