// Reusable heading block. Receives its text through props.
function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeader
