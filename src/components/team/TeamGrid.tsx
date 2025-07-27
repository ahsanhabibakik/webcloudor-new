'use client'

import { TeamMember } from '@/types'
import { TeamMemberCard } from './TeamMemberCard'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <TeamMemberCard 
          key={member.id} 
          member={member} 
          index={index}
        />
      ))}
    </div>
  )
}