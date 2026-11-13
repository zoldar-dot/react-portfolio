import SectionHeader from '../components/SectionHeader'

function AboutPage() {
  return (
    <section className="content-page">
      <SectionHeader
        eyebrow="About me"
        title="I build experiences that feel human and perform beautifully."
      />

      <div className="story-layout">
        <div className="story-card">
          <h3>Background</h3>
          <p>
            I am Akolawole Abdulazeez, a designer and front-end developer. My work sits at the
            intersection of design, technology, and communication. I help businesses turn complex
            ideas into clean, memorable online experiences that users understand and enjoy.
          </p>
          <p>
            I started with design and grew into front-end development, learning HTML, CSS,
            JavaScript, and React along the way. I have worked with founders, service businesses,
            and lifestyle brands to shape strategy, refine messaging, and build interfaces that
            stay responsive on every screen.
          </p>
        </div>

        <div className="detail-card">
          <h3>Mission</h3>
          <p>To build useful, accessible websites that help small businesses be seen and trusted online.</p>
          <h3>Vision</h3>
          <p>A web where every brand, big or small, has a fast and beautiful home.</p>
          <h3>Core strengths</h3>
          <ul>
            <li>Brand-led web design</li>
            <li>Responsive React interfaces</li>
            <li>UX writing and content direction</li>
            <li>Conversion-focused design systems</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
