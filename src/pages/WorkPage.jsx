import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projectList } from '../data/data'

function WorkPage() {
  return (
    <section className="content-page">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects designed to look premium and work intelligently."
      />
      <div className="project-grid">
        {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            image={project.image}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkPage
