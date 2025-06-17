'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <Link href="/">
        <div className="flex items-center space-x-3">
          <Image
            src="/pp-removebg-preview.png"
            alt="Logo"
            width={50}
            height={50}
            className=""
          />
          <h1 className="text-2xl font-bold text-white">BlogSpace</h1>
        </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-slate-100 hover:text-indigo-300 font-medium transition">Home</Link>
          <Link href="/blog" className="text-slate-100 hover:text-indigo-300 font-medium transition">Articles</Link>
          <Link href="/collab" className="text-slate-100 hover:text-indigo-300 font-medium transition">Collab</Link>
          <Link href="/support" className="text-slate-100 hover:text-indigo-300 font-medium transition">support</Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 animate-fadeIn">
          <Link href="/" className="block text-slate-100 hover:text-indigo-300 font-medium">Home</Link>
          <Link href="/blog" className="block text-slate-100 hover:text-indigo-300 font-medium">Articles</Link>
          <Link href="/collab" className="block text-slate-100 hover:text-indigo-300 font-medium">Collab</Link>
          <Link href="/support" className="block text-slate-100 hover:text-indigo-300 font-medium">support</Link>
        </nav>
      )}
    </header>
  );
}
