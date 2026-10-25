import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

// Global styles, in the order every page of the PHP site loaded them.
import './styles/normalize.css'
import './styles/main.css'
import './styles/common.css'
import './styles/app.css'
// Page styles, each scoped to its page with :where(.page-NAME) so they can't leak.
import './styles/home.css'
import './styles/about.css'
import './styles/portfolio.css'
import './styles/contact.css'
import './styles/locate.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Locate from './pages/Locate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="locate" element={<Locate />} />
          <Route path="contact" element={<Contact step="details" />} />
          <Route path="contact/info" element={<Contact step="info" />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
