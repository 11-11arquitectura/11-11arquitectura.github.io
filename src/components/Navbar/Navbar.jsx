import { useEffect, useState } from 'react'
import './Navbar.css'

import logoWhite from '../../assets/navbar/logo_white.png'
import logoBlack from '../../assets/navbar/logo_black.png'
import logoShortWhite from '../../assets/navbar/logo_short_white.png'
import logoShortBlack from '../../assets/navbar/logo_short_black.png'

const LINKS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const Navbar = () => {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Detecta qué sección está visible para marcar el link activo */
  useEffect(() => {
    const ids = LINKS.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  const goTo = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`navbar${solid ? ' navbar--solid' : ''}${open ? ' navbar--open' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__brand-group">
          <button type="button" className="navbar__brand" onClick={() => goTo('inicio')} aria-label="o11ce arquitectura">
            <span className="navbar__logo navbar__logo--desktop">
              <img src={logoWhite} alt="" className="navbar__logo-img navbar__logo-img--light" />
              <img src={logoBlack} alt="" className="navbar__logo-img navbar__logo-img--dark" />
            </span>
            <span className="navbar__logo navbar__logo--mobile">
              <img src={logoShortWhite} alt="" className="navbar__logo-img navbar__logo-img--light" />
              <img src={logoShortBlack} alt="" className="navbar__logo-img navbar__logo-img--dark" />
            </span>
          </button>
          <div className="navbar__tagline">
            <span>Arquitectura</span>
            <span>Diseño Interior</span>
          </div>
        </div>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`} id="navbar-links">
          {LINKS.map((link) => (
            <button
              type="button"
              key={link.id}
              className={activeId === link.id ? 'navbar__link--active' : ''}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button type="button" className="navbar__cta" onClick={() => goTo('contacto')}>
            Cotizar proyecto
          </button>
        </nav>

        <button
          type="button"
          className="navbar__burger"
          aria-label={open ? 'Cerrar menú' : 'Menú'}
          aria-expanded={open}
          aria-controls="navbar-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
