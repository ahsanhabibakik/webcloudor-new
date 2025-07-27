import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">
          The project youyouyouyouyouyouyouyouyouyouyouyou'reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;re looking for doesn't exist or has been moved.
        </p>
        <Link href="/projects">
          <Button>
            Back to Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}