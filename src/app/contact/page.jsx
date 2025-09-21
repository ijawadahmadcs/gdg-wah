'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Github, Youtube, Twitter, Linkedin, MessageSquare, Users } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '', type: 'general' })
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@gdgCUI-Wah.dev', link: 'mailto:contact@gdgCUI-Wah.dev', description: 'Send us an email anytime' },
    { icon: MapPin, label: 'Location', value: 'CUI-Wah, Pakistan', link: '#', description: 'Events across the city' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', link: '#', description: 'We respond quickly' },
    { icon: Users, label: 'Community Size', value: '1000+ Members', link: '#', description: 'Growing every day' }
  ]

  const socialPlatforms = [
    { name: 'WhatsApp', icon: MessageSquare, link: '#', description: 'Join our main community group', color: 'bg-green-600 hover:bg-green-700', members: '500+ members' },
    { name: 'Discord', icon: MessageSquare, link: '#', description: 'Real-time discussions and help', color: 'bg-purple-600 hover:bg-purple-700', members: '300+ members' },
    { name: 'LinkedIn', icon: Linkedin, link: '#', description: 'Professional networking', color: 'bg-blue-600 hover:bg-blue-700', members: '800+ followers' },
    { name: 'YouTube', icon: Youtube, link: '#', description: 'Event recordings and tutorials', color: 'bg-red-600 hover:bg-red-700', members: '2k+ subscribers' },
    { name: 'Twitter', icon: Twitter, link: '#', description: 'Latest updates and announcements', color: 'bg-blue-400 hover:bg-blue-500', members: '1.5k+ followers' },
    { name: 'GitHub', icon: Github, link: '#', description: 'Open source projects and resources', color: 'bg-gray-800 hover:bg-gray-900', members: '200+ stars' }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'speaking', label: 'Speaking Opportunity' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'volunteer', label: 'Volunteer' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'feedback', label: 'Feedback' }
  ]

  const organizers = [
    { name: 'Ahmad Hassan', role: 'Lead Organizer', email: 'ahmad@gdgCUI-Wah.dev', speciality: 'Android & Flutter', image: '👨‍💻' },
    { name: 'Fatima Sheikh', role: 'Co-Organizer', email: 'fatima@gdgCUI-Wah.dev', speciality: 'Google Cloud & WTM', image: '👩‍💻' },
    { name: 'Zainab Khan', role: 'Community Manager', email: 'zainab@gdgCUI-Wah.dev', speciality: 'Community & Events', image: '👩‍🎨' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl mb-8">Have questions, ideas, or want to get involved? We'd love to hear from you!</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center">
              <div className="text-green-600 dark:text-green-400 text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleInputChange} className="form-input" />
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleInputChange} className="form-input" />
              </div>
              <select name="type" value={formData.type} onChange={handleInputChange} className="form-input w-full">
                {inquiryTypes.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}
              </select>
              <input type="text" name="subject" placeholder="Subject *" required value={formData.subject} onChange={handleInputChange} className="form-input w-full" />
              <textarea name="message" rows={5} placeholder="Message *" required value={formData.message} onChange={handleInputChange} className="form-textarea w-full"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Organizers */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.label}</h3>
                    <a href={info.link} className="text-blue-600 hover:underline">{info.value}</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Organizers</h2>
            <div className="space-y-4">
              {organizers.map((org, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl">{org.image}</div>
                  <div>
                    <h4 className="font-semibold">{org.name}</h4>
                    <p className="text-sm text-blue-600">{org.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{org.speciality}</p>
                    <a href={`mailto:${org.email}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600">{org.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Platforms */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Join Our Community</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">Connect with us on your favorite platform and be part of our growing community</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatforms.map((sp, i) => (
              <a key={i} href={sp.link} className={`block bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className={`${sp.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    <sp.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{sp.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{sp.members}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{sp.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
