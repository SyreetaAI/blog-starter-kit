import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center mb-10 lg:mb-0">
             {/* Your Photo */}
            <img 
              src="/assets/blog/authors/syreeta.jpg" 
              alt="Syreeta Craig" 
              className="w-20 h-20 rounded-full mr-6 border-2" 
              style={{ borderColor: '#F97316' }}
            />
            <h3 className="text-4xl font-bold tracking-tighter" style={{ color: '#0F172A' }}>
              Syreeta<span style={{ color: '#F97316' }}>.ai</span>
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://linkedin.com/in/syreetacraig"
              className="px-8 py-3 font-bold text-white transition-opacity hover:opacity-90 text-center"
              style={{ backgroundColor: '#F97316' }}
            >
              Connect on LinkedIn
            </a>
            <a
              href="YOUR_GOOGLE_CALENDAR_LINK"
              className="px-8 py-3 font-bold text-white transition-opacity hover:opacity-90 text-center"
              style={{ backgroundColor: '#F97316' }}
            >
              Schedule Strategy Audit
            </a>
          </div>
        </div>
        <p className="pb-10 text-center text-sm text-gray-400">© 2026 Syreeta.ai Advisory Services</p>
      </Container>
    </footer>
  );
}
