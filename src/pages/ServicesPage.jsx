import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { serviceList } from '../data/data'

function ServicesPage() {
  return (
    <section className="content-page">
      <SectionHeader eyebrow="Services" title="How I can help your brand grow online." />
      <div className="service-grid">
        {serviceList.map((service, index) => (
          <ServiceCard key={service.title} number={index + 1} title={service.title} text={service.text} />
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
