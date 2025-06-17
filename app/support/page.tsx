import FlipCard from '@/components/FlipCard';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-100 text-slate-900 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
          Support My Work
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12">
          If you enjoy my content and would like to help me keep creating, feel free to support below 💙 Every contribution means a lot!
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white/80 shadow-xl rounded-2xl p-8 backdrop-blur-md ring-1 ring-slate-200 hover:shadow-2xl transition-all duration-300">
        <FlipCard />
      </div>

      <footer className="mt-20 text-center text-lg text-slate-500">
        Made with 💙 by someone who believes in community-driven growth.
      </footer>
    </div>
  );
}
