import Container from "./container";

export default function Footer() {
  const services = [
    "Agentic Procurement Governance",
    "Forensic Spend Leakage Audits",
    "EBITDA Recovery Strategy",
    "Autonomous Sourcing Protocols",
    "C-Suite Procurement Advisory",
    "Supply Chain Digital Transformation"
  ];

  return (
    <footer className="bg-slate-50 border-t border-neutral-200 mt-20">
      <Container>
        <div className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand & Value Prop */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Syreeta<span style={{ color: '#F97316' }}>.ai</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              AI-driven protocols surfacing latent spend leakage to architect resilient, EBITDA-positive ecosystems.
            </p>
          </div>

          {/* SEO Services List */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-slate-400">Core Advisory Services</h4>
            <ul className="text-sm text-slate-500 space-y-2">
              {services.map((service) => (
                <li key={service} className="hover:text-[#F97316] transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Sized-Matched CTAs */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-1 text-slate-400">Next Steps</h4>
            <a
              href="/assets/resume/Syreeta_Craig_Resume.pdf"
              className="py-3 px-6 rounded font-bold text-center text-sm shadow-sm transition-all hover:opacity-90"
              style={{ backgroundColor: '#F97316', color: '#0F172A' }}
            >
              DOWNLOAD RESUME
            </a>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34210gI9XZE7viIoL-HVrLMdOY0G_BSNkAb8VhmlxsNWqJv3cxBJoRrJeTJ-4rf1glFdO-jnjq"
              className="py-3 px-6 rounded font-bold text-center text-sm shadow-md transition-all hover:opacity-90"
              style={{ backgroundColor: '#F97316', color: '#0F172A' }}
            >
              BOOK DISCOVERY CALL
            </a>
          </div>
        </div>

        <div className="pb-8 border-t pt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          © 2026 Syreeta.ai Advisory Services | All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
