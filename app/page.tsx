import Image from "next/image";
import { Composer } from "@/components/Composer";
import { CopyEmail } from "@/components/CopyEmail";
import { Journal } from "@/components/Journal";
import { Loadout } from "@/components/Loadout";
import { ToastProvider } from "@/components/Toast";
import { bio, DESCRIPTION, EMAIL, expertise, handles, NAME, RESUME_URL, SITE_URL, stats, SUPPORT_URL, work } from "@/lib/data";
import portrait from "@/public/profile.png";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "jobs", label: "Jobs" },
  { id: "perks", label: "Perks" },
  { id: "loadout", label: "Loadout" },
  { id: "contact", label: "Contact" },
];

function SectionHead({ n, title, note }: { n: number; title: string; note: string }) {
  return (
    <header className="sec-head">
      <span className="sec-n">{String(n).padStart(2, "0")}</span>
      <h2 className="h2">{title}</h2>
      <p className="sec-note">{note}</p>
    </header>
  );
}

export default function Home() {
  const current = work.find((w) => w.time.includes("Present"));
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    url: SITE_URL,
    image: `${SITE_URL}${portrait.src}`,
    email: `mailto:${EMAIL}`,
    jobTitle: "Software Engineer",
    description: DESCRIPTION,
    worksFor: { "@type": "Organization", name: "Segwise", url: "https://segwise.ai" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "KIIT University" },
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    knowsAbout: expertise.map((e) => e.area),
    sameAs: handles.filter((h) => h.href.startsWith("http")).map((h) => h.href),
  };

  return (
    <ToastProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <a className="skip" href="#profile">Skip to content</a>

      <header className="hud">
        <div className="wrap hud-in">
          <a className="brand" href="#top" aria-label="Swapnadeep Mohapatra, back to top">
            <span className="brand-mark" aria-hidden="true">SM</span>
            <span className="brand-name">Swapnadeep</span>
          </a>
          <nav className="hud-nav" aria-label="Sections">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}>
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary btn-sm" href={RESUME_URL} target="_blank" rel="noopener">
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="boot">
                <span className="dot" aria-hidden="true" />
                Ident confirmed — {current ? `online at ${current.company}` : "online"}
              </p>
              <h1 className="glitch" data-text="Swapnadeep Mohapatra">
                Swapnadeep <span>Mohapatra</span>
              </h1>
              <p className="role-line">
                Software Engineer <span aria-hidden="true">/</span> Frontend · Backend · AI
              </p>
              <p className="lede">
                <strong>I build things for the web.</strong> Scalable systems, sharp interfaces, and the occasional
                technical talk.
              </p>
              <div className="cta">
                <a className="btn btn-primary" href="#jobs">Open job log</a>
                <CopyEmail className="btn btn-ghost" label="Copy email" />
              </div>
            </div>

            <aside className="idcard" aria-label="ID card">
              <div className="id-top">
                <span>NC-ID</span>
                <span className="barcode" aria-hidden="true" />
              </div>
              <div className="id-photo">
                <Image src={portrait} alt="Swapnadeep Mohapatra" placeholder="blur" sizes="(max-width: 900px) 60vw, 320px" priority />
              </div>
              <dl className="id-rows">
                <div><dt>Name</dt><dd>Swapnadeep Mohapatra</dd></div>
                <div><dt>Class</dt><dd>Software Engineer</dd></div>
                <div><dt>Affiliation</dt><dd>{current?.company ?? "Independent"}</dd></div>
                <div><dt>Education</dt><dd>KIIT University &apos;26</dd></div>
                <div><dt>Handle</dt><dd>@swapnadeeptukk</dd></div>
              </dl>
            </aside>
          </div>

          <div className="wrap">
            <ul className="stats">
              {stats.map((s) => (
                <li key={s.label}>
                  <span className="stat-v">{s.value}</span>
                  <span className="stat-l">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" id="profile">
          <div className="wrap">
            <SectionHead n={1} title="Profile" note="bio.shard — decrypted" />
            <div className="profile">
              <p className="bio">{bio}</p>
              <div className="traits">
                <h3 className="label">Known traits</h3>
                <ol>
                  <li>Building scalable systems</li>
                  <li>Giving technical talks</li>
                  <li>Cafés &amp; good books</li>
                  <li>Travelling — an excursionist at heart</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="jobs">
          <div className="wrap">
            <SectionHead n={2} title="Job log" note={`${work.length} gigs since 2018 — select one`} />
            <Journal />
          </div>
        </section>

        <section className="sec" id="perks">
          <div className="wrap">
            <SectionHead n={3} title="Perks" note="what's installed" />
            <ul className="perks">
              {expertise.map((e, i) => (
                <li key={e.area} className={`perk t-${e.tone}`}>
                  <span className="perk-id">P-{String(i + 1).padStart(2, "0")}</span>
                  <h3>{e.area}</h3>
                  <p className="perk-tag">{e.tag}</p>
                  <p className="perk-note">{e.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" id="loadout">
          <div className="wrap">
            <SectionHead n={4} title="Loadout" note="filter the inventory" />
            <Loadout />
          </div>
        </section>

        <section className="sec" id="contact">
          <div className="wrap contact">
            <div>
              <SectionHead n={5} title="Jack in" note="let's build something" />
              <p className="contact-copy">
                Got a project in mind, want to collaborate, or just want to connect? Send a message and it lands
                straight in my inbox.
              </p>
              <ul className="links">
                {handles.map((h) => (
                  <li key={h.label}>
                    <a href={h.href} target="_blank" rel="noopener">
                      <span className="link-l">{h.label}</span>
                      <span className="link-t">{h.text}</span>
                      <span className="link-arrow" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Composer />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <p className="foot-sign" aria-hidden="true">Swapnadeep</p>
          <div className="foot-bar">
            <span>© {new Date().getFullYear()} Swapnadeep Mohapatra</span>
            <span className="foot-links">
              <a href={RESUME_URL} target="_blank" rel="noopener">Resume</a>
              <a href={SUPPORT_URL} target="_blank" rel="noopener">Support me</a>
              <a href="#top">Back to top ↑</a>
            </span>
          </div>
        </div>
      </footer>
    </ToastProvider>
  );
}
