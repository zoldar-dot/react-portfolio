import { useState } from 'react'
import { Link } from 'react-router-dom'
import MetricCard from '../components/MetricCard'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import { metrics, serviceList } from '../data/data'

function HomePage() {
  const [isAvailable, setIsAvailable] = useState(true)

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio website • Project 13</p>
          <h1>Designing thoughtful digital experiences for growing brands.</h1>
          <p className="hero-text">
            Welcome! I am Akolawole Abdulazeez, a multidisciplinary designer and front-end developer
            building polished, responsive websites that make business ideas feel clear and memorable.
          </p>

          <div className="cta-row">
            <Link to="/work" className="primary-btn">
              View projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              Let&apos;s talk
            </Link>
          </div>

          <div className="status-badge">
            <span className={`dot ${isAvailable ? 'online' : 'offline'}`} aria-hidden="true" />
            <span>
              {isAvailable ? 'Available for freelance projects' : 'Currently booking new work in August'}
            </span>
            <button type="button" onClick={() => setIsAvailable((value) => !value)}>
              Toggle status
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <img
              src="/portrait.jpg"
              alt="Portrait of Akolawole Abdulazeez"
            />
          </div>
          <div className="floating-card">
            <span>Creative Developer</span>
            <strong>Akolawole Abdulazeez</strong>
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Key metrics">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </section>

      <section className="highlight-grid">
        <SectionHeader eyebrow="What I do" title="Strategy, branding, and front-end execution." />
        <div className="service-grid">
          {serviceList.map((service, index) => (
            <ServiceCard key={service.title} number={index + 1} title={service.title} text={service.text} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
