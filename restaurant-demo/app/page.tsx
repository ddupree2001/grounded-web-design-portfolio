import Link from "next/link";
import KlingVideo from "@/components/KlingVideo";
import AIImage from "@/components/AIImage";
import { getAnimationUrls } from "@/lib/animations";
import { getImageUrls } from "@/lib/images";

const navLinks = ["Menu", "About", "Reservations", "Contact"];

const menuHighlights = [
  {
    category: "Antipasti",
    items: [
      {
        name: "Burrata Pugliese",
        desc: "Creamy burrata, heirloom tomatoes, aged balsamic, fresh basil",
        price: "$18",
      },
      {
        name: "Carpaccio di Manzo",
        desc: "Paper-thin beef tenderloin, truffle aioli, arugula, parmigiano",
        price: "$22",
      },
      {
        name: "Polipo alla Griglia",
        desc: "Grilled octopus, Calabrian chili, capers, lemon oil",
        price: "$26",
      },
    ],
  },
  {
    category: "Pasta",
    items: [
      {
        name: "Tagliatelle al Ragù",
        desc: "Hand-rolled pasta, 8-hour Bolognese, parmigiano reggiano",
        price: "$32",
      },
      {
        name: "Ravioli al Tartufo",
        desc: "Ricotta & black truffle filled pasta, sage butter, hazelnuts",
        price: "$38",
      },
      {
        name: "Spaghetti alle Vongole",
        desc: "Manila clams, dry vermouth, garlic, parsley, chili",
        price: "$34",
      },
    ],
  },
  {
    category: "Secondi",
    items: [
      {
        name: "Branzino in Crosta",
        desc: "Herb-crusted sea bass, fennel, cherry tomatoes, white wine",
        price: "$44",
      },
      {
        name: "Filetto di Manzo",
        desc: "28-day aged filet, rosemary jus, roasted garlic, seasonal greens",
        price: "$52",
      },
      {
        name: "Agnello al Forno",
        desc: "Slow-roasted rack of lamb, mint gremolata, cannellini purée",
        price: "$48",
      },
    ],
  },
];

const testimonials = [
  {
    text: "The finest Italian dining outside of Rome. Every dish tells a story.",
    author: "James M.",
    role: "Food & Travel Magazine",
  },
  {
    text: "An extraordinary evening. The truffle ravioli alone is worth the trip.",
    author: "Sarah L.",
    role: "Michelin Guide",
  },
  {
    text: "Impeccable service, breathtaking flavors. Our new special occasion restaurant.",
    author: "The Andersons",
    role: "Returning Guests",
  },
];

const stats = [
  { val: "37+", label: "Years of Excellence" },
  { val: "3★", label: "Michelin Stars" },
  { val: "200+", label: "Wine Labels" },
];

export default function Home() {
  const animations = getAnimationUrls();
  const images = getImageUrls();
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-gradient-to-b from-black/80 to-transparent">
        <span className="font-serif-display text-2xl tracking-[0.2em] uppercase">
          Bella Vista
        </span>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-widest uppercase text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#reservations"
            className="px-6 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#1a1209] transition-all duration-300"
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #1a1209 0%, #2a1e0a 50%, #1a1209 100%)",
        }}
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
            alt="Bella Vista restaurant ambiance"
            fill
            objectFit="cover"
            priority
            className="absolute inset-0"
          />
        )}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-[#1a1209]/70" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] uppercase text-sm mb-6">
            Est. 1987 · Milano, Italia
          </p>
          <h1 className="font-serif-display text-6xl md:text-8xl leading-none mb-8">
            Where Every
            <br />
            <span className="italic text-[#c9a84c]">Meal</span> Becomes
            <br />a Memory
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Authentic Italian cuisine crafted from seasonal ingredients,
            time-honored recipes, and a passion for the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservations"
              className="px-10 py-4 bg-[#c9a84c] text-[#1a1209] text-sm tracking-widest uppercase font-bold hover:bg-[#e8c96a] transition-all duration-300"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-10 py-4 border border-[#f5f0e8]/40 text-sm tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Explore Menu
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest uppercase text-[#c9a84c]">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      {/* About */}
      <section id="about" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a84c] tracking-[0.3em] uppercase text-xs mb-4">
              Our Story
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-tight mb-8">
              A Legacy of
              <br />
              <span className="italic">Italian Excellence</span>
            </h2>
            <p className="text-[#f5f0e8]/70 leading-relaxed mb-6">
              Founded in 1987 by Chef Marco Ricci in the hills of Tuscany, Bella
              Vista has always been about more than food. It&apos;s about the
              moment — the candlelight, the laughter, the perfect sip of Barolo
              paired with hand-rolled pasta.
            </p>
            <p className="text-[#f5f0e8]/70 leading-relaxed mb-10">
              Today, we carry that same philosophy across the Atlantic. Every
              ingredient is sourced with intention. Every dish is crafted with
              reverence for tradition, and a nod to the contemporary.
            </p>
            <div className="flex items-center gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-12 bg-[#c9a84c]/30" />}
                  <div>
                    <p className="font-serif-display text-4xl text-[#c9a84c]">
                      {stat.val}
                    </p>
                    <p className="text-xs tracking-widest uppercase text-[#f5f0e8]/50 mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[3/4] rounded-sm overflow-hidden flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(145deg, #2a1e0a 0%, #3d2d12 50%, #2a1e0a 100%)",
              }}
            >
              {images.about ? (
                <AIImage
                  src={images.about}
                  alt="Bella Vista restaurant interior"
                  fill
                  objectFit="cover"
                  className="rounded-sm"
                />
              ) : (
                <div className="text-center p-12">
                  <p className="font-serif-display text-6xl text-[#c9a84c] italic mb-4 leading-none">
                    &ldquo;
                  </p>
                  <p className="font-serif-display text-2xl italic text-[#f5f0e8]/90 leading-relaxed">
                    Food is not just eating energy. It&apos;s an experience.
                  </p>
                  <p className="text-[#c9a84c] mt-6 text-sm tracking-widest uppercase">
                    — Chef Marco Ricci
                  </p>
                </div>
              )}
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#c9a84c]/20 rounded-sm pointer-events-none" />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mx-16" />

      {/* Menu */}
      <section id="menu" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] tracking-[0.3em] uppercase text-xs mb-4">
            Seasonal Selection
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl">
            Our Menu
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {menuHighlights.map((section) => (
            <div key={section.category}>
              <h3 className="font-serif-display text-2xl italic text-[#c9a84c] mb-8 pb-4 border-b border-[#c9a84c]/20">
                {section.category}
              </h3>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold tracking-wide text-[#f5f0e8]">
                        {item.name}
                      </h4>
                      <span className="text-[#c9a84c] font-light ml-4 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#reservations"
            className="inline-block px-10 py-4 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#1a1209] transition-all duration-300"
          >
            View Full Menu
          </a>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mx-16" />

      {/* Testimonials */}
      <section className="py-28 px-6 md:px-16 bg-[#2a1e0a]/30">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] tracking-[0.3em] uppercase text-xs mb-4">
            Guest Experiences
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl">
            What Our Guests Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-all duration-300"
            >
              <p className="font-serif-display text-4xl text-[#c9a84c] mb-4 leading-none">
                &ldquo;
              </p>
              <p className="font-serif-display italic text-[#f5f0e8]/80 leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="pt-6 border-t border-[#c9a84c]/20">
                <p className="font-semibold text-[#f5f0e8]">{t.author}</p>
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservations */}
      <section
        id="reservations"
        className="py-28 px-6 md:px-16"
        style={{
          background:
            "linear-gradient(to bottom, #1a1209 0%, #2a1e0a 50%, #1a1209 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.3em] uppercase text-xs mb-4">
            Join Us
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl mb-6">
            Reserve Your Table
          </h2>
          <p className="text-[#f5f0e8]/60 mb-12 leading-relaxed">
            For parties of 8 or more, please call us directly. We look forward
            to crafting an unforgettable evening for you.
          </p>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-5 py-4 bg-[#2a1e0a] border border-[#c9a84c]/30 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c] transition-colors w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-5 py-4 bg-[#2a1e0a] border border-[#c9a84c]/30 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c] transition-colors w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="px-5 py-4 bg-[#2a1e0a] border border-[#c9a84c]/30 text-[#f5f0e8]/60 focus:outline-none focus:border-[#c9a84c] transition-colors w-full"
              />
              <select className="px-5 py-4 bg-[#2a1e0a] border border-[#c9a84c]/30 text-[#f5f0e8]/60 focus:outline-none focus:border-[#c9a84c] transition-colors w-full">
                <option value="">Party Size</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="px-5 py-4 bg-[#2a1e0a] border border-[#c9a84c]/30 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c] transition-colors w-full"
            />
            <textarea
              rows={4}
              placeholder="Special requests or dietary requirements..."
              className="px-5 py-4 bg-[#2a1e0a] border border-[#c9a84c]/30 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c] transition-colors w-full resize-none"
            />
            <button
              type="submit"
              className="w-full py-5 bg-[#c9a84c] text-[#1a1209] font-bold tracking-widest uppercase text-sm hover:bg-[#e8c96a] transition-all duration-300"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-16 px-6 md:px-16 border-t border-[#c9a84c]/20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-serif-display text-2xl tracking-[0.2em] uppercase mb-4">
              Bella Vista
            </p>
            <p className="text-[#f5f0e8]/50 leading-relaxed max-w-sm">
              An authentic Italian dining experience. Where every meal becomes a
              cherished memory.
            </p>
          </div>
          <div>
            <p className="text-[#c9a84c] tracking-widest uppercase text-xs mb-4">
              Hours
            </p>
            <div className="space-y-2 text-[#f5f0e8]/60 text-sm">
              <p>Tuesday – Thursday: 5pm – 10pm</p>
              <p>Friday – Saturday: 5pm – 11pm</p>
              <p>Sunday: 4pm – 9pm</p>
              <p>Monday: Closed</p>
            </div>
          </div>
          <div>
            <p className="text-[#c9a84c] tracking-widest uppercase text-xs mb-4">
              Contact
            </p>
            <div className="space-y-2 text-[#f5f0e8]/60 text-sm">
              <p>142 Ristorante Row</p>
              <p>New York, NY 10013</p>
              <p className="mt-4">+1 (212) 555-0142</p>
              <p>info@bellavistaristorante.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#c9a84c]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f0e8]/30 text-xs">
            © {new Date().getFullYear()} Bella Vista Ristorante. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#f5f0e8]/30">
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
