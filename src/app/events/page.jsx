'use client'

import { useState } from 'react'
import { Calendar, Users, MapPin, Clock, Filter, Search, ExternalLink, Tag } from 'lucide-react'
import Link from 'next/link'

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('upcoming')

  const upcomingEvents = [
    {
      id: 1,
      title: "Flutter Workshop: Building Beautiful UIs",
      date: "2025-09-28",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub CUI-Wah",
      address: "Gulberg III, CUI-Wah",
      attendees: 45,
      maxAttendees: 60,
      type: "Workshop",
      level: "Intermediate",
      description: "Learn to build stunning mobile apps with Flutter. Hands-on workshop covering widgets, state management, and UI best practices.",
      speaker: "Ahmad Hassan",
      speakerRole: "Senior Flutter Developer",
      tags: ["Flutter", "Mobile", "UI/UX"],
      featured: true,
      rsvpLink: "#"
    },
    {
      id: 2,
      title: "Google Cloud Study Jam",
      date: "2025-10-05",
      time: "2:00 PM - 6:00 PM",
      location: "Online",
      address: "Virtual Event",
      attendees: 120,
      maxAttendees: 200,
      type: "Study Jam",
      level: "Beginner",
      description: "Hands-on learning session for Google Cloud Platform fundamentals. Earn badges and certificates.",
      speaker: "Fatima Sheikh",
      speakerRole: "Google Cloud Expert",
      tags: ["Cloud", "GCP", "Certification"],
      featured: false,
      rsvpLink: "#"
    }
  ]

  const pastEvents = [
    {
      id: 6,
      title: "DevFest CUI-Wah 2024",
      date: "2024-12-15",
      time: "9:00 AM - 6:00 PM",
      location: "Expo Center CUI-Wah",
      attendees: 300,
      type: "Conference",
      level: "All Levels",
      description: "Our biggest annual conference featuring 20+ speakers and 300+ developers.",
      tags: ["Conference", "DevFest", "Networking"],
      photos: ["📸", "🎤", "👥"],
      videoLink: "#"
    }
  ]

  const eventTypes = [
    { key: 'all', label: 'All Events', count: upcomingEvents.length },
    { key: 'workshop', label: 'Workshops', count: upcomingEvents.filter(e => e.type === 'Workshop').length },
    { key: 'talk', label: 'Talks', count: upcomingEvents.filter(e => e.type === 'Talk').length },
    { key: 'bootcamp', label: 'Bootcamps', count: upcomingEvents.filter(e => e.type === 'Bootcamp').length },
    { key: 'study-jam', label: 'Study Jams', count: upcomingEvents.filter(e => e.type === 'Study Jam').length }
  ]

  const filteredEvents = (viewMode === 'upcoming' ? upcomingEvents : pastEvents).filter(event => {
    const matchesFilter = activeFilter === 'all' || event.type.toLowerCase().replace(' ', '-') === activeFilter
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getLevelColor = level => ({
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    'Advanced': 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
  }[level] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="py-20 text-center bg-white dark:bg-gray-900">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Events</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join our workshops, talks, and community events to learn, build, and grow with Google technologies.
        </p>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* View Mode */}
          <div className="flex bg-white dark:bg-gray-700 rounded-lg p-1">
            {['upcoming', 'past'].map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${viewMode === mode ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'}`}
              >
                {mode === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Type Filters */}
        {viewMode === 'upcoming' && (
          <div className="mt-6 flex flex-wrap gap-3 max-w-6xl mx-auto px-4">
            {eventTypes.map(type => (
              <button
                key={type.key}
                onClick={() => setActiveFilter(type.key)}
                className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-colors ${activeFilter === type.key ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                <Filter className="w-4 h-4" />
                {type.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === type.key ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}`}>{type.count}</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Event Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 text-gray-600 dark:text-gray-300">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p>{searchTerm ? 'Try adjusting your search terms' : 'Check back soon for new events!'}</p>
            </div>
          ) : (
            filteredEvents.map(event => (
              <div key={event.id} className={`bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 ${event.featured ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{event.type}</span>
                      {event.level && <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(event.level)}`}>{event.level}</span>}
                      {event.featured && <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 px-3 py-1 rounded-full text-sm">Featured</span>}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2"><Link href={`/events/${event.id}`} className="hover:text-blue-600">{event.title}</Link></h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                          <Tag className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                    </div>

                    {event.speaker && (
                      <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{event.speaker.charAt(0)}</div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{event.speaker}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{event.speakerRole}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details & Actions */}
                  <div className="lg:w-80 space-y-3">
                    {[
                      { icon: Calendar, value: new Date(event.date).toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' }), color: 'text-blue-500' },
                      { icon: Clock, value: event.time, color: 'text-green-500' },
                      { icon: MapPin, value: event.location + (event.address ? `\n${event.address}` : ''), color: 'text-red-500', isMultiLine: true },
                      { icon: Users, value: `${event.attendees}${event.maxAttendees ? ` / ${event.maxAttendees}` : ''} attending`, color: 'text-yellow-500' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        {item.isMultiLine ? <div className="text-sm whitespace-pre-line">{item.value}</div> : <span>{item.value}</span>}
                      </div>
                    ))}

                    <div className="pt-3 space-y-2">
                      {viewMode === 'upcoming' ? (
                        <>
                          <a href={event.rsvpLink} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" /> RSVP Now
                          </a>
                          <Link href={`/events/${event.id}`} className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 py-3 rounded-lg font-medium text-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 transition-colors">View Details</Link>
                        </>
                      ) : (
                        <>
                          {event.videoLink && <a href={event.videoLink} className="w-full bg-red-600 text-white py-3 rounded-lg font-medium text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2"><ExternalLink className="w-4 h-4" /> Watch Recording</a>}
                          {event.photos && <div className="flex gap-2 justify-center">{event.photos.map((photo, i) => <div key={i} className="text-2xl">{photo}</div>)}</div>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Don't Miss Our Events!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">Stay updated with our latest events and never miss an opportunity to learn and grow.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Join Newsletter</button>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 transition-colors">Follow on Social Media</button>
        </div>
      </section>
    </div>
  )
}
