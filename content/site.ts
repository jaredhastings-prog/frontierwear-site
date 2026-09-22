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

export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "Navigator 520", href: "/navigator-520" },
      { label: "Navigator Z1", href: "/navigator-z1" },
      { label: "Arc 3", href: "/arc-3" },
      { label: "Collaborate Teams 2", href: "/collaborate-teams-2" },
      { label: "Compare Devices", href: "/compare" }
    ]
  },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "ROI Calculator", href: "/roi-calculator" }
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
      "The RealWear Navigator 520 is built for mainstream connected worker programs, giving frontline teams a sharp HyperDisplay, voice control, rugged construction, and a modular 50MP camera in a PPE-friendly wearable.",
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
      "50MP camera, 82° field of view (Sony LYT-600)",
      "Hot-swappable battery for shift use, 270g",
      "IP66 rated, MIL-STD-810H certified, dust-tight and water-resistant",
      "Voice recognition tested for noisy environments up to 100 dBA"
    ],
    kit: [
      "RealWear Navigator 520 device",
      "Workband 2",
      "Battery pack",
      "USB Type-A cable",
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
      "50MP camera plus integrated FLIR thermal sensor",
      "4K video capture for detailed inspection records",
      "Designed for all-day frontline use"
    ],
    specs: [
      "8 GB RAM and 128 GB internal storage",
      "Qualcomm Dragonwing QCS6490 chipset",
      "Wi-Fi 6 (802.11ax) and Bluetooth 5.1",
      "IP66 rated, MIL-STD-810H certified, 383g"
    ],
    kit: [
      "Navigator Z1 with 12-month service and support pack",
      "Tri-Band strap",
      "Protective case",
      "USB Type-A cable",
      "T8 screwdriver"
    ]
  },
  {
    slug: "arc-3",
    name: "RealWear Arc 3",
    shortName: "Arc 3",
    eyebrow: "Indoor industrial assisted reality",
    summary:
      "A lightweight, all-day headset for indoor teams in manufacturing, healthcare, and logistics who need hands-free access to experts and workflows without rugged outdoor hardware.",
    longSummary:
      "The RealWear Arc 3 brings assisted reality to indoor industrial and clinical environments, pairing a featherweight 179g headband with a Micro-OLED display, dual cameras, and the voice-first Ari OS for comfortable, all-day wear on the factory or hospital floor.",
    image: "/assets/arc-3-main.png",
    imageAlt: "RealWear Arc 3 lightweight assisted reality headset",
    href: "/arc-3",
    productPageTitle: "RealWear Arc 3 for indoor industrial and clinical teams",
    metaDescription:
      "Explore the RealWear Arc 3 with Frontier Wear. A lightweight assisted reality headset for manufacturing, healthcare, and logistics teams working indoors.",
    bestFor: [
      "Manufacturing and robotics floors",
      "Healthcare and clinical settings",
      "Warehousing and logistics",
      "Guided workflows for new starters",
      "Indoor remote expert support"
    ],
    benefits: [
      "Just 179g for comfortable all-day wear",
      "Micro-OLED see-through display with double retina resolution",
      "Ari voice assistant for fully hands-free control",
      "Compatible with prescription glasses and modular padding"
    ],
    specs: [
      "1920 x 1080 Micro-OLED monocular display, 22° field of view",
      "Qualcomm Snapdragon 662 with 4 GB RAM and 64 GB storage",
      "50MP main camera plus 8MP wide-angle lens with LED flashlight",
      "IP54 rated with 1-metre drop resistance"
    ],
    kit: [
      "RealWear Arc 3 headset",
      "Modular headband and padding",
      "USB-C cable",
      "Protective EVA case",
      "Quick start guide"
    ]
  }
] as const;

export type Product = (typeof products)[number];

// Sourced from RealWear's own "Technical Comparison: Arc 3 vs Navigator 520"
// sheet (520/Arc 3 columns) plus the specs already published on the
// Navigator Z1 product page (Z1 column).
export type ComparisonRow = {
  label: string;
  values: {
    "navigator-520": string;
    "navigator-z1": string;
    "arc-3": string;
  };
};

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Ideal environment",
    values: {
      "navigator-520": "Rugged, general industrial & outdoor sites",
      "navigator-z1": "Hazardous areas requiring intrinsic safety certification",
      "arc-3": "Indoor industrial & clinical environments"
    }
  },
  {
    label: "Display",
    values: {
      "navigator-520":
        "LCOS HD, 1280×720, 24° field of view — adjustable, usable on either eye",
      "navigator-z1":
        "LCOS HD, 1280×720, 24° field of view — same optics as Navigator 520",
      "arc-3": "Micro-OLED, 1920×1080, 22° field of view — see-through, right eye"
    }
  },
  {
    label: "Weight",
    values: {
      "navigator-520": "270g",
      "navigator-z1": "383g",
      "arc-3": "179g"
    }
  },
  {
    label: "Ruggedisation",
    values: {
      "navigator-520": "IP66, MIL-STD-810H, 2-metre drop rating",
      "navigator-z1": "IP66, ATEX Zone 1 & IECEx certified for hazardous areas",
      "arc-3": "IP54, 1-metre drop rating"
    }
  },
  {
    label: "Camera",
    values: {
      "navigator-520":
        "Adjustable 50MP camera, 82° FOV, up to 1080p@60fps; optional thermal accessory",
      "navigator-z1": "50MP main camera plus integrated FLIR thermal sensor, 4K video",
      "arc-3": "Fixed 50MP main + 8MP wide-angle dual-camera with LED flashlight"
    }
  },
  {
    label: "Battery",
    values: {
      "navigator-520": "2600mAh, hot-swappable for continuous shift use",
      "navigator-z1": "2560mAh, removable",
      "arc-3": "2000mAh, built-in (non-hot-swappable)"
    }
  },
  {
    label: "Worn with",
    values: {
      "navigator-520": "Helmets, safety glasses, masks, hearing protection",
      "navigator-z1": "Tri-Band strap designed for PPE and hazardous-area gear",
      "arc-3": "Prescription/safety glasses, hearing protection — not helmet-mounted"
    }
  },
  {
    label: "Connectivity",
    values: {
      "navigator-520": "Wi-Fi, Bluetooth 5.1, GPS/GNSS, optional cellular",
      "navigator-z1": "Wi-Fi 6 (802.11ax), Bluetooth 5.1",
      "arc-3": "Wi-Fi, Bluetooth 5.1"
    }
  },
  {
    label: "Best for",
    values: {
      "navigator-520": "Remote expert support, inspections, field maintenance",
      "navigator-z1": "Oil & gas, hazardous areas, thermal inspection",
      "arc-3": "Manufacturing, healthcare, warehousing & logistics"
    }
  }
];

export const useCases = [
  {
    title: "Remote expert support",
    image: {
      src: "/assets/remote-expert.png",
      alt: "Remote expert support shown through connected worker technology"
    },
    copy:
      "Connect technicians, engineers, and specialists to the worker's point of view without sending experts across sites."
  },
  {
    title: "Inspections and audits",
    image: {
      src: "/assets/collaborate-insitu-2.png",
      alt: "Industrial inspection and audit workflow imagery"
    },
    copy:
      "Capture visual evidence, follow workflows, and involve stakeholders while keeping both hands available."
  },
  {
    title: "Maintenance and repair",
    image: {
      src: "/assets/maintenance-repair.png",
      alt: "Maintenance and repair work supported by assisted reality"
    },
    copy:
      "Give field teams live guidance, manuals, schematics, and work instructions in the flow of the task."
  },
  {
    title: "Training and knowledge capture",
    image: {
      src: "/assets/training-knowledge.png",
      alt: "Training and knowledge capture for frontline teams"
    },
    copy:
      "Record expert methods, build repeatable content, and support new workers with practical field knowledge."
  },
  {
    title: "Connected worker programs",
    image: {
      src: "/assets/connected-worker.png",
      alt: "Connected worker program deployment in an industrial environment"
    },
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

export const customerLogos = [
  {
    name: "Islands Petroleum",
    src: "/assets/customer-logos/islands-petroleum-logo.png"
  },
  {
    name: "INPEX",
    src: "/assets/customer-logos/inpex-logo.png"
  },
  {
    name: "thyssenkrupp",
    src: "/assets/customer-logos/thyssenkrupp-logo.png"
  },
  {
    name: "TOMRA",
    src: "/assets/customer-logos/tomra-logo.png"
  },
  {
    name: "Continental",
    src: "/assets/customer-logos/continental-logo.png"
  },
  {
    name: "Hitachi",
    src: "/assets/customer-logos/hitachi-logo.png"
  },
  {
    name: "HIAB",
    src: "/assets/customer-logos/hiab-logo.png"
  },
  {
    name: "Fresh Country Farms",
    src: "/assets/customer-logos/fresh-country-farms-logo.png"
  },
  {
    name: "Cook Shire Council",
    src: "/assets/customer-logos/cook-shire-council-logo.png"
  },
  {
    name: "Australian Antarctic Program",
    src: "/assets/customer-logos/australian-antarctic-program-logo.png"
  },
  {
    name: "Canon",
    src: "/assets/customer-logos/canon-logo.png"
  },
  {
    name: "Enaex",
    src: "/assets/customer-logos/enaex-logo.png"
  },
  {
    name: "BGIS",
    src: "/assets/customer-logos/bgis-logo.png"
  },
  {
    name: "APA Group",
    src: "/assets/customer-logos/apa-group-logo.png"
  },
  {
    name: "Obadare Group",
    src: "/assets/customer-logos/obadare-group-logo.png"
  },
  {
    name: "Sandvik",
    src: "/assets/customer-logos/sandvik-logo.png"
  },
  {
    name: "DuluxGroup",
    src: "/assets/customer-logos/duluxgroup-logo.png"
  },
  {
    name: "Polaris Data Centre",
    src: "/assets/customer-logos/polaris-data-centre-logo.png"
  }
];

export const whyFrontier = [
  "ANZ RealWear Gold Partner",
  "Connected worker specialists",
  "Training and support",
  "Australia/New Zealand coverage"
];
