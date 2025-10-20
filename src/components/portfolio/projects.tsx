"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard, type Project } from "./project-card";

type ProjectsProps = {
  projects: Project[];
};

const CATEGORIES = ["All", "Web Dev", "Full Stack", "DevOps", "Game Dev"];

export function Projects({ projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-[700px] text-foreground/80 md:text-lg">
            A selection of my work. Filter by category to see more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
