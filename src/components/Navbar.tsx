"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavItem } from "@/types"

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
      // Return focus to the menu button
      const menuButton = document.querySelector('[aria-expanded="true"]') as HTMLElement
      menuButton?.focus()
    }
  }

  const handleMenuItemKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleLinkClick()
      window.location.href = href
    }
  }

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-webcloudor-primary/95 backdrop-blur-lg shadow-lg border-b border-white/10" 
          : "bg-transparent",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled 
                ? "text-webcloudor-white hover:text-webcloudor-yellow" 
                : "text-webcloudor-white hover:text-webcloudor-yellow"
            )}
          >
            <span className="bg-webcloudor-gradient bg-clip-text text-transparent font-extrabold text-2xl">
              Webcloudor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href as `/` | `/about` | `/services` | `/projects` | `/contact`}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-2 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-webcloudor-yellow focus:ring-offset-2",
                  pathname === item.href
                    ? "text-webcloudor-yellow bg-white/10 backdrop-blur-sm"
                    : isScrolled 
                      ? "text-webcloudor-white hover:text-webcloudor-yellow hover:bg-white/10" 
                      : "text-webcloudor-white hover:text-webcloudor-yellow hover:bg-white/10"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-webcloudor-yellow rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "h-9 w-9 transition-colors duration-300",
                    isScrolled 
                      ? "text-webcloudor-white hover:bg-white/10 hover:text-webcloudor-yellow" 
                      : "text-webcloudor-white hover:bg-white/10 hover:text-webcloudor-yellow"
                  )}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle navigation menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-lg"
                id="mobile-menu"
                aria-labelledby="mobile-menu-title"
              >
                <SheetHeader>
                  <SheetTitle id="mobile-menu-title" className="text-left text-gray-900">
                    <span className="bg-webcloudor-gradient bg-clip-text text-transparent font-bold">
                      Navigation
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav 
                  className="flex flex-col space-y-4 mt-6"
                  role="navigation"
                  aria-label="Mobile navigation menu"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href as `/` | `/about` | `/services` | `/projects` | `/contact`}
                      onClick={handleLinkClick}
                      onKeyDown={(e) => handleMenuItemKeyDown(e, item.href)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={cn(
                        "text-sm font-medium transition-all duration-300 px-3 py-3 rounded-lg hover:bg-webcloudor-primary/10 focus:outline-none focus:ring-2 focus:ring-webcloudor-primary focus:ring-offset-2 hover:scale-105",
                        pathname === item.href
                          ? "text-webcloudor-primary bg-webcloudor-primary/10 border-l-4 border-webcloudor-primary"
                          : "text-gray-700 hover:text-webcloudor-primary"
                      )}
                      tabIndex={0}
                    >
                      {item.title}
                      {pathname === item.href && (
                        <span className="sr-only"> (current page)</span>
                      )}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}