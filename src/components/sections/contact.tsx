"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/types"
import personalData from "@/data/personal.json"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})



export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, you would send this to your backend or email service
      console.log("Form data:", data)
      
      toast.success("Message sent successfully! I'll get back to you soon.")
      reset()
    } catch {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                I&apos;m always open to discussing new opportunities, creative ideas, or potential collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href={`mailto:${personalData.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">{personalData.location}</p>
                </div>
              </motion.div>
            </div>

            {/* GitHub Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
            >
              <Github className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">GitHub</p>
                <a 
                  href={personalData.socialLinks.find(link => link.icon === 'github')?.url || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  View my repositories
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg border border-border shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="What&apos;s this about?"
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
