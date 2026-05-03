import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight, Sparkles, ShieldAlert, Truck, Users, MapPin, Network,
  PhoneCall, Route as RouteIcon, ThermometerSun, HeartPulse, Plane, Cpu,
  Building2, Quote, ArrowDown, Soup, ClipboardCheck, Bike, CheckCircle2,
  Accessibility, Leaf, HandHeart, GraduationCap, Layers, CalendarCheck, Home,
} from "lucide-react";
import heroSplit from "@/assets/hero-split.jpg";
import schoolMeal from "@/assets/school-meal.jpg";
import elderlyMeal from "@/assets/elderly-meal.jpg";
import smartContainer from "@/assets/smart-container.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aahaar — One Meal System. Two Generations Served." },
      { name: "description", content: "A design case study: evolving India's mid-day meal system to serve school children first, and extending the same backbone as a lifeline for rural elderly through NGOs, families, and local volunteers." },
      { property: "og:title", content: "Aahaar — One system. Two generations. Shared care." },
      { property: "og:description", content: "How a school meal system evolves — without replacing children — into an added layer of care for rural elderly, powered by human networks, not smartphones." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Page,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber">
      <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse-glow" />
      {children}
    </div>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal><Eyebrow>{kicker}</Eyebrow></Reveal>
      <Reveal delay={1}>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={2}>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

function Page() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 grain">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--gradient-warm)" }}
        />

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>A design thinking case study</Eyebrow></Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight">
                One meal system. <span className="gradient-text italic">Two generations</span> served.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl">
                Strengthening mid-day meals for school children — and extending the same kitchens, routes, and people as a quiet lifeline for rural elders.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#problem" className="group inline-flex items-center gap-2 rounded-full gradient-warm text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-all">
                  Explore case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium hover-lift">
                  See the system
                </a>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5 text-amber" /> Children first</span>
                <span className="hidden sm:flex items-center gap-2"><HandHeart className="h-3.5 w-3.5 text-amber" /> Elders included</span>
                <span className="hidden md:flex items-center gap-2"><Leaf className="h-3.5 w-3.5 text-amber" /> Shared backbone</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden glass-strong shadow-glow">
                <img
                  src={heroSplit}
                  alt="School children sharing a meal alongside an elderly woman receiving a tiffin at her doorstep"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-warm/70">Core mission</p>
                    <p className="font-display text-warm">School children</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-amber/80">Added layer</p>
                    <p className="font-display text-amber">Rural elders</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full gradient-warm blur-2xl opacity-50 animate-float" />
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="problem" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="The starting point"
            title={<>Mid-day meals work — but the <span className="gradient-text">system strains.</span></>}
            sub="Each day, India's mid-day meal program reaches over 110 million school children. The mission is right. The machinery — kitchens, routes, hands — can do more, and reach further."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldAlert, title: "Hygiene gaps", body: "Meals prepared at scale face contamination risk between kitchen and plate.", n: "01" },
              { icon: Truck, title: "Delivery inefficiency", body: "Routes are improvised. Heat fades. Containers leak. Time stretches.", n: "02" },
              { icon: Users, title: "Underused capacity", body: "Kitchens cook for a few hours a day. Vehicles idle. Volunteers go home.", n: "03" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={(i + 1) as 1 | 2 | 3}>
                <article className="group relative rounded-2xl glass p-7 hover-lift h-full">
                  <div className="flex items-start justify-between">
                    <div className="h-11 w-11 rounded-xl glass-strong flex items-center justify-center text-amber">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-warm/30 text-2xl">{c.n}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-16 relative rounded-3xl overflow-hidden glass-strong">
              <img
                src={schoolMeal}
                alt="A crowded school canteen with children eating mid-day meals under a single overhead light"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-[420px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 flex items-center px-10 md:px-16">
                <p className="font-display text-2xl md:text-4xl max-w-md leading-tight">
                  "We built the system for children. <span className="text-amber italic">What if it could carry a little more?</span>"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SHIFT */}
      <section id="shift" className="relative py-32 px-6">
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 h-[1px] hairline"
        />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="The reframing moment"
            title={<>Don't replace the user — <span className="gradient-text italic">extend the system.</span></>}
            sub="The most powerful design move isn't a new product. It's noticing that the system you've already built can quietly serve someone else, too."
          />

          <Reveal delay={2}>
            <div className="mt-20 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
              <div className="rounded-2xl glass p-8 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Core mission (unchanged)</p>
                <p className="mt-4 font-display text-2xl">Feed school children safely, every school day</p>
              </div>
              <div className="flex md:flex-col items-center justify-center gap-3 py-4">
                <div className="h-12 w-12 rounded-full gradient-warm flex items-center justify-center">
                  <Layers className="h-5 w-5 text-background" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber">Add a layer</span>
              </div>
              <div className="rounded-2xl glass-strong p-8 text-center shadow-glow border-amber/30">
                <p className="text-xs uppercase tracking-[0.2em] text-amber">Added layer of impact</p>
                <p className="mt-4 font-display text-2xl">Use the same kitchens & routes to reach rural elders</p>
              </div>
            </div>
          </Reveal>

          {/* New problem statement */}
          <Reveal delay={3}>
            <div className="mt-24 relative rounded-3xl glass-strong p-10 md:p-16 text-center overflow-hidden">
              <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[700px] rounded-full blur-3xl opacity-30 gradient-warm" />
              <p className="text-xs uppercase tracking-[0.3em] text-amber">A widened problem statement</p>
              <h3 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] max-w-4xl mx-auto">
                How might the same meal system that nourishes <span className="gradient-text">school children</span> also reach <span className="gradient-text">rural elders</span> who can't reach a kitchen — through the people they already trust?
              </h3>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="px-3 py-1 rounded-full glass">Shared kitchens</span>
                <span className="px-3 py-1 rounded-full glass">Shared routes</span>
                <span className="px-3 py-1 rounded-full glass">Human-mediated access</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTEXT COMPARISON */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Two beneficiaries, one backbone"
            title={<>Different lives. <span className="gradient-text italic">Shared system of care.</span></>}
            sub="The same kitchens, vehicles, and field staff serve both — with each beneficiary group getting the access model that fits their reality."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                img: schoolMeal,
                tag: "Primary mission",
                title: "School children",
                points: ["Grouped at school", "Fixed daily schedule", "Direct kitchen-to-canteen", "Teacher-supervised"],
                access: "Access: through schools",
              },
              {
                img: elderlyMeal,
                tag: "Added layer of impact",
                title: "Rural elders",
                points: ["Isolated homesteads", "Limited mobility", "No smartphone reliance", "Enrolled by trusted hands"],
                access: "Access: through NGOs, family & volunteers",
                highlight: true,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={(i + 1) as 1 | 2}>
                <div className={`group relative rounded-3xl overflow-hidden glass hover-lift ${c.highlight ? "border-amber/30" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      width={1280}
                      height={896}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className={`text-xs uppercase tracking-[0.2em] ${c.highlight ? "text-amber" : "text-warm/70"}`}>{c.tag}</p>
                    <h3 className="mt-2 font-display text-3xl">{c.title}</h3>
                    <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-amber" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-amber/90">{c.access}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <section id="insights" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Key insights"
            title={<>Three discoveries that <span className="gradient-text">reshaped everything.</span></>}
          />

          <div className="mt-20 space-y-24">
            {/* Insight 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <span className="font-display text-amber/40 text-6xl">01</span>
                  <h3 className="mt-2 font-display text-4xl">Extend the route, don't rebuild it</h3>
                  <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                    The same van that drops meals at a village school can, on its return leg, stop at three elders' doorsteps. New stops — not a new system.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["School stops first, elder stops on return", "Local volunteer for last 100 metres", "Weather-aware schedules"].map(p => (
                      <li key={p} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-amber" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="relative aspect-square rounded-3xl glass-strong p-8 overflow-hidden">
                  <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                    <defs>
                      <linearGradient id="route" x1="0" x2="1">
                        <stop offset="0" stopColor="oklch(0.82 0.17 75)" />
                        <stop offset="1" stopColor="oklch(0.65 0.19 45)" />
                      </linearGradient>
                    </defs>
                    {/* dotted grid */}
                    {Array.from({ length: 20 }).map((_, r) =>
                      Array.from({ length: 20 }).map((_, c) => (
                        <circle key={`${r}-${c}`} cx={20 + c * 20} cy={20 + r * 20} r="0.8" fill="oklch(0.96 0.015 80 / 0.12)" />
                      ))
                    )}
                    <path
                      d="M40,360 C 100,300 80,200 160,180 S 280,260 260,160 S 360,80 360,40"
                      fill="none"
                      stroke="url(#route)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      style={{ animation: "draw-line 3s ease-out forwards" }}
                    />
                    {[
                      { x: 40, y: 360, label: "Kitchen" },
                      { x: 160, y: 180, label: "Hub" },
                      { x: 260, y: 160 },
                      { x: 360, y: 40, label: "Home" },
                    ].map((p, i) => (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="8" fill="oklch(0.82 0.17 75)" />
                        <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="oklch(0.82 0.17 75 / 0.3)" />
                        {p.label && (
                          <text x={p.x + 18} y={p.y + 4} fill="oklch(0.96 0.015 80)" fontSize="11" fontFamily="Inter">{p.label}</text>
                        )}
                      </g>
                    ))}
                  </svg>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-amber" /> Route visualization
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Insight 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal className="order-2 md:order-1">
                <div className="relative rounded-3xl glass-strong overflow-hidden aspect-square">
                  <img
                    src={smartContainer}
                    alt="Smart insulated meal container with easy-open lid"
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
                    {["Easy-open", "Lightweight", "Heat-locked"].map(b => (
                      <span key={b} className="rounded-full glass px-3 py-1 text-xs">{b}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={1} className="order-1 md:order-2">
                <div>
                  <span className="font-display text-amber/40 text-6xl">02</span>
                  <h3 className="mt-2 font-display text-4xl">Packaging design</h3>
                  <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                    Arthritic hands can't fight a sealed lid. Containers must be intuitive, light, and warm — designed for the body that holds them.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Single-motion easy-open lids", "Lightweight food-grade composites", "Insulation maintains 60°C for 4 hours"].map(p => (
                      <li key={p} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-amber" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Insight 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <span className="font-display text-amber/40 text-6xl">03</span>
                  <h3 className="mt-2 font-display text-4xl">The community is the interface</h3>
                  <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                    Elders don't need an app — they need a person at the gate. NGOs enroll, families schedule via helpline, volunteers deliver. Software stays behind the scenes.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["NGO + panchayat enrollment", "Helpline for family & ASHA workers", "Volunteers as the human interface"].map(p => (
                      <li key={p} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-amber" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="relative aspect-square rounded-3xl glass-strong p-8 grid place-items-center overflow-hidden">
                  <div className="relative h-64 w-64">
                    {[Network, Users, Bike, ClipboardCheck].map((Icon, i) => {
                      const angle = (i / 4) * Math.PI * 2;
                      const r = 100;
                      const x = Math.cos(angle) * r;
                      const y = Math.sin(angle) * r;
                      return (
                        <div
                          key={i}
                          className="absolute h-14 w-14 rounded-full glass-strong flex items-center justify-center text-amber"
                          style={{ left: `calc(50% + ${x}px - 28px)`, top: `calc(50% + ${y}px - 28px)` }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                      );
                    })}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full gradient-warm flex items-center justify-center text-background animate-pulse-glow">
                        <HandHeart className="h-7 w-7" />
                      </div>
                    </div>
                    <svg className="absolute inset-0 h-full w-full -z-10" viewBox="-150 -150 300 300">
                      <circle r="100" fill="none" stroke="oklch(0.82 0.17 75 / 0.2)" strokeDasharray="3 6" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* USER JOURNEY */}
      <section id="journey" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="One journey, two destinations"
            title={<>From shared kitchen to <span className="gradient-text">school and home.</span></>}
            sub="Each cooking cycle now carries two payloads — the school's mid-day meals and a small batch of pre-scheduled elder tiffins."
          />

          <div className="mt-20 relative">
            <div aria-hidden className="hidden md:block absolute left-0 right-0 top-12 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, var(--amber), var(--ember), transparent)" }} />
            <ol className="grid md:grid-cols-5 gap-6 relative">
              {[
                { icon: Soup, title: "Shared kitchen", body: "One hygienic kitchen cooks for the school and a small elder batch." },
                { icon: GraduationCap, title: "School served", body: "Children eat first — the program's core mission stays intact." },
                { icon: RouteIcon, title: "Route extended", body: "On the return leg, the van follows a pre-planned elder loop." },
                { icon: Home, title: "Doorstep delivery", body: "A trained local volunteer hands over the tiffin and exchanges a hello." },
                { icon: HeartPulse, title: "Wellness logged", body: "A 30-second check synced back to the NGO and family." },
              ].map((s, i) => (
                <Reveal key={s.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} as="li">
                  <div className="relative">
                    <div className="relative h-24 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full glass-strong flex items-center justify-center text-amber">
                        <s.icon className="h-7 w-7" />
                      </div>
                      <span className="absolute -top-1 -right-1 h-7 w-7 rounded-full gradient-warm text-background text-xs font-semibold flex items-center justify-center">{i + 1}</span>
                    </div>
                    <div className="mt-6 text-center">
                      <h4 className="font-display text-xl">{s.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="How elders actually access it"
            title={<>No app required. <span className="gradient-text italic">Just trusted humans.</span></>}
            sub="Elders never download anything. Enrollment, scheduling, and changes all happen through the people and channels they already use."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Building2, title: "NGO enrollment", body: "Local NGOs and panchayats identify eligible elders and onboard them on paper, with consent from family." },
              { icon: PhoneCall, title: "Toll-free helpline", body: "A simple voice line in local languages — for family members, ASHA workers, or neighbours to register, pause, or report issues." },
              { icon: CalendarCheck, title: "Fixed delivery plans", body: "Pre-scheduled weekly menus. No daily decisions. Changes only when health, festivals, or seasons require it." },
              { icon: HandHeart, title: "Local volunteers", body: "Trained community members deliver, do a 30-second wellness check-in, and flag anything to the NGO." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-2xl glass p-7 hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-warm flex items-center justify-center text-background mb-6">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Backend layer */}
          <Reveal delay={2}>
            <div className="mt-12 rounded-3xl glass-strong p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="h-16 w-16 rounded-2xl gradient-warm flex items-center justify-center text-background shrink-0">
                <Cpu className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber">Tech sits in the back</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight">
                  Software serves the <span className="gradient-text">kitchen, the route, and the volunteer</span> — never asks the elder to learn anything.
                </h3>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {[
                    "Route optimization for kitchens & vans",
                    "Volunteer dispatch & check-in app",
                    "NGO dashboard for enrollment & menus",
                    "Helpline operator console",
                  ].map(p => (
                    <li key={p} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber" /> {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Why this matters"
            title={<>Same system. <span className="gradient-text">Twice the care.</span></>}
            sub="Children remain the priority. Elders become the multiplier on impact — without diluting the core mission."
          />
          <div className="mt-16 grid md:grid-cols-4 gap-5">
            {[
              { stat: "100%", label: "School coverage maintained", icon: GraduationCap },
              { stat: "+1", label: "Hot meal/day for enrolled elders", icon: HandHeart },
              { stat: "1.2k", label: "Volunteer livelihoods supported", icon: Users },
              { stat: "240", label: "NGO + panchayat partnerships", icon: Network },
            ].map((s, i) => (
              <Reveal key={s.label} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="rounded-2xl glass-strong p-7 hover-lift h-full">
                  <s.icon className="h-5 w-5 text-amber" />
                  <p className="mt-6 font-display text-5xl gradient-text">{s.stat}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Future vision"
            title={<>Tech in the back. <span className="gradient-text">People at the door.</span></>}
            sub="Every future capability still arrives wrapped in a familiar human hand."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {[
              { icon: Cpu, title: "Smarter dispatch", body: "Backend AI plans dual school + elder loops, weather-aware, in seconds." },
              { icon: ThermometerSun, title: "IoT meal containers", body: "Temperature, location, and freshness sensing — read by the volunteer, never by the elder." },
              { icon: Building2, title: "Govt + NGO + ASHA mesh", body: "Plugged into welfare programs and existing community health workers — scaling on trust, not downloads." },
              { icon: PhoneCall, title: "Multilingual helpline", body: "Family in any city can pause, resume, or check on a parent's meals with one call." },
              { icon: Plane, title: "Drone assist (later)", body: "Reserved for unreachable terrain and emergency nutrition windows — not the default." },
              { icon: HandHeart, title: "Volunteer livelihoods", body: "Pay-per-route stipends turn community goodwill into stable rural income." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="rounded-2xl glass p-8 hover-lift h-full">
                  <c.icon className="h-6 w-6 text-amber" />
                  <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN IMPLICATIONS */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Design implications"
            title={<>Principles <span className="gradient-text">we now design by.</span></>}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Truck, title: "Transport", body: "Optimize for distance, terrain, and time-to-warmth." },
              { icon: Accessibility, title: "Usability", body: "Designed for fragile hands and dim light." },
              { icon: ShieldAlert, title: "Safety", body: "Sealed, sensor-checked, and traceable." },
              { icon: Leaf, title: "Nutrition", body: "Region-balanced, age-appropriate, dignified." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="rounded-2xl glass p-6 hover-lift h-full">
                  <c.icon className="h-5 w-5 text-amber" />
                  <h3 className="mt-5 font-display text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL CLOSE */}
      <section id="cta" className="relative py-40 px-6 overflow-hidden">
        <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] rounded-full blur-3xl opacity-30 gradient-warm" />
        <div className="mx-auto max-w-4xl text-center relative">
          <Reveal>
            <Quote className="mx-auto h-8 w-8 text-amber" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-8 font-display text-4xl md:text-7xl leading-[1.05] tracking-tight">
              The best new system <br className="hidden md:inline" />
              is often the one we <span className="gradient-text italic">already have</span> — extended.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
              Children stay at the centre. Elders join the circle. Technology stays in the back. <em>Care moves to the front.</em>
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <a href="#top" className="group inline-flex items-center gap-2 rounded-full gradient-warm text-background px-7 py-4 text-sm font-medium hover:opacity-90 transition-all">
                Start designing for those who need it most
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full gradient-warm flex items-center justify-center text-background font-display text-xs">अ</span>
            <span className="font-display text-foreground">Aahaar</span>
            <span className="opacity-60">— a case study in empathy</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em]">Designed with care · 2026</p>
        </div>
      </footer>
    </div>
  );
}
