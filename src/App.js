import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    number: '01',
    type: 'Full-stack web application',
    name: 'ShopZone',
    subtitle: 'E-commerce, from storefront to API.',
    description: 'A responsive shopping experience with JWT sign-in, product discovery, cart functionality, order flows and user profiles, connected to an Express API and MongoDB Atlas.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://shopzone-ecommerce-fawn.vercel.app',
    source: 'https://github.com/sardarMrashed/shopzone-ecommerce',
    visual: 'shop'
  },
  {
    number: '02',
    type: 'AI-powered web tool',
    name: 'Resume Analyzer',
    subtitle: 'Thoughtful feedback, powered by AI.',
    description: 'A web tool for uploading PDF resumes, extracting their content and requesting structured feedback through the Groq AI API.',
    stack: ['React', 'PDF.js', 'Groq API', 'JavaScript'],
    demo: 'https://resume-analyzer-flax-one.vercel.app',
    source: 'https://github.com/sardarMrashed/resume-analyzer',
    visual: 'resume'
  },
  {
    number: '03',
    type: 'Full-stack CRUD application',
    name: 'Full-Stack Blog',
    subtitle: 'Content management, end to end.',
    description: 'A blog application bringing together a React interface, REST endpoints built with Express, and MongoDB Atlas to manage content.',
    stack: ['React', 'Express', 'REST API', 'MongoDB'],
    demo: 'https://sardarmrashed.github.io/fullstack-blog/',
    source: 'https://github.com/sardarMrashed/fullstack-blog',
    visual: 'blog'
  },
  {
    number: '04',
    type: 'Mobile project · In development',
    name: 'Mobile Shop',
    subtitle: 'A native shopping experience with Expo.',
    description: 'A hands-on React Native project featuring product search, detail screens and cart logic, with product data fetched from a local Node.js / Express backend. Not a published store app.',
    stack: ['React Native', 'Expo', 'Node.js', 'REST API'],
    source: 'https://github.com/sardarMrashed/mobile-shop',
    visual: 'mobile'
  }
];

const capabilities = [
  {
    id: '01',
    title: 'Frontend engineering',
    description: 'Responsive, accessible interfaces built with React, JavaScript and modern CSS. I turn ideas and designs into usable screens.',
    tags: 'React · JavaScript · Tailwind CSS'
  },
  {
    id: '02',
    title: 'APIs & backend',
    description: 'REST API development, server-side logic, authentication flows, database integration and connecting the pieces together.',
    tags: 'Node.js · Express · MongoDB'
  },
  {
    id: '03',
    title: 'From build to launch',
    description: 'Version control, working with external APIs, troubleshooting across the stack and deploying projects so people can try them.',
    tags: 'Git · GitHub · Figma · Vercel · Render'
  }
];

function ArrowIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
function UpRightIcon({ size = 17 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>;
}
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="logo" href="#home" onClick={closeMenu} aria-label="Sardar Rashid, back to top">
          <span className="logo-mark">S<span>.</span></span>
          <span className="logo-label">SARDAR <b>RASHID</b></span>
        </a>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
        <nav id="primary-nav" className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:sardarmohamad96@gmail.com" onClick={closeMenu}>Let's talk <UpRightIcon size={15}/></a>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustrative code and application design">
      <div className="hero-orbit orbit-one" aria-hidden="true"/>
      <div className="hero-orbit orbit-two" aria-hidden="true"/>
      <div className="editor-window">
        <div className="editor-bar"><span className="window-dots"><i/><i/><i/></span><span>developer.js</span><span className="editor-symbol">⌘</span></div>
        <div className="editor-content">
          <div><span className="line-num">01</span><span className="code-purple">const</span> developer <span className="code-pale">=</span> {'{'}</div>
          <div><span className="line-num">02</span>  name: <span className="code-green">'Sardar Rashid'</span>,</div>
          <div><span className="line-num">03</span>  role: <span className="code-green">'Full-Stack Developer'</span>,</div>
          <div><span className="line-num">04</span>  frontend: [<span className="code-green">'React'</span>, <span className="code-green">'JS'</span>],</div>
          <div><span className="line-num">05</span>  backend: [<span className="code-green">'Node'</span>, <span className="code-green">'Express'</span>],</div>
          <div><span className="line-num">06</span>  database: <span className="code-green">'MongoDB'</span>,</div>
          <div><span className="line-num">07</span>  basedIn: <span className="code-green">'Kurdistan, Iraq'</span>,</div>
          <div><span className="line-num">08</span>  available: <span className="code-yellow">true</span></div>
          <div><span className="line-num">09</span>{'};'}</div>
        </div>
        <div className="editor-footer"><span className="status-led"/> READY TO BUILD <span>JavaScript</span></div>
      </div>
      <div className="hero-floating">
        <span className="floating-icon">✳</span>
        <div><strong>End-to-end</strong><span>UI → API → Database</span></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden="true"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot"/> OPEN TO NEW OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, I&apos;M SARDAR MOHAMMED RASHID</p>
          <h1 id="hero-heading">Building <span>thoughtful digital products</span> from front to back.</h1>
          <p className="hero-description">Full-Stack JavaScript Developer based in the Kurdistan Region, Iraq. I build responsive React experiences and the Node.js APIs that power them.</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">Explore my work <ArrowIcon/></a>
            <a href="mailto:sardarmohamad96@gmail.com" className="btn btn-secondary">Get in touch <UpRightIcon/></a>
          </div>
          <div className="hero-note"><span className="note-line"/><span>React <b>•</b> Node.js <b>•</b> Express <b>•</b> MongoDB</span></div>
        </div>
        <HeroVisual/>
      </div>
      <div className="hero-bottom"><div className="container hero-bottom-inner"><span>SCROLL TO EXPLORE</span><span>SELECTED WORK <span aria-hidden="true">↓</span></span></div></div>
    </section>
  );
}

function ProjectVisual({ kind }) {
  return (
    <div className={'project-visual visual-' + kind} aria-hidden="true">
      {kind === 'shop' && <div className="mock-shop">
        <div className="mock-shop-top"><span>SHOPZONE<span className="mock-star">✳</span></span><span>SHOP &nbsp; COLLECTIONS &nbsp; <span>◯</span></span></div>
        <div className="mock-shop-content"><div><span className="mock-overline">THE NEW COLLECTION</span><strong>Style starts here<span>.</span></strong><small>Discover the collection</small></div><div className="mock-product"><div className="mock-product-inner">SZ</div></div></div>
        <div className="mock-shop-bottom"><span>CURATED ESSENTIALS</span><span>01 — 04</span></div>
      </div>}
      {kind === 'resume' && <div className="mock-resume">
        <div className="mock-app-head"><span className="mock-dotmark">✦</span> resume<span>wise</span><span className="mock-app-menu">● ● ●</span></div>
        <div className="mock-resume-box"><div className="mock-resume-icon">↥</div><strong>Your next opportunity starts here.</strong><small>Upload your resume for AI-powered feedback</small><div className="mock-upload">Drop your PDF resume here</div></div>
        <div className="mock-resume-score"><span>AI ANALYSIS</span><div className="mock-score-lines"><i/><i/><i/></div><b>✓</b></div>
      </div>}
      {kind === 'blog' && <div className="mock-blog">
        <div className="mock-blog-bar"><strong>the journal<span>.</span></strong><span>Stories &nbsp; Discover &nbsp; About</span></div>
        <div className="mock-blog-banner"><span>FEATURED STORY / 01</span><strong>Ideas worth sharing.</strong><div className="mock-blog-button">Read the story <span>↗</span></div></div>
        <div className="mock-blog-feed"><span/><span/><span/></div>
      </div>}
      {kind === 'mobile' && <div className="mock-phone">
        <div className="phone-device"><span className="phone-notch"/><div className="phone-title">Discover<span>✳</span></div><div className="phone-search">⌕ &nbsp; Search products...</div><div className="phone-banner">CURATED FOR YOU <b>New arrivals</b><small>Explore now ↗</small></div><div className="phone-products"><span/><span/></div><div className="phone-tabs">⌂ &nbsp;&nbsp; ◇ &nbsp;&nbsp; ♡ &nbsp;&nbsp; ☻</div></div>
        <div className="phone-spark">REACT NATIVE <span>↗</span></div>
      </div>}
      <span className="visual-disclaimer">Concept illustration</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual kind={project.visual}/>
      <div className="project-details">
        <div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-meta-rule"/></div>
        <h3>{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-actions">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={'Open ' + project.name + ' demo'}>Live demo <UpRightIcon size={16}/></a>}
          <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={'Open ' + project.name + ' source code'}>Source code <UpRightIcon size={16}/></a>
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="section section-work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-intro"><div><p className="section-kicker"><span>01</span> / SELECTED WORK</p><h2 id="work-heading">Projects with <em>purpose.</em></h2></div><p>From user-facing experiences to the server and data behind them—here is a selection of what I&apos;ve built and what I'm learning.</p></div>
        <div className="project-grid">{projects.map(project => <ProjectCard project={project} key={project.number}/>)}</div>
        <div className="more-work"><span>Curious about the rest?</span><a href="https://github.com/sardarMrashed?tab=repositories" target="_blank" rel="noopener noreferrer">Browse my GitHub repositories <UpRightIcon size={17}/></a></div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section section-expertise" aria-labelledby="expertise-heading">
      <div className="container">
        <div className="section-intro"><div><p className="section-kicker"><span>02</span> / WHAT I DO</p><h2 id="expertise-heading">The full stack.<br/><em>One connected experience.</em></h2></div><p>I focus on connecting polished interfaces with dependable application logic—not just making screens look good.</p></div>
        <div className="capability-grid">
          {capabilities.map(cap => <article className="capability" key={cap.id}><span className="cap-number">{cap.id} / 03</span><span className="cap-symbol" aria-hidden="true">{cap.id === '01' ? '⌘' : cap.id === '02' ? '{ }' : '↗'}</span><h3>{cap.title}</h3><p>{cap.description}</p><span className="cap-tags">{cap.tags}</span></article>)}
        </div>
        <div className="stack-line"><span>MY TOOLKIT</span><div>React <i/> JavaScript <i/> Node.js <i/> Express <i/> MongoDB <i/> React Native <i/> Git</div></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-copy"><p className="section-kicker"><span>03</span> / ABOUT & EXPERIENCE</p><h2 id="about-heading">Curious by nature.<br/><em>Driven by building.</em></h2><p>I’m a JavaScript developer who enjoys understanding how things work, from the first interaction in the browser to the data moving through an API.</p><p>My work includes freelance web development and independent full-stack projects. I keep improving through hands-on building, debugging and learning new tools.</p><a className="about-link" href="mailto:sardarmohamad96@gmail.com?subject=Full-Stack%20Developer%20Opportunity">Let's connect <ArrowIcon size={18}/></a></div>
        <div className="about-panel">
          <div className="about-panel-head"><span>EXPERIENCE & LEARNING</span><span className="plus-mark">✳</span></div>
          <div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-title"><h3>Freelance Web Developer</h3><span>1+ years</span></div><p>Responsive websites, interface development and API integrations for freelance work.</p></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-title"><h3>Independent full-stack projects</h3><span>Ongoing</span></div><p>Building, shipping and refining React, Express and MongoDB applications and learning React Native.</p></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-title"><h3>Computer Science & Networking Diploma</h3><span>Education</span></div><p>United Skills Institute · five-year diploma program.</p></div></div>
          <div className="about-location"><span className="location-pin">◎</span><span>Based in Kurdistan Region, Iraq<br/><small>Open to opportunities locally and remotely</small></span></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-topline"><p className="section-kicker"><span>04</span> / LET'S CONNECT</p><div className="contact-available"><span className="pulse-dot"/> AVAILABLE FOR OPPORTUNITIES</div></div>
          <h2 id="contact-heading">Have a project or a<br/><em>developer role</em> in mind?</h2>
          <p>I’m interested in junior full-stack opportunities, collaborative teams and useful products. If my work looks like a fit, I’d love to hear from you.</p>
          <a className="contact-email" href="mailto:sardarmohamad96@gmail.com?subject=Full-Stack%20Developer%20Opportunity">sardarmohamad96@gmail.com <UpRightIcon size={26}/></a>
          <div className="contact-bottom"><span>KURDISTAN REGION, IRAQ · REMOTE-FRIENDLY</span><div><a href="https://github.com/sardarMrashed" target="_blank" rel="noopener noreferrer">GitHub <UpRightIcon size={14}/></a><a href="https://www.linkedin.com/in/sardar-mohammed-rashid/" target="_blank" rel="noopener noreferrer">LinkedIn <UpRightIcon size={14}/></a></div></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a href="#home" className="footer-wordmark" aria-label="Back to top">S<span>.</span></a><span>© {new Date().getFullYear()} Sardar Mohammed Rashid. Built with React.</span><a href="#home">Back to top ↑</a></div></footer>;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header/>
      <main id="main"><Hero/><Work/><Expertise/><About/><Contact/></main>
      <Footer/>
    </>
  );
}
