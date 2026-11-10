import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import testimoniosData from "../../data/testimonios.json";
import "./Testimonios.css";

export const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const autoRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("testimonios_1111");
    const extras = stored ? JSON.parse(stored) : [];
    setTestimonios([...testimoniosData, ...extras]);
  }, []);

  const VISIBLE = 3;
  const total = testimonios.length;

  /* Índices de las tarjetas que se ven + la que entra/sale */
  const idx = (n) => ((n % total) + total) % total;

  /* Slide al siguiente */
  const next = useCallback(() => {
    if (sliding || total <= VISIBLE) return;
    setDirection("next");
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => idx(prev + 1));
      setSliding(false);
    }, 480);
  }, [sliding, total]);

  /* Slide al anterior */
  const prev = useCallback(() => {
    if (sliding || total <= VISIBLE) return;
    setDirection("prev");
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => idx(prev - 1));
      setSliding(false);
    }, 480);
  }, [sliding, total]);

  /* Auto-avance cada 5 s */
  useEffect(() => {
    if (total <= VISIBLE) return;
    autoRef.current = setInterval(next, 5000);
    return () => clearInterval(autoRef.current);
  }, [total, next]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 5000);
  };

  const handlePrev = () => { prev(); resetAuto(); };
  const handleNext = () => { next(); resetAuto(); };

  /* Construye las tarjetas visibles (3 actuales + 1 fantasma para el slide) */
  const getCards = () => {
    if (total === 0) return [];
    const count = Math.min(VISIBLE, total);
    return Array.from({ length: count }, (_, i) => ({
      data: testimonios[idx(current + i)],
      pos: i,
    }));
  };

  const cards = getCards();

  return (
    <section className="testimonios-section landing-section" id="testimonios">
      <div className="landing-section__inner testimonios-header">
        <span className="eyebrow">Testimonios</span>
        <h2>La confianza de quienes ya construyeron con nosotros.</h2>
        <p>
          Cada proyecto es una historia. Estas son las palabras de quienes
          eligieron construir con 11&nbsp;11.
        </p>
      </div>

      <div className="testimonios-carousel">
        {/* Ventana con overflow oculto */}
        <div className="testimonios-window">
          <div
            className={`testimonios-track ${
              sliding ? `testimonios-track--${direction}` : ""
            }`}
          >
            {cards.map(({ data: t, pos }) => (
              <article key={`${t.id}-${pos}`} className="testimonio-card">
                <FaQuoteLeft
                  className="testimonio-card__quote"
                  aria-hidden="true"
                />
                <p className="testimonio-card__texto">&ldquo;{t.texto}&rdquo;</p>
                <footer className="testimonio-card__footer">
                  <strong className="testimonio-card__nombre">{t.nombre}</strong>
                  {t.profesion && (
                    <span className="testimonio-card__profesion">
                      {t.profesion}
                    </span>
                  )}
                  <span className="testimonio-card__servicio">{t.servicio}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* Controles — sólo si hay más de VISIBLE */}
        {total > VISIBLE && (
          <div className="testimonios-controls">
            <button
              className="testimonios-btn"
              onClick={handlePrev}
              aria-label="Testimonio anterior"
            >
              <FaChevronLeft />
            </button>

            <div className="testimonios-dots">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  className={`testimonios-dot ${
                    i === current ? "testimonios-dot--active" : ""
                  }`}
                  onClick={() => {
                    if (sliding) return;
                    const dir = i > current ? "next" : "prev";
                    setDirection(dir);
                    setSliding(true);
                    setTimeout(() => {
                      setCurrent(i);
                      setSliding(false);
                    }, 480);
                    resetAuto();
                  }}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonios-btn"
              onClick={handleNext}
              aria-label="Testimonio siguiente"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
