import Image from "next/image";
import { getImageUrls } from "@/lib/images";

const portfolioItems = [
  {
    name: "Bella Vista",
    category: "Restaurant & Hospitality",
    description:
      "A Michelin-caliber dining experience translated to the web. Dark, warm, evocative — every pixel earns a reservation.",
    tags: ["Branding", "Reservations", "Menu"],
    accent: "#c9a84c",
    bg: "linear-gradient(135deg, #1a1209 0%, #2a1e0a 100%)",
  },
  {
    name: "Nexus AI",
    category: "SaaS & Technology",
    description:
      "Analytics platform landing page built for conversion. Real-time metrics, feature grids, pricing — the full funnel.",
    tags: ["SaaS", "Pricing", "Analytics"],
    accent: "#6366f1",
    bg: "linear-gradient(135deg, #06060f 0%, #0f0f1e 100%)",
  },
  {
    name: "Meridian Legal",
    category: "Professional Services",
    description:
      "Authoritative legal presence that commands trust. Attorney profiles, practice areas, consultation booking.",
    tags: ["Law Firm", "Trust", "Leads"],
    accent: "#b8973a",
    bg: "linear-gradient(135deg, #0f1f3d 0%, #162847 100%)",
  },
];

const services = [
  {
    tier: "Starter",
    price: "$1,500",
    cadence: "one-time",
    tagline: "Get online fast. Look great immediately.",
    features: [
      "Up to 5 pages",
      "Mobile-first responsive design",
      "Contact form + Google Maps",
      "Basic SEO (meta, sitemap, robots)",
      "Deployed to Vercel",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    tier: "Professional",
    price: "$4,500",
    cadence: "one-time",
    tagline: "A serious website for a serious business.",
    features: [
      "Up to 12 pages",
      "Custom UI / brand design system",
      "AI-generated imagery (Imagen 4)",
      "Advanced SEO + performance tuning",
      "Booking / inquiry flow",
      "CMS integration (Sanity or Contentful)",
      "3 rounds of revisions",
      "3–4 week delivery",
    ],
    cta: "Most Popular — Book a Call",
    highlighted: true,
  },
  {
    tier: "Premium",
    price: "Custom",
    cadence: "project",
    tagline: "When your website is a competitive advantage.",
    features: [
      "Unlimited pages",
      "Full design system + component library",
      "AI video backgrounds (Kling AI / Veo)",
      "Custom animations",
      "E-commerce or booking engine",
      "Analytics dashboard",
      "Ongoing retainer available",
      "Direct access to our CTO for technical architecture decisions",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30 minutes. We learn your business, goals, and what your current site is costing you.",
    gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
  },
  {
    step: "02",
    title: "Design Sprint",
    desc: "We prototype your homepage in 48 hours. You see exactly what you are getting before we build.",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
  {
    step: "03",
    title: "Build & Review",
    desc: "Full build in 2–4 weeks. You review at each milestone. No surprises.",
    gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "We deploy, set up analytics, and hand you the keys. Optional retainer for ongoing updates.",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
];

const stats = [
  { value: "3", label: "Sites launched" },
  { value: "< 3s", label: "Avg load time" },
  { value: "95+", label: "Lighthouse score" },
  { value: "100%", label: "Client satisfaction" },
];

const faqs = [
  {
    q: "Do I need to provide my own content?",
    a: "We handle all AI-generated imagery. You provide the copy; we organize and format it for the web. No stock photos, no lorem ipsum.",
  },
  {
    q: "What technology do you use?",
    a: "Next.js 16, Tailwind CSS 4, deployed to Vercel. Same stack the best startups trust — fast, scalable, and easy to update.",
  },
  {
    q: "Can I update the site myself after launch?",
    a: "Yes. Professional and Premium tiers include a CMS so you can update text and images without touching code.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every project includes a 30-day warranty period for bug fixes after launch. After that, we offer maintenance packages or hourly support.",
  },
];

export default function Home() {
  const images = getImageUrls();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(7,7,15,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
          >
            G
          </div>
          <span className="font-semibold tracking-tight text-lg">Grounded</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Portfolio", "Services", "Process", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--muted)" }}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
        >
          Book a Call
        </a>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {images.hero && (
          <>
            <Image
              src={images.hero}
              alt="Grounded Web Design"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(7,7,15,0.8) 0%, rgba(7,7,15,0.6) 40%, rgba(7,7,15,0.95) 100%)",
              }}
            />
          </>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative text-center px-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Now taking new clients for April 2026
          </div>

          <h1
            className="font-bold leading-[1.05] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Your website should
            <br />
            <span className="gradient-text">win you business</span>
          </h1>

          <p
            className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            We build fast, beautiful websites for restaurants, startups, and
            professional firms — designed to convert visitors into clients from
            day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                boxShadow: "0 0 40px rgba(99,102,241,0.3)",
              }}
            >
              Book a Free Walkthrough →
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl font-medium transition-colors hover:text-white"
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              See our work
            </a>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto py-8 px-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold mb-1 gradient-text">{s.value}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
            Portfolio
          </p>
          <h2 className="font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Work we are proud of
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Three industries. Three completely different design languages. One standard: exceptional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl overflow-hidden card-hover group"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            >
              <div
                className="relative h-52 flex items-center justify-center"
                style={{ background: item.bg }}
              >
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${item.accent}22`,
                    border: `1px solid ${item.accent}44`,
                    color: item.accent,
                  }}
                >
                  {item.category}
                </div>
                <span
                  className="text-4xl font-bold opacity-20"
                  style={{ color: item.accent, fontFamily: "Georgia, serif" }}
                >
                  {item.name[0]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs"
                      style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-sm font-medium transition-colors"
                  style={{ color: item.accent }}
                >
                  View live site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services / Pricing */}
      <section
        id="services"
        className="py-28 px-6"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
              Services & Pricing
            </p>
            <h2 className="font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Straightforward pricing.
              <br />No surprises.
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              Every project is fixed-price. You know exactly what you are getting before we start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((plan) => (
              <div
                key={plan.tier}
                className="relative rounded-2xl p-8 card-hover flex flex-col"
                style={{
                  border: plan.highlighted
                    ? "1px solid rgba(99,102,241,0.5)"
                    : "1px solid var(--border)",
                  background: plan.highlighted
                    ? "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.05))"
                    : "var(--surface)",
                  boxShadow: plan.highlighted ? "0 0 60px rgba(99,102,241,0.12)" : "none",
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
                    {plan.tier}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-sm" style={{ color: "var(--muted)" }}>
                        /{plan.cadence}
                      </span>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{plan.tagline}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 shrink-0" style={{ color: "#818cf8" }}>✓</span>
                      <span style={{ color: "rgba(240,240,250,0.8)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={
                    plan.highlighted
                      ? { background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "white" }
                      : { border: "1px solid var(--border)", color: "var(--muted)" }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
            How It Works
          </p>
          <h2 className="font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            From zero to live in weeks,
            <br />not months.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {process.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-2xl card-hover"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            >
              <p
                className="text-5xl font-bold mb-4 leading-none"
                style={{
                  background: step.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.step}
              </p>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote break */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-bold leading-tight mb-6 tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            &ldquo;A great website is the
            <br />
            <span className="gradient-text">cheapest salesperson</span>
            <br />
            you will ever hire.&rdquo;
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Most small businesses leave money on the table every day with a slow, forgettable website. We fix that.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>FAQ</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Common questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-2xl"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            >
              <h3 className="font-semibold mb-3">{faq.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="max-w-3xl mx-auto text-center rounded-2xl py-16 px-8"
          style={{
            border: "1px solid rgba(99,102,241,0.25)",
            background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(168,85,247,0.05) 100%)",
            boxShadow: "0 0 80px rgba(99,102,241,0.08)",
          }}
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#818cf8" }}>
            Ready to get started?
          </p>
          <h2 className="font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Let&apos;s build something
            <br />
            <span className="gradient-text">worth finding.</span>
          </h2>
          <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Book a free 30-minute walkthrough. We will show you exactly how we would approach your
            project — no obligation.
          </p>

          <form className="space-y-4 text-left max-w-md mx-auto mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Alex"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Johnson"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>Email</label>
              <input
                type="email"
                placeholder="alex@yourbusiness.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text)" }}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                What kind of site do you need?
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
                style={{ background: "rgba(15,15,26,0.9)", border: "1px solid var(--border)", color: "rgba(240,240,250,0.6)" }}
              >
                <option value="">Select a category</option>
                <option value="restaurant">Restaurant / Hospitality</option>
                <option value="startup">Startup / SaaS</option>
                <option value="professional">Professional Services</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                Tell us about your project
              </label>
              <textarea
                rows={4}
                placeholder="We are a new restaurant opening in March and need a full site with reservations..."
                className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all resize-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text)" }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.01] hover:opacity-95"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              Book a Free Walkthrough →
            </button>
          </form>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            No spam. No sales pressure. Just a real conversation about your website.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              G
            </div>
            <span className="font-semibold">Grounded Web Design</span>
          </div>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            {["Portfolio", "Services", "Process", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <p className="text-sm" style={{ color: "rgba(240,240,250,0.3)" }}>
            © {new Date().getFullYear()} Grounded Web Design
          </p>
        </div>
      </footer>
    </div>
  );
}
