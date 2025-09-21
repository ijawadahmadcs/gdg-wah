import { Users, Target, Eye, Heart, Github, Linkedin, Twitter } from 'lucide-react';

export const metadata = {
  title: 'About Us - GDG CUI-Wah',
  description:
    "Learn about GDG CUI-Wah's mission, vision, and the amazing team behind Pakistan's most vibrant tech community.",
};

export default function AboutPage() {
  const teamMembers = [
    { name: 'Ahmad Hassan', role: 'Lead Organizer', bio: 'Full-stack developer passionate about Android and Flutter. Leading GDG CUI-Wah since 2022.', image: '👨‍💻', social: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Fatima Sheikh', role: 'Co-Organizer', bio: 'Google Cloud expert and Women Techmakers ambassador. Loves organizing workshops and hackathons.', image: '👩‍💻', social: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Ali Raza', role: 'Technical Lead', bio: 'Android developer with 5+ years experience. Specializes in Kotlin and Firebase integrations.', image: '👨‍🔬', social: { linkedin: '#', github: '#' } },
    { name: 'Zainab Khan', role: 'Community Manager', bio: 'Marketing professional turned developer. Manages our social media and community outreach.', image: '👩‍🎨', social: { linkedin: '#', twitter: '#' } },
    { name: 'Hassan Ali', role: 'Event Coordinator', bio: 'Event management specialist ensuring smooth execution of all GDG events.', image: '👨‍💼', social: { linkedin: '#' } },
    { name: 'Ayesha Malik', role: 'Design Lead', bio: 'UI/UX designer creating beautiful experiences. Flutter enthusiast and design mentor.', image: '👩‍🎨', social: { linkedin: '#', twitter: '#' } },
  ];

  const faqs = [
    { question: 'What is GDG?', answer: "Google Developer Groups (GDGs) are community-led developer communities that host events focused on Google technologies. We bring together developers to learn, share, and build amazing things together." },
    { question: 'Who can join GDG CUI-Wah?', answer: "Anyone with an interest in technology and Google's developer tools! Whether you're a beginner, student, experienced developer, or just curious about tech, you're welcome to join our community." },
    { question: 'Are events free to attend?', answer: 'Yes! All our events are completely free to attend. We believe in making technology education accessible to everyone in the CUI-Wah tech community.' },
    { question: 'How often do you organize events?', answer: 'We typically organize 2-3 events per month, including workshops, study jams, hackathons, and networking sessions. Follow us on social media to stay updated!' },
    { question: 'Can I speak at GDG events?', answer: "Absolutely! We're always looking for passionate speakers to share their knowledge. Contact us through our social media channels or the contact form to propose a topic." },
    { question: 'How can I volunteer with GDG CUI-Wah?', answer: 'We welcome volunteers! You can help with event organization, social media management, content creation, or technical mentoring. Reach out to us to get involved.' },
    { question: 'What technologies do you focus on?', answer: 'We focus on Google technologies including Android, Flutter, Firebase, Google Cloud Platform, Machine Learning, Web technologies, and emerging Google developer tools.' },
    { question: 'Do you provide certificates?', answer: 'Yes, we provide certificates of participation for workshops and study jams. Some events also offer completion certificates for hands-on projects.' },
  ];

  const milestones = [
    { year: '2020', event: 'GDG CUI-Wah Founded', description: 'Started with 50 passionate developers' },
    { year: '2021', event: 'First DevFest', description: '300+ attendees, 20+ speakers' },
    { year: '2022', event: 'Women Techmakers Launch', description: 'Empowering women in technology' },
    { year: '2023', event: 'Google Cloud Study Jams', description: '500+ participants earned cloud skills' },
    { year: '2024', event: 'Community Milestone', description: '1000+ active community members' },
    { year: '2025', event: 'Innovation Hub', description: 'Launched startup mentorship program' },
  ];

  const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-600 dark:text-green-600 leading-tight">
            About <span className="text-blue-600">GDG</span> <span className="text-red-500">CUI- <span className="text-amber-300">Wah</span></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A community of developers, designers, and tech enthusiasts building the future with Google technologies.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[{ icon: Target, color: 'bg-blue-600', title: 'Our Mission', desc: 'To create an inclusive community where developers can learn, grow, and innovate with Google technologies.' },
            { icon: Eye, color: 'bg-red-500', title: 'Our Vision', desc: 'To be Pakistan’s leading developer community that bridges emerging technologies with local talent.' },
            { icon: Heart, color: 'bg-green-500', title: 'Our Values', desc: 'Inclusivity, collaboration, and continuous learning. We grow by sharing knowledge together.' }].map((item, i) => (
            <div key={i} className="px-4">
              <div className={`w-16 h-16 mx-auto mb-6 ${item.color} rounded-full flex items-center justify-center`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h2>
          {milestones.map((m, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 text-center md:text-left px-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{m.year}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">{m.event}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{m.description}</p>
              </div>
              <div className="md:w-1/2 flex justify-center px-4">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: colors[i % colors.length] }}
                >
                  {m.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 text-center">
                <div className="text-6xl mb-4">{m.image}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{m.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 truncate">{m.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{m.bio}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  {m.social.linkedin && <a href={m.social.linkedin} className="text-blue-600 hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>}
                  {m.social.twitter && <a href={m.social.twitter} className="text-sky-500 hover:text-sky-600"><Twitter className="w-5 h-5" /></a>}
                  {m.social.github && <a href={m.social.github} className="text-gray-700 dark:text-gray-300 hover:text-black"><Github className="w-5 h-5" /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">FAQ</h2>
          {faqs.map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{f.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Join Our Community?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Be part of Pakistan’s most vibrant tech community. Learn, build, and grow with us!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full sm:w-auto">Join WhatsApp Group</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition w-full sm:w-auto">View Upcoming Events</button>
        </div>
      </section>
    </div>
  );
}
