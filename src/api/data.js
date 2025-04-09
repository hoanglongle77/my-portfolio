import {
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";

export const myTechStack = [
  { icon: <FaHtml5 />, label: "HTML5", color: "#e34c26" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "#264de4" },
  { icon: <FaJs />, label: "JavaScript", color: "#f7df1e" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
  { icon: <FaReact />, label: "React", color: "#61dafb" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#fff" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38bdf8" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68a063" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#ffca28" },
];

export const myProjects = [
  {
    title: "AI Quiz App",
    description:
      "A quiz web app powered by Gemini AI, allowing real-time answer analysis and AI-generated explanations.",
    image: "/images/quiz-app.png",
    techStack: ["Next.js", "TailwindCSS", "Firebase", "Gemini AI"],
    github: "https://github.com/yourusername/ai-quiz-app",
    live: "https://aiquizapp.vercel.app",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Real-time cryptocurrency dashboard with buy/sell signals, trend analysis, and integrated chat over chart.",
    image: "/images/crypto-dashboard.png",
    techStack: ["Next.js", "TypeScript", "Recharts", "CoinGecko API"],
    github: "https://github.com/yourusername/crypto-dashboard",
    live: "https://cryptodash.vercel.app",
  },
  {
    title: "Portfolio Dev",
    description:
      "Modern developer portfolio using 3D background (Three.js), animations and futuristic UI.",
    image: "/images/portfolio.png",
    techStack: ["Next.js", "Three.js", "TailwindCSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
  },
];

export const mySkills = [
  {
    name: "React",
    icon: <SiReact />,
    certImg: "/certificates/react.png",
    certTitle: "Meta Front-End Certificate",
    certLink: "https://coursera.org/example-react-cert",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    certImg: "/certificates/firebase.png",
    certTitle: "Firebase Web Devs",
    certLink: "https://firebase.google.com/cert",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    certImg: "/certificates/next.png",
    certTitle: "Next.js Pro Course",
    certLink: "#",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    certImg: "/certificates/tailwind.png",
    certTitle: "TailwindCSS Mastery",
    certLink: "#",
  },
];

export const myExperiences = [
  {
    type: "education",
    year: "2019 - 2023",
    title: "Bachelor of Computer Science",
    desc: "Studied at XYZ University with a focus on frontend, UI/UX, and modern web technologies.",
  },
  {
    type: "work",
    year: "2022 - 2023",
    title: "Frontend Intern",
    desc: "Interned at ABC Tech, building responsive UIs using React and TailwindCSS.",
  },
  {
    type: "work",
    year: "2023 - Present",
    title: "Freelance Developer",
    desc: "Developing modern web apps with Next.js, Firebase, and Three.js.",
  },
];
