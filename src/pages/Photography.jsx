import { useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import polaroids from '../assets/photoData'
import Navbar from '../components/Navbar'
import '../styles/theme.css'

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const handleMouseDown = (e) => {
    const card = e.currentTarget
    let isDragging = true
    let startX = e.clientX
    let startY = e.clientY

    const matrix = new DOMMatrixReadOnly(getComputedStyle(card).transform)
    const offsetX = matrix.m41
    const offsetY = matrix.m42

    card.style.cursor = 'grabbing'
    card.style.zIndex = 1000

    const handleMouseMove = (moveEvent) => {
      if (!isDragging) return
      const dx = moveEvent.clientX - startX
      const dy = moveEvent.clientY - startY
      card.style.transform = `translate(${offsetX + dx}px, ${offsetY + dy}px) rotate(${dx / 15}deg)`
    }

    const handleMouseUp = () => {
      if (!isDragging) return
      isDragging = false
      card.style.cursor = 'grab'
      card.style.zIndex = 'auto'

      anime({
        targets: card,
        translateX: 0,
        translateY: 0,
        rotate: anime.random(-5, 5),
        duration: 600,
        easing: 'easeOutElastic(1, .5)'
      })

      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <section className="photography-page">
      <Navbar />
        <h1>Photography</h1>

      <div className="photo-grid">
        {polaroids.map((photo, index) => (
          <div
            className="polaroid"
            key={index}
            onMouseDown={handleMouseDown}
            onDoubleClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.src} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <p>{selectedPhoto.title}</p>
            <button onClick={() => setSelectedPhoto(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
