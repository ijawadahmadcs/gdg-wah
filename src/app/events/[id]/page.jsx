'use client'

import { Calendar, Clock, MapPin, Users, ExternalLink, Share2, BookmarkPlus, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function EventDetailPage({ params }) {
  // Mock event data
  const event = {
    id: 1,
    title: "Flutter Workshop: Building Beautiful UIs",
    date: "2025-09-28",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub CUI-Wah",
    address: "Plot 123, Gulberg III, CUI-Wah, Punjab, Pakistan",
    attendees: 45,
    maxAttendees: 60,
    type: "Workshop",
    level: "Intermediate",
    description: "Join us for an intensive Flutter workshop where you'll learn to build stunning mobile applications with Google's UI toolkit.",
    fullDescription: `This comprehensive Flutter workshop is designed for developers who want to master cross-platform mobile applications.\n\nWhat you'll learn: Flutter fundamentals, responsive UIs, state management, navigation, APIs, testing, optimization, publishing.\n\nPrerequisites: Basic programming, laptop setup with Flutter, Android Studio or VS Code, Git knowledge helpful.\n\nWhat's included: 6h training, materials, lunch, certificate, Slack community, follow-up support.`,
    speaker: {
      name: "Ahmad Hassan",
      role: "Senior Flutter Developer",
      company: "Tech Solutions Inc",
      bio: "Ahmad is a passionate mobile developer with 5+ years of experience in Flutter development.",
      image: "👨‍💻",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    agenda: [
      { time: "10:00 AM - 10:30 AM", title: "Registration & Welcome Coffee", description: "Check-in and networking" },
      { time: "10:30 AM - 12:00 PM", title: "Flutter Fundamentals", description: "Intro to Flutter, widgets, first app" },
      { time: "12:00 PM - 1:00 PM", title: "Lunch Break", description: "Networking lunch" },
      { time: "1:00 PM - 2:30 PM", title: "Advanced UI Patterns", description: "Custom widgets and animations" },
      { time: "2:30 PM - 2:45 PM", title: "Coffee Break", description: "Short informal break" },
      { time: "2:45 PM - 3:45 PM", title: "State Management", description: "Provider, Bloc, and others" },
      { time: "3:45 PM - 4:00 PM", title: "Q&A and Wrap-up", description: "Questions and next steps" }
    ],
    requirements: ["Laptop with Flutter environment", "Android Studio or VS Code", "Basic programming knowledge", "Willingness to learn"],
    tags: ["Flutter", "Mobile", "UI/UX", "Cross-platform"],
    featured: true,
    rsvpLink: "#",
    venue: { name: "Tech Hub CUI-Wah", address: "Plot 123, Gulberg III, CUI-Wah, Punjab, Pakistan", facilities: ["WiFi", "Parking", "Food", "A/C", "Projector"] }
  }

  const relatedEvents = [
    { id: 2, title: "Android Development Bootcamp", date: "2025-10-12", type: "Bootcamp", image: "🤖" },
    { id: 3, title: "Google Cloud Study Jam", date: "2025-10-05", type: "Study Jam", image: "☁️" }
  ]

  if (!event) return <div className="p-10 text-center text-gray-600 dark:text-gray-300">Loading event details...</div>

  const formatDate = date => new Date(date).toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/events" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {[event.type, event.level, event.featured && "Featured"].filter(Boolean).map((tag,i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${tag==="Featured"?"bg-yellow-400 text-gray-900":"bg-white/20"}`}>{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl text-white/90 mb-6">{event.description}</p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ExternalLink, label: "Register Now", href: event.rsvpLink, bg: "bg-white text-blue-600" },
                { icon: Share2, label: "Share Event", action: ()=>{} },
                { icon: BookmarkPlus, label: "Save", action: ()=>{} }
              ].map((btn,i)=>(
                btn.href ? 
                <a key={i} href={btn.href} className={`px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 ${btn.bg}`}>
                  <btn.icon className="w-5 h-5" /> {btn.label}
                </a>
                :
                <button key={i} className="border-2 border-white/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                  <btn.icon className="w-5 h-5" /> {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:w-80 bg-white/10 backdrop-blur-md rounded-lg p-6 text-white space-y-4">
            {[
              { icon: Calendar, value: formatDate(event.date) },
              { icon: Clock, value: event.time },
              { icon: MapPin, value: `${event.location}\n${event.address}`, multi: true },
              { icon: Users, value: `${event.attendees} / ${event.maxAttendees} attending` }
            ].map((item,i)=>(
              <div key={i} className="flex items-start gap-3 text-white">
                <item.icon className="w-5 h-5 mt-1" />
                {item.multi ? <div className="text-sm whitespace-pre-line">{item.value}</div> : <span>{item.value}</span>}
              </div>
            ))}
            <div className="w-full bg-white/20 rounded-full h-2 mt-4">
              <div className="bg-white h-2 rounded-full" style={{ width: `${(event.attendees/event.maxAttendees)*100}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {[
            { title: "About This Workshop", content: event.fullDescription },
            { title: "Event Agenda", content: event.agenda?.map((item,i)=>(
              <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-32 text-sm font-medium text-blue-600 dark:text-blue-400">{item.time}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            )) },
            { title: "What You Need", content: <ul className="space-y-2">{event.requirements?.map((r,i)=><li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span> {r}</li>)}</ul> },
            { title: "Meet Your Instructor", content:
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{event.speaker?.image}</div>
                  <div className="flex justify-center gap-3">
                    {Object.entries(event.speaker?.social || {}).map(([key,url],i)=>
                      <a key={i} href={url} className="hover:opacity-80">{key==="linkedin"?"💼":key==="twitter"?"🐦":"💻"}</a>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.speaker?.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">{event.speaker?.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{event.speaker?.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.speaker?.bio}</p>
                </div>
              </div>
            }
          ].map((section,i)=>(
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {[
            { title: "Venue Details", content:
              <div className="space-y-3">
                <div><h4 className="font-medium text-gray-900 dark:text-white">{event.venue?.name}</h4><p className="text-sm text-gray-600 dark:text-gray-400">{event.venue?.address}</p></div>
                <div className="flex flex-wrap gap-2 mt-4">{event.venue?.facilities?.map((f,i)=><span key={i} className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-xs rounded">{f}</span>)}</div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm">View on Map</button>
              </div>
            },
            { title: "Topics", content:
              <div className="flex flex-wrap gap-2">{event.tags?.map((tag,i)=><span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">#{tag}</span>)}</div>
            },
            { title: "Related Events", content:
              <div className="space-y-3">{relatedEvents?.map(ev=>(
                <Link key={ev.id} href={`/events/${ev.id}`} className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ev.image}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{ev.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">{ev.type}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(ev.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}</div>
            },
            { title: "CTA", content:
              <div className=" rounded-lg shadow-lg p-6 text-white text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to Join?</h3>
                <p className="text-sm text-white/90 mb-4">Secure your spot now - only {event.maxAttendees - event.attendees} seats left!</p>
                <a href={event.rsvpLink} className="w-full bg-white text-blue-600 py-2 px-4 rounded font-medium hover:bg-gray-100 transition-colors">Register Now</a>
              </div>
            }
          ].map((section,i)=>(
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">{section.content}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
