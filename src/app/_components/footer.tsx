import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-neutral-200 mt-20">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Syreeta<span style={{ color: '#F97316' }}>.ai</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
              I use AI-driven protocols to surface latent spend leakage, followed by strategic procurement advisory to architect a resilient, EBITDA-positive procurement ecosystem.
            </p>
            {/* Credly Badge Placeholder */}
            <div className="flex items-center gap-4">
               <img src="/assets/blog/authors/credly.png" alt="Prosci® Certified" className="h-16 w-auto opacity-90" />
               <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Prosci® Certified Change Management</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-1/3">
            <a
              href="/assets/resume/Syreeta_Craig_Resume.pdf"
              className="py-3 px-6 rounded-md font-bold text-center transition-transform hover:scale-105"
              style={{ backgroundColor: '#F97316', color: '#0F172A' }}
            >
              Download Executive Resume
            </a>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34210gI9XZE7viIoL-HVrLMdOY0G_BSNkAb8VhmlxsNWqJv3cxBJoRrJeTJ-4rf1glFdO-jnjq"
              className="py-3 px-6 rounded-md font-bold text-center transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#F97316', color: '#0F172A' }}
            >
              Book Discovery Call
            </a>
          </div>
        </div>
        <div className="pb-8 border-t pt-8 flex justify-between text-xs font-bold text-slate-400 uppercase tracking-tighter">
          <p>© 2026 Syreeta.ai Advisory Services. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
