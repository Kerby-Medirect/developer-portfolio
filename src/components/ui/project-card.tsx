"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Project } from "@/types"
import { formatDate } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <Button size="icon" variant="secondary" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="icon" variant="secondary" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full capitalize">
              {project.category}
            </span>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
              style={{ borderColor: tech.color }}
            >
              {tech.icon} {tech.name}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-muted-foreground px-2 py-1">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {formatDate(project.createdAt)}
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          <Button asChild className="flex-1">
            <Link href={`/projects/${project.id}`}>
              View Details
            </Link>
          </Button>
          {project.liveUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
