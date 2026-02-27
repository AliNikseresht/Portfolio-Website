import { motion, AnimatePresence } from "motion/react";
import { X, Code, Play } from "lucide-react";
import { Button } from "./ui/button";
import { TechSkill } from "@/types/TechSkill";

interface CodeDemoModalProps {
  skill: TechSkill | null;
  onClose: () => void;
}

export function CodeDemoModal({ skill, onClose }: CodeDemoModalProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
            className="p-1.5 md:p-6 border-b border-gray-200 dark:border-gray-800"
            style={{
              background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-3xl md:text-5xl">{skill.icon}</span>
                <div>
                  <h3 className="text-xl md:text-2xl">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {skill.demo.description}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full"
              >
                <X className="size-5" />
              </Button>
            </div>
          </div>

          {/* Code Block */}
          <div className=" p-1.5 md:p-6">
            <div className="relative">
              <div className="absolute top-2 right-1.5 flex gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="px-1.5 py-1 md:px-3 md:py-1 rounded-lg md:rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs md:text-sm flex items-center gap-2"
                >
                  <Play className="size-3" />
                  Live Demo
                </motion.div>
              </div>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 md:p-6 rounded-xl overflow-x-auto">
                <code className="text-xs md:text-sm">{skill.demo.code}</code>
              </pre>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 p-2.5 md:mt-6 md:p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-start gap-3">
                <Code className="size-5 text-blue-600 dark:text-blue-400 mt-0.5 hidden md:flex" />
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  This is a simplified example. In production, I use
                  {skill.name}
                  to build scalable, maintainable applications with best
                  practices and optimal performance.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
