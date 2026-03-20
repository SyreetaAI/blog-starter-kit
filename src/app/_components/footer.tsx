import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-neutral-200 mt-20">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-3xl font-bold" style={{ color: '#0F172A' }}>
              Syreeta<span style={{ color: '#F97316' }}>.ai</span>
            </h3>
            <p className="text-slate-500 font-medium">Forensic Capital Integrity & Agentic Governance</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34210gI9XZE7viIoL-HVrLMdOY0G_BSNkAb8VhmlxsNWqJv3cxBJoRrJeTJ-4rf1glFdO-jnjq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:opacity-90 shadow-md"
              style={{ backgroundColor: '#F97316' }}
            >
              Schedule Strategy Audit
            </a>
          </div>
        </div>
        <div className="pb-10 text-xs text-slate-400">
           © 2026 <span style={{ color: '#0F172A', fontWeight: 'bold' }}>Syreeta</span>
           <span style={{ color: '#F97316', fontWeight: 'bold' }}>.ai</span> | Built for the Future of Procurement.
        </div>
      </Container>
    </footer>
  );
}
