"use client";

import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectModal } from "@/components/projekts/ProjectModal";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackPlayground } from "@/components/TechStackPlayground";
import { projects } from "@/data/projects";
import { Project } from "@/types/Project";
import { useState } from "react";

export default function HomeClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <HeroSection />
      <ProjectsSection
        projects={projects}
        onProjectClick={setSelectedProject}
      />
      <TechStackPlayground />
      <ContactSection />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
