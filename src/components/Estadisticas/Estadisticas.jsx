import { useEffect, useRef, useState } from "react";
import "./Estadisticas.css";

/* ── Configuración de cada cifra ── */
const STATS = [
  { target: 50, prefix: "+", suffix: "", label: "Proyectos Ejecutados" },
  { target: 80, prefix: "+", suffix: "", label: "Apartamentos Entregados" },
  { target: 100, prefix: "", suffix: "%", label: "Clientes Satisfechos" },
];

/* ── Hook: cuenta animada con easing ── */
function useCounter(target, duration = 1800, active = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cúbico
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return value;
}

/* ── Tarjeta individual ── */
function StatCard({ target, prefix, suffix, label, active, delay }) {
  const count = useCounter(target, 1800, active);

  return (
    <article
      className="estadisticas__card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="estadisticas__number">
        {prefix}
        {count}
        {suffix}
      </span>
      <div className="estadisticas__divider" aria-hidden="true" />
      <span className="estadisticas__label">{label}</span>
    </article>
  );
}

/* ── Componente principal ── */
export const Estadisticas = () => {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  /* Dispara la animación cuando la sección entra al viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="estadisticas" ref={sectionRef} aria-label="Nuestras cifras">
      {/* Cuña SVG superior – antialiased perfecto */}
      <svg className="estadisticas__wedge estadisticas__wedge--top" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,0 1440,0 0,40" fill="#f6f5f2" />
      </svg>

      <div className="estadisticas__inner">
        <span className="estadisticas__eyebrow">EN NÚMEROS</span>

        <div className="estadisticas__grid">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              active={triggered}
              delay={i * 120}
            />
          ))}
        </div>
      </div>

      {/* Cuña SVG inferior – antialiased perfecto */}
      <svg className="estadisticas__wedge estadisticas__wedge--bottom" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="1440,0 1440,40 0,40" fill="#ffffff" />
      </svg>
    </section>
  );
};
