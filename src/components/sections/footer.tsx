"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import personalData from "@/data/personal.json"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Unique Learning & Growth Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              The Journey Never Ends
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Every line of code I write is a step forward in my continuous journey of learning and growth. 
              I&apos;m passionate about exploring emerging technologies, mastering new frameworks, and 
              solving complex challenges that push the boundaries of what&apos;s possible.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base text-muted-foreground max-w-2xl mx-auto"
            >
              Currently diving deep into <span className="text-primary font-semibold">AI integration</span>, 
              <span className="text-primary font-semibold"> Web3 technologies</span>, and 
              <span className="text-primary font-semibold"> advanced cloud architectures</span>. 
              The next project is always just an idea away.
            </motion.p>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <span className="text-sm text-muted-foreground">
              🚀 Follow my journey as I build the future, one project at a time
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Crafted with <Heart className="h-4 w-4 mx-1 text-red-500" /> by {personalData.name} © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
