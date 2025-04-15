import { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import anime from 'animejs/lib/anime.es.js'
import polaroids from '../assets/photoData'
import '../styles/theme.css'

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const cards = document.querySelectorAll('.polaroid')

    cards.forEach((card, index) => {
      let isDragging = false
      let offsetX = 0, offsetY = 0, startX = 0, startY = 0

      const onMouseDown = (e) => {
        isDragging = true
        startX = e.clientX
        startY = e.clientY

        const matrix = new WebKitCSSMatrix(getComputedStyle(card).transform)
        offsetX = matrix.m41
        offsetY = matrix.m42

        card.style.cursor = 'grabbing'
        card.style.zIndex = '1000'
      }

      const onMouseMove = (e) => {
        if (!isDragging) return
        const dx = e.clientX - startX
        const dy = e.clientY - startY
        card.style.transform = `translate(${offsetX + dx}px, ${offsetY + dy}px) rotate(${dx / 15}deg)`
      }

      const onMouseUp = () => {
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
      }

      const onDoubleClick = () => {
        setSelectedPhoto(polaroids[index])
      }

      card.addEventListener('mousedown', onMouseDown)
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      card.addEventListener('dblclick', onDoubleClick)
    })
  }, [])

  useEffect(() => {
    if (selectedPhoto && modalRef.current) {
      anime({
        targets: modalRef.current,
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 400,
        easing: 'easeOutQuad'
      })
    }
  }, [selectedPhoto])

  return (
    <section className="photography-page">
      <Navbar />
      <h1>Photography</h1>
      <div className="photo-grid">
        {polaroids.map((photo, index) => (
          <div className="polaroid" key={index}>
            <img src={photo.src} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <p>{selectedPhoto.title}</p>
            <button onClick={() => setSelectedPhoto(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
