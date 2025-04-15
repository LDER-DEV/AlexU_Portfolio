import {Link, useLocation} from 'react-router-dom'
import{useState} from 'react'
import './Navbar.css'

export default function Navbar(){
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const NavItems = [
    {name: 'Home', path: '/Home'},
    {name: 'Modeling', path: '/modeling'},
    {name: 'Poetry', path: '/poetry'},
    {name: 'Ceramics', path: '/ceramics'},
    {name: 'Photography', path: '/photography'},
    {name: 'Short Films', path: '/shortFilms'} ,
    {name: 'Contact Me', path: '/Contact'}
  ]

  const toggleMenu = () => setMenuOpen (!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return(
    <nav className='navbar'>

      <div className='navbar-logo'>
        <Link to="/" onClick={closeMenu}>THE VAULT</Link>
      </div>
      
      <div
         className={`navbar-toggle ${menuOpen? 'open':''}`}
         onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen? 'active': ''}`}>
        {NavItems.map((page)=>(
          <li key={page.name} className={pathname === page.path? 'active': ''}>
            <Link to={page.path} onClick={closeMenu}>{page.name}</Link>
          </li>
        ))}

      </ul>

    </nav>
  )
}