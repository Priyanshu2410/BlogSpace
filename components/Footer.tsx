export default function Footer() {
    return (
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm">
          © {new Date().getFullYear()} BlogSpace — Built by <span className="text-indigo-400 font-semibold">Priyanshu</span>
        </div>
      </footer>
    );
  }
  