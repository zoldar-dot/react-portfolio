function ProjectCard({ title, category, image, description, tools }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />
      <div className="project-body">
        <p className="project-tag">{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tag-row">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
