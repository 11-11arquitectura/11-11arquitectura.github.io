import { FaBuilding } from "react-icons/fa";
import "./NuevaOficina.css";

export const NuevaOficina = () => {
  return (
    <section className="nueva-oficina" aria-label="Nueva oficina en construcción">
      <div className="nueva-oficina__noise" aria-hidden="true" />

      {/* Línea decorativa superior */}
      <div className="nueva-oficina__rule" aria-hidden="true">
        <span className="nueva-oficina__rule-dot" />
      </div>

      <div className="nueva-oficina__inner">
        {/* Eyebrow */}
        <span className="nueva-oficina__eyebrow">PRÓXIMAMENTE</span>

        {/* Icono edificio */}
        <FaBuilding className="nueva-oficina__icon" aria-hidden="true" />

        {/* Texto principal */}
        <h2 className="nueva-oficina__headline">
          <span className="nueva-oficina__headline-line">Muy pronto</span>
          <span className="nueva-oficina__headline-line nueva-oficina__headline-line--accent">
            estaremos
          </span>
          <span className="nueva-oficina__headline-line">más cerca</span>
        </h2>

        {/* Divisor */}
        <div className="nueva-oficina__divider" aria-hidden="true" />

        {/* Subtítulo */}
        <p className="nueva-oficina__sub">
          Estamos creando nuestra nueva oficina
        </p>

        {/* Número decorativo */}
        <span className="nueva-oficina__deco" aria-hidden="true">11·11</span>
      </div>

      {/* Línea decorativa inferior */}
      <div className="nueva-oficina__rule nueva-oficina__rule--bottom" aria-hidden="true">
        <span className="nueva-oficina__rule-dot" />
      </div>
    </section>
  );
};
