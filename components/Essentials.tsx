export default function Essentials() {
    const highlights = [
      {
        title: 'Built with Next.js',
        description: 'Optimized performance, routing, and scalability out of the box.',
        icon: '/nextjs-fill-svgrepo-com.svg',
      },
      {
        title: 'Developer Friendly',
        description: 'Content tailored for frontend, backend, and fullstack devs.',
        icon: '/software-developer-work-on-computer-programmer-coder-svgrepo-com.svg',
      },
      {
        title: 'Clean & Minimal UI',
        description: 'No distractions. Just pure content — fast and focused.',
        icon: '/ui-basic-energy-app-battery-full-battery-svgrepo-com.svg',
      },
    ];
  
    return (
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why BlogSpace?</h2>
          <p className="text-slate-600 mb-12">Crafted with care for devs who value clarity, speed, and growth.</p>
  
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-slate-200"
              >
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  