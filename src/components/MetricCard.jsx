function MetricCard({ value, label }) {
  return (
    <article className="metric-card">
      <h2>{value}</h2>
      <p>{label}</p>
    </article>
  )
}

export default MetricCard
