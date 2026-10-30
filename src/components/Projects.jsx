const projects = [
  {
    emoji: '🛒',
    name: 'ShopZone — E-commerce platform',
    desc: 'Full-stack shopping application with account authentication, searchable products, cart management and orders. React frontend connected to an Express API and MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://shopzone-ecommerce-fawn.vercel.app',
    code: 'https://github.com/sardarMrashed/shopzone-ecommerce',
    status: 'Full-stack project',
  },
  {
    emoji: '🤖',
    name: 'AI Resume Analyzer',
    desc: 'A React application that extracts text from uploaded PDF resumes and sends it to an AI service to generate structured feedback.',
    tags: ['React', 'PDF.js', 'Groq API', 'API integration'],
    live: 'https://resume-analyzer-flax-one.vercel.app',
    code: 'https://github.com/sardarMrashed/resume-analyzer',
    status: 'AI integration project',
  },
  {
    emoji: '📝',
    name: 'Full-Stack Blog',
    desc: 'Create, read, update and delete blog posts through a React interface, Express routes and MongoDB Atlas.',
    tags: ['React', 'Express', 'Node.js', 'MongoDB'],
    live: 'https://sardarmrashed.github.io/fullstack-blog/',
    code: 'https://github.com/sardarMrashed/fullstack-blog',
    status: 'Full-stack project',
  },
  {
    emoji: '📱',
    name: 'Mobile Shop — React Native',
    desc: 'Expo mobile learning project with product search, details, shopping cart and an Express product API. Runs locally with a backend on the same network; not a production app.',
    tags: ['React Native', 'Expo', 'Node.js', 'REST API'],
    code: 'https://github.com/sardarMrashed/mobile-shop',
    status: 'In development · source available',
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Selected projects</h2>
      <p className="section-intro">See the code and how each application works. Some live demos may rely on free-tier backend services.</p>
      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.name} className="project-card">
            <div className="project-topline"><span className="project-emoji" aria-hidden="true">{p.emoji}</span><span className="project-status">{p.status}</span></div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <div className="project-links">
              {p.live && <a href={p.live} className="project-link" target="_blank" rel="noreferrer">Live demo ↗</a>}
              <a href={p.code} className="project-link" target="_blank" rel="noreferrer">View code ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
