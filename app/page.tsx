'use client'

import { useState } from 'react'

const services = [
  {
    title: 'Panel installation & repair',
    desc: 'Upgrades, replacements, and repairs for electrical panels of all sizes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-4 0v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Circuit breaker work',
    desc: 'Installation, repair, and replacement of circuit breakers and fuses.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Wire installation',
    desc: 'Safe, code-compliant wiring for new construction and renovations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <path d="M12 22V12" />
        <path d="m5 12 7-10 7 10" />
        <path d="M5 12H2l10 10 10-10h-3" />
      </svg>
    ),
  },
  {
    title: 'Electric inspection',
    desc: 'Thorough inspections to keep your home or business safe and up to code.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Electric repair',
    desc: 'Fast diagnosis and repair for outlets, switches, fixtures, and more.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: '400 amp service',
    desc: 'High-capacity service upgrades for larger homes and commercial buildings.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

const hours = [
  { day: 'Monday', time: '7:00 AM – 11:30 PM', today: true },
  { day: 'Tuesday', time: '7:00 AM – 10:00 PM' },
  { day: 'Wednesday', time: '7:00 AM – 10:00 PM' },
  { day: 'Thursday', time: '7:00 AM – 10:00 PM' },
  { day: 'Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', service: 'Panel installation', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navLogo}>
          <div style={styles.bolt}>⚡</div>
          <span style={styles.navBrand}>
            Evin <span style={{ color: '#F5A623' }}>Electric</span>
          </span>
        </div>
        <div style={styles.navLinks}>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#why" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
        <a href="tel:6108643103" style={styles.navCta}>
          Call (610) 864-3103
        </a>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            Serving Hatboro &amp; Bucks County
          </div>
          <h1 style={styles.heroH1}>
            Your trusted{' '}
            <span style={{ color: '#F5A623' }}>electrical</span>{' '}
            experts in Hatboro, PA
          </h1>
          <p style={styles.heroP}>
            Licensed, insured, and available 7 days a week. No job too big or too small —
            we handle it all with honesty, speed, and quality you can count on.
          </p>
          <div style={styles.heroBtns}>
            <a href="#contact" style={styles.btnPrimary}>Get a free quote</a>
            <a href="tel:6108643103" style={styles.btnOutline}>Call (610) 864-3103</a>
          </div>
          <div style={styles.statsRow}>
            <div style={styles.statBox}>
              <div style={styles.statNum}>10+</div>
              <div style={styles.statLabel}>Years experience</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNum}>500+</div>
              <div style={styles.statLabel}>Jobs completed</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNum}>7 days</div>
              <div style={styles.statLabel}>A week available</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionLabel}>What we do</p>
          <h2 style={styles.sectionTitle}>Electrical services for every need</h2>
          <p style={styles.sectionSub}>
            From panel upgrades to full installations — our trained technicians handle
            residential and commercial electrical work throughout the Hatboro area.
          </p>
          <div style={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={i} style={styles.serviceCard}>
                <div style={styles.serviceIcon}>{s.icon}</div>
                <h3 style={styles.serviceTitle}>{s.title}</h3>
                <p style={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" style={{ ...styles.section, background: '#f8f7f4' }}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionLabel}>Why choose us</p>
          <h2 style={styles.sectionTitle}>Honest work. Fair prices. Every time.</h2>
          <div style={styles.whyGrid}>
            {[
              { num: '01', title: 'Licensed & insured', desc: 'Fully certified technicians you can trust in your home or business.' },
              { num: '02', title: '7 days a week', desc: 'Available Monday through Sunday — early mornings and evenings too.' },
              { num: '03', title: 'No job too small', desc: 'We treat every job with the same care whether it\'s one outlet or a full panel.' },
              { num: '04', title: 'Locally based', desc: 'Hatboro based and proud to serve our neighbors throughout Bucks County.' },
            ].map((w, i) => (
              <div key={i} style={styles.whyCard}>
                <div style={styles.whyNum}>{w.num}</div>
                <div style={styles.whyTitle}>{w.title}</div>
                <div style={styles.whyDesc}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactGrid}>
          {/* Left */}
          <div>
            <h2 style={styles.contactH2}>Get a free quote today</h2>
            <p style={styles.contactP}>
              Ready to get started? Fill out the form or give us a call.
              We&apos;ll get back to you fast with an honest estimate.
            </p>
            <div style={styles.contactInfoList}>
              {[
                { label: '(610) 864-3103', sub: 'Call or text anytime', href: 'tel:6108643103' },
                { label: 'Evinelectric84@gmail.com', sub: 'We reply within a few hours', href: 'mailto:Evinelectric84@gmail.com' },
                { label: '2780 E County Line Rd', sub: 'Hatboro, PA 19040', href: 'https://maps.google.com/?q=2780+E+County+Line+Rd+Hatboro+PA' },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={styles.contactRow}>
                  <div>
                    <div style={styles.contactRowLabel}>{c.label}</div>
                    <div style={styles.contactRowSub}>{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div style={{ marginTop: '2rem' }}>
              <div style={styles.hoursHeader}>
                Business hours{' '}
                <span style={styles.openBadge}>Open now</span>
              </div>
              <table style={styles.hoursTable}>
                <tbody>
                  {hours.map((h, i) => (
                    <tr key={i} style={h.today ? styles.todayRow : styles.hourRow}>
                      <td style={styles.hourDay}>
                        {h.today && <span style={styles.todayDot} />}
                        {h.day}
                      </td>
                      <td style={styles.hourTime}>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Form */}
          <div style={styles.formCard}>
            <div style={styles.formTitle}>Request a free estimate</div>
            {submitted ? (
              <div style={styles.successMsg}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                <div style={{ fontWeight: 500, fontSize: '16px', marginBottom: '4px' }}>Request sent!</div>
                <div style={{ fontSize: '14px', color: '#555' }}>We&apos;ll get back to you within a few hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>First name</label>
                    <input
                      style={styles.formInput}
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Last name</label>
                    <input
                      style={styles.formInput}
                      type="text"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone number</label>
                  <input
                    style={styles.formInput}
                    type="tel"
                    placeholder="(610) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Service needed</label>
                  <select
                    style={styles.formInput}
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option>Panel installation</option>
                    <option>Circuit breaker repair</option>
                    <option>Wire installation</option>
                    <option>Electric inspection</option>
                    <option>400 amp service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Tell us about your project</label>
                  <textarea
                    style={{ ...styles.formInput, height: '90px', resize: 'none' }}
                    placeholder="Describe what you need done..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" style={styles.submitBtn}>Send my request</button>
                <p style={styles.formNote}>We&apos;ll respond within a few hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerText}>
          © {new Date().getFullYear()} Evin Electric LLC · Hatboro, PA · Licensed &amp; Insured
        </div>
        <div style={styles.footerLinks}>
          <a href="#services" style={styles.footerLink}>Services</a>
          <a href="#why" style={styles.footerLink}>About</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </div>
      </footer>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#0a1525',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navLogo: { display: 'flex', alignItems: 'center', gap: '10px' },
  bolt: {
    width: '34px', height: '34px', background: '#F5A623',
    borderRadius: '8px', display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: '18px', color: '#0a1525',
  },
  navBrand: { fontSize: '18px', fontWeight: 600, color: 'white', fontFamily: 'Georgia, serif' },
  navLinks: { display: 'flex', gap: '2rem' },
  navLink: { color: '#B5D4F4', fontSize: '14px', letterSpacing: '0.02em' },
  navCta: {
    background: '#F5A623', color: '#0a1525', padding: '8px 20px',
    borderRadius: '6px', fontSize: '14px', fontWeight: 600,
  },
  hero: { background: '#0C1A2E', color: 'white' },
  heroContent: { padding: '4rem 2rem 3rem', maxWidth: '680px' },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: 'rgba(245,166,35,0.12)', color: '#F5A623',
    fontSize: '12px', padding: '5px 14px', borderRadius: '20px',
    border: '1px solid rgba(245,166,35,0.25)', marginBottom: '1.5rem',
    letterSpacing: '0.04em',
  },
  badgeDot: {
    width: '6px', height: '6px', background: '#F5A623',
    borderRadius: '50%', display: 'inline-block',
  },
  heroH1: {
    fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 500,
    color: 'white', lineHeight: 1.2, marginBottom: '1.2rem',
    fontFamily: 'Georgia, serif',
  },
  heroP: { fontSize: '16px', color: '#B5D4F4', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' },
  heroBtns: { display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '3rem' },
  btnPrimary: {
    background: '#F5A623', color: '#0a1525', padding: '13px 28px',
    borderRadius: '8px', fontSize: '15px', fontWeight: 600,
  },
  btnOutline: {
    background: 'transparent', color: 'white', padding: '13px 28px',
    borderRadius: '8px', fontSize: '15px',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  statsRow: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '2rem', gap: '1rem',
  },
  statBox: { textAlign: 'center' },
  statNum: { fontSize: '26px', fontWeight: 600, color: '#F5A623', fontFamily: 'Georgia, serif' },
  statLabel: { fontSize: '12px', color: '#B5D4F4', marginTop: '4px', letterSpacing: '0.03em' },
  section: { padding: '4rem 2rem', background: '#fff' },
  sectionInner: { maxWidth: '960px', margin: '0 auto' },
  sectionLabel: {
    fontSize: '11px', fontWeight: 600, color: '#F5A623',
    textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem',
  },
  sectionTitle: {
    fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 500,
    color: '#0C1A2E', marginBottom: '0.75rem', fontFamily: 'Georgia, serif',
  },
  sectionSub: {
    fontSize: '15px', color: '#555', lineHeight: 1.8,
    maxWidth: '560px', marginBottom: '2.5rem',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  serviceCard: {
    background: '#fff', border: '1px solid #eee',
    borderRadius: '12px', padding: '1.5rem',
    transition: 'box-shadow 0.2s',
  },
  serviceIcon: {
    width: '44px', height: '44px', background: '#FFF3D6',
    borderRadius: '10px', display: 'flex', alignItems: 'center',
    justifyContent: 'center', marginBottom: '1rem',
  },
  serviceTitle: { fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: '#0C1A2E' },
  serviceDesc: { fontSize: '13px', color: '#666', lineHeight: 1.7 },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px', marginTop: '1.5rem',
  },
  whyCard: {
    background: '#fff', borderRadius: '12px',
    padding: '1.5rem', border: '1px solid #eee',
  },
  whyNum: { fontSize: '32px', fontWeight: 600, color: '#F5A623', fontFamily: 'Georgia, serif', marginBottom: '8px' },
  whyTitle: { fontSize: '15px', fontWeight: 600, color: '#0C1A2E', marginBottom: '6px' },
  whyDesc: { fontSize: '13px', color: '#666', lineHeight: 1.7 },
  contactSection: { background: '#0C1A2E', padding: '4rem 2rem' },
  contactGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '3rem', maxWidth: '960px', margin: '0 auto',
  },
  contactH2: {
    fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 500,
    color: 'white', marginBottom: '1rem', fontFamily: 'Georgia, serif',
  },
  contactP: { fontSize: '14px', color: '#B5D4F4', lineHeight: 1.8, marginBottom: '2rem' },
  contactInfoList: { display: 'flex', flexDirection: 'column', gap: '16px' },
  contactRow: { display: 'flex', alignItems: 'center', gap: '14px' },
  contactRowLabel: { fontSize: '15px', color: 'white', fontWeight: 500, marginBottom: '2px' },
  contactRowSub: { fontSize: '12px', color: '#B5D4F4' },
  hoursHeader: {
    fontSize: '13px', color: '#B5D4F4', fontWeight: 500,
    marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px',
  },
  openBadge: {
    background: 'rgba(29,158,117,0.2)', color: '#5DCAA5',
    fontSize: '11px', padding: '2px 10px', borderRadius: '20px',
    border: '1px solid rgba(93,202,165,0.3)',
  },
  hoursTable: { width: '100%', borderCollapse: 'collapse' },
  hourRow: { borderBottom: '1px solid rgba(255,255,255,0.06)' },
  todayRow: { borderBottom: '1px solid rgba(255,255,255,0.06)' },
  hourDay: { padding: '9px 0', fontSize: '13px', color: '#B5D4F4', width: '50%' },
  hourTime: { padding: '9px 0', fontSize: '13px', color: 'white', textAlign: 'right' },
  todayDot: {
    display: 'inline-block', width: '6px', height: '6px',
    background: '#F5A623', borderRadius: '50%', marginRight: '8px',
  },
  formCard: {
    background: 'white', borderRadius: '16px', padding: '2rem',
  },
  formTitle: { fontSize: '17px', fontWeight: 600, color: '#0C1A2E', marginBottom: '1.25rem' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' },
  formLabel: { fontSize: '12px', fontWeight: 600, color: '#444', letterSpacing: '0.02em' },
  formInput: {
    border: '1px solid #e0e0e0', borderRadius: '8px',
    padding: '10px 14px', fontSize: '14px', color: '#111',
    outline: 'none', width: '100%',
  },
  submitBtn: {
    width: '100%', background: '#F5A623', color: '#0a1525',
    padding: '13px', borderRadius: '8px', fontSize: '15px',
    fontWeight: 600, border: 'none',
  },
  formNote: { fontSize: '11px', color: '#888', marginTop: '10px', textAlign: 'center' },
  successMsg: {
    textAlign: 'center', padding: '3rem 1rem',
    color: '#0C1A2E',
  },
  footer: {
    background: '#060F1C', padding: '1.5rem 2rem',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: '12px',
  },
  footerText: { fontSize: '12px', color: '#5F7A9A' },
  footerLinks: { display: 'flex', gap: '1.5rem' },
  footerLink: { fontSize: '12px', color: '#5F7A9A' },
}