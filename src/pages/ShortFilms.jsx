import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import anime from 'animejs/lib/anime.es.js'
import videoData from '../assets/shortFilmData'
import '../styles/theme.css'

export default function ShortFilms() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef(null)

  const total = videoData.length

  const showVideo = (index) => {
    if (index < 0) {
      setCurrentIndex(total - 1)
    } else if (index >= total) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    anime({
      targets: videoRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutQuad'
    })
  }, [currentIndex])

  return (
    <>
      <Navbar />
      <section className="shortfilms-page">
        <h2>Short Films</h2>

        <div className="carousel-controls">
          <button onClick={() => showVideo(currentIndex - 1)}>←</button>
          <button onClick={() => showVideo(currentIndex + 1)}>→</button>
        </div>

        <div className="video-centered-container">
          <div key={currentIndex} className="video-card" ref={videoRef}>
            <iframe
              src={`https://www.youtube.com/embed/${videoData[currentIndex].id}`}
              title={videoData[currentIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{videoData[currentIndex].title}</p>
          </div>
        </div>
      </section>
    </>
  )
}
