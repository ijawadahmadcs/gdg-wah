/* eslint-disable react/no-unescaped-entities */
import { Calendar, Users, Code, Trophy, ArrowRight, Github, Youtube, Twitter, Linkedin } from "lucide-react";

export default function HomePage() {
  const upcomingEvents = [
    { id: 1, title: "Flutter Workshop: Building Beautiful UIs", date: "2025-09-28", time: "10:00 AM", location: "Tech Hub CUI-Wah", attendees: 45, type: "Workshop" },
    { id: 2, title: "Google Cloud Study Jam", date: "2025-10-05", time: "2:00 PM", location: "Online", attendees: 120, type: "Study Jam" },
    { id: 3, title: "Android Development Bootcamp", date: "2025-10-12", time: "9:00 AM", location: "University of Punjab", attendees: 80, type: "Bootcamp" },
  ];

  const pastEvents = [
    { title: "DevFest 2024", attendees: 300, image: "🎉" },
    { title: "Women Techmakers Event", attendees: 150, image: "👩‍💻" },
    { title: "Firebase Workshop", attendees: 85, image: "🔥" },
  ];

  const communityStats = [
    { label: "Active Members", value: "500+", icon: Users, color: "bg-blue-600" },
    { label: "Events Hosted", value: "50+", icon: Calendar, color: "bg-red-500" },
    { label: "Projects Built", value: "100+", icon: Code, color: "bg-yellow-500" },
    { label: "Workshops", value: "25+", icon: Trophy, color: "bg-green-600" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="mb-10">
          <div className="flex justify-center gap-2 mb-6">
            <span className="w-4 h-4 bg-blue-600 rounded" />
            <span className="w-4 h-4 bg-red-500 rounded" />
            <span className="w-4 h-4 bg-yellow-500 rounded" />
            <span className="w-4 h-4 bg-green-600 rounded" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">Google Developer Groups</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">CUI-Wah</h2>
        </div>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Join Pakistan's most vibrant tech community. Learn, build, and grow with Google technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2">
            Join Our Community <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            View Upcoming Events
          </button>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {communityStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} rounded-full flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">Don't miss out on our exciting upcoming events</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(e => (
              <div key={e.id} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">{e.type}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{e.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{e.title}</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{e.time}</span></div>
                  <div className="flex items-center gap-2"><span>📍</span><span>{e.location}</span></div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{e.attendees} attending</span></div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">RSVP Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Past Event Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((e, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                <div className="text-6xl mb-3">{e.image}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{e.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{e.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">Connect with us on your favorite platform</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition flex items-center gap-2"><Youtube className="w-5 h-5" /> YouTube</a>
            <a className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2"><Linkedin className="w-5 h-5" /> LinkedIn</a>
            <a className="px-6 py-3 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition flex items-center gap-2"><Twitter className="w-5 h-5" /> Twitter</a>
            <a className="px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition flex items-center gap-2"><Github className="w-5 h-5" /> GitHub</a>
            <a className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition flex items-center gap-2">💬 WhatsApp</a>
            <a className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition flex items-center gap-2">💬 Discord</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Get the latest news about events, workshops, and opportunities</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none" />
            <button className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
