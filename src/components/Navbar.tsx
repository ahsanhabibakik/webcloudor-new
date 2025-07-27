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

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <nav 
      className={cn("bg-white shadow-sm border-b sticky top-0 z-40", className)}
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Agency
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={pathname === item.href ? 'page' : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
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
                  className="h-9 w-9"
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
                className="w-[300px] sm:w-[400px]"
                id="mobile-menu"
                aria-labelledby="mobile-menu-title"
              >
                <SheetHeader>
                  <SheetTitle id="mobile-menu-title" className="text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6" role="menu">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      role="menuitem"
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary px-2 py-3 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        pathname === item.href
                          ? "text-primary bg-accent"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}