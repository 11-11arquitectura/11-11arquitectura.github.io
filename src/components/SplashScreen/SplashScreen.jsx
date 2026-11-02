import { useEffect, useState } from 'react'
import './SplashScreen.css'

/* ── Imágenes del logo (carpeta assets/splash) ── */
import imgO from '../../assets/splash/o.png'
import img11 from '../../assets/splash/11.png'
import imgC from '../../assets/splash/c.png'
import imgE from '../../assets/splash/e.png'

/**
 * SplashScreen — pantalla de bienvenida animada para o11ce arquitectura.
 *
 * Ahora usa las imágenes PNG de la carpeta assets/splash en lugar de
 * caracteres tipográficos. Cada imagen es una pieza del logo "o11ce".
 *
 * Secuencia de animación:
 *  0.0s  → aparece el "11" (visible desde el inicio, sin animación de entrada)
 *  0.8s  → fade-in blur de la "o"
 *  1.4s  → fade-in blur de la "c"
 *  2.0s  → fade-in blur de la "e"
 *  3.2s  → fade-out elegante de toda la pantalla
 *  4.0s  → el componente se desmonta y cede paso a la página principal
 */
export const SplashScreen = ({ onFinish }) => {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    document.body.classList.add('splash-active')

    const fadeTimer = setTimeout(() => setHiding(true), 10000)
    const doneTimer = setTimeout(() => {
      document.body.classList.remove('splash-active')
      onFinish?.()
    }, 4000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
      document.body.classList.remove('splash-active')
    }
  }, [onFinish])

  return (
    <div className={`splash-overlay ${hiding ? 'splash-overlay--hiding' : ''}`}>
      <div className="splash-logo">

        {/* "o" — aparece primera con efecto blur */}
        <img
          className="splash-img splash-img--o"
          src={imgO}
          alt="o"
          draggable={false}
        />

        {/* "11" — núcleo visible desde el inicio */}
        <img
          className="splash-img splash-img--eleven"
          src={img11}
          alt="11"
          draggable={false}
        />

        {/* "c" — aparece segunda con efecto blur */}
        <img
          className="splash-img splash-img--c"
          src={imgC}
          alt="c"
          draggable={false}
        />

        {/* "e" — aparece tercera con efecto blur */}
        <img
          className="splash-img splash-img--e"
          src={imgE}
          alt="e"
          draggable={false}
        />

      </div>
    </div>
  )
}
