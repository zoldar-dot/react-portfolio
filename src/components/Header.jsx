import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">A</div>
        <div>
          <p className="brand-name">Akolawole Abdulazeez</p>
          <small>Creative Developer</small>
        </div>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/contact" className="primary-btn">
        Book a call
      </Link>
    </header>
  )
}

export default Header
