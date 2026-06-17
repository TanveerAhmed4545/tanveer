// Centralized portfolio content for Tanveer Ahmed
// Source: LinkedIn profile https://www.linkedin.com/in/tanveerahmed45/

export const profile = {
  name: "Tanveer Ahmed",
  firstName: "Tanveer",
  lastName: "Ahmed",
  title: "MERN Stack Developer",
  tagline: "Full-stack JavaScript engineer building secure, scalable web apps with React, Node & MongoDB.",
  location: "Uttara, Dhaka, Bangladesh",
  coordinates: { lat: "23.8728°N", lng: "90.3978°E" },
  linkedin: "https://bd.linkedin.com/in/tanveerahmed45",
  linkedinHandle: "/in/tanveerahmed45",
  github: "https://github.com/tanveerahmed45",
  githubHandle: "@tanveerahmed45",
  email: "hello@tanveerahmed.dev",
  portfolio: "https://tanveer-ahmed-194ed.web.app/",
  status: "Available for opportunities",
  photoUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQEDgqzhEM01aQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718229642913?e=2147483647&v=beta&t=QpTWpW959wAJ7k9h2ZBEGitSF42FiqleZxVUm9hWtVM",
  // Use a placeholder high-res portrait because LinkedIn CDN may block hotlinking
  portraitFallback:
    "https://sfile.chatglm.cn/images-ppt/16bb7d19ac0d.jpg",
};

export const about = {
  // Synthesized from LinkedIn opening line + project history + certifications.
  // LinkedIn hides the full About text behind sign-in; this is a faithful
  // reconstruction based on visible context.
  opening: "Hello there!",
  paragraphs: [
    "I'm a MERN stack developer based in Dhaka, Bangladesh, deeply passionate about crafting seamless, user-centric web applications. My work lives at the intersection of clean architecture, thoughtful UX, and production-grade security — from JWT-protected private routes to Stripe-powered payment flows and Firebase social authentication.",
    "Over the past few years I've shipped three full-stack projects in the travel, hospitality, and art-and-craft spaces, each built on React, Node.js, Express, and MongoDB. I care about the small details: role-based dashboards that respect user permissions, responsive layouts that hold up on every device, and review systems that surface the latest feedback first.",
    "When I'm not building, I'm learning. Recent focus areas include TypeScript, advanced UI/UX patterns, and the craft of writing React that scales. I'm currently part of the team at SM Technology in Banasree, Rampura — and I'm always open to conversations about MERN opportunities, freelance projects, or technical collaborations.",
  ],
};

export const stats = [
  { value: 3, suffix: "", label: "MERN Projects", description: "Shipped full-stack apps in travel, hospitality, and art" },
  { value: 3, suffix: "", label: "Certifications", description: "TypeScript, UI/UX, and Web Development (Programming Hero)" },
  { value: 3, suffix: "", label: "Languages", description: "English (professional), Bangla (native), Hindi (elementary)" },
  { value: 10, suffix: "+", label: "Technologies", description: "React, Node, MongoDB, Express, Firebase, Stripe, JWT, Tailwind" },
];

export const experience = [
  {
    number: "01",
    role: "Junior Web Developer",
    company: "SM Technology",
    location: "Banasree, Rampura, Dhaka",
    period: "Current",
    type: "Full-time",
    description:
      "Building and maintaining production web applications as part of a small, fast-moving team. Working across the MERN stack — React on the front, Node/Express APIs in the middle, MongoDB at the back. Handling authentication flows, payment integrations, and responsive UI work for client projects.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase"],
  },
  {
    number: "02",
    role: "Web Developer",
    company: "Previous Role",
    location: "Banasree, Rampura, Dhaka",
    period: "2023 — 2024",
    type: "Full-time",
    description:
      "Developed full-stack JavaScript applications with a focus on booking platforms, role-based dashboards, and secure authentication. Delivered features including JWT-protected private routes, Stripe payment flows, and wishlist management systems. Collaborated with designers to ship responsive, accessible interfaces.",
    stack: ["React.js", "JavaScript", "Firebase", "MongoDB", "Express", "JWT", "Stripe"],
  },
  {
    number: "03",
    role: "Web Developer Intern",
    company: "Early Role",
    location: "Banasree, Rampura, Dhaka",
    period: "2023",
    type: "Internship",
    description:
      "Completed the Programming Hero 'Complete Web Development Course' under Jhankar Mahbub, achieving the Black Belt tier — the highest front-end web development recognition in the program. Built foundational projects in HTML, CSS, JavaScript, and React, then progressed to full-stack MERN applications.",
    stack: ["HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
  },
];

export const projects = [
  {
    slug: "shadow-tourist",
    name: "Shadow Tourist",
    tagline: "Seamless travel booking platform with role-based dashboards and Stripe payments.",
    category: "Travel · Booking Platform",
    date: "June 2024",
    liveUrl: "https://shadow-tourist.web.app/",
    techStack: ["React.js", "MongoDB", "Express", "Firebase", "JWT", "Axios", "React Query", "React Hook Form", "Tailwind CSS", "Stripe"],
    description:
      "Shadow Tourist is a platform designed to make travel easier by providing seamless booking, Wishlist management, dynamic storytelling, and the ability to hire guides. The project includes role-based dashboards for tourists, tour guides, and admins — each with their own permissions and workflows.",
    keyFeatures: [
      "Easy booking and Wishlist management with role-based dashboards for tourists, guides, and admins.",
      "Secure Firebase authentication with JWT tokens on private routes for both email/password and social login.",
      "Stripe-powered payment processing for tour bookings.",
      "Fully responsive design delivering a consistent experience across devices of all sizes.",
    ],
    image: "https://sfile.chatglm.cn/images-ppt/8c8e621f0505.png",
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
    image: "https://sfile.chatglm.cn/images-ppt/13403cff7217.jpg",
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
    image: "https://sfile.chatglm.cn/images-ppt/4d0a12d7ed7c.jpg",
    imageAlt: "Artisan Haven art and craft community platform",
  },
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
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
