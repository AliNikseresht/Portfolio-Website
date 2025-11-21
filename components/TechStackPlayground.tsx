import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Code, Play } from "lucide-react";
import { Button } from "./ui/button";
import { TechSkill } from "@/types/TechSkill";
import { techStack } from "@/data/techStack";

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
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
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
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div
                  className="p-6 border-b border-gray-200 dark:border-gray-800"
                  style={{
                    background: `linear-gradient(135deg, ${selectedSkill.color}20, transparent)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{selectedSkill.icon}</span>
                      <div>
                        <h3 className="text-2xl">{selectedSkill.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedSkill.demo.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedSkill(null)}
                      className="rounded-full"
                    >
                      <X className="size-5" />
                    </Button>
                  </div>
                </div>

                {/* Code Block */}
                <div className="p-6">
                  <div className="relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm flex items-center gap-2"
                      >
                        <Play className="size-3" />
                        Live Demo
                      </motion.div>
                    </div>
                    <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-xl overflow-x-auto">
                      <code className="text-sm">{selectedSkill.demo.code}</code>
                    </pre>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-start gap-3">
                      <Code className="size-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        This is a simplified example. In production, I use{" "}
                        {selectedSkill.name} to build scalable, maintainable
                        applications with best practices and optimal
                        performance.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
