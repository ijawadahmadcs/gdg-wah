import { Github, Youtube, Twitter, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-800' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Upcoming Events', href: '/events' },
    { name: 'Past Events', href: '/events?filter=past' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/blog?category=resources' },
    { name: 'Contact', href: '/contact' }
  ]

  const communityLinks = [
    { name: 'Join WhatsApp', href: '#' },
    { name: 'Join Discord', href: '#' },
    { name: 'Join Slack', href: '#' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Code of Conduct', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ]

  const technologies = [
    'Android Development',
    'Flutter',
    'Firebase',
    'Google Cloud',
    'Machine Learning',
    'Web Technologies'
  ]

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* GDG Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <Image src="/logo.png" alt="logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div>
                <div className="text-xl font-bold">GDG CUI-Wah</div>
                <div className="text-gray-400 text-sm">Developer Community</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pakistan's most vibrant tech community. We're passionate about Google technologies and building amazing things together.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-400" />CUI-Wah, Punjab, Pakistan</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-red-400" />contact@gdgCUI-Wah.dev</div>
              <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-green-400" />Events every month</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-gray-300 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 via-red-500 to-green-500 hover:after:w-full after:transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-red-500 pl-3">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-gray-300 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 via-red-500 to-green-500 hover:after:w-full after:transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-green-500 pl-3">Technologies</h3>
            <ul className="space-y-3">
              {technologies.map(tech => (
                <li key={tech}><span className="text-gray-300">{tech}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest updates about events and opportunities</p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500"
              />
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} className={`text-gray-400 ${social.color} transition-colors`} aria-label={social.name}>
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© {currentYear} GDG CUI-Wah. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Google Developer Groups are community-led groups for developers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Multicolor top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500"></div>
    </footer>
  )
}
