'use client';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-20 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-400">BlogSpace</span>
          </h1>
          <p className="text-lg mb-6 text-slate-300">
            Explore{' '}
            <span className="text-indigo-400 font-medium">
              <Typewriter
                words={[
                  'coding journeys.',
                  'tech Blog',
                  'deep dives into Web,AI-ML any more...',
                  'thoughtful developer insights.',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </p>
          <Link
            href="/blog"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Explore Articles
          </Link>
        </div>

        <div className="mt-10 md:mt-0">
          <Image
            src="/Code typing-pana.svg"
            alt="Hero Illustration"
            width={420}
            height={320}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
