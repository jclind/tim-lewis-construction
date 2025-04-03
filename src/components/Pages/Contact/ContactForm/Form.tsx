import React, { useState } from 'react'
import styles from './ContactForm.module.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState<'success' | 'error' | ''>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }
  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
      className={styles.contact_form}
    >
      <input type='hidden' name='form-name' value='contact' />
      <p hidden>
        <label>
          Don’t fill this out: <input name='bot-field' />
        </label>
      </p>

      <div className={styles.names}>
        <label>
          First Name *
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name *
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        Email *
        <input
          type='email'
          name='email'
          placeholder='you@company.com'
          required
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number *
        <input
          type='tel'
          name='phone'
          placeholder='888-888-8888'
          required
          onChange={handleChange}
        />
      </label>

      <label>
        Message *
        <textarea
          name='message'
          placeholder='Your Message'
          required
          onChange={handleChange}
        />
      </label>

      {/* Google reCAPTCHA */}
      <div data-netlify-recaptcha='true'></div>

      <button type='submit'>Send Message</button>
      {status === 'success' && (
        <p>✅ Your message has been sent successfully!</p>
      )}
      {status === 'error' && (
        <p>❌ Oops! Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

export default ContactForm
