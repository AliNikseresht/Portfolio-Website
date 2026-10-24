export type ProjectTone =
  | "violet"
  | "blue"
  | "coral"
  | "acid"
  | "ink"
  | "yellow"
  | "orange";

export type Project = {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
  readonly tags: readonly string[];
  readonly tone: ProjectTone;
  readonly type: string;
};

export const projects = [
  {
    name: "DeutschPod",
    description:
      "A modern platform for learning German through real podcasts. Users can listen, read along with timestamped transcripts, see translations, and save vocabulary — all organized by CEFR levels from A1 to C2.",
    image: "/projects/deutschpod.png",
    width: 1575,
    height: 721,
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "React 19"],
    tone: "blue",
    type: "Language learning",
  },
  {
    name: "Ahangbazar",
    description:
      "A modern music streaming platform where users can play, download, rate, and share songs with a clean bilingual interface.",
    image: "/projects/ahangbazar.png",
    width: 1575,
    height: 721,
    tags: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "React Query",
      "Tailwind CSS 4",
    ],
    tone: "violet",
    type: "Music platform",
  },
  {
    name: "Nobat24",
    description:
      "A fast and user-friendly platform for online appointment booking.",
    image: "/projects/nobat24.png",
    width: 1575,
    height: 721,
    tags: ["Next.js 15", "TypeScript", "Supabase", "Zod"],
    tone: "blue",
    type: "Booking product",
  },
  {
    name: "Fitogram Landing",
    description:
      "A modern and responsive landing page for a fitness platform built with Next.js and Tailwind CSS.",
    image: "/projects/fitogram-landing.png",
    width: 1572,
    height: 720,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    tone: "coral",
    type: "Product landing",
  },
  {
    name: "Fitogram Dashboard",
    description:
      "A fitness dashboard for users and coaches with workouts, progress charts, and AI-powered features.",
    image: "/projects/fitogram-dashboard.png",
    width: 1581,
    height: 723,
    tags: ["Next.js 15", "TypeScript", "PWA", "Supabase"],
    tone: "acid",
    type: "Web application",
  },
  {
    name: "Blogify",
    description:
      "A secure blogging platform where users can register safely and share posts.",
    image: "/projects/blogify.png",
    width: 1575,
    height: 721,
    tags: ["React", "TypeScript", "Firebase"],
    tone: "ink",
    type: "Publishing platform",
  },
  {
    name: "URL Shortener",
    description:
      "A fast and reliable URL shortener built with Next.js and Supabase.",
    image: "/projects/url-shortener.png",
    width: 1580,
    height: 722,
    tags: ["Next.js", "TypeScript", "Supabase"],
    tone: "yellow",
    type: "Developer utility",
  },
  {
    name: "Geco Game",
    description:
      "A fast and interactive game website built with JavaScript, HTML, CSS, and Swiper.",
    image: "/projects/geco-game.png",
    width: 1571,
    height: 723,
    tags: ["JavaScript", "HTML", "CSS", "Swiper"],
    tone: "orange",
    type: "Interactive website",
  },
] as const satisfies readonly Project[];

export const skills = [
  ["01", "React", "Interface architecture"],
  ["02", "Next.js", "Product foundations"],
  ["03", "TypeScript", "Reliable systems"],
  ["04", "JavaScript", "Interaction logic"],
  ["05", "HTML / CSS", "Responsive craft"],
  ["06", "Tailwind CSS", "Scalable styling"],
  ["07", "Supabase", "Connected products"],
  ["08", "Firebase", "Application services"],
] as const;

export const services = [
  "Frontend development",
  "React & Next.js implementation",
  "Responsive web interfaces",
  "Figma-to-code implementation",
  "Landing pages & websites",
  "UI redesign & refinement",
  "Performance improvements",
  "API integration",
] as const;

export const socialLinks = {
  email: "mailto:alinksht@gmail.com",
  github: "https://github.com/AliNikseresht",
  linkedin: "https://www.linkedin.com/in/alinikseresht-web/",
} as const;
