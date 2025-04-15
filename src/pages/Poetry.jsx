import Navbar from "../components/Navbar"
import poems from "../assets/poems"
import '../styles/theme.css'

export default function Poetry() {
  return (
    <>
      <Navbar />
      <div className="poetry-page">
        <div className="poetry-content">
          {poems.map((poem, i) => (
            <div key={i} className="poem-block">
              <h2>{poem.title}</h2>
              {poem.content.split('\n').map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}