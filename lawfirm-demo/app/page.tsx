import KlingVideo from "@/components/KlingVideo";
import AIImage from "@/components/AIImage";
import { getAnimationUrls } from "@/lib/animations";
import { getImageUrls } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";

const practiceAreas = [
  {
    title: "Mergers & Acquisitions",
    desc: "From due diligence through closing, we guide you through every stage of complex transactions with precision and strategic insight.",
    icon: "⚖",
  },
  {
    title: "Corporate Governance",
    desc: "We advise boards, executives, and shareholders on fiduciary duties, compliance frameworks, and structural optimization.",
    icon: "🏛",
  },
  {
    title: "Commercial Litigation",
    desc: "When business disputes arise, our trial-tested litigators protect your interests with skill and determination.",
    icon: "📋",
  },
  {
    title: "Securities & Capital Markets",
    desc: "IPOs, private placements, and regulatory compliance — we navigate the full spectrum of capital market transactions.",
    icon: "📈",
  },
  {
    title: "Employment Law",
    desc: "Protect your business with comprehensive employment policies, executive agreements, and workplace dispute resolution.",
    icon: "🤝",
  },
  {
    title: "Intellectual Property",
    desc: "Secure and monetize your innovations through patent prosecution, trademark registration, and IP licensing strategies.",
    icon: "💡",
  },
];

const attorneys = [
  {
    name: "Eleanor Whitmore",
    title: "Managing Partner",
    practice: "Mergers & Acquisitions",
    education: "Harvard Law, Yale University",
    bio: "Eleanor has led over $40B in M&A transactions across technology, healthcare, and financial services. Her strategic counsel has shaped some of the decade's most consequential corporate deals.",
    initials: "EW",
  },
  {
    name: "James Thornton",
    title: "Senior Partner",
    practice: "Corporate Litigation",
    education: "Columbia Law, Princeton University",
    bio: "A former federal prosecutor, James brings 28 years of courtroom experience to complex commercial disputes. His track record in high-stakes litigation is unmatched.",
    initials: "JT",
  },
  {
    name: "Sophia Kaur",
    title: "Partner",
    practice: "Securities & Capital Markets",
    education: "NYU School of Law, Cornell University",
    bio: "Sophia has guided more than 60 companies through IPOs and secondary offerings. Her deep regulatory expertise and market insight deliver outcomes that matter.",
    initials: "SK",
  },
];

const accolades = [
  { label: "Am Law 100", value: "Ranked" },
  { label: "Chambers USA", value: "Band 1" },
  { label: "Years of Excellence", value: "50+" },
  { label: "Attorneys Nationwide", value: "350+" },
];

export default function Home() {
  const animations = getAnimationUrls();
  const images = getImageUrls();

  const attorneyImages: Record<string, string | undefined> = {
    "Eleanor Whitmore": images.attorney_eleanor,
    "James Thornton": images.attorney_james,
    "Sophia Kaur": images.attorney_sophia,
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#0f1f3d] text-white">
        <div>
          <p
            className="text-lg tracking-[0.15em] uppercase font-light"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Meridian Legal
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8973a] font-light -mt-0.5">
            Attorneys at Law
          </p>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Practice Areas", "Our Team", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm tracking-widest uppercase text-white/70 hover:text-[#b8973a] transition-colors font-sans"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:block px-6 py-2.5 border border-[#b8973a] text-[#b8973a] text-xs tracking-widest uppercase hover:bg-[#b8973a] hover:text-[#0f1f3d] transition-all duration-300"
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          Schedule Consultation
        </a>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #162847 60%, #0f1f3d 100%)" }}
      >
        {/* Kling AI hero animation (lazy-loaded when available) */}
        {animations.hero && (
          <KlingVideo
            videoUrl={animations.hero}
            className="absolute inset-0 w-full h-full"
          />
        )}
        {/* AI hero image (shown when video not available) */}
        {!animations.hero && images.hero && (
          <AIImage
            src={images.hero}
            alt="Courthouse exterior"
            fill
            objectFit="cover"
            priority
            className="absolute inset-0"
          />
        )}
        {/* Overlay for text readability */}
        {(animations.hero || images.hero) && <div className="absolute inset-0 bg-[#0f1f3d]/70" />}
        {/* Decorative vertical line */}
        <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b8973a]/30 to-transparent hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[#b8973a] tracking-[0.4em] uppercase text-xs mb-6"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Established 1974 · New York · London · Singapore
            </p>
            <h1
              className="text-5xl md:text-6xl text-white leading-tight mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Counsel That
              <br />
              <span className="italic text-[#b8973a]">Shapes</span> Outcomes
            </h1>
            <p
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Meridian Legal combines deep sector knowledge, decades of
              experience, and an unwavering commitment to client success. We
              handle the matters that define companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#b8973a] text-[#0f1f3d] text-sm tracking-widest uppercase font-bold hover:bg-[#d4af57] transition-all duration-300"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Schedule Consultation
              </a>
              <a
                href="#practice-areas"
                className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-[#b8973a] hover:text-[#b8973a] transition-all duration-300"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Our Practice Areas
              </a>
            </div>
          </div>

          {/* Stats panel */}
          <div className="grid grid-cols-2 gap-4">
            {accolades.map((a) => (
              <div
                key={a.label}
                className="p-8 border border-[#b8973a]/20 bg-white/5 hover:bg-white/10 transition-all"
              >
                <p
                  className="text-3xl font-light text-[#b8973a] mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {a.value}
                </p>
                <p
                  className="text-xs tracking-widest uppercase text-white/50"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  {a.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <ScrollReveal className="md:col-span-2" direction="left">
            <p
              className="text-[#b8973a] tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Practice Areas
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-6 text-[#0f1f3d]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Sophisticated
              <br />
              <span className="italic">Legal Solutions</span>
            </h2>
            <p
              className="text-[#1a1a2e]/60 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Our attorneys bring technical mastery and business acumen to every
              engagement. We don&apos;t just provide legal advice — we provide
              strategic counsel that drives results.
            </p>
          </ScrollReveal>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
            {practiceAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 80}>
              <div
                className="p-6 border border-[#0f1f3d]/10 hover:border-[#b8973a] hover:bg-[#0f1f3d]/[0.02] transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl mb-3">{area.icon}</div>
                <h3
                  className="font-semibold text-[#0f1f3d] mb-2 group-hover:text-[#b8973a] transition-colors"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-[#1a1a2e]/55 text-sm leading-relaxed"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  {area.desc}
                </p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#b8973a]/30 to-transparent mx-16" />

      {/* Our Team */}
      <section id="our-team" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-[#b8973a] tracking-[0.3em] uppercase text-xs mb-4"
            style={{ fontFamily: "Helvetica Neue, sans-serif" }}
          >
            Leadership
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#0f1f3d]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our Attorneys
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {attorneys.map((attorney, i) => (
            <ScrollReveal key={attorney.name} delay={i * 120}>
            <div
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#0f1f3d]/5 mb-6 flex items-center justify-center relative overflow-hidden hover:bg-[#0f1f3d]/10 transition-all">
                {attorneyImages[attorney.name] ? (
                  <AIImage
                    src={attorneyImages[attorney.name]}
                    alt={`${attorney.name}, ${attorney.title}`}
                    fill
                    objectFit="cover"
                  />
                ) : (
                  <span
                    className="text-6xl font-light text-[#b8973a]/40"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {attorney.initials}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b8973a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <p
                className="text-[#b8973a] text-xs tracking-widest uppercase mb-1"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                {attorney.practice}
              </p>
              <h3
                className="text-xl font-semibold text-[#0f1f3d] mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {attorney.name}
              </h3>
              <p
                className="text-[#1a1a2e]/50 text-sm mb-4"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                {attorney.title} · {attorney.education}
              </p>
              <p
                className="text-[#1a1a2e]/60 text-sm leading-relaxed"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                {attorney.bio}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#b8973a]/30 to-transparent mx-16" />

      {/* About / Values */}
      <section
        id="about"
        className="py-24 px-6 md:px-16 bg-[#0f1f3d] text-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p
              className="text-[#b8973a] tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Our Firm
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              50 Years of
              <br />
              <span className="italic text-[#b8973a]">Trusted Counsel</span>
            </h2>
            <p
              className="text-white/60 leading-relaxed mb-6"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Since 1974, Meridian Legal has been the firm of choice for
              corporations navigating the most complex legal and regulatory
              landscapes. From our offices in New York, London, and Singapore,
              we serve clients across every major industry and jurisdiction.
            </p>
            <p
              className="text-white/60 leading-relaxed mb-10"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              We believe that exceptional legal representation is built on
              three principles: expertise, integrity, and relentless client
              advocacy. Every matter we take receives our full attention and
              the depth of our collective experience.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { val: "50+", label: "Years in Practice" },
                { val: "$80B+", label: "Transactions Closed" },
                { val: "3", label: "Global Offices" },
              ].map((s) => (
                <div key={s.val}>
                  <p
                    className="text-2xl text-[#b8973a]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {s.val}
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase text-white/40 mt-1"
                    style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
          <div className="relative">
            <div className="p-10 border border-[#b8973a]/20 bg-white/5">
              <p
                className="text-[#b8973a] tracking-[0.3em] uppercase text-xs mb-6"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Client Commitment
              </p>
              <p
                className="text-3xl italic leading-relaxed text-white/90"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;We measure our success not by the complexity of the
                matters we handle, but by the outcomes we achieve for our
                clients.&rdquo;
              </p>
              <p
                className="text-[#b8973a] mt-8 text-sm tracking-widest uppercase"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                — Eleanor Whitmore, Managing Partner
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#b8973a]/10 pointer-events-none" />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <p
              className="text-[#b8973a] tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Get in Touch
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#0f1f3d] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Schedule a
              <br />
              <span className="italic">Consultation</span>
            </h2>
            <p
              className="text-[#1a1a2e]/60 leading-relaxed mb-10"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Initial consultations are confidential. Our attorneys will review
              your matter and provide a frank assessment of how we can help.
            </p>
            <div className="space-y-4">
              {[
                { label: "New York (HQ)", value: "One World Trade Center, Suite 8500" },
                { label: "London", value: "1 Canada Square, Canary Wharf" },
                { label: "Singapore", value: "8 Marina Boulevard, Marina Bay" },
                { label: "Phone", value: "+1 (212) 555-0174" },
                { label: "Email", value: "inquiries@meridianlegal.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span
                    className="text-xs tracking-widest uppercase text-[#b8973a] w-24 shrink-0 pt-0.5"
                    style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[#1a1a2e]/70 text-sm"
                    style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-[#1a1a2e]/50 mb-2"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[#0f1f3d]/20 bg-white focus:outline-none focus:border-[#b8973a] transition-colors text-sm"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-[#1a1a2e]/50 mb-2"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[#0f1f3d]/20 bg-white focus:outline-none focus:border-[#b8973a] transition-colors text-sm"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-xs tracking-widest uppercase text-[#1a1a2e]/50 mb-2"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Company / Organization
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#0f1f3d]/20 bg-white focus:outline-none focus:border-[#b8973a] transition-colors text-sm"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              />
            </div>
            <div>
              <label
                className="block text-xs tracking-widest uppercase text-[#1a1a2e]/50 mb-2"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-[#0f1f3d]/20 bg-white focus:outline-none focus:border-[#b8973a] transition-colors text-sm"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              />
            </div>
            <div>
              <label
                className="block text-xs tracking-widest uppercase text-[#1a1a2e]/50 mb-2"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Practice Area
              </label>
              <select
                className="w-full px-4 py-3 border border-[#0f1f3d]/20 bg-white focus:outline-none focus:border-[#b8973a] transition-colors text-sm text-[#1a1a2e]/60"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                <option value="">Select a practice area</option>
                {[
                  "Mergers & Acquisitions",
                  "Corporate Governance",
                  "Commercial Litigation",
                  "Securities & Capital Markets",
                  "Employment Law",
                  "Intellectual Property",
                  "Other",
                ].map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-xs tracking-widest uppercase text-[#1a1a2e]/50 mb-2"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Brief Description of Matter
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-[#0f1f3d]/20 bg-white focus:outline-none focus:border-[#b8973a] transition-colors text-sm resize-none"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                placeholder="Please describe your legal matter..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#0f1f3d] text-white text-xs tracking-widest uppercase hover:bg-[#162847] transition-all duration-300"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Request Consultation
            </button>
            <p
              className="text-xs text-[#1a1a2e]/40 text-center"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              All communications are protected by attorney-client privilege
            </p>
          </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 bg-[#0f1f3d] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-base tracking-[0.15em] uppercase font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Meridian Legal
            </p>
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-[#b8973a] font-light"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Attorneys at Law
            </p>
          </div>
          <div
            className="flex items-center gap-6 text-xs text-white/40"
            style={{ fontFamily: "Helvetica Neue, sans-serif" }}
          >
            {[
              "Privacy Policy",
              "Terms of Use",
              "Attorney Advertising",
              "Disclaimer",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#b8973a] transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </div>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "Helvetica Neue, sans-serif" }}
          >
            © {new Date().getFullYear()} Meridian Legal LLP
          </p>
        </div>
      </footer>
    </div>
  );
}
