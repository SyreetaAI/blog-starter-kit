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
            <p className="text-slate-500 font-medium italic">Procurement Advisory Services</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/assets/resume/Syreeta_Craig_Resume.pdf" 
              target="_blank"
              className="px-8 py-4 rounded-lg font-bold border-2 transition-all hover:bg-slate-100 text-center"
              style={{ borderColor: '#0F172A', color: '#0F172A' }}
            >
              Download Resume
            </a>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ34210gI9XZE7viIoL-HVrLMdOY0G_BSNkAb8VhmlxsNWqJv3cxBJoRrJeTJ-4rf1glFdO-jnjq"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:opacity-90 shadow-lg text-center"
              style={{ backgroundColor: '#F97316' }}
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
