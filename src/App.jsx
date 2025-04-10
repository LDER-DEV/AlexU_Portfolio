import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Photography from './Pages/Photography'
import Landing from './pages/landing'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path ="/Home" element={<Home/>}/>
        <Route path ="/Photography" element={<Photography />} />
      </Routes>
    </Router>
  )
}

export default App
