export function Intro() {
  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b py-4 mb-12">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
            <img 
              src="/assets/blog/authors/syreeta.jpg" 
              alt="Syreeta Craig" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none" style={{ color: '#0F172A' }}>
              Syreeta<span style={{ color: '#F97316' }}>.ai</span>
            </h1>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-500 mt-1">
              Spend Intelligence Meets Advisory
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="https://linkedin.com/in/syreetacraig" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-[#0F172A] hover:fill-[#0077b5] transition-colors" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34210gI9XZE7viIoL-HVrLMdOY0G_BSNkAb8VhmlxsNWqJv3cxBJoRrJeTJ-4rf1glFdO-jnjq"
            className="px-6 py-2 rounded-full font-bold text-white text-sm transition-transform hover:scale-105 shadow-md"
            style={{ backgroundColor: '#0F172A' }}
          >
            Book Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
