import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

// Replaces php/nav.php, php/footer.php and js/nav.js. The page name (from the route)
// becomes a .page-NAME class that the scoped page stylesheets hang off.
const PAGE_NAMES = { '': 'home', portfolio: 'portfolio', about: 'about', locate: 'locate', contact: 'contact' }

const NAV_LINKS = [
  ['/', 'Home'],
  ['/portfolio', 'Portfolio'],
  ['/about', 'About Us'],
  ['/locate', 'Locate'],
  ['/contact', 'Contact'],
]

function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Every link used to load a new page, which closed the menu; close it on navigation too.
  useEffect(() => setOpen(false), [pathname])

  const toggle = () => setOpen((isOpen) => !isOpen)
  const onKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  return (
    <nav>
      <Link to="/">
        <img src="/img/logo.svg" className="nav-logo" alt="Quantum Macaw home" />
      </Link>
      <img
        src="/img/menu.svg"
        id="open-nav"
        className="nav-button"
        alt="Navigation menu"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={toggle}
        onKeyDown={onKey}
      />
      {/* Hidden by common.css, as on the old site; kept so the markup and styles match. */}
      <img src="/img/close.svg" id="close-nav" className="nav-button" alt="" onClick={() => setOpen(false)} />
      <ul id="nav-menu" className={open ? 'open' : undefined}>
        {NAV_LINKS.map(([to, label]) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
      <a href="#info">
        <img src="/img/info.svg" className="info-button" alt="Information" />
      </a>
    </nav>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const page = PAGE_NAMES[pathname.split('/')[1]] ?? 'home'

  return (
    <div className={`page page-${page}`}>
      <Nav />
      <div className="wrapper">
        <main>
          <Outlet />
        </main>
        <footer>
          <div className="info" id="info">
            <a>&copy; Taryn Ficklin | 2018</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
