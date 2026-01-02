import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function ProjectsSection({
  projects,
  onProjectClick,
}: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl lg:text-6xl mb-4">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in modern web
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => onProjectClick(project)}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
