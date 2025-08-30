"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Target, Lightbulb, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Project } from "@/types"
import { formatDate } from "@/lib/utils"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full capitalize">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(project.createdAt)}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {project.liveUrl && (
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold flex items-center">
                  <Target className="h-6 w-6 mr-2 text-primary" />
                  Project Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold flex items-center">
                  <Lightbulb className="h-6 w-6 mr-2 text-primary" />
                  Purpose & Inspiration
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Purpose</h3>
                    <p className="text-muted-foreground">{project.purpose}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Inspiration</h3>
                    <p className="text-muted-foreground">{project.inspiration}</p>
                  </div>
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-primary" />
                  Challenges & Solutions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-destructive">Challenges Faced</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-green-600">Solutions Implemented</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Image Gallery */}
              {project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative h-48 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-muted/50 p-6 rounded-lg"
              >
                <h3 className="font-semibold mb-4">Tech Stack</h3>
                <div className="space-y-3">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-muted/50 p-6 rounded-lg"
              >
                <h3 className="font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-muted/50 p-6 rounded-lg"
              >
                <h3 className="font-semibold mb-4">Project Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Category:</span>
                    <span className="ml-2 capitalize">{project.category}</span>
                  </div>
                  <div>
                    <span className="font-medium">Date:</span>
                    <span className="ml-2">{formatDate(project.createdAt)}</span>
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>
                    <span className="ml-2 text-green-600">Completed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}