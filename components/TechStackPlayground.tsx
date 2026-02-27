import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Code, Play } from "lucide-react";
import { Button } from "./ui/button";
import { TechSkill } from "@/types/TechSkill";
import { techStack } from "@/data/techStack";
import { CodeDemoModal } from "./CodeDemoModal";

export function TechStackPlayground() {
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(techStack.map((skill) => skill.category))),
  ];

  const filteredStack =
    filter === "All"
      ? techStack
      : techStack.filter((skill) => skill.category === filter);

  return (
    <section id="tech-stack" ref={containerRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl lg:text-6xl mb-4">
            Tech Stack{" "}
            <span className="text-blue-600 dark:text-blue-400">Playground</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Click on any technology to see interactive code examples
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors text-sm md:text-base ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredStack.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { rotate: { duration: 0.5 } },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSkill(skill)}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-600">
                  <motion.div
                    className="text-5xl mb-2"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="text-sm text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Code Demo Modal */}
        <CodeDemoModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      </div>
    </section>
  );
}
