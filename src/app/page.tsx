import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Modern Web Agency
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Transform your digital presence with cutting-edge web development services
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}