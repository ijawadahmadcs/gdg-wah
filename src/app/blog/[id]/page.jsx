'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from 'lucide-react'

// Mock data (reuse from BlogHomePage)
const blogPosts = [
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

export default function BlogDetailPage({ params }) {
  const postId = Number(params.id)
  const post = blogPosts.find(p => p.id === postId)

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
      <p>Blog post not found.</p>
    </div>
  )

  const relatedPosts = blogPosts.filter(p => p.id !== postId).slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{post.authorImage}</span>
            <div>
              <div>{post.author}</div>
              <div className="text-sm">{post.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(post.publishDate).toLocaleDateString()}</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Post Content */}
      <section className="max-w-4xl mx-auto px-4 pb-16 space-y-8">
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map(rp => (
              <Link key={rp.id} href={`/blog/${rp.id}`} className="group bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl">
                  {rp.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{rp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{rp.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{rp.author}</span>
                    <span>{new Date(rp.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
