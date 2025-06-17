'use client';
import { FaLinkedin, FaInstagram, FaMedium } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function SocialLinks() {
  return (
    <section className="relative z-10 py-16 px-4 flex justify-center">
      <div className="bg-white/80  shadow-2xl rounded-3xl p-10 w-full max-w-3xl border border-white/30">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Let&apos;s Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-700">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/priyanshupatel2410/"
            target="_blank"
            className="flex items-center gap-4 hover:bg-black/80 hover:text-white px-4 py-3 rounded-xl transition"
          >
            <FaLinkedin className="text-2xl text-blue-600" />
            <span className="text-sm">linkedin.com/in/your-profile</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_priyanshu_ptl/"
            target="_blank"
            className="flex items-center gap-4 hover:bg-black/80 hover:text-white px-4 py-3 rounded-xl transition"
          >
            <FaInstagram className="text-2xl text-pink-500" />
            <span className="text-sm">@_priyanshu_ptl</span>
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@patelpriysnshu2410"
            target="_blank"
            className="flex items-center gap-4 hover:bg-black/80 hover:text-white px-4 py-3 rounded-xl transition"
          >
            <FaMedium className="text-2xl text-green-600" />
            <span className="text-sm">medium.com/@yourmedium</span>
          </a>

          {/* Email */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-black/80 hover:text-white transition">
            <MdEmail className="text-2xl text-indigo-500" />
            <span className="text-sm">patelpriysnshu2410@gmail.com</span>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-black/80 hover:text-white transition">
            <MdPhone className="text-2xl text-yellow-500" />
            <span className="text-sm">+91-8128135732</span>
          </div>
        </div>
      </div>
    </section>
  );
}
