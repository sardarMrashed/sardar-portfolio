const projects = [
  {
  emoji: '🤖',
  name: 'AI Resume Analyzer',
  desc: 'Upload a PDF resume and get instant AI-powered feedback using Groq AI. Built with React and Node.js.',
  tags: ['React', 'Node.js', 'Groq AI', 'Express'],
  live: 'https://resume-analyzer-flax-one.vercel.app',
  code: 'https://github.com/sardarMrashed/resume-analyzer',
},
  {
    emoji: '🛒',
    name: 'ShopZone Ecommerce',
    desc: 'A full-stack ecommerce app with JWT auth, product search, cart, orders and user profile. Luxury black & gold design.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind'],
    live: 'https://shopzone-ecommerce-fawn.vercel.app',
    code: 'https://github.com/sardarMrashed/shopzone-ecommerce',
  },
  {
    emoji: '📝',
    name: 'Full-Stack Blog',
    desc: 'A full-stack blog app with React frontend and Node.js/Express backend. Full CRUD functionality with MongoDB Atlas for data storage.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://sardarmrashed.github.io/fullstack-blog/',
    code: 'https://github.com/sardarMrashed/fullstack-blog',
  },
  {
    emoji: '✅',
    name: 'To-Do App',
    desc: 'A task manager built with React. Add, complete, delete and filter tasks. Data saved with localStorage.',
    tags: ['React', 'localStorage', 'CSS'],
    live: 'https://sardarMrashed.github.io/react-todo',
    code: 'https://github.com/sardarMrashed/react-todo',
  },
  {
    emoji: '🎬',
    name: 'Movie Search',
    desc: 'Search any movie instantly using the OMDb API. Shows posters, titles and release years.',
    tags: ['React', 'API', 'Async/Await'],
    live: 'https://sardarMrashed.github.io/react-movies',
    code: 'https://github.com/sardarMrashed/react-movies',
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.name} className="project-card">
            <div className="project-emoji">{p.emoji}</div>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-links">
              <a href={p.live} className="project-link" target="_blank" rel="noreferrer">🔗 Live</a>
              <a href={p.code} className="project-link" target="_blank" rel="noreferrer">💻 Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}