import { useEffect } from 'react';

const techStack = [
  { name: "React",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "GitHub",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }, // ✅ removed double comma
  { name: "Flutter",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "VS Code",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "MySQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Node.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Firebase",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Java",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const skills = [
  { name: "App development", pct: 50 },
  { name: "Web Development", pct: 80 },
  { name: "Game Development", pct: 65 },
];

const softSkills = [
  "Problem solving", "Communication", "Team collaboration",
  "Fast learner", "Attention to detail",
];

const stats = [
  { num: "1+", label: "Years learning" },
  { num: "5+", label: "Projects built" },
  { num: "5+", label: "Technologies" },
];

export default function About() {
  return (
    <div className="about">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="grid-lines" />

      <div className="about-wrapper">

        {/* LEFT */}
        <div className="about-left">
          <div className="section-label">About me</div>

          <h2 className="about-heading">
            Passionate<br />
            <span className="accent">Developer</span><br />
            & Problem Solver
          </h2>

          <p className="about-bio">
            I'm <span>Jan Kenneth Fumar</span>, an aspiring Software Engineer
            based in the Philippines.<br /> I love turning
            complex problems into clean, reliable digital solutions.
          </p>

          <div className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about-divider">
            <div className="about-divider-line" />
            <span className="about-divider-text">Soft skills</span>
          </div>

          <div className="soft-skills">
            {softSkills.map((s) => (
              <div key={s} className="soft-chip">{s}</div>
            ))}
          </div>

          <div className="cta-row">
            <a href="#" className="about-btn about-btn-primary">Download CV →</a>
            <a href="#" className="about-btn about-btn-ghost">Contact Me</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          {skills.map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* TECH STACK — spans full width */}
        <div className="tech-section">
          <div className="tech-header">
            <div className="tech-header-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3))' }} />
            <span className="tech-header-label">Tech Stack</span>
            <div className="tech-header-line" />
          </div>
          <div className="tech-grid">
            {techStack.map((t) => (
              <div key={t.name} className="tech-card">
                <div className="tech-icon">
                  <img
                    src={t.icon}
                    alt={t.name}
                    style={t.invert ? { filter: "invert(1)" } : {}}
                  />
                </div>
                <span className="tech-label">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}