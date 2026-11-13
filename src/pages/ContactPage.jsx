import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Please add a project subject.'
    if (!formData.message.trim()) nextErrors.message = 'Please tell me a little more about your project.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage('')
      return
    }

    setErrors({})
    setSuccessMessage('Thanks! Your message has been sent successfully.')
    setFormData(initialForm)
  }

  return (
    <section className="content-page contact-page">
      <SectionHeader eyebrow="Contact" title="Let's build something memorable together." />

      <div className="contact-layout">
        <div className="contact-card">
          <h3>Reach out</h3>
          <p>Email: damilare201x@gmail.com</p>
          <p>Phone: 08168930428</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="primary-btn submit-btn">
            Send message
          </button>
          {successMessage && <p className="success-text">{successMessage}</p>}
        </form>
      </div>
    </section>
  )
}

export default ContactPage
