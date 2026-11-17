// import { FlaskConical, Wheat, Factory, Layers } from 'lucide-react';

// export const photo = (id, w = 1200) =>
//   `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

// export const sectors = [
//   {
//     name: 'Chemicals & Pharma',
//     label: 'Materials that move industries.',
//     icon: FlaskConical,
//     img: 'photo-1532187863486-abf9dbad1b69',
//     text: 'Raw materials for healthcare, agriculture and industrial manufacturing.',
//     products: ['Active pharmaceutical ingredients', 'Intermediates & excipients', 'Agrochemicals', 'Industrial & specialty chemicals'],
//   },
//   {
//     name: 'Food & Allied Products',
//     label: 'Essential goods. Global possibilities.',
//     icon: Wheat,
//     img: 'photo-1500382017468-9049fed747ef',
//     text: 'A diverse portfolio of food and agricultural commodities for international markets.',
//     products: ['Frozen seafood, meat & vegetables', 'Palm, sunflower & mustard oils', 'Grains, pulses & oilseeds', 'Spices, dried fruits & nuts'],
//   },
//   {
//     name: 'Steel & Iron',
//     label: 'The foundation of progress.',
//     icon: Factory,
//     img: 'photo-1504917595217-d4dc5ebe6122',
//     text: 'Steel and iron sourcing for construction, infrastructure and industrial applications.',
//     products: ['Construction materials', 'Industrial steel & iron', 'Manufacturing requirements', 'Project-based sourcing'],
//   },
//   {
//     name: 'Textiles',
//     label: 'Woven for a world of opportunity.',
//     icon: Layers,
//     img: 'photo-1528459801416-a9e53bbf4e17',
//     text: 'Apparel and home furnishing fabrics to support manufacturers and distributors.',
//     products: ['Cotton fabrics', 'Synthetic & blended fabrics', 'Upholstery & curtains', 'Bedding & home textiles'],
//   },
// ];

// export const heroSlides = ['photo-1512453979798-5ea266f8880c', ...sectors.map((s) => s.img)];
// export const heroCaptions = ['Dubai, UAE', ...sectors.map((s) => s.name)];

// export const strip = [
//   'International sourcing', 'Third-port trade', 'Re-export solutions', 'Based in Dubai, UAE',
//   'Chemicals & Pharma', 'Food & Allied Products', 'Steel & Iron', 'Textiles',
// ];

// export const navLinks = [
//   ['About us', 'about'],
//   ['Our verticals', 'verticals'],
//   ['Our approach', 'approach'],
//   ['Contact', 'contact'],
// ];

// export const principles = [
//   ['01', 'Multi-sector perspective', 'A diversified portfolio that brings your sourcing conversations together.'],
//   ['02', 'Clear communication', 'A direct dialogue around your specifications, quantities and destination.'],
//   ['03', 'Partnership mindset', 'Relationships shaped around your business and its evolving requirements.'],
// ];

// export const steps = [
//   ['Share your requirement', 'Tell us the product, specification, quantity and destination.'],
//   ['Explore the possibilities', 'Discuss sourcing options and commercial requirements with our team.'],
//   ['Move forward together', 'Align on the agreed product, terms and next steps.'],
// ];

// export const company = {
//   email: 'info@aspglobalfz.com',
//   phone: '+971 55 5368440',
//   phoneLink: 'tel:+971555368440',
//   whatsapp: 'https://wa.me/971555368440',
//   addressLine1: 'Meydan Grandstand, 6th Floor, Meydan,',
//   addressLine2: 'Nad Al Sheba First, Dubai, U.A.E.',
// };

import { FlaskConical, Wheat, Factory, Layers } from 'lucide-react';

export const photo = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

/*
  Each vertical:
  - name / label / text / products  -> used by the photo cards and the hero
  - intro / groups / note           -> used by the detailed panel below the cards
*/
export const sectors = [
  {
    name: 'Chemicals & Pharma',
    label: 'Materials that move industries.',
    icon: FlaskConical,
    img: 'photo-1532187863486-abf9dbad1b69',
     gallery: ['photo-1532187863486-abf9dbad1b69', 'photo-1578575437130-527eed3abbec', 'photo-1512453979798-5ea266f8880c'],
    text: 'Raw materials for healthcare, agriculture and industrial manufacturing.',
    products: ['Active pharmaceutical ingredients', 'Intermediates & excipients', 'Agrochemicals', 'Industrial & specialty chemicals'],
    fullTitle: 'Chemical & Pharmaceutical Raw Material Trading',
    intro:
      'We specialize in the international trading of chemicals and pharmaceutical raw materials on a third-port / re-export basis, supporting industries such as agriculture, healthcare, and manufacturing.',
    groups: [
      {
        title: 'Our expertise',
        items: [
          'Active Pharmaceutical Ingredients (APIs)',
          'Pharmaceutical intermediates and raw materials',
          'Agrochemicals',
          'Industrial and specialty chemicals',
        ],
      },
    ],
    note:
      'We work only with approved manufacturers and compliant supply chains, ensuring products meet international quality, safety, and regulatory standards.',
  },
  {
    name: 'Food & Allied Products',
    label: 'Essential goods. Global possibilities.',
    icon: Wheat,
    img: 'photo-1500382017468-9049fed747ef',
     gallery: ['photo-1500382017468-9049fed747ef', 'photo-1578575437130-527eed3abbec', 'photo-1512453979798-5ea266f8880c'],
    text: 'A diverse portfolio of food and agricultural commodities for international markets.',
    products: ['Frozen foods & seafood', 'Edible oils', 'Grains, pulses & oilseeds', 'Spices, dried fruits & nuts'],
    fullTitle: 'Food & Allied Products Trading',
    intro:
      'ASP Global trades a wide range of food and agricultural commodities, sourced from trusted origins and handled with strict quality assurance.',
    groups: [
      {
        title: 'Frozen Foods',
        desc: 'Our frozen food portfolio is managed with a focus on cold-chain integrity, hygiene, and consistency, catering to distributors and institutional buyers.',
        items: ['Seafood', 'Meat & poultry', 'Ready meals and appetizers', 'Frozen fries and value-added frozen products'],
      },
      {
        title: 'Edible Oils',
        desc: 'We supply edible oils suitable for both industrial processing and consumer markets, ensuring purity and quality compliance.',
        items: ['Palm oil', 'Sunflower oil', 'Mustard oil', 'Other commonly traded edible oils'],
      },
      {
        title: 'Agricultural Produce',
        desc: 'Our agri-produce trading emphasizes traceability, seasonal sourcing, and stable supply, meeting the needs of wholesalers and processors globally.',
        items: [
          'Cereals and grains',
          'Pulses and legumes',
          'Oil seeds and oils',
          'Cash crops and spices',
          'Sugar crops',
          'Specialty crops',
          'Dried fruits and nuts',
        ],
      },
    ],
  },
  {
    name: 'Steel & Iron',
    label: 'The foundation of progress.',
    icon: Factory,
    img: 'photo-1504917595217-d4dc5ebe6122',
    gallery: ['photo-1504917595217-d4dc5ebe6122', 'photo-1578575437130-527eed3abbec', 'photo-1512453979798-5ea266f8880c'],
    text: 'Steel and iron sourcing for construction, infrastructure and industrial applications.',
    products: ['Construction materials', 'Industrial steel & iron', 'Manufacturing requirements', 'Project-based sourcing'],
    fullTitle: 'Steel & Iron Trading',
    intro: 'We trade steel and iron products for:',
    groups: [
      {
        title: 'Applications',
        items: ['Construction projects', 'Infrastructure development', 'Industrial applications'],
      },
    ],
    note:
      'Our offerings are sourced from reliable producers and supplied according to technical specifications, volume requirements, and delivery timelines, supporting both commercial and industrial demand.',
  },
  {
    name: 'Textiles',
    label: 'Woven for a world of opportunity.',
    icon: Layers,
    img: 'photo-1528459801416-a9e53bbf4e17',
    gallery: ['photo-1528459801416-a9e53bbf4e17', 'photo-1578575437130-527eed3abbec', 'photo-1512453979798-5ea266f8880c'],
    text: 'Apparel and home furnishing fabrics to support manufacturers and distributors.',
    products: ['Cotton fabrics', 'Synthetic & blended fabrics', 'Upholstery & curtains', 'Bedding & home textiles'],
    fullTitle: 'Textile Trading',
    intro:
      'ASP Global is engaged in the trading of textiles for apparel and home furnishing applications, supplying quality fabrics to manufacturers and distributors.',
    groups: [
      {
        title: 'Our textile range',
        items: ['Apparel fabrics', 'Home furnishing materials'],
      },
    ],
    note:
      'We focus on consistent quality, flexible sourcing, and competitive pricing, enabling our partners to meet market trends efficiently.',
  },
];

export const heroSlides = ['photo-1512453979798-5ea266f8880c', ...sectors.map((s) => s.img)];

export const strip = [
  'International sourcing', 'Third-port trade', 'Re-export solutions', 'Based in Dubai, UAE',
  'Chemicals & Pharma', 'Food & Allied Products', 'Steel & Iron', 'Textiles',
];

export const navLinks = [
  ['About us', 'about'],
  ['Our verticals', 'verticals'],
  ['Our approach', 'approach'],
  ['Contact', 'contact'],
];

export const principles = [
  ['01', 'Multi-sector perspective', 'A diversified portfolio that brings your sourcing conversations together.'],
  ['02', 'Clear communication', 'A direct dialogue around your specifications, quantities and destination.'],
  ['03', 'Partnership mindset', 'Relationships shaped around your business and its evolving requirements.'],
];

export const steps = [
  ['Share your requirement', 'Tell us the product, specification, quantity and destination.'],
  ['Explore the possibilities', 'Discuss sourcing options and commercial requirements with our team.'],
  ['Move forward together', 'Align on the agreed product, terms and next steps.'],
];

/* Ready for later use (e.g. an overview table or the Approach section) */
export const overview = [
  ['Chemicals & APIs', 'Agrochemicals, pharmaceutical raw materials, industrial chemicals'],
  ['Frozen Foods', 'Seafood, meat & poultry, ready meals, appetizers, fries'],
  ['Edible Oils', 'Palm oil, sunflower oil, mustard oil'],
  ['Agri Commodities', 'Grains, pulses, spices, oil seeds, dried fruits & nuts'],
  ['Steel & Iron', 'Construction and industrial-grade materials'],
  ['Textiles', 'Apparel and home furnishing fabrics'],
];

export const whyUs = [
  'Expertise in third-port & re-export trading',
  'Multi-sector international trading capability',
  'Strong supplier and logistics networks',
  'Compliance-driven and quality-focused approach',
  'Long-term, partnership-oriented mindset',
];

export const company = {
  email: 'info@aspglobalfz.com',
  phone: '+971 55 5368440',
  phoneLink: 'tel:+971555368440',
  whatsapp: 'https://wa.me/971555368440',
  wechat: '+971555368440',   // <-- put your WeChat number/ID here
  addressLine1: 'Meydan Grandstand, 6th Floor, Meydan,',
  addressLine2: 'Nad Al Sheba First, Dubai, U.A.E.',
};
export const whatsappTeam = [
  {
    name: 'Mr. Ali',
    number: '971555368440',      // country code + number, no + or spaces
    avatar: '/ali.jpg',          // optional: put the photo in /public. If missing, initials show
    message: 'Hello ASP Global, I would like to enquire about your products.',
  },
  // { name: 'Mr. Second', number: '971500000000', avatar: '', message: 'Hello ASP Global...' },
];

export const chatBot = {
  title: 'ASP Global Assistant',
  subtitle: 'Please answer a few questions.',
  greeting: 'Welcome to ASP Global. I will collect a few details about your request.',
  done: 'Thank you! Your enquiry is ready. Choose how you would like to send it to our team.',
  steps: [
    {
      key: 'product',
      label: 'Product',
      q: 'Which product do you need? For example: Chemicals & APIs, Frozen foods, Edible oils, Steel & Iron, Textiles or Others.',
      placeholder: 'Product',
      options: ['Chemicals & Pharma', 'Food & Allied Products', 'Steel & Iron', 'Textiles', 'Others'],
    },
    { key: 'spec', label: 'Specification', q: 'Any specification or grade? (optional)', placeholder: 'Specification', optional: true },
    { key: 'quantity', label: 'Quantity', q: 'What quantity do you need?', placeholder: 'e.g. 25 MT' },
    { key: 'destination', label: 'Destination', q: 'What is the destination country or port?', placeholder: 'Destination' },
    { key: 'name', label: 'Name', q: 'May I have your name?', placeholder: 'Full name' },
    { key: 'email', label: 'Email', q: 'What is your business email?', placeholder: 'you@company.com', type: 'email' },
    { key: 'phone', label: 'Phone', q: 'Phone / WhatsApp number? (optional)', placeholder: 'Phone number', optional: true },
  ],
};

export const siteCredit = {
  name: 'Planning Labs',
  url: 'https://www.planninglabs.in', // <-- put the official Planning Labs website here
};

