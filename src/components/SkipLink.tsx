'use client'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link absolute -left-[9999px] top-auto w-px h-px overflow-hidden z-[999999] p-2 bg-black text-white no-underline rounded text-sm font-bold transition-all duration-200 ease-in-out focus:left-5 focus:top-5 focus:w-auto focus:h-auto focus:overflow-visible"
    >
      Skip to main content
    </a>
  )
}