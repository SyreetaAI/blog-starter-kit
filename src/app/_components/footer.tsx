import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-neutral-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Photo & Brand */}
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#F97316] shadow-lg mr-6 bg-[#0F172A]">
              <img 
                src="/assets/blog/authors/syreeta.jpg" 
                alt="Syreeta Craig" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold" style={{ color: '#0F172A' }}>
                Syreeta<span style={{ color: '#F97316' }}>.ai</span>
              </h3>
              <p className="text-slate-500 font-medium text-sm">Advisory Services</p>
            </div>
          </div>

          {/* Right Side: CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href="https://linkedin.com/in/syreetacraig"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-105 text-center shadow-md"
              style={{ backgroundColor: '#F97316' }}
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/YOUR_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-105 text-center shadow-md"
              style={{ backgroundColor: '#0F172A' }}
            >
              Schedule Strategy Audit
            </a>
          </div>
        </div>

        <div className="pb-10 flex justify-between items-center text-xs text-slate-400 font-medium">
          <div>
            © 2026 <span style={{ color: '#0F172A', fontWeight: 'bold' }}>Syreeta</span>
            <span style={{ color: '#F97316', fontWeight: 'bold' }}>.ai</span> | All Rights Reserved
          </div>
          <p>Architecting Agentic Governance</p>
        </div>
      </Container>
    </footer>
  );
}
