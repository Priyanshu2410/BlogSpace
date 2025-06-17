'use client';
import CollabForm from '@/components/CollabForm';

export default function CollabPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 text-slate-800">
      {/* Hero Section */}
      <section className="text-center py-18 px-4">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Let's Collaborate
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          If you&apos;re passionate about tech, curious about ideas, or want to co-author blogs — I&apos;d love to work with you!
        </p>
      </section>

      {/* Collaboration Form */}
      <section className="py-16 px-4">
        <CollabForm />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-slate-500">
  Made with 💙 for devs who grow better together.  
  <br />
  <a
    href="https://www.linkedin.com/in/priyanshupatel2410/" // replace with your LinkedIn
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-400 hover:underline ml-1"
  >
    Connect on LinkedIn
  </a>
</footer>

    </div>
  );
}
