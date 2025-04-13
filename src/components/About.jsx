import { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import './About.css'
import heroImage from '../assets/images/alexHero.jpg'
import { FaInstagram } from "react-icons/fa";
import { SiVsco } from "react-icons/si";



export default function About() {
  useEffect(() => {
    anime({
      targets: ['.hero-text', '.hero-image'],
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuad',
      delay: anime.stagger(100)
    })

    
    
  }, [])

  return (
    <section className='hero'>

      <div className='hero-text'>
        <h1>Alex Ulrich</h1>
        <p>
        I am a visual artist from Boston. As a student of life and a lover of art, I find myself drawn to various mediums of self expression such as photography, painting, and sculpting. - "Jack of all trades, master of none, though oftentimes better than a master of one."- With this in mind I consider my work to be experimental. I am constantly learning and growing and from this journey, I have created some very special works of art, both independently and in collaboration with other local artists in the New England area. This site is a collection of my favorite pieces curated over the last few years. May this space be one of inspiration. Consider this my digital gallery. Enjoy!
        </p>
        <FaInstagram className ='faIcon1'/>
        <SiVsco className ='faIcon2'/>

      </div>
      <div className='hero-image'>
        <img src={heroImage} alt="Alex Ulrich Portrait" />
      </div>
    </section>
  )
}