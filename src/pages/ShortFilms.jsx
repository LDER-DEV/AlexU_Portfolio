import {useEffect, useRef} from 'react'
import Navbar from "../components/Navbar"
import anime from 'animejs/lib/anime.es.js'
import videoData from "../assets/shortFilmData"

export default function ShortFilms(){
    const containerRef = useRef(null)

    useEffect(() => {
      anime({
        targets: '.video-card',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutQuad',
        delay: anime.stagger(150)
      })
    }, [])
  
    const scrollCarousel = (direction) => {
      const container = containerRef.current
      const scrollAmount = 340 // width of one card + gap
      anime({
        targets: container,
        scrollLeft: direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount,
        duration: 500,
        easing: 'easeInOutQuad'
      })
    }

    return(
        <>
        <Navbar />
            <section className="shortfilms-page">
                <h2>Short Films</h2>
             <div className="video-carousel">
                {videoData.map((video, index) => (
                <div key={index} className="video-card">
                    <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                    <p>{video.title}</p>
                </div>
                ))}
             </div>
            </section>
        </>
    )
}