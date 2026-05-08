export const site = {
  name: "Frontier Wear",
  url: "https://frontierwear.com.au",
  phone: "1300 184 674",
  phoneHref: "tel:1300184674",
  email: "sales@frontierwear.com.au",
  emailHref: "mailto:sales@frontierwear.com.au",
  coverage: "Australia and New Zealand",
  social: {
    facebook: "https://www.facebook.com/Frontiertwmba",
    instagram: "https://www.instagram.com/frontier_five/",
    youtube: "https://youtube.com/@frontierwear4271"
  }
};

export const navItems = [
  { label: "Products", href: "/#products" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Navigator 520", href: "/navigator-520" },
  { label: "Navigator Z1", href: "/navigator-z1" }
];

export const products = [
  {
    slug: "navigator-520",
    name: "RealWear Navigator 520",
    shortName: "Navigator 520",
    eyebrow: "Rugged assisted reality",
    summary:
      "A practical assisted reality headset for field teams that need hands-free access to experts, documents, inspections, and visual workflows.",
    longSummary:
      "The RealWear Navigator 520 is built for mainstream connected worker programs, giving frontline teams a sharp HyperDisplay, voice control, rugged construction, and a modular 48MP camera in a PPE-friendly wearable.",
    image: "/assets/navigator520-main.png",
    imageAlt: "RealWear Navigator 520 assisted reality headset",
    href: "/navigator-520",
    productPageTitle: "RealWear Navigator 520 for industrial connected worker programs",
    metaDescription:
      "Explore the RealWear Navigator 520 with Frontier Wear. Hands-free assisted reality for remote support, inspections, audits, maintenance, and field knowledge capture.",
    bestFor: [
      "Remote expert support",
      "Industrial inspections",
      "Field maintenance",
      "Document navigation",
      "Training capture"
    ],
    benefits: [
      "20% larger HyperDisplay than earlier models",
      "720p HD display for sharper text and schematics",
      "World-class voice performance in noisy sites",
      "PPE-friendly fit for industrial environments"
    ],
    specs: [
      "48MP modular camera sensor",
      "Hot-swappable battery for shift use",
      "Dust-tight and water-resistant rugged design",
      "Voice recognition tested for noisy environments up to 100 dBA"
    ],
    kit: [
      "RealWear Navigator 520 device",
      "Workband 2",
      "Battery pack",
      "USB-C cable",
      "Quick start guide"
    ]
  },
  {
    slug: "navigator-z1",
    name: "RealWear Navigator Z1",
    shortName: "Navigator Z1",
    eyebrow: "Intrinsically safe wearable",
    summary:
      "The hazardous-area Navigator for restricted zones where teams still need hands-free communication, documentation, and visual assistance.",
    longSummary:
      "The RealWear Navigator Z1 brings the Navigator platform into restricted and hazardous environments, pairing intrinsically safe certification with a high-performance chipset, HyperDisplay, rugged casing, and included thermal camera capability.",
    image: "/assets/navigator-z1-main.png",
    imageAlt: "RealWear Navigator Z1 intrinsically safe assisted reality headset",
    href: "/navigator-z1",
    productPageTitle: "RealWear Navigator Z1 for hazardous industrial environments",
    metaDescription:
      "Explore the RealWear Navigator Z1 with Frontier Wear. Intrinsically safe hands-free wearable technology for hazardous areas, remote expert support, and field workflows.",
    bestFor: [
      "Oil and gas sites",
      "Hazardous areas",
      "Restricted zones",
      "Thermal inspection workflows",
      "High-risk maintenance"
    ],
    benefits: [
      "Certified for ATEX Zone 1 and IECEx environments",
      "Included thermal camera in the Essential Kit",
      "Hyper HD display with larger viewing area",
      "Designed for all-day frontline use"
    ],
    specs: [
      "8 GB RAM and 128 GB internal storage",
      "Qualcomm QCS6490 chipset",
      "Wi-Fi 6 and 5G ready",
      "IP66 rated at 383g"
    ],
    kit: [
      "Navigator Z1 with 12-month service and support pack",
      "Tri-Band strap",
      "Thermal camera",
      "Protective case",
      "i-Safe charging box",
      "T8 screwdriver"
    ]
  }
] as const;

export type Product = (typeof products)[number];

export const useCases = [
  {
    title: "Remote expert support",
    copy:
      "Connect technicians, engineers, and specialists to the worker's point of view without sending experts across sites."
  },
  {
    title: "Inspections and audits",
    copy:
      "Capture visual evidence, follow workflows, and involve stakeholders while keeping both hands available."
  },
  {
    title: "Maintenance and repair",
    copy:
      "Give field teams live guidance, manuals, schematics, and work instructions in the flow of the task."
  },
  {
    title: "Training and knowledge capture",
    copy:
      "Record expert methods, build repeatable content, and support new workers with practical field knowledge."
  },
  {
    title: "Connected worker programs",
    copy:
      "Extend collaboration platforms to frontline teams with hardware, deployment planning, training, and support."
  }
];

export const benefitStrip = [
  "Reduce travel",
  "Improve safety",
  "Speed up expert support",
  "Capture field knowledge",
  "Support hands-free workflows"
];

export const whyFrontier = [
  "ANZ RealWear Gold Partner",
  "Connected worker specialists",
  "Training and support",
  "Australia/New Zealand coverage"
];
