'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const upiId = 'priysnshu2410@okhdfcbank'; // 🔁 replace with your actual UPI ID

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    alert('✅ UPI ID copied!');
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`relative w-80 h-96 transition-transform duration-700 transform-style preserve-3d`}
        onClick={() => setFlipped(!flipped)}
        style={{
          perspective: '1000px',
        }}
      >
        {/* Card Inner */}
        <div
          className={`w-full h-full relative transition-transform duration-700 ${
            flipped ? 'rotate-y-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
            <img
              src="/Video game developer-rafiki.svg" // 🔁 place your image in `/public`
              alt="Support"
              className="w-[180px] h-[180px] mb-4"
            />
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Buy Me a Coffee ☕
            </h2>
            <p className="text-slate-600 text-sm">
              Tap to reveal UPI QR and show your support 💙
            </p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-800 text-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
            <img
              src="/Screenshot 2025-06-16 194215.png"
              alt="UPI QR"
              className="w-36 h-36 mb-4 rounded border border-slate-500"
            />
            <p className="text-sm mb-2">
              UPI ID: <span className="font-mono">{upiId}</span>
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className="flex items-center gap-2 text-indigo-400 border border-indigo-400 px-3 py-1 rounded-lg hover:bg-indigo-500 hover:text-white transition text-sm mt-2"
            >
              <Copy size={16} /> Copy UPI ID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
