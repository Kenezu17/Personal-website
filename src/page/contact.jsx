import React from 'react'
import { useState } from 'react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const socials = [
  { label: "GitHub",   icon: <GithubIcon />,   href:  "https://github.com/Kenezu17" },
  { label: "LinkedIn", icon: <LinkedInIcon />,  href: "https://www.linkedin.com/in/jan-kenneth-fumar-3729b1386/" },
  { label: "Facebook", icon: <FacebookIcon />,  href: "https://www.facebook.com/jankenneth.fumar.52" },
];

const infoCards = [
  { icon: "✉️", label: "Email",    value: "jankennethfumar3@email.com" },
  { icon: "📍", label: "Location", value: "Philippines" },
  { icon: "💼", label: "Status",   value: "Open to opportunities" },
];

export default function Contact() {
 const [formData, setFormData]= useState({
  fname: '',
  lname: '',
  email: '',
  subject: '',
  message: '',
 })

const handleChange = (e) =>{
  setFormData({...formData, [e.target.name]: e.target.value })
}
const handleSubmit = async (e)=>{
  e.preventDefault();

  try{
    const res = await fetch('http://127.0.0.1:5000/send-email',{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    alert(data.message)
    setFormData({fname: '', lname: '', emai: '', subject: '', message: '',})
  }catch(err){
    console.error(err)
    alert("Failed to send  message")
  }
}

  return (
    <div className="contact">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="grid-lines" />

      <div className="contact-wrapper">
        {/* Left */}
        <div className="contact-left">
          <div className="section-label">Get in touch</div>

          <h2 className="contact-heading">
            Let's <span className="accent">Work</span><br />Together
          </h2>

          <p className="contact-subtext">
            Have a project in mind or just want to say hi? I'm always open to
            new opportunities and collaborations. Drop me a message — I'll get
            back to you shortly.
          </p>

          <div className="info-cards">
            {infoCards.map((c) => (
              <div key={c.label} className="info-card">
                <div className="info-icon">{c.icon}</div>
                <div className="info-text">
                  <span className="info-label">{c.label}</span>
                  <span className="info-value">{c.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-btn" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-row">
            <div className="field">
              <label>First name</label>
              <input type="text" name='fname' placeholder=" First name" value={formData.fname} onChange={handleChange} required />
            </div>
            <div className="field">
              <label>Last name</label>
              <input type="text" name='lname'  placeholder="Last name" value={formData.lname} onChange={handleChange} required />
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name='email' placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label>Subject</label>
            <input type="text" name='subject' placeholder="What's this about?" value={formData.subject} onChange={handleChange} />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea name='message' placeholder="Hi Jan, I'd love to connect about..."  value={formData.message} onChange={handleChange} required />
          </div>
          <button className="submit-btn" type='submit'>Send Message →</button>
          <p className="form-note">I'll reply within 24–48 hours.</p>
        </form>
      </div>
    </div>
  );
}