import { Metadata } from 'next'
import { mockTeamMembers } from '@/lib/data'
import { TeamGrid } from '@/components/team/TeamGrid'
import { AgencyStory } from '@/components/about/AgencyStory'
import { AgencyValues } from '@/components/about/AgencyValues'
import { ExpertiseHighlights } from '@/components/about/ExpertiseHighlights'

export const metadata: Metadata = {
  title: 'About Us - Our Team & Approach',
  description: 'Learn about our team, values, and approach to creating exceptional digital experiences. Meet the talented individuals behind our success.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Meet the Team Behind
              <span className="text-blue-600 block">Exceptional Digital Experiences</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're a passionate team of designers, developers, and strategists 
              dedicated to creating digital solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Story */}
      <AgencyStory />

      {/* Team Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the talented individuals who bring creativity, expertise, and passion 
              to every project we undertake.
            </p>
          </div>
          <TeamGrid members={mockTeamMembers} />
        </div>
      </section>

      {/* Agency Values */}
      <AgencyValues />

      {/* Expertise Highlights */}
      <ExpertiseHighlights />
    </div>
  )
}