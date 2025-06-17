

import { getAllPosts } from '@/lib/posts';
import { FaMedium, FaLinkedin } from 'react-icons/fa';
import 'aos/dist/aos.css';

export default function BlogPage() {
  const posts = getAllPosts();

 

  return (
    <main className="bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#d1d5db] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">My Blog Library</h1>
        <p className="text-gray-600 text-lg">Thoughtful articles, shared stories, and tech insights.</p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-gradient-to-br from-white via-[#f9fafb] to-[#f3f4f6] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] p-8 border border-gray-200 backdrop-blur-sm"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">{post.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{post.description}</p>
              <p className="text-sm text-gray-500 mb-6">Published on: {new Date(post.date).toLocaleDateString()}</p>

              <div className="mt-auto flex gap-4">
                {post.mediumLink && (
                  <a
                    href={post.mediumLink}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition text-sm font-medium"
                  >
                    <FaMedium /> Medium
                  </a>
                )}
                {post.linkedinLink && (
                  <a
                    href={post.linkedinLink}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition text-sm font-medium"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
