import { useState } from 'react'
import Navbar from '../components/Navbar'
import modelingImages from '../assets/modelingData' // array of { src, title }
import '../styles/theme.css'

export default function Modeling() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Navbar />
      <div className="modeling-page">
        <div className="modeling-grid">
          {modelingImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.title}
              onDoubleClick={() => setSelected(img)}
              className="modeling-thumb"
            />
          ))}
        </div>

        {selected && (
          <div className="photo-modal-overlay" onClick={() => setSelected(null)}>
            <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.title} />
              <p>{selected.title}</p>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}