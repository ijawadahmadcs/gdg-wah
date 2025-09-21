'use client'

import { useState } from 'react'
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen, Code, Smartphone, Cloud } from 'lucide-react'
import Link from 'next/link'

export default function BlogHomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const blogPosts = [
    // your existing blogPosts array here
       {
      id: 1,
      title: "Getting Started with Flutter: A Complete Beginner's Guide",
      excerpt: "Learn the fundamentals of Flutter development and build your first mobile app with this comprehensive guide covering widgets, state management, and best practices.",
      content: "Flutter has revolutionized mobile app development...",
      author: "Ahmad Hassan",
      authorRole: "Flutter Developer",
      authorImage: "👨‍💻",
      publishDate: "2025-09-15",
      readTime: "8 min read",
      category: "Flutter",
      tags: ["Flutter", "Mobile", "Beginner", "Tutorial"],
      featured: true,
      image: "📱",
      likes: 42,
      comments: 12
    },
    {
      id: 2,
      title: "Google Cloud Functions: Serverless Computing Made Simple",
      excerpt: "Dive into Google Cloud Functions and learn how to build scalable, serverless applications. This guide covers deployment, monitoring, and best practices.",
      content: "Serverless computing has changed how we build applications...",
      author: "Fatima Sheikh",
      authorRole: "Cloud Architect",
      authorImage: "👩‍💻",
      publishDate: "2025-09-12",
      readTime: "12 min read",
      category: "Cloud",
      tags: ["Google Cloud", "Serverless", "Functions", "Backend"],
      featured: true,
      image: "☁",
      likes: 38,
      comments: 8
    },
    {
      id: 3,
      title: "Android Jetpack Compose: Modern UI Development",
      excerpt: "Explore the power of Jetpack Compose for building native Android UIs. Learn about composables, state management, and creating beautiful interfaces.",
      content: "Jetpack Compose is Android's modern toolkit for building native UI...",
      author: "Ali Raza",
      authorRole: "Android Developer",
      authorImage: "👨‍🔬",
      publishDate: "2025-09-10",
      readTime: "10 min read",
      category: "Android",
      tags: ["Android", "Jetpack Compose", "UI", "Kotlin"],
      featured: false,
      image: "🤖",
      likes: 35,
      comments: 15
    },
    {
      id: 4,
      title: "Firebase Authentication: Secure User Management",
      excerpt: "Implement robust user authentication in your apps with Firebase Auth. Covers email/password, social login, and security best practices.",
      content: "User authentication is a critical part of most applications...",
      author: "Hassan Ali",
      authorRole: "Full Stack Developer",
      authorImage: "👨‍💼",
      publishDate: "2025-09-08",
      readTime: "7 min read",
      category: "Firebase",
      tags: ["Firebase", "Authentication", "Security", "Web"],
      featured: false,
      image: "🔐",
      likes: 29,
      comments: 6
    },
    {
      id: 5,
      title: "Machine Learning with TensorFlow: Getting Started",
      excerpt: "Begin your ML journey with TensorFlow. This guide covers basic concepts, model training, and practical applications for beginners.",
      content: "Machine learning is transforming every industry...",
      author: "Ayesha Malik",
      authorRole: "ML Engineer",
      authorImage: "👩‍🎨",
      publishDate: "2025-09-05",
      readTime: "15 min read",
      category: "AI/ML",
      tags: ["TensorFlow", "Machine Learning", "AI", "Python"],
      featured: true,
      image: "🧠",
      likes: 56,
      comments: 22
    },
    {
      id: 6,
      title: "Progressive Web Apps: The Future of Web Development",
      excerpt: "Learn how to build PWAs that provide native app experiences on the web. Covers service workers, manifest files, and offline functionality.",
      content: "Progressive Web Apps bridge the gap between web and native apps...",
      author: "Zainab Khan",
      authorRole: "Frontend Developer",
      authorImage: "👩‍🎨",
      publishDate: "2025-09-03",
      readTime: "9 min read",
      category: "Web",
      tags: ["PWA", "Web Development", "Service Workers", "JavaScript"],
      featured: false,
      image: "🌐",
      likes: 31,
      comments: 9
    },
    {
      id: 7,
      title: "Kotlin Multiplatform: Write Once, Run Everywhere",
      excerpt: "Explore Kotlin Multiplatform for sharing code between iOS and Android. Learn about common modules and platform-specific implementations.",
      content: "Code sharing has been a long-standing goal in mobile development...",
      author: "Ahmad Hassan",
      authorRole: "Mobile Architect",
      authorImage: "👨‍💻",
      publishDate: "2025-09-01",
      readTime: "11 min read",
      category: "Mobile",
      tags: ["Kotlin", "Multiplatform", "iOS", "Android"],
      featured: false,
      image: "📱",
      likes: 44,
      comments: 18
    },
    {
      id: 8,
      title: "Google Cloud Run: Containerized Applications Made Easy",
      excerpt: "Deploy containerized applications effortlessly with Google Cloud Run. This guide covers deployment strategies and scaling configurations.",
      content: "Container deployment doesn't have to be complicated...",
      author: "Fatima Sheikh",
      authorRole: "DevOps Engineer",
      authorImage: "👩‍💻",
      publishDate: "2025-08-28",
      readTime: "8 min read",
      category: "Cloud",
      tags: ["Google Cloud", "Containers", "Docker", "Microservices"],
      featured: false,
      image: "🐳",
      likes: 33,
      comments: 11
    }

  ]

  const categories = [
    { key: 'all', label: 'All Posts', icon: BookOpen, count: blogPosts.length },
    { key: 'Flutter', label: 'Flutter', icon: Smartphone, count: blogPosts.filter(p => p.category === 'Flutter').length },
    { key: 'Android', label: 'Android', icon: Code, count: blogPosts.filter(p => p.category === 'Android').length },
    { key: 'Cloud', label: 'Cloud', icon: Cloud, count: blogPosts.filter(p => p.category === 'Cloud').length },
    { key: 'AI/ML', label: 'AI/ML', icon: '🧠', count: blogPosts.filter(p => p.category === 'AI/ML').length },
    { key: 'Web', label: 'Web', icon: '🌐', count: blogPosts.filter(p => p.category === 'Web').length },
    { key: 'Mobile', label: 'Mobile', icon: '📱', count: blogPosts.filter(p => p.category === 'Mobile').length },
    { key: 'Firebase', label: 'Firebase', icon: '🔥', count: blogPosts.filter(p => p.category === 'Firebase').length }
  ]

  const learningTracks = [
    // your existing learningTracks array here
     {
      title: "Android Development Path",
      description: "Master Android app development from basics to advanced concepts",
      posts: ["Getting Started with Kotlin", "Android Architecture Components", "Jetpack Compose Fundamentals"],
      color: "from-green-500 to-blue-500",
      icon: "🤖"
    },
    {
      title: "Flutter Mastery Track",
      description: "Complete Flutter development journey for cross-platform apps",
      posts: ["Flutter Basics", "State Management", "Advanced UI Patterns"],
      color: "from-blue-500 to-purple-500",
      icon: "📱"
    },
    {
      title: "Google Cloud Journey",
      description: "Learn cloud computing and serverless development",
      posts: ["Cloud Functions", "Firestore Database", "Cloud Run Deployment"],
      color: "from-yellow-500 to-red-500",
      icon: "☁"
    },
    {
      title: "Machine Learning Track",
      description: "AI and ML fundamentals with practical applications",
      posts: ["TensorFlow Basics", "Model Training", "ML Model Deployment"],
      color: "from-purple-500 to-pink-500",
      icon: "🧠"
    }

  ]

  const resources = [
       {
      title: "Flutter Documentation",
      description: "Official Flutter docs and guides",
      link: "#",
      type: "Documentation"
    },
    {
      title: "Android Codelabs",
      description: "Step-by-step coding tutorials",
      link: "#",
      type: "Tutorial"
    },
    {
      title: "Google Cloud Free Tier",
      description: "Start building with free credits",
      link: "#",
      type: "Platform"
    },
    {
      title: "Firebase Console",
      description: "Manage your Firebase projects",
      link: "#",
      type: "Platform"
    },
    {
      title: "Kotlin Playground",
      description: "Try Kotlin code online",
      link: "#",
      type: "Tool"
    },
    {
      title: "Material Design",
      description: "Design system guidelines",
      link: "#",
      type: "Design"
    }

  ]

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.publishDate) - new Date(a.publishDate)
      if (sortBy === 'popular') return b.likes - a.likes
      if (sortBy === 'comments') return b.comments - a.comments
      return 0
    })

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Our Blog</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore tutorials, articles, and resources from our community experts to level up your development skills.
          </p>
          <Link href="#featured" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Explore Articles
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            {/* Search & Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="comments">Most Commented</option>
                </select>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {typeof category.icon === 'string' ? (
                      <span className="text-lg">{category.icon}</span>
                    ) : (
                      <category.icon className="w-4 h-4" />
                    )}
                    {category.label}
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.key
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                    }`}>{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or filters</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                        {post.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{post.authorImage}</span>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{post.authorRole}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                            <span>❤️ {post.likes}</span>
                            <span>💬 {post.comments}</span>
                            <Link href={`/blog/${post.id}`} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline">
                              Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                              <Tag className="w-3 h-3" /> {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Learning Tracks */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Learning Tracks</h3>
              <div className="space-y-4">
                {learningTracks.map((track, index) => (
                  <div key={index} className="p-4 bg-blue-600 dark:bg-blue-800 rounded-lg text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{track.icon}</span>
                      <h4 className="font-semibold">{track.title}</h4>
                    </div>
                    <p className="text-sm text-white/90 mb-3">{track.description}</p>
                    <div className="text-xs text-white/80">{track.posts.length} articles</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Resources</h3>
              <div className="space-y-3">
                {resources.map((res, index) => (
                  <a key={index} href={res.link} className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{res.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{res.description}</p>
                      </div>
                      <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">{res.type}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-600 dark:bg-blue-800 rounded-lg shadow p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/90 mb-4 text-sm">Subscribe to our newsletter for the latest articles and resources.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="w-full py-2 bg-white text-blue-600 font-bold rounded hover:bg-gray-100 transition">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12 text-gray-700 dark:text-gray-300">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">About</h4>
            <p>We are a community of developers sharing knowledge and resources on Flutter, Android, Cloud, AI, and more.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#featured" className="hover:underline">Blog</Link></li>
              <li><Link href="#learning" className="hover:underline">Learning Tracks</Link></li>
              <li><Link href="#resources" className="hover:underline">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">GitHub</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">&copy; 2025 GDG Community. All rights reserved.</div>
      </footer>
    </div>
  )
}
