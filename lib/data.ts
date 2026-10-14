// Content sourced from swapnadeep.com

import type { StaticImageData } from "next/image";
import feemonk from "@/public/work/feemonk.png";
import freelance from "@/public/work/freelance.jpg";
import hackstrap from "@/public/work/hackstrap.png";
import kodekarma from "@/public/work/kodekarma.png";
import segwise from "@/public/work/segwise.png";
import segwiseSde from "@/public/work/segwise-sde.png";

export const SITE_URL = "https://swapnadeep.com";
export const NAME = "Swapnadeep Mohapatra";
export const TITLE = `${NAME} — Software Engineer`;
export const DESCRIPTION =
  "Hi! I am Swapnadeep Mohapatra, a Software Engineer at Segwise.ai building AI-powered products across frontend, backend and data.";

export const EMAIL = "hello@swapnadeep.com";
export const RESUME_URL = "/Swapnadeep_Mohapatra_8763039380_Resume.pdf";
export const SUPPORT_URL = "https://payments.cashfree.com/forms/swapnadeep-donate";

export const bio =
  "I am a Software Engineer at Segwise.ai and a 2026 B.Tech CS graduate of KIIT University. I really love to build awesome stuff. Beyond building, I'm passionate about giving technical talks. Building scalable systems is my forte. When I'm not coding, you'll find me in a café, lost in a book, or I'm out travelling because I'm an excursionist at heart.";

export const stats = [
  { value: "2018", label: "First app shipped" },
  { value: "20K+", label: "Monthly users served" },
  { value: "10K+", label: "Play Store installs" },
  { value: "10+", label: "Apps published" },
];

export type Tone = "grape" | "blue" | "butter" | "peri" | "mint";

export const work: {
  id: string;
  company: string;
  role: string;
  time: string;
  tab: string;
  tone: Tone;
  desc: string;
  stack: string[];
  image: StaticImageData;
}[] = [
  {
    id: "segwise-sde",
    company: "Segwise.ai",
    role: "Software Development Engineer (SDE)",
    time: "July 2026 – Present",
    tab: "AI ad platform",
    tone: "grape",
    desc: "Building a platform that helps marketers generate winning ads, backed by their data.",
    stack: ["Go", "TypeScript", "React", "Python", "PostgreSQL", "ClickHouse", "Claude", "Codex", "Custom harness"],
    image: segwiseSde,
  },
  {
    id: "segwise",
    company: "Segwise.ai",
    role: "Software Engineering Intern",
    time: "April 2025 – July 2026",
    tab: "Ad analytics",
    tone: "blue",
    desc: "Built a co-pilot for ad creative analytics.",
    stack: ["React", "TypeScript", "Go"],
    image: segwise,
  },
  {
    id: "kodekarma",
    company: "KodeKarma",
    role: "Full Stack Developer",
    time: "Jan 2025 – April 2025",
    tab: "Coding platform",
    tone: "butter",
    desc: "Engineered a coding platform from the ground up, serving 20,000+ monthly active users. Integrated GraphQL to reduce network calls, optimizing performance and improving LCP, CLS, and other core web vitals for a seamless user experience.",
    stack: ["React", "Next.js", "TypeScript", "GraphQL"],
    image: kodekarma,
  },
  {
    id: "feemonk",
    company: "FeeMonk",
    role: "Software Engineering Intern",
    time: "June 2022 – Dec 2024",
    tab: "FinTech",
    tone: "butter",
    desc: "Built the frontend of a customer-facing web and mobile app for a FinTech product. Worked with critical data like PAN, Aadhaar and eMandate. Also built end-to-end internal tools for analytics and loan application approval.",
    stack: ["React", "React Native", "NestJS", "Redux", "Node.js", "MongoDB", "Sass", "TypeScript"],
    image: feemonk,
  },
  {
    id: "hackstrap",
    company: "Hackstrap",
    role: "MERN Stack Developer",
    time: "May 2020 – Nov 2020",
    tab: "SaaS",
    tone: "peri",
    desc: "Developed the backend and frontend for a Kanban-style list-making application, and the frontend of a SaaS product that helps startups accelerate their growth. Integrated a chatbot and the Razorpay payment gateway.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "Sass", "TypeScript"],
    image: hackstrap,
  },
  {
    id: "freelance",
    company: "Freelancing",
    role: "Freelance Android Developer",
    time: "Jan 2018 – Jan 2020",
    tab: "Android apps",
    tone: "mint",
    desc: "Made Android apps and served clients all across the country. Published more than 10 apps on the Google Play Store, with 10,000+ installs and 500+ active users.",
    stack: ["Java", "Android", "Vanilla JS", "Firebase", "IoT"],
    image: freelance,
  },
];

export const expertise: { area: string; tag: string; tone: Tone; note: string }[] = [
  {
    area: "AI & LLMs",
    tag: "Claude · Codex",
    tone: "grape",
    note: "Building AI-powered products with Claude, Codex and a custom agent harness, including a platform that helps marketers generate winning ads backed by their own data.",
  },
  {
    area: "Frontend",
    tag: "4+ years",
    tone: "blue",
    note: "Building scalable, high-performance web applications using React, Next.js, and React Native. Strong expertise in state management libraries like Redux, Zustand, and Recoil.",
  },
  {
    area: "Backend",
    tag: "Go · Node.js · Spring Boot",
    tone: "peri",
    note: "Building robust, scalable backend services using Go, Node.js (Express, Nest.js) and Java Spring Boot. Experienced in designing RESTful and GraphQL APIs for high-performance applications.",
  },
  {
    area: "GraphQL & APIs",
    tag: "Workshops",
    tone: "grape",
    note: "Extensive experience in GraphQL for both API development and client-side integration. Have conducted online workshops on GraphQL, showcasing deep understanding and best practices.",
  },
  {
    area: "DevOps & CI/CD",
    tag: "Ship it",
    tone: "butter",
    note: "Deploying and scaling applications using Docker, Kubernetes, Jenkins, GitHub Actions and other CI/CD tools. Experienced with Vercel, Netlify, Heroku, and traditional cloud-based deployment strategies.",
  },
  {
    area: "Cloud",
    tag: "AWS & more",
    tone: "mint",
    note: "Hands-on experience with AWS services (EC2, S3, RDS, Lambda, CloudFront) for building scalable cloud solutions. Familiar with Google Cloud and Azure as well.",
  },
  {
    area: "Testing & QA",
    tag: "Jest · Cypress",
    tone: "blue",
    note: "Strong background in writing unit, integration, and end-to-end tests using Jest, React Testing Library, and Cypress to ensure reliability and maintainability.",
  },
  {
    area: "Databases & Storage",
    tag: "OLTP · OLAP · NoSQL",
    tone: "peri",
    note: "Working with PostgreSQL, ClickHouse for analytics, MongoDB, MySQL and other NoSQL solutions. Also skilled in caching and real-time data handling using Redis, Kafka, and Elasticsearch.",
  },
  {
    area: "UI/UX & Design",
    tag: "Figma",
    tone: "butter",
    note: "Translating UI/UX designs into responsive, high-quality web applications. Using Figma, Adobe XD, and Sketch to create intuitive and user-friendly interfaces.",
  },
];

export const toolkit: { label: string; kind: string; items: string[] }[] = [
  { label: "Languages", kind: "lang", items: ["Go", "TypeScript", "JavaScript", "Python", "Java"] },
  { label: "Frontend", kind: "front", items: ["React", "Next.js", "React Native", "Redux", "Zustand"] },
  { label: "Backend", kind: "back", items: ["Node.js", "NestJS", "Spring Boot", "GraphQL"] },
  { label: "AI", kind: "ai", items: ["Claude", "Codex", "Custom harness"] },
  { label: "Data", kind: "db", items: ["PostgreSQL", "ClickHouse", "MongoDB", "Redis", "Kafka", "MySQL"] },
  { label: "Cloud & DevOps", kind: "collab", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions"] },
  { label: "Tools", kind: "tools", items: ["Git", "Figma", "Postman", "VS Code", "Jest"] },
];

export const handles = [
  { label: "Email", href: `mailto:${EMAIL}`, text: EMAIL },
  { label: "GitHub", href: "https://www.github.com/swapnadeepmohapatra", text: "github.com/swapnadeepmohapatra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/swapnadeepmohapatra/", text: "in/swapnadeepmohapatra" },
  { label: "X", href: "https://www.twitter.com/swapnadeeptukk", text: "@swapnadeeptukk" },
  { label: "Instagram", href: "https://www.instagram.com/swapnadeep_mohapatra", text: "@swapnadeep_mohapatra" },
  { label: "More", href: "https://links.swapnadeep.com", text: "links.swapnadeep.com" },
];
