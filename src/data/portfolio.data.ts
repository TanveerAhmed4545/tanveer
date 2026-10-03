// Centralized portfolio content for Tanveer Ahmed
// Source: LinkedIn profile https://www.linkedin.com/in/tanveerahmed45/

export const profile = {
  name: "Tanveer Ahmed",
  firstName: "Tanveer",
  lastName: "Ahmed",
  title: "Senior Web Developer",
  tagline: "Experienced in Shopify, Squarespace, and Wix, and also custom coding. Full-stack JavaScript engineer building secure, scalable web apps with React, Node & MongoDB.",
  location: "Uttara, Dhaka, Bangladesh",
  coordinates: { lat: "23.8728°N", lng: "90.3978°E" },
  linkedin: "https://bd.linkedin.com/in/tanveerahmed45",
  linkedinHandle: "/in/tanveerahmed45",
  github: "https://github.com/tanveerahmed4545",
  githubHandle: "@tanveerahmed4545",
  email: "tanveer8507@gmail.com",
  portfolio: "",
  status: "Available for opportunities",
  photoUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQEDgqzhEM01aQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718229642913?e=2147483647&v=beta&t=QpTWpW959wAJ7k9h2ZBEGitSF42FiqleZxVUm9hWtVM",
  // Use a placeholder high-res portrait because LinkedIn CDN may block hotlinking
  portraitFallback:
    "https://sfile.chatglm.cn/images-ppt/16bb7d19ac0d.jpg",
};

export const about = {
  opening: "Hello there!",
  paragraphs: [
    "I'm a Senior Web Developer based in Dhaka, Bangladesh, with a proven track record of delivering over 220+ production web applications and client platforms. My expertise spans custom full-stack applications as well as high-converting CMS platforms including Shopify, Squarespace, and Wix.",
    "Over my career, I have engineered and launched 150+ Shopify stores, 50+ Squarespace websites, 15+ custom full-stack applications (React, Node, MongoDB), and 5+ Wix portals. I specialize in clean architecture, responsive UI/UX design, and production-grade security — from JWT-protected private routes to custom Stripe payment integrations.",
    "Currently serving as Team Lead at SM Technology, I oversee web development initiatives, mentor developers, and drive project delivery. Whether it's building a custom web application from scratch or tailoring a Shopify theme for maximum conversions, I bring a commitment to quality and modern design to every project.",
  ],
};

export const stats = [
  { value: 150, suffix: "+", label: "Shopify Stores", description: "Custom themes, high-converting storefronts, and 3rd party integrations" },
  { value: 50, suffix: "+", label: "Squarespace Sites", description: "Tailored business platforms, UI/UX enhancements, and client delivery" },
  { value: 15, suffix: "+", label: "Custom Websites", description: "Full-stack React, Node.js, Express, and MongoDB web applications" },
  { value: 5, suffix: "+", label: "Wix Websites", description: "Dynamic client portals and rapid business storefront launches" },
];

export const experience = [
  {
    number: "01",
    role: "Team Lead",
    company: "SM Technology",
    location: "Banasree, Rampura Dhaka · On-site",
    period: "Apr 2026 — Present · 4 mos",
    type: "Full-time",
    description:
      "Promoted to Team Lead to oversee front-end and web development initiatives. Mentoring junior developers, reviewing code quality, and driving project delivery across 50+ Squarespace platforms and custom client web applications.",
    stack: ["Squarespace", "Team Leadership", "Project Management", "React.js", "UI/UX"],
  },
  {
    number: "02",
    role: "Web Developer",
    company: "SM Technology",
    location: "Banasree, Rampura Dhaka · On-site",
    period: "Sep 2024 — Present · 1 yr 11 mos",
    type: "Full-time",
    description:
      "Architecting and building dynamic client websites and production applications. Successfully delivered 5+ Wix websites, custom WordPress layouts, and responsive front-end interfaces, ensuring cross-browser compatibility and optimal user experience.",
    stack: ["Front-End Development", "Wix Website Builder", "WordPress", "React.js", "Tailwind CSS"],
  },
  {
    number: "03",
    role: "Frontend Developer",
    company: "SM Technology",
    location: "Banasree, Rampura Dhaka · On-site",
    period: "Sep 2024 — Jun 2026 · 1 yr 10 mos",
    type: "Full-time",
    description:
      "Engineered and launched 150+ custom Shopify stores and e-commerce solutions for diverse global clients. Implemented high-converting responsive storefronts, third-party app integrations, and custom theme modifications to drive revenue and growth.",
    stack: ["Shopify", "JavaScript", "HTML5/CSS3", "E-commerce", "Custom Theme Development"],
  },
];

export const projects = [
  {
    slug: "eric-mobile-notary",
    name: "Eric Notary",
    tagline: "Mobile Notary, Apostille & Estate Planning services in Fort Worth, TX.",
    category: "Squarespace · Legal Services",
    date: "2025",
    liveUrl: "https://www.ericthemobilenotary.com/",
    techStack: ["Squarespace", "Custom CSS", "Acuity Scheduling", "JavaScript"],
    description: "A professional and accessible website for a mobile notary service. Built on Squarespace, the site features clear calls-to-action for booking appointments, detailed service breakdowns for apostille and estate planning, and a clean, trustworthy design tailored to the Fort Worth market.",
    keyFeatures: [
      "Custom Squarespace design optimized for local SEO.",
      "Integrated booking and scheduling via Acuity.",
      "Mobile-first responsive design for on-the-go clients.",
      "Clear service tiers and pricing structures."
    ],
    image: "/projects/eric-mobile-notary.webp",
    imageAlt: "Eric the Mobile Notary Homepage"
  },
  {
    slug: "palm-st-pilates",
    name: "Palm St Pilates",
    tagline: "Reformer, Mat & Barre Pilates studio based in Frome & Bruton.",
    category: "Squarespace · Fitness Studio",
    date: "2025",
    liveUrl: "https://www.palmstpilates.co.uk/",
    techStack: ["Squarespace", "Momence Integration", "Custom CSS", "HTML5"],
    description: "A serene and inviting digital storefront for Palm St Pilates. The Squarespace site embodies the studio's calming aesthetic while providing seamless integration with Momence for class bookings, memberships, and schedule management.",
    keyFeatures: [
      "Calm, aesthetic-driven design reflecting the Pilates brand.",
      "Seamless Momence booking integration for class schedules.",
      "Location-specific pages for Frome and Bruton studios.",
      "Optimized performance and mobile-friendly layout."
    ],
    image: "/projects/palm-st-pilates.png",
    imageAlt: "Palm St Pilates Homepage"
  },
  {
    slug: "opp-law",
    name: "Opp Law",
    tagline: "Professional legal counsel and attorney services.",
    category: "Squarespace · Law Firm",
    date: "2025",
    liveUrl: "https://opp-law.com/",
    techStack: ["Squarespace", "Custom CSS", "JavaScript", "HTML5"],
    description: "A highly professional and authoritative web presence for Opp Law. This Squarespace build focuses on establishing trust, outlining practice areas clearly, and providing an easy path for potential clients to request consultations.",
    keyFeatures: [
      "Authoritative, clean design tailored for the legal industry.",
      "Clear practice area overviews and attorney profiles.",
      "Secure contact forms for consultation requests.",
      "Accessible and responsive UI."
    ],
    image: "/projects/opp-law.jpg",
    imageAlt: "Opp Law Homepage"
  },
  {
    slug: "nxtgen-pt-co",
    name: "NXTGEN PT Co",
    tagline: "Enhance Movement Today — Professional Physical Therapy.",
    category: "Squarespace · Physical Therapy",
    date: "2025",
    liveUrl: "https://www.nxtgenptco.com/",
    techStack: ["Squarespace", "Custom CSS", "Booking Integration", "JavaScript"],
    description: "A dynamic and modern website for NXTGEN Physical Therapy. Designed to encourage movement and recovery, the site features patient resources, service details, and an intuitive booking system for new and returning patients.",
    keyFeatures: [
      "Dynamic, health-focused design with strong imagery.",
      "Patient intake and scheduling integration.",
      "Comprehensive service and treatment explanations.",
      "Fast-loading, mobile-optimized experience."
    ],
    image: "/projects/nxtgen-pt.jpg",
    imageAlt: "NXTGEN PT Co Homepage"
  },
  {
    slug: "oluwa7",
    name: "Oluwa7",
    tagline: "Capture Genuine Moments — Professional photography portfolio.",
    category: "Squarespace · Photography",
    date: "2025",
    liveUrl: "https://www.oluwa7.com/",
    techStack: ["Squarespace", "Portfolio Engine", "Custom CSS", "JavaScript"],
    description: "A visually stunning, image-first portfolio for Oluwa7 Photography. Built on Squarespace, this site puts the photography front and center with immersive galleries, smooth scrolling, and easy client booking capabilities.",
    keyFeatures: [
      "Immersive, high-resolution photo galleries.",
      "Minimalist UI to let the photography stand out.",
      "Integrated contact and booking forms for photo sessions.",
      "Optimized image loading for fast performance."
    ],
    image: "/projects/oluwa7.jpg",
    imageAlt: "Oluwa7 Photography Homepage"
  },
  {
    slug: "emma-davis-books",
    name: "Emma Davis",
    tagline: "Premium Shopify bookstore for author Emma Davis — featuring curated collections, new releases, and a warm editorial design.",
    category: "Shopify · Book Store",
    date: "2025",
    liveUrl: "https://emmadavisbooks.com/",
    techStack: ["Shopify", "Liquid", "Custom Theme", "Loox Reviews", "Bold Upsell", "JavaScript", "CSS3"],
    description:
      "Emma Davis Books is a custom Shopify storefront for author Emma Davis, designed to showcase and sell her novels with a warm, editorial aesthetic. Built on the Impulse theme with extensive custom modifications, the store features curated book collections, new releases, and a blog for author updates.",
    keyFeatures: [
      "Custom Shopify theme based on Impulse with warm coral (#f3703b) accent color and Aleo serif typography.",
      "Integrated Loox product reviews and Bold Upsell for increased conversions.",
      "Swiper-powered product carousels and responsive book showcasing.",
      "Optimized for US market with Stripe and Shop Pay checkout integrations.",
    ],
    image: "/projects/emma-davis-books.png",
    imageAlt: "Emma Davis Books Shopify store homepage",
  },
  {
    slug: "glowhaus",
    name: "GlowHaus",
    tagline: "Netherlands-based premium Shopify beauty store — curated skincare, self-care, and all things glow.",
    category: "Shopify · Beauty & Skincare",
    date: "2025",
    liveUrl: "https://shopglowhaus.com/",
    techStack: ["Shopify", "Liquid", "Reformation Theme", "Rebuy", "Free Gift Upsell", "JavaScript", "CSS3"],
    description:
      "GlowHaus is a premium Shopify beauty and skincare store based in the Netherlands, built on the Reformation theme with a soft, feminine pink-toned aesthetic. The store features curated beauty products, skincare essentials, and self-care collections with intelligent upselling and gift promotions.",
    keyFeatures: [
      "Custom Reformation theme with feminine pink (#fff8fb) aesthetic and Archivo Narrow typography.",
      "Rebuy integration for smart product recommendations and upsells.",
      "Free Gift auto-add functionality with EasyGift app for promotional campaigns.",
      "Server-side tracking with Taggrs.io and Shopify Inbox live chat for customer support.",
    ],
    image: "/projects/glowhaus.webp",
    imageAlt: "GlowHaus Shopify beauty store homepage",
  },
  {
    slug: "oomi",
    name: "Oomi",
    tagline: "Modern DTC Shopify brand with a warm, playful design — bold product presentation and intelligent pricing.",
    category: "Shopify · DTC Brand",
    date: "2025",
    liveUrl: "https://tryoomi.com/",
    techStack: ["Shopify", "Liquid", "Surge Theme", "Intelligems A/B", "Gorgias", "PageFly", "JavaScript", "CSS3"],
    description:
      "Oomi is a modern direct-to-consumer Shopify store built on a premium Surge theme with a warm cream aesthetic and vibrant orange accents. The store leverages advanced A/B testing, smart customer support, and custom page building for an optimized conversion funnel.",
    keyFeatures: [
      "Premium Surge theme with warm cream (#fffbf1) background and vibrant orange (#fc4f00) accents.",
      "Intelligems A/B testing for price optimization and conversion rate improvement.",
      "Gorgias live chat and helpdesk integration for premium customer support.",
      "PageFly AI page builder for custom landing pages and CRO experiments.",
    ],
    image: "/projects/oomi.jpg",
    imageAlt: "Oomi Shopify DTC brand store homepage",
  },
  {
    slug: "the-it-list",
    name: "The IT List",
    tagline: "Amsterdam-based luxury jewelry Shopify store — iconic pieces, built to stack. Featuring the Leontine collection.",
    category: "Shopify · Luxury Jewelry",
    date: "2025",
    liveUrl: "https://theitlist.nl/en",
    techStack: ["Shopify", "Liquid", "Custom Theme", "Multi-language (EN/NL)", "Google Tag Manager", "JavaScript", "CSS3"],
    description:
      "The IT List is an Amsterdam-based luxury jewelry Shopify store featuring handcrafted 14K rose & yellow gold pieces built for stacking. The store showcases the signature Leontine collection with an elegant, minimalist design and multilingual support for the Dutch and international markets.",
    keyFeatures: [
      "Elegant minimalist design with warm brown (#3d2a23) and rose-gold accents reflecting luxury brand identity.",
      "Multi-language storefront supporting English and Dutch with localized currency (EUR).",
      "Advanced color scheme system with 15+ custom color schemes for rich visual storytelling.",
      "Google Tag Manager integration and Pandectes GDPR compliance for EU market operations.",
    ],
    image: "/projects/the-it-list.png",
    imageAlt: "The IT List Amsterdam luxury jewelry store homepage",
  },
  {
    slug: "team-shogun",
    name: "Team Shogun",
    tagline: "Ultra-premium agency command center & operations hub with interactive 3D and GSAP animations.",
    category: "Full-Stack · Agency Platform",
    date: "2025",
    liveUrl: "https://team-shogun.vercel.app/",
    githubUrl: "https://github.com/TanveerAhmed4545/team-shogun",
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Framer Motion"],
    description:
      "Team Shogun is an agency operations and digital solutions platform engineered to an ultra-premium visual and technical standard. It features high-performance 3D canvas visuals, GSAP scroll-triggered physics, multi-specialisation service architecture, and an integrated client command center dashboard.",
    keyFeatures: [
      "Interactive 3D canvas and GSAP-driven scroll animations with high-frame-rate parallax physics.",
      "Agency command center dashboard with project pipeline tracking and metrics overview.",
      "Multi-platform service architecture spanning Shopify, Squarespace, Wix/Velo, and full-stack React/Node.js.",
      "High-converting dark aesthetic design system with precision neon emerald styling and responsive fluid layouts.",
    ],
    image: "/projects/team-shogun.png",
    imageAlt: "Team Shogun agency command center and digital solutions platform",
  },
  {
    slug: "shadow-tourist",
    name: "Shadow Tourist",
    tagline: "Seamless travel booking platform with role-based dashboards and Stripe payments.",
    category: "Travel · Booking Platform",
    date: "June 2024",
    liveUrl: "https://react-shadow-tourist-client.vercel.app/",
    githubUrl: "https://github.com/TanveerAhmed4545/shadow-touriest-client-modify",
    techStack: ["React.js", "MongoDB", "Express", "Firebase", "JWT", "Axios", "React Query", "React Hook Form", "Tailwind CSS", "Stripe"],
    description:
      "Shadow Tourist is a platform designed to make travel easier by providing seamless booking, Wishlist management, dynamic storytelling, and the ability to hire guides. The project includes role-based dashboards for tourists, tour guides, and admins — each with their own permissions and workflows.",
    keyFeatures: [
      "Easy booking and Wishlist management with role-based dashboards for tourists, guides, and admins.",
      "Secure Firebase authentication with JWT tokens on private routes for both email/password and social login.",
      "Stripe-powered payment processing for tour bookings.",
      "Fully responsive design delivering a consistent experience across devices of all sizes.",
    ],
    image: "/projects/shadow-tourist.png",
    imageAlt: "Shadow Tourist travel booking platform interface",
  },
  {
    slug: "haven-hearth",
    name: "Haven Hearth",
    tagline: "Hotel booking platform with room categories, reviews, and special offers.",
    category: "Hospitality · Hotel Booking",
    date: "May 2024",
    liveUrl: "https://react-haven-hearth.web.app/",
    techStack: ["JavaScript", "React", "Tailwind CSS", "Firebase", "MongoDB", "Express", "Node.js", "JWT"],
    description:
      "Haven Hearth is a hotel booking platform designed to provide a seamless and intuitive experience for travelers. Registered users can book rooms, update their bookings, and cancel reservations with full control over their travel plans. The platform surfaces authentic user reviews sorted by recency to build trust.",
    keyFeatures: [
      "Manage bookings — book rooms, update reservations, and cancel with ease.",
      "Firebase authentication with JWT-protected private routes for secure access.",
      "Room subcategories with price and availability filtering.",
      "User reviews sorted in descending order by timestamp to surface the latest feedback.",
      "Special offers and promotions displayed in modals to catch user attention.",
    ],
    image: "/projects/haven-hearth.png",
    imageAlt: "Haven Hearth hotel booking platform interface",
  },
  {
    slug: "artisan-haven",
    name: "Artisan Haven",
    tagline: "Online platform for art and craft, centered around Painting & Drawing.",
    category: "Art & Craft · Community Platform",
    date: "April 2024",
    liveUrl: "https://react-artisan-haven-client.web.app/",
    techStack: ["React", "Tailwind CSS", "Firebase", "MongoDB", "JavaScript"],
    description:
      "Artisan Haven is an online platform dedicated to celebrating the intricate world of art and craft, primarily centred around the 'Painting and Drawing' category. Registered users can add, update, and delete their own art pieces, giving them full control over their gallery while sharing creativity with the community.",
    keyFeatures: [
      "Manage art pieces — registered users can add, update, and delete their own work.",
      "Firebase authentication with social login options.",
      "Art & Craft subcategories within Painting and Drawing for easy exploration.",
      "Dark/Light theme toggle for a customizable browsing experience.",
      "MongoDB-backed storage for user accounts, craft items, and metadata.",
    ],
    image: "/projects/artisan-haven.png",
    imageAlt: "Artisan Haven art and craft community platform",
  },
  {
    slug: "ta-cash",
    name: "Ta-Cash",
    tagline: "Premium Mobile Financial Service (MFS) Platform with fraud detection and PDF receipts.",
    category: "Fintech · MFS Platform",
    date: "2026",
    liveUrl: "https://ta-cash-sigma.vercel.app",
    githubUrl: "https://github.com/TanveerAhmed4545/ta-Cash-Client",
    techStack: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    description:
      "Ta-Cash is a high-performance, secure Mobile Financial Service (MFS) application featuring a premium Fintech Design System. It comes with integrated fraud detection, official PDF receipt generation, and real-time dashboard analytics.",
    keyFeatures: [
      "Instant transfers: Send Money, Cash-In, and Cash-Out with secure PIN verification.",
      "Official PDF Receipt Engine with one-click downloads and authorized documentation.",
      "Integrated Fraud Detection to monitor velocity and lock high-volume transactions.",
      "Premium Fintech Design System with glassmorphism UI and dark/light modes.",
    ],
    image: "/projects/ta-cash.png",
    imageAlt: "Ta-Cash MFS platform",
  },
];

export const services = [
  {
    number: "01",
    title: "Shopify Development",
    description: "Custom Shopify themes built from scratch with Liquid, high-converting storefronts, and headless e-commerce solutions.",
    icon: "ShoppingCart",
    tags: [
      { label: "LIQUID", icon: "Code2" },
      { label: "THEME DEV", icon: "LayoutTemplate" },
      { label: "HEADLESS", icon: "Server" },
      { label: "E-COMMERCE", icon: "ShoppingCart" }
    ]
  },
  {
    number: "02",
    title: "Squarespace Design",
    description: "Bespoke Squarespace websites enhanced with custom CSS, tailored layouts, and fluid responsive design.",
    icon: "Layout",
    tags: [
      { label: "SQUARESPACE", icon: "Layout" },
      { label: "CUSTOM CSS", icon: "Palette" },
      { label: "RESPONSIVE", icon: "MonitorSmartphone" },
      { label: "BUSINESS SITES", icon: "Rocket" }
    ]
  },
  {
    number: "03",
    title: "Custom Web Apps",
    description: "Scalable full-stack applications and internal tools built on the robust MERN stack (MongoDB, Express, React, Node).",
    icon: "CodeXml",
    tags: [
      { label: "REACT.JS", icon: "Code2" },
      { label: "NODE.JS", icon: "Cpu" },
      { label: "MONGODB", icon: "Database" },
      { label: "REST APIS", icon: "Cloud" }
    ]
  },
  {
    number: "04",
    title: "Frontend Animation",
    description: "Award-winning interactive experiences and buttery-smooth animations powered by GSAP and modern CSS.",
    icon: "Sparkles",
    tags: [
      { label: "GSAP", icon: "Sparkles" },
      { label: "FRAMER", icon: "Layers" },
      { label: "TAILWIND", icon: "Palette" },
      { label: "INTERACTIONS", icon: "Search" }
    ]
  }
];

export const skills = {
  frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "React Query", "React Hook Form", "Axios", "Responsive Design"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MongoDB", "Mongoose"],
  tools: ["Firebase", "Stripe", "Git", "Vercel", "Firebase Hosting", "Postman", "Figma"],
  practices: ["MERN Stack", "Role-based Dashboards", "Private Routes", "Social Login", "Dark/Light Themes", "Reviews & Ratings", "Pagination & Filtering"],
};

// Brace-wrapped marquee tags — KVS style
export const skillMarquee = [
  "{REACT.JS}",
  "{MONGODB}",
  "{EXPRESS}",
  "{NODE.JS}",
  "{TAILWIND CSS}",
  "{FIREBASE}",
  "{STRIPE}",
  "{JWT}",
  "{TYPESCRIPT}",
  "{REACT QUERY}",
  "{REACT HOOK FORM}",
  "{AXIOS}",
  "{REST APIs}",
  "{MERN STACK}",
  "{RESPONSIVE DESIGN}",
  "{ROLE-BASED DASHBOARDS}",
];

export const certifications = [
  {
    title: "Complete Web Development Course With Jhankar Mahbub",
    issuer: "Programming Hero",
    date: "December 2023",
    credentialId: "WEB9-1402",
    credentialUrl: "https://drive.google.com/file/d/1YiKkUrgu9INcj2Ju8qCjPhXW9Fa2uMp1/view?usp=sharing",
    highlight: "Black Belt tier — the highest achievement for Front-end Web Development",
    description:
      "Comprehensive full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Firebase authentication, and Stripe payments. Achieved the Black Belt tier — the program's highest front-end recognition.",
  },
  {
    title: "Introduction to TypeScript",
    issuer: "Great Learning",
    date: "June 2024",
    credentialId: "—",
    credentialUrl: "#",
    highlight: "Type-safe JavaScript",
    description:
      "Foundational course on TypeScript covering type annotations, interfaces, generics, and integration with modern JavaScript toolchains. Built confidence in writing type-safe code for production React applications.",
  },
  {
    title: "UI / UX for Beginners",
    issuer: "Great Learning",
    date: "June 2024",
    credentialId: "—",
    credentialUrl: "#",
    highlight: "User-centered design fundamentals",
    description:
      "Introduction to user interface and user experience design principles, covering wireframing, prototyping, color theory, typography, and the design-to-development handoff workflow.",
  },
];

export const education = [
  {
    institution: "Govt. Titumir College, University of Dhaka",
    period: "December 2020 — June 2022",
    location: "Dhaka, Bangladesh",
    description: "Higher education under the University of Dhaka.",
  },
];

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Bangla", level: "Native or bilingual proficiency" },
  { name: "Hindi", level: "Elementary proficiency" },
];

export const article = {
  title: "Why Should We Use React for the Front-End?",
  publishedDate: "May 18, 2024",
  url: "https://www.linkedin.com/pulse/why-should-we-use-react-front-end-tanveer-ahmed-9lhec",
  coverImage:
    "https://media.licdn.com/dms/image/v2/D5612AQH5yCFtk0KycA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1716056043722?e=2147483647&v=beta&t=Q4QL9H71fPB5vS7QQjfWButZlb3cZ3aT9K0ho80AqVY",
  coverFallback: "https://sfile.chatglm.cn/images-ppt/061dde0d02ff.jpg",
  preview:
    "When it comes to building websites and applications, the tools you choose can greatly impact how successful the final product becomes. In this article I break down why React has become the dominant choice for front-end development — and when you might want to reach for it.",
  engagement: { reactions: 4, comments: 1 },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
