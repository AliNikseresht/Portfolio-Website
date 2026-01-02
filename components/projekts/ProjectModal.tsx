import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Project } from "@/types/Project";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
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
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="sticky top-4 right-4 ml-auto z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
            >
              <X className="size-5" />
            </motion.button>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative h-64 md:h-96 -mt-9 overflow-hidden rounded-t-2xl"
            >
              <Image
                width={1920}
                height={1080}
                src={project.image}
                alt={project.title}
                sizes="100vw"
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 from-black/60 to-transparent" />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
                >
                  {project.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-2xl mb-4">About the Project</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mt-0.5">
                        <Check className="size-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                {project.demoUrl && (
                  <Button
                    size="lg"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                    className="group"
                  >
                    <ExternalLink className="mr-2 size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    View Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="group"
                  >
                    <Github className="mr-2 size-4 group-hover:scale-110 transition-transform" />
                    View Source Code
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
