"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ui/project-card"
import { Project, ProjectCategory } from "@/types"
import projectsData from "@/data/projects.json"

const categories: { label: string; value: ProjectCategory | "all" | "uiux" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "UI/UX", value: "uiux" },
  { label: "Other", value: "other" },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all" | "uiux">("all")

  const projects = projectsData as Project[]

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "uiux") {
      // For UI/UX, we can match projects that might be design-focused or have UI-related tech
      return project.category === "web" && (
        project.description.toLowerCase().includes("ui") ||
        project.description.toLowerCase().includes("design") ||
        project.techStack.some(tech => 
          tech.name.toLowerCase().includes("figma") ||
          tech.name.toLowerCase().includes("sketch") ||
          tech.name.toLowerCase().includes("design")
        )
      )
    }
    return project.category === selectedCategory
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, 
            interactive experiences, and creative solutions to real-world problems.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="text-xs"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6 flex items-center"
            >
              <span className="w-1 h-6 bg-primary mr-3 rounded-full"></span>
              Featured Work
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6 flex items-center"
            >
              <span className="w-1 h-6 bg-secondary mr-3 rounded-full"></span>
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
