export const links = {
  email: "vishal242392@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishal--chavan/",
  github: "https://github.com/VishalChavan7",
  x: "https://x.com/Vishalchavan_ai",
  resume: "/assets/Vishal-Chavan-Resume.pdf",
};

export const nav = [
  ["about", "#about"],
  ["experience", "#experience"],
  ["projects", "#projects"],
  ["skills", "#skills"],
  ["contact", "#contact"],
];

export const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Python",
  "Flask",
  "MongoDB",
  "Tailwind",
  "Redux",
  "Socket.io",
  "Figma",
];

export const experience = {
  role: "Frontend Developer & UI/UX Designer",
  company: "Delaplex Ltd.",
  period: "Jan 2025 – Jun 2025",
  place: "Nagpur, India",
  products: [
    {
      name: "Kaptize.ai",
      tagline: "AI knowledge platform",
      points: [
        "Shipped 40+ responsive screens (Figma → code) with dynamic, role-based components.",
        "Integrated Razorpay; implemented auth & RBAC; built HOCs for reuse.",
      ],
      stack:
        "React · JS · Tailwind · Material UI · Redux · Gemini API · Framer Motion",
    },
    {
      name: "Assist.ai",
      tagline: "AI learning assistant",
      points: [
        "Built Gemini-powered assistant + speech-to-text & TTS (≈98% accuracy).",
        "RBAC, conditional rendering, smooth animations with Framer Motion.",
      ],
      stack: "React · TypeScript · Tailwind · Redux · Web Speech APIs",
    },
  ],
};

export const offWork = [
  "System Head — Robotics & Aviation Club, RCOEM",
  "Chess: 1st at district level, 5th at state level",
  "Reading books & staying sharp over the board",
];

export const projects = [
  {
    name: "WanderLodge",
    tag: "Full-stack",
    url: "https://wander-lodge.onrender.com",
    desc: "Hotel booking platform with auth, listings, real-time booking, and Mapbox maps.",
    stack: "React · Node · Express · MongoDB · Passport · Cloudinary · Mapbox",
  },
  {
    name: "Checkmate",
    tag: "Realtime",
    url: "https://github.com/VishalChavan7/Checkmate",
    desc: "Online multiplayer chess with WebSockets, session recovery, and mobile-first UI.",
    stack: "Node · Express · Socket.io · Chess.js",
  },
  {
    name: "SpaceX Explorer",
    tag: "Frontend",
    url: "https://vishalchavan7.github.io/spacex-mission-explorer",
    desc: "A tiny, modern React app to browse SpaceX missions using the public v4 API.",
    stack: "React · Tailwind · API v4",
  },
  {
    name: "URL Shortener",
    tag: "Full-stack",
    url: "https://github.com/VishalChavan7/url_shortener",
    desc: "A Python Flask-based URL shortener that turns long URLs into short ones.",
    stack: "Python · Flask · SQLite · Jinja2",
  },
  {
    name: "Neatify",
    tag: "Automation",
    url: "https://github.com/VishalChavan7/Neatify",
    desc: "Automatically sorts downloaded files into subfolders based on their extensions.",
    stack: "Python · Watchdog",
  },
];

export const skills = [
  ["Frontend", "HTML, CSS, Tailwind, JavaScript, TypeScript, React, EJS"],
  ["Backend", "Python, Flask, Node.js, Express"],
  ["Databases", "MongoDB, MySQL, SQLite"],
  [
    "Tools",
    "Figma, Git/GitHub, Passport, Socket.io, Stripe, Multer, Cloudinary, Mapbox, Render",
  ],
  ["Foundations", "OOP, Networking, OS, DBMS, DSA (Java), Linux"],
  [
    "Certifications",
    "Cisco (Networking, OS), Google (Foundations of UX Design)",
  ],
];
