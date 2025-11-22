import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Ahangbazar",
    description:
      "A music streaming platform where users can play, download, rate, and share songs.",
    longDescription:
      "AhangBazar is a modern music streaming web app built with Next.js 15, TypeScript, and Supabase. Users can search, play songs, create playlists, download tracks, and rate music. Includes real-time playback, analytics integration, and a clean responsive UI with Radix UI and Tailwind CSS.",
    image: "/projects/ahangbazar.png",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Radix UI",
      "Axios",
      "Google Analytics",
      "Supabase Functions",
      "React Query",
    ],
    demoUrl: "https://ahangbazar.vercel.app",
    githubUrl: "https://github.com/AliNikseresht/Ahangbazar",
    features: [
      "Music streaming",
      "Song download support",
      "Rating & sharing",
      "Real-time audio playback",
      "Supabase database & storage",
      "Modern UI with Radix & Tailwind",
    ],
  },

  {
    id: "2",
    title: "Nobat24",
    description:
      "A fast and user-friendly platform for online appointment booking.",
    longDescription:
      "Nobat24 is a modern and fully responsive appointment booking platform built using Next.js 15, TypeScript, and Supabase. It allows users to schedule appointments easily while providing businesses with reliable booking management. Features include secure authentication, form validation with Zod, database integration via Supabase, and seamless UX with React Query and Tailwind CSS.",
    image: "/projects/nobat24.png",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Supabase Auth",
      "Supabase SSR",
      "Supabase DB",
      "Axios",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "React Query",
      "React Hot Toast",
    ],
    demoUrl: "https://nobat24.vercel.app",
    githubUrl: "https://github.com/AliNikseresht/Nobat24",
    features: [
      "Online appointment booking",
      "Secure authentication",
      "Supabase SSR support",
      "Fast and responsive UI",
      "Advanced form validation with Zod",
      "Database-driven scheduling system",
    ],
  },
  {
    id: "3",
    title: "Fitogram Landing",
    description:
      "A modern and responsive landing page for a fitness platform built with Next.js and Tailwind CSS.",
    longDescription:
      "Fitogram Landing is a stylish and fully responsive landing page built using Next.js, TypeScript, and Tailwind CSS. It showcases trainers, user reviews, FAQs, and features a clean UI focused on conversion. Includes dynamic coach listings and smooth UI animations.",
    image: "/projects/fitogram-landing.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Landing Page"],
    demoUrl: "https://fitogram-landing.vercel.app",
    githubUrl: "https://github.com/AliNikseresht/Fitogram-landing",
    features: [
      "Responsive fitness landing page",
      "Dynamic coach listing",
      "FAQ and reviews section",
      "Fast and SEO-friendly",
      "Clean and modern UI design",
    ],
  },
  {
    id: "4",
    title: "Fitogram Dashboard",
    description:
      "A powerful fitness dashboard for users and coaches with workouts, progress charts, and AI-powered features.",
    longDescription:
      "Fitogram Dashboard is a fitness management platform built with Next.js 15, TypeScript, Supabase, and Tailwind CSS. It includes workout calendars, progress tracking, notifications, chat system, coach profiles, and AI-powered personalized workout and nutrition plans. Designed as a PWA for a smooth app-like experience.",
    image: "/projects/fitogram-dashboard.png",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PWA",
      "React Query",
      "React Hook Form",
      "Supabase Storage",
      "Supabase Auth",
      "Supabase DB",
    ],
    demoUrl: "https://fitogram-dashboard.vercel.app",
    githubUrl: "https://github.com/AliNikseresht/Fitogram-Dashboard",
    features: [
      "User & Coach dashboards",
      "Workout calendar",
      "Progress tracking",
      "AI-powered workout & meal plans",
      "Notifications & messaging",
      "Supabase storage and authentication",
      "PWA support",
    ],
  },
  {
    id: "5",
    title: "Blogify",
    description:
      "A secure blogging platform where users can register safely and share posts.",
    longDescription:
      "Blogify is a modern blogging platform built with React, TypeScript, and Firebase. Users can sign up securely, write posts on any topic, and share them publicly. Includes Firebase Auth, Firestore, hosting, and realtime updates.",
    image: "/projects/blogify.png",
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Firebase Auth",
      "Firestore",
      "React Hook Form",
      "Tailwind",
    ],
    demoUrl: "https://blogify-2840e.web.app",
    githubUrl: "https://github.com/AliNikseresht/Blogify",
    features: [
      "Secure user authentication",
      "Create & publish posts",
      "Realtime database updates",
      "Fully responsive UI",
      "Firebase hosting",
    ],
  },
  {
    id: "6",
    title: "URL Shortener",
    description:
      "A fast and reliable URL shortener built with Next.js and Supabase.",
    longDescription:
      "This project is a fully functional and free URL shortener that allows users to shorten long links instantly. Built using Next.js with TypeScript and powered by Supabase for database and storage. The system ensures fast redirection, real-time link storage, and a minimal and clean UI for seamless user experience.",
    image: "/projects/url-shortener.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Supabase Storage",
      "Supabase DB",
      "URL Shortener",
      "Vercel",
    ],
    demoUrl: "https://url-shortener-theta-wine.vercel.app",
    githubUrl: "https://github.com/AliNikseresht/URL-Shortener",
    features: [
      "Instant URL shortening",
      "Supabase-powered backend",
      "Fast redirection",
      "Clean and modern UI",
      "Deployed on Vercel",
    ],
  },
  {
    id: "7",
    title: "Geco Game",
    description:
      "A fast and interactive game website built with JavaScript, HTML, CSS, and Swiper.",
    longDescription:
      "Geco Game is a lightweight and engaging web-based game built using pure JavaScript, HTML, and CSS. It includes smooth animations, a responsive layout, and Swiper integration for interactive sliders. Designed to be fast, fun, and accessible on all devices.",
    image: "/projects/geco-game.png",
    tags: ["JavaScript", "HTML", "CSS", "Swiper"],
    demoUrl: "https://geco-game.vercel.app",
    githubUrl: "https://github.com/AliNikseresht/Geco-Game",
    features: [
      "Fully responsive game UI",
      "Swiper-powered slides & transitions",
      "Smooth animations",
      "Fast load time and lightweight",
      "Built with pure JS, HTML & CSS",
    ],
  },
];
