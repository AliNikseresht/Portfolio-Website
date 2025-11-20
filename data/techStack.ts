import { TechSkill } from "@/types/TechSkill";

export const techStack: TechSkill[] = [
  // ================= FRONTEND =================
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    category: "Frontend",
    demo: {
      code: `const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
};`,
      description: "React hooks and state management",
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    category: "Frontend",
    demo: {
      code: `export default function Page() {
  return <h1>Welcome to Next.js!</h1>;
}

export async function generateMetadata() {
  return { title: "My Portfolio" };
}`,
      description: "SSR, routing & SEO with Next.js 14",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    color: "#F7DF1E",
    category: "Language",
    demo: {
      code: `const user = { name: "Ali", age: 24 };
const message = \`Hello \${user.name}\`;
console.log(message);`,
      description: "Modern ES6+ features",
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "📘",
    color: "#3178C6",
    category: "Language",
    demo: {
      code: `interface User {
  id: number;
  name: string;
}

const getUser = (id: number): User => ({
  id,
  name: "Ali Nikseresht",
});`,
      description: "Type-checked programming",
    },
  },

  // ================= UI / STYLING =================
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "🎨",
    color: "#06B6D4",
    category: "Styling",
    demo: {
      code: `<div className="p-6 from-blue-500 to-purple-600 rounded-xl shadow-lg">
  <h1 className="text-white text-2xl">Beautiful UI</h1>
</div>`,
      description: "Utility-first CSS framework",
    },
  },
  {
    id: "mui",
    name: "Material UI",
    icon: "💠",
    color: "#007FFF",
    category: "Styling",
    demo: {
      code: `import { Button } from "@mui/material";

export default function App() {
  return <Button variant="contained">Click</Button>;
}`,
      description: "Modern UI components",
    },
  },
  {
    id: "sass",
    name: "Sass",
    icon: "🌺",
    color: "#CC6699",
    category: "Styling",
    demo: {
      code: `$primary: #3498db;

.button {
  background: $primary;
  padding: 12px;
}`,
      description: "Advanced CSS preprocessor",
    },
  },

  // ================= STATE =================
  {
    id: "redux",
    name: "Redux Toolkit",
    icon: "🔮",
    color: "#764ABC",
    category: "State",
    demo: {
      code: `const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value++ }
  }
});`,
      description: "Predictable global state",
    },
  },
  {
    id: "react-query",
    name: "React Query",
    icon: "📡",
    color: "#FF4154",
    category: "Data Fetching",
    demo: {
      code: `import { useQuery } from "@tanstack/react-query";

const useUser = (id) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => fetch("/api/user/" + id).then(r => r.json())
  });`,
      description: "Caching & server-state management",
    },
  },

  // ================= APIs & BACKEND =================
  {
    id: "axios",
    name: "Axios",
    icon: "🌐",
    color: "#5A29E4",
    category: "Data Fetching",
    demo: {
      code: `const api = axios.create({
  baseURL: "/api",
});

api.get("/products").then(r => console.log(r.data));`,
      description: "HTTP client for APIs",
    },
  },
  {
    id: "jwt",
    name: "JWT Auth",
    icon: "🔐",
    color: "#E0A800",
    category: "Security",
    demo: {
      code: `const token = jwt.sign({ userId: 1 }, "secret", {
  expiresIn: "1h"
});`,
      description: "Token-based authentication",
    },
  },

  // ================= REALTIME / BACKEND SERVICES =================
  {
    id: "websocket",
    name: "WebSocket",
    icon: "📶",
    color: "#2C7BE5",
    category: "Realtime",
    demo: {
      code: `const ws = new WebSocket("ws://localhost:3000");

ws.onmessage = (msg) => console.log(msg.data);`,
      description: "Realtime bidirectional communication",
    },
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "🔥",
    color: "#FFCA28",
    category: "Backend",
    demo: {
      code: `import { getFirestore } from "firebase/firestore";
const db = getFirestore();`,
      description: "Auth, database & hosting",
    },
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "🟩",
    color: "#3ECF8E",
    category: "Backend",
    demo: {
      code: `const { data } = await supabase
  .from("users")
  .select("*");`,
      description: "Open-source Firebase alternative",
    },
  },

  // ================= DESKTOP / NATIVE =================
  {
    id: "electron",
    name: "Electron.js",
    icon: "💻",
    color: "#47848F",
    category: "Desktop",
    demo: {
      code: `const win = new BrowserWindow({ width: 800, height: 600 });
win.loadURL("http://localhost:3000");`,
      description: "Build desktop apps with JS",
    },
  },
  {
    id: "tauri",
    name: "Tauri",
    icon: "🦀",
    color: "#FFC131",
    category: "Desktop",
    demo: {
      code: `import { invoke } from "@tauri-apps/api";

invoke("greet", { name: "Ali" }).then(console.log);`,
      description: "Lightweight desktop app framework",
    },
  },

  // ================= 3D =================
  {
    id: "threejs",
    name: "Three.js",
    icon: "🌌",
    color: "#000000",
    category: "3D",
    demo: {
      code: `const scene = new THREE.Scene();
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial()
);
scene.add(cube);`,
      description: "3D rendering for the web",
    },
  },

  // ================= TOOLS =================
  {
    id: "git",
    name: "Git",
    icon: "📦",
    color: "#F05032",
    category: "Tools",
    demo: {
      code: `git checkout -b feature/new-ui
git commit -m "Add new UI component"
git push`,
      description: "Version control for teamwork",
    },
  },
];
