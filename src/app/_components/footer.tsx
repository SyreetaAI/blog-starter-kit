import Container from "@/app/_components/container";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#F97316]">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-start">
          {/* Left Section: Core Advisory Services */}
          <div className="lg:w-2/3 pr-8">
            <h3 className="text-[#F97316] text-xl font-extrabold tracking-tighter mb-6 uppercase">
              Core Advisory Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-white">
              <ul className="space-y-2">
                <li className="hover:text-[#F97316] cursor-default">◆ Supply Chain Digital Transformation</li>
                <li className="hover:text-[#F97316] cursor-default">◆ Fractional CPO & Strategic Advisory</li>
                <li className="hover:text-[#F97316] cursor-default">◆ EBITDA Recovery & Margin Strategy</li>
                <li className="hover:text-[#F97316] cursor-default">◆ Forensic Spend & Leakage Audits</li>
                <li className="hover:text-[#F97316] cursor-default">◆ Procurement AI & Agentic Governance</li>
              </ul>
              <ul className="space-y-2">
                <li className="hover:text-[#F97316] cursor-default">◆ Strategic Sourcing & Category Management</li>
                <li className="hover:text-[#F97316] cursor-default">◆ Contract Compliance & Risk Audit</li>
                <li className="hover:text-[#F97316] cursor-default">◆ Sourcing Managed Services (MSP)</li>
                <li className="hover:text-[#F97316] cursor-default">◆ Prosci® Digital Change Management</li>
                <li className="hover:text-[#F97316] cursor-default">◆ ESG & Policy Framework Development</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Branding & CTA */}
          <div className="lg:w-1/3 mt-10 lg:mt-0 flex flex-col items-start lg:items-end w-full">
            <div className="text-3xl font-bold tracking-tighter mb-4 text-white">
              Syreeta<span className="text-[#F97316]">.ai</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 lg:text-right">
              Architecting autonomous procurement protocols and recovering latent EBITDA for global enterprises.
            </p>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34210gI9XZE7viIoL-HVrLMdOY0G_BSNkAb8VhmlxsNWqJv3cxBJoRrJeTJ-4rf1glFdO-jnjq"
              className="bg-[#F97316] hover:bg-white text-[#0F172A] font-black py-3 px-8 transition-colors duration-200"
            >
              STRATEGY SESSION
            </a>
          </div>
        </div>

        {/* Bottom Section: Industries Served */}
        <div className="border-t border-slate-800 py-8">
          <h4 className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-4 text-center">
            Industries Served
          </h4>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed text-center max-w-4xl mx-auto uppercase tracking-tighter">
            Financial Services | Pharmaceuticals | Insurance | Manufacturing | Logistics | Energy | Private Equity | Tech Startups | E-commerce | Non-Profit | Higher Education
          </p>
          <div className="mt-8 text-center text-[10px] text-slate-500 uppercase tracking-widest">
            © 2026 Syreeta.ai | Spend Intelligence with Intent
          </div>
        </div>
      </Container>
    </footer>
  );
}
