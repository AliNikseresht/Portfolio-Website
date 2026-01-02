"use client";

import { Project } from "@/types/Project";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  scrollProgress: any;
}

const ProjectCard = ({
  project,
  index,
  onClick,
  scrollProgress,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        // style={{
        //   transformStyle: "preserve-3d",
        // }}
      >
        {/* Image Container with 3D Effect */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              width={1571}
              height={723}
              src={project.image}
              alt={project.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover"
              priority={index < 3}
            />
          </motion.div>

          {/* Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 from-black/80 via-black/50 to-transparent flex items-end p-6"
          >
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demoUrl, "_blank");
                }}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="size-5 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <Github className="size-5 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 lg:h-60">
          <h3 className="text-2xl md:text-3xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Effect Highlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
