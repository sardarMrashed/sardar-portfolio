const groups = [
  { title: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML / CSS', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend & data', items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT authentication'] },
  { title: 'Mobile & workflow', items: ['React Native / Expo', 'Git & GitHub', 'Figma', 'Vercel / Render', 'API integration'] },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Technology & tools</h2>
      <p className="section-intro">The technologies I use in the projects below.</p>
      <div className="skill-groups">
        {groups.map(group => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map(item => <span className="skill-pill" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
