import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import '../styles/theme.css'

export default function Landing() {
  const navigate = useNavigate()
  const shapeRef = useRef(null)

  useEffect(() => {
    anime({
      targets: shapeRef.current,
      rotate: '45deg',       // rotate square into diamond
      scale: [1.2, .8],       // shrink it slightly
      opacity: [0, 0.85],    // fade in
      duration: 2000,
      easing: 'easeOutExpo'
    })
  }, [])

  return (
    <div className="landing">
      <div className="diamond-bg" ref={shapeRef}></div>

      <div className="landing-content">
        <h1>THE VAULT</h1>
        <button onClick={() => navigate('/home')}>Enter</button>
      </div>
    </div>
  )
}