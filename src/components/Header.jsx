'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Users, Calendar, BookOpen, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail }
  ]

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md flex items-center justify-center">
              <Image src="/logo.png" alt="logo" width={40} height={40} className="object-cover w-full h-full" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">GDG CUI-Wah</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Developer Community</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 relative font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-white dark:bg-gray-950 flex flex-col items-center justify-center space-y-8 z-50">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
