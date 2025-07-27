'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TeamMember } from '@/types'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          <motion.div
            variants={imageVariants}
            animate={isHovered ? "hover" : "rest"}
            className="relative w-full h-full"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          {/* Social Links Overlay */}
          <motion.div
            variants={overlayVariants}
            animate={isHovered ? "hover" : "rest"}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <div className="flex space-x-4">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {member.name}
          </h3>
          <p className="text-blue-600 font-medium mb-3">
            {member.role}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {member.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 4 && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                +{member.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}