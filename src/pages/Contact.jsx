import { useState, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Navbar from '../components/Navbar'
import '../styles/theme.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted form:', form)
    // TODO: Connect with a backend service like Formspree, EmailJS, or Appwrite
    alert('Thank you for reaching out!')
    setForm({ name: '', email: '', message: '' })
  }

    useEffect(() => {
      anime({
        targets: [".contact-page"],
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(100)
      })
  
      
      
    }, [])

  return (
    <>
    <Navbar/>
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
    </>
  )
}
