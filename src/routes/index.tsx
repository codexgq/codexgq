import { createFileRoute } from "@tanstack/react-router";

const PAGE_URL = "https://codexgq.lovable.app/";
const META_DESCRIPTION =
  "codexgq, Inc. is a venture builder and M&A advisor creating liquid AI-assets and SaaS solutions engineered for Tier-1 corporate integration since 2014.";

const ORGANATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "codexgq, Inc.",
  alternateName: "codexgq",
  url: PAGE_URL,
  description: META_DESCRIPTION,
  email: "info@codex.gq",
  sameAs: [
    "https://www.linkedin.com/company/codexgq/",
    "https://github.com/codexgq",
  ],
  foundingDate: "2014",
  areaServed: ["Russia", "Netherlands"],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "codexgq, Inc. — Venture Building & M&A Advisory" },
      { name: "description", content: META_DESCRIPTION },
      { property: "og:title", content: "codexgq, Inc. — Venture Building & M&A Advisory" },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANATION_SCHEMA),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="cgq-page">
      <style>{`
        .cgq-page {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #0b1220;
          background: #ffffff;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        .cgq-page section[id], .cgq-page header[id] {
          scroll-margin-top: 90px;
        }
        .cgq-page h1, .cgq-page h2, .cgq-page h3, .cgq-page .display-3, .cgq-page .display-4, .cgq-page .display-5 {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          letter-spacing: -0.02em;
        }
        .cgq-nav {
          backdrop-filter: saturate(180%) blur(12px);
          background: rgba(255,255,255,0.75);
          border-bottom: 1px solid rgba(11,18,32,0.06);
        }
        /* Tailwind's .collapse utility conflicts with Bootstrap's component class; force visible when expanded. */
        .cgq-nav .navbar-collapse,
        .cgq-nav .navbar-collapse .nav-link,
        .cgq-nav .navbar-collapse .btn {
          visibility: visible !important;
        }
        .cgq-brand {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.03em;
        }
        .cgq-brand-dot {
          display: inline-block;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          margin-right: 8px;
          box-shadow: 0 0 20px rgba(99,102,241,0.6);
        }
        .cgq-hero {
          position: relative;
          padding: 8rem 0 6rem;
          background:
            radial-gradient(1200px 500px at 80% -10%, rgba(99,102,241,0.18), transparent 60%),
            radial-gradient(900px 500px at 0% 20%, rgba(34,211,238,0.14), transparent 60%),
            linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
        }
        .cgq-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(99,102,241,0.08);
          color: #4f46e5;
          border: 1px solid rgba(99,102,241,0.2);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .cgq-hero h1 {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
        }
        .cgq-gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cgq-lead {
          font-size: 1.15rem;
          color: #475569;
          max-width: 620px;
        }
        .btn-cgq-primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          border: none;
          color: white;
          padding: 0.85rem 1.6rem;
          font-weight: 600;
          border-radius: 12px;
          box-shadow: 0 10px 30px -10px rgba(99,102,241,0.6);
        }
        .btn-cgq-primary:hover { color: white; transform: translateY(-1px); box-shadow: 0 15px 35px -10px rgba(99,102,241,0.7); }
        .btn-cgq-ghost {
          background: white;
          border: 1px solid #e2e8f0;
          color: #0b1220;
          padding: 0.85rem 1.6rem;
          font-weight: 600;
          border-radius: 12px;
        }
        .btn-cgq-ghost:hover { border-color: #0b1220; }
        .cgq-stat-card {
          background: white;
          border: 1px solid #e6eaf2;
          border-radius: 16px;
          padding: 1.25rem 1.4rem;
        }
        .cgq-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #0b1220, #4f46e5);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .cgq-stat-label { color: #64748b; font-size: 0.9rem; }
        .cgq-section { padding: 6rem 0; }
        .cgq-section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
        }
        .cgq-service-card {
          background: white;
          border: 1px solid #e6eaf2;
          border-radius: 20px;
          padding: 2rem;
          height: 100%;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .cgq-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px -20px rgba(11,18,32,0.15);
          border-color: rgba(99,102,241,0.35);
        }
        .cgq-service-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: inline-flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.12));
          color: #4f46e5;
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }
        .cgq-approach {
          background: #0b1220;
          color: #e2e8f0;
          border-radius: 28px;
          padding: 4rem;
          position: relative;
          overflow: hidden;
        }
        .cgq-approach::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(600px 300px at 100% 0%, rgba(99,102,241,0.35), transparent 60%),
                      radial-gradient(500px 250px at 0% 100%, rgba(34,211,238,0.2), transparent 60%);
          pointer-events: none;
        }
        .cgq-approach h2 { color: white; position: relative; }
        .cgq-step {
          position: relative;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .cgq-step-num {
          font-family: 'Space Grotesk', sans-serif;
          color: #22d3ee;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
        }
        .cgq-step h4 { color: white; margin: 0.5rem 0; font-weight: 600; }
        .cgq-step p { color: #94a3b8; margin: 0; }
        .cgq-cta {
          background: linear-gradient(135deg, #f5f7fb 0%, #eef1f8 100%);
          border-radius: 28px;
          padding: 4rem;
          text-align: center;
        }
        .cgq-footer {
          border-top: 1px solid #e6eaf2;
          padding: 3rem 0 2rem;
          color: #64748b;
          font-size: 0.9rem;
        }
        .cgq-footer a { color: #475569; text-decoration: none; }
        .cgq-footer a:hover { color: #0b1220; }
        @media (max-width: 768px) {
          .cgq-approach, .cgq-cta { padding: 2.5rem 1.5rem; border-radius: 20px; }
          .cgq-hero { padding: 6rem 0 4rem; }
          .cgq-section { padding: 4rem 0; }
        }
      `}</style>

      {/* NAV */}
      <nav className="cgq-nav navbar navbar-expand-md fixed-top">
        <div className="container">
          <a className="navbar-brand cgq-brand d-flex align-items-center" href="#top">
            <span className="cgq-brand-dot" />
            codexgq
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cgqNav"
            aria-controls="cgqNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="cgqNav">
            <ul className="navbar-nav align-items-lg-center gap-lg-3">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#approach">Approach</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item ms-lg-2">
                <a className="btn btn-cgq-primary btn-sm" href="mailto:info@codex.gq">Get in touch</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="cgq-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <span className="cgq-eyebrow">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee" }} />
                Digital incubator · Since 2014
              </span>
              <h1 className="mt-4">
                Building <span className="cgq-gradient-text">liquid AI-assets</span> through operational efficiency and technological expertise.
              </h1>
              <p className="cgq-lead mt-4">
                codexgq, Inc. is a venture builder and M&amp;A advisory transforming ideas into scalable SaaS and AI businesses — engineered from day one for Tier-1 corporate integration.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="mailto:info@codex.gq" className="btn btn-cgq-primary">Start a conversation</a>
                <a href="#services" className="btn btn-cgq-ghost">Explore services</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-3">
                <div className="col-6">
                  <div className="cgq-stat-card">
                    <div className="cgq-stat-value">7</div>
                    <div className="cgq-stat-label">Digital businesses launched</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cgq-stat-card">
                    <div className="cgq-stat-value">2</div>
                    <div className="cgq-stat-label">Successful exits</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cgq-stat-card">
                    <div className="cgq-stat-value">10+</div>
                    <div className="cgq-stat-label">Years operating</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cgq-stat-card">
                    <div className="cgq-stat-value">2</div>
                    <div className="cgq-stat-label">Continents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="cgq-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8">
              <span className="cgq-eyebrow">What we do</span>
              <h2 className="cgq-section-title mt-3">
                Business &amp; IT consulting engineered around <span className="cgq-gradient-text">exits</span>.
              </h2>
              <p className="cgq-lead mt-3">
                We combine venture building, M&amp;A advisory, and SaaS/AI product development into one integrated practice.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "◆",
                title: "Venture Building",
                text: "Turning early concepts into fully operational SaaS and AI companies — team, tech, GTM, and governance.",
              },
              {
                icon: "◇",
                title: "M&A Advisory",
                text: "Exit-Driven Design from day one. Positioning, diligence readiness, and structuring for Tier-1 acquirers.",
              },
              {
                icon: "◈",
                title: "Liquid AI-Assets",
                text: "Productizing AI capabilities into transferable, valuation-ready assets with clear operational metrics.",
              },
              {
                icon: "▲",
                title: "AI Governance",
                text: "Frameworks, controls, and documentation that keep AI systems safe, compliant, and enterprise-ready.",
              },
              {
                icon: "▣",
                title: "Scalable SaaS Architecture",
                text: "Cloud-native architecture designed for growth, multi-tenancy, and clean handoff to enterprise buyers.",
              },
              {
                icon: "◉",
                title: "Operational Efficiency",
                text: "Applied R&D and system integration that compound margins and de-risk scaling.",
              },
            ].map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <article className="cgq-service-card">
                  <div className="cgq-service-icon">{s.icon}</div>
                  <h3 className="h5 fw-semibold">{s.title}</h3>
                  <p className="text-secondary mb-0">{s.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="cgq-section pt-0">
        <div className="container">
          <div className="cgq-approach">
            <div className="row g-5 position-relative">
              <div className="col-lg-5">
                <span className="cgq-eyebrow" style={{ background: "rgba(34,211,238,0.15)", color: "#22d3ee", borderColor: "rgba(34,211,238,0.3)" }}>Our approach</span>
                <h2 className="mt-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
                  Exit-Driven Design, from first line of code.
                </h2>
                <p className="mt-3" style={{ color: "#94a3b8" }}>
                  Every decision — architectural, operational, commercial — is made against one benchmark: readiness for integration into a Tier-1 corporate.
                </p>
              </div>
              <div className="col-lg-7">
                {[
                  { n: "01", h: "Ideate & validate", p: "Market thesis, unit economics, and technical feasibility before capital." },
                  { n: "02", h: "Build the asset", p: "SaaS/AI product with governance, observability, and compliance baked in." },
                  { n: "03", h: "Operate & compound", p: "Applied R&D and integration work that improves margins and defensibility." },
                  { n: "04", h: "Prepare & transact", p: "Diligence-ready packages, structuring, and buyer positioning for exit." },
                ].map((step) => (
                  <div className="cgq-step" key={step.n}>
                    <div className="cgq-step-num">{step.n}</div>
                    <h4>{step.h}</h4>
                    <p>{step.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="cgq-section pt-0">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="cgq-eyebrow">About codexgq</span>
              <h2 className="cgq-section-title mt-3">A small team, a compounding portfolio.</h2>
              <p className="cgq-lead mt-3">
                Founded in 2014, codexgq, Inc. operates as a digital incubator and venture builder across B2B, B2C, and B2G sectors — with a focus on SaaS and AI.
              </p>
              <p className="text-secondary">
                Headquartered in Russia with a presence in the Netherlands, we work with founders, operators, and corporate partners to build businesses that are engineered for scale and structured for exit.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="cgq-stat-card"><div className="cgq-stat-label">Founded</div><div className="cgq-stat-value" style={{ fontSize: "1.75rem" }}>2014</div></div>
                </div>
                <div className="col-6">
                  <div className="cgq-stat-card"><div className="cgq-stat-label">Industry</div><div className="fw-semibold mt-1">IT Services &amp; Consulting</div></div>
                </div>
                <div className="col-6">
                  <div className="cgq-stat-card"><div className="cgq-stat-label">Headquarters</div><div className="fw-semibold mt-1">Russia · Netherlands</div></div>
                </div>
                <div className="col-6">
                  <div className="cgq-stat-card"><div className="cgq-stat-label">Focus</div><div className="fw-semibold mt-1">SaaS · AI · M&amp;A</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cgq-section pt-0">
        <div className="container">
          <div className="cgq-cta">
            <h2 className="cgq-section-title">Have an asset worth building?</h2>
            <p className="cgq-lead mx-auto mt-3">
              Whether you're launching, scaling, or preparing for exit — let's talk about how to make it liquid.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
              <a href="mailto:info@codex.gq" className="btn btn-cgq-primary">info@codex.gq</a>
              <a href="https://www.linkedin.com/company/codexgq/" target="_blank" rel="noreferrer" className="btn btn-cgq-ghost">LinkedIn</a>
              <a href="https://github.com/codexgq" target="_blank" rel="noreferrer" className="btn btn-cgq-ghost">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cgq-footer">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center">
            <span className="cgq-brand-dot" />
            <span className="cgq-brand">codexgq, Inc.</span>
          </div>
          <div>© {new Date().getFullYear()} codexgq, Inc. — Venture Building &amp; M&amp;A Advisory</div>
          <div className="d-flex gap-3">
            <a href="https://github.com/codexgq" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/company/codexgq/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:info@codex.gq">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
