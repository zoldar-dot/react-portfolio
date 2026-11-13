function ServiceCard({ number, title, text }) {
  return (
    <article className="service-card">
      <span className="service-index">0{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default ServiceCard
