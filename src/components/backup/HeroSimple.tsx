'use client'

export function HeroSimple() {
  return (
    <section className="py-20 bg-gradient-to-br from-webcloudor-blue to-webcloudor-purple">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">We Create Digital Excellence</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your trusted partner in web development, cloud solutions, and digital transformation.
        </p>
      </div>
    </section>
  )
}

// Simple fallback version without animations - useful for testing basic layout
export default HeroSimple
