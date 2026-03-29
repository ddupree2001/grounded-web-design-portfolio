import KlingVideo from "@/components/KlingVideo";
import AIImage from "@/components/AIImage";
import { getAnimationUrls } from "@/lib/animations";
import { getImageUrls } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "⚡",
    title: "Real-Time Analytics",
    desc: "Process millions of data points per second with sub-100ms latency. See your business as it happens.",
  },
  {
    icon: "🧠",
    title: "Predictive Intelligence",
    desc: "Our models forecast trends before they emerge. Reduce churn, increase revenue, outpace competitors.",
  },
  {
    icon: "🔄",
    title: "Automated Workflows",
    desc: "Connect your entire stack. Trigger actions, send alerts, and update records — all without writing code.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified. End-to-end encryption. GDPR, HIPAA, and CCPA compliant out of the box.",
  },
  {
    icon: "🌐",
    title: "Global Infrastructure",
    desc: "17 data centers worldwide. 99.99% uptime SLA. Your data stays close to your users.",
  },
  {
    icon: "📊",
    title: "Custom Dashboards",
    desc: "Drag-and-drop dashboard builder. Share insights with your team with a single click.",
  },
];

const metrics = [
  { value: "10B+", label: "Events processed daily" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 50ms", label: "Average latency" },
  { value: "2,400+", label: "Enterprise customers" },
];

const testimonials = [
  {
    quote:
      "Nexus AI cut our analysis time by 80%. We shipped three features in the time it used to take us to just understand the data.",
    author: "Priya Sharma",
    role: "Head of Product",
    company: "Stripe",
    avatar: "PS",
  },
  {
    quote:
      "The predictive churn model alone paid for the entire year's subscription in the first month.",
    author: "Marcus Chen",
    role: "VP Engineering",
    company: "Airbnb",
    avatar: "MC",
  },
  {
    quote:
      "Every analytics tool promises insights. Nexus actually delivers them. The ROI is undeniable.",
    author: "Sofia Reyes",
    role: "Chief Data Officer",
    company: "Shopify",
    avatar: "SR",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49",
    desc: "Perfect for small teams getting started with analytics",
    features: [
      "Up to 1M events/month",
      "5 dashboards",
      "7-day data retention",
      "Email support",
      "3 integrations",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$199",
    desc: "For scaling businesses that need real-time intelligence",
    features: [
      "Up to 50M events/month",
      "Unlimited dashboards",
      "90-day data retention",
      "Priority support",
      "Unlimited integrations",
      "Predictive analytics",
      "Custom alerts",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations with advanced security and compliance needs",
    features: [
      "Unlimited events",
      "Custom retention",
      "Dedicated infrastructure",
      "24/7 dedicated support",
      "SSO & SAML",
      "Custom SLA",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Home() {
  const animations = getAnimationUrls();
  const images = getImageUrls();
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#06060f]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
            N
          </div>
          <span className="font-bold text-xl tracking-tight">Nexus AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#f0f0ff]/60 hover:text-[#f0f0ff] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:block text-sm text-[#f0f0ff]/70 hover:text-[#f0f0ff] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition-colors"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            alt="Nexus AI data visualization"
            fill
            objectFit="cover"
            priority
            className="absolute inset-0"
          />
        )}
        {/* Background effects / overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: animations.hero || images.hero
              ? "rgba(6,6,15,0.65)"
              : "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative text-center px-6 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Announcing Nexus AI 3.0 — Now with Vision Models
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Turn data into
            <br />
            <span className="gradient-text">decisions, instantly</span>
          </h1>

          <p className="text-xl text-[#f0f0ff]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nexus AI gives product and engineering teams a unified analytics
            platform with real-time insights, predictive modeling, and automated
            workflows — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 font-semibold transition-all duration-300 text-white"
            >
              Start free trial →
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-[#f0f0ff]/70 hover:text-[#f0f0ff] font-medium transition-all duration-300"
            >
              Watch demo
            </a>
          </div>

          {/* Social proof */}
          <p className="text-[#f0f0ff]/40 text-sm mb-4">
            Trusted by engineering teams at
          </p>
          <div className="flex items-center justify-center gap-8 opacity-40">
            {[
              "Stripe",
              "Airbnb",
              "Shopify",
              "Vercel",
              "Linear",
              "Notion",
            ].map((company) => (
              <span
                key={company}
                className="text-sm font-semibold tracking-widest uppercase text-[#f0f0ff]"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.value} delay={i * 80}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {m.value}
              </p>
              <p className="text-[#f0f0ff]/50 text-sm">{m.label}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Product screenshot (shown when AI image is available) */}
      {images.dashboard && (
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
              Product
            </p>
            <h2 className="text-3xl font-bold">See it in action</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
            <AIImage
              src={images.dashboard}
              alt="Nexus AI analytics dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        </section>
      )}

      {/* Features */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Platform
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to
            <br />
            understand your product
          </h2>
          <p className="text-[#f0f0ff]/50 text-xl max-w-xl mx-auto">
            One platform. Every insight. Infinite possibilities.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 70}>
            <div
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-[#f0f0ff]/50 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Loved by the best teams
            </h2>
            <p className="text-[#f0f0ff]/50 text-xl">
              Don&apos;t take our word for it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 100}>
              <div
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              >
                <p className="text-[#f0f0ff]/80 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.author}</p>
                    <p className="text-[#f0f0ff]/40 text-xs">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[#f0f0ff]/50 text-xl">
            No hidden fees. No per-seat pricing. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
            <div
              className={`p-8 rounded-2xl border transition-all duration-300 relative ${
                plan.highlighted
                  ? "border-indigo-500 bg-indigo-500/[0.08] glow-border"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-xs font-medium">
                  Most popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-[#f0f0ff]/40 text-sm">/month</span>
                  )}
                </div>
                <p className="text-[#f0f0ff]/50 text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-indigo-400">✓</span>
                    <span className="text-[#f0f0ff]/70">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 rounded-xl font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "border border-white/10 hover:border-white/20 text-[#f0f0ff]/70 hover:text-[#f0f0ff]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#f0f0ff]/60 text-xl mb-8">
            Join 2,400+ teams using Nexus AI to make faster, smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 font-semibold transition-all duration-300 text-white"
            >
              Start free trial — no credit card
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-xl text-[#f0f0ff]/60 hover:text-[#f0f0ff] font-medium transition-colors"
            >
              Talk to sales →
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              N
            </div>
            <span className="font-semibold">Nexus AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#f0f0ff]/40">
            {["Privacy", "Terms", "Security", "Status"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#f0f0ff] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-[#f0f0ff]/30 text-sm">
            © {new Date().getFullYear()} Nexus AI, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
