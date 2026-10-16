import { useEffect, useRef, useState } from "react";
import {
  links,
  nav,
  stack,
  experience,
  offWork,
  projects,
  skills,
} from "./data.js";

// Adds .in to every .reveal element once it scrolls into view.
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            (e.target.classList.add("in"), io.unobserve(e.target)),
        ),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Cursor() {
  const dot = useRef(null);
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.current.classList.toggle(
        "big",
        !!e.target.closest("a, button, input, textarea"),
      );
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      dot.current.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("mousemove", move);
    loop();
    return () => (
      removeEventListener("mousemove", move),
      cancelAnimationFrame(raf)
    );
  }, []);
  return <div ref={dot} className="cursor" aria-hidden="true" />;
}

function Marquee({ items, dark }) {
  const row = items.map((t, i) => (
    <span key={i}>
      {t} <i>✦</i>
    </span>
  ));
  return (
    <div className={`marquee ${dark ? "marquee-dark" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", esc);
    return () => removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className="topbar">
        <a href="#top" className="logo" aria-label="Home">
          vc<span>.</span>
        </a>
        <div className="topbar-right">
          <a
            href={links.resume}
            target="_blank"
            rel="noopener"
            className="pill pill-lime"
          >
            resume ↗
          </a>
          <button
            className="pill"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </header>

      <nav
        id="menu"
        className={`menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <ol>
          {nav.map(([label, href], i) => (
            <li
              key={href}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
            >
              <a
                href={href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <small>0{i + 1}</small>
                {label}
              </a>
            </li>
          ))}
        </ol>
        <div className="menu-foot">
          <a
            href={links.github}
            target="_blank"
            rel="noopener"
            tabIndex={open ? 0 : -1}
          >
            github
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener"
            tabIndex={open ? 0 : -1}
          >
            linkedin
          </a>
          <a
            href={links.x}
            target="_blank"
            rel="noopener"
            tabIndex={open ? 0 : -1}
          >
            x
          </a>
        </div>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="hero dark">
      <div className="hero-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path id="race-line" className="race-line" d="M-40 760 C 260 720, 420 520, 700 560 S 1040 700, 1120 420 S 1300 80, 1480 140" />
          <path className="race-line race-line-flow" d="M-40 760 C 260 720, 420 520, 700 560 S 1040 700, 1120 420 S 1300 80, 1480 140" />
          <circle className="race-dot" r="6">
            <animateMotion dur="9s" repeatCount="indefinite">
              <mpath href="#race-line" />
            </animateMotion>
          </circle>
        </svg>
        <span className="chip" style={{ left: "47%", top: "26%" }}>git push origin main</span>
        <span className="chip" style={{ left: "53%", top: "48%", animationDelay: "-2s" }}>200 OK · 42ms</span>
        <span className="chip" style={{ left: "44%", top: "70%", animationDelay: "-4s" }}>build ✓ 0.39s</span>
      </div>
      <img
        src="/assets/profile.jpg"
        alt="Vishal Chavan"
        className="hero-photo reveal"
      />
      <p className="eyebrow reveal">full stack developer · nagpur, india</p>
      <h1 className="hero-name">
        <span className="reveal">Vishal</span>
        <span className="reveal outline">Chavan</span>
      </h1>
      <div className="hero-card reveal">
        <small>next role</small>
        <strong>Frontend / Full-stack</strong>
        <span>open to work · onsite or remote</span>
        <a
          href={`mailto:${links.email}?subject=Hiring%20Inquiry`}
          className="pill pill-lime"
        >
          hire me →
        </a>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        scroll <span>↓</span>
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="light pad">
      <p className="eyebrow reveal">about</p>
      <p className="statement reveal">
        i build <b>accessible, responsive</b> web apps with{" "}
        <b>react, node & python</b> — from figma frame to{" "}
        <b>production deploy</b>. electronics engineer from <b>RCOEM</b>, chess
        player, and <b>detail-obsessed</b> by habit.
      </p>
      <Marquee items={stack} />
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="dark pad">
      <h2 className="section-title reveal">
        <small>experience</small>on the job / off the job
      </h2>
      <div className="split">
        <article className="card card-lime reveal">
          <small>at work · {experience.period}</small>
          <h3>{experience.company}</h3>
          <p className="muted">
            {experience.role} · {experience.place}
          </p>
          {experience.products.map((p) => (
            <div key={p.name} className="product">
              <h4>
                {p.name} <span>— {p.tagline}</span>
              </h4>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <p className="stack">{p.stack}</p>
            </div>
          ))}
        </article>
        <article className="card card-forest reveal">
          <small>off work</small>
          <h3>beyond the screen</h3>
          <ul>
            {offWork.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="big-number">♞</p>
        </article>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="light pad">
      <h2 className="section-title reveal">
        <small>projects</small>hall of builds
      </h2>
      <div className="grid">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener"
            className="tile reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span className="tile-no">{String(i + 1).padStart(2, "0")}</span>
            <span className="tile-tag">{p.tag}</span>
            <h3>{p.name}</h3>
            <div className="tile-hover">
              <p>{p.desc}</p>
              <p className="stack">{p.stack}</p>
              <span className="arrow">view ↗</span>
            </div>
          </a>
        ))}
        <a
          href={links.github}
          target="_blank"
          rel="noopener"
          className="tile tile-more reveal"
        >
          <h3>see all on github ↗</h3>
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="dark pad">
      <h2 className="section-title reveal">
        <small>skills</small>the toolkit
      </h2>
      <div className="skills">
        {skills.map(([title, list]) => (
          <div key={title} className="skill reveal">
            <h3>{title}</h3>
            <p>{list}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  // No backend: hand the message to the visitor's mail client.
  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${links.email}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className="lime pad">
      <h2 className="contact-title reveal">let's build something.</h2>
      <form className="form reveal" onSubmit={send}>
        <label>
          your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="full">
          message
          <textarea name="message" rows="4" required />
        </label>
        <button className="pill pill-dark">send →</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="dark footer">
      <Marquee
        items={["Vishal Chavan", "Full Stack Developer", "Open to work"]}
        dark
      />
      <div className="footer-row">
        <div className="footer-links">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noopener">
            github
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener">
            linkedin
          </a>
          <a href={links.x} target="_blank" rel="noopener">
            x
          </a>
          <a href={`mailto:${links.email}`}>email</a>
        </div>
      </div>
      <p className="tagline">
        ship it clean. make it fast. © {new Date().getFullYear()} vishal chavan
      </p>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
