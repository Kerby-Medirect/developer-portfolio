"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Code, Briefcase } from "lucide-react"
import { Skill, Experience } from "@/types"
import personalData from "@/data/personal.json"

export function About() {
  const skills = personalData.skills as Skill[]
  const experience = personalData.experience as Experience[]

  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other'),
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and the journey that led me to where I am today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello, I&apos;m {personalData.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{personalData.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-sm text-muted-foreground">3+ Years</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                Skills & Technologies
              </h4>
              
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                categorySkills.length > 0 && (
                  <div key={category} className="space-y-2">
                    <h5 className="font-medium capitalize text-sm text-muted-foreground">
                      {category}
                    </h5>
                    <div className="space-y-2">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm font-medium">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                                className="h-full bg-primary rounded-full"
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-8 text-right">
                              {skill.level}%
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-primary" />
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-muted last:border-l-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-medium text-primary">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
