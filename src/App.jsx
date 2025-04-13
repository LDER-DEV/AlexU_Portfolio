import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Photography from './Pages/Photography'
import ShortFilms from './pages/ShortFilms'
import Poetry from './pages/Poetry'
import Ceramics from './pages/Ceramics'
import Modeling from './pages/Modeling'
import Landing from './pages/landing'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path ="/Home" element={<Home/>}/>
        <Route path ="/Photography" element={<Photography />} />
        <Route path ='/ShortFilms' element={<ShortFilms/>} />
        <Route path ='/Poetry' element={<Poetry/>} />
        <Route path = '/Modeling' element={<Modeling/>} />
        <Route path = '/Ceramics' element={<Ceramics/>} />
      </Routes>
    </Router>
  )
}

export default App
