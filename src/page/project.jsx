import React from 'react';

import projects from '../components/projects'

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 8h12M8 2l6 6-6 6"/>
  </svg>
);

export default function Project() {

  return (
    <div className="projects">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="grid-lines" />

      <div className="proj-wrapper">
        {/* Header */}
        <div className="page-header">
          <div className="section-label">Portfolio</div>
          <h1 className="page-title">My <span className="accent">Projects</span></h1>
          <p className="page-sub">
            A collection of things I've built — from web apps to IT tools and everything in between.
          </p>
        </div>

        {/* Filters */}
        <div className="filters">
          {["All", "Web", "App", "Tool"].map((f) => (
            <button key={f} className={`filter-btn${f === "All" ? " active" : ""}`}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className={`project-card${p.featured ? " featured" : ""}`}>
              <div className={`card-thumb ${p.thumb}`}>
                <img src={p.Image} alt={p.title} className="thumb-icon" />
              </div>
              <div className="card-body">
                <div className="card-top">
                  <span className="card-title">{p.title}</span>
                  <span className={`card-badge ${p.badgeClass}`}>{p.badge}</span>
                </div>
                <p className="card-desc">{p.desc}</p>
                <div className="card-tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="card-links">
                  <a href={p.github} className="card-link"><GithubIcon /> GitHub</a>
                  <a href={p.demo} className="card-link"><ArrowIcon /> Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}