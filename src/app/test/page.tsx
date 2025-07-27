'use client'

import Link from 'next/link'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Tailwind CSS Test Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Primary Colors</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded"></div>
                <span className="text-sm text-gray-600">Primary</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary rounded"></div>
                <span className="text-sm text-gray-600">Secondary</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded"></div>
                <span className="text-sm text-gray-600">Accent</span>
              </div>
            </div>
          </div>

          {/* Test Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Text Colors</h2>
            <div className="space-y-2">
              <p className="text-foreground">Foreground Text</p>
              <p className="text-muted-foreground">Muted Foreground Text</p>
              <p className="text-primary">Primary Text</p>
              <p className="text-secondary-foreground">Secondary Text</p>
            </div>
          </div>

          {/* Test Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h2>
            <div className="space-y-3">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Primary Button
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary/80 transition-colors">
                Secondary Button
              </button>
              <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded transition-colors">
                Outline Button
              </button>
            </div>
          </div>

          {/* Test Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Background Colors</h2>
            <div className="space-y-3">
              <div className="p-4 bg-background border rounded">
                <span className="text-sm">Background</span>
              </div>
              <div className="p-4 bg-card border rounded">
                <span className="text-sm">Card Background</span>
              </div>
              <div className="p-4 bg-muted border rounded">
                <span className="text-sm">Muted Background</span>
              </div>
            </div>
          </div>

          {/* Test Card 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Border Colors</h2>
            <div className="space-y-3">
              <div className="p-4 border border-border rounded">
                <span className="text-sm">Border</span>
              </div>
              <div className="p-4 border border-input rounded">
                <span className="text-sm">Input Border</span>
              </div>
              <div className="p-4 border border-ring rounded">
                <span className="text-sm">Ring Border</span>
              </div>
            </div>
          </div>

          {/* Test Card 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsive Design</h2>
            <div className="space-y-2 text-sm">
              <p className="text-red-500 md:text-blue-500 lg:text-green-500">
                This text changes color on different screen sizes
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="bg-blue-100 p-2 rounded text-center">1</div>
                <div className="bg-green-100 p-2 rounded text-center">2</div>
                <div className="bg-yellow-100 p-2 rounded text-center">3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            If you can see this page with proper styling, Tailwind CSS is working correctly!
          </p>
          <Link 
            href="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 