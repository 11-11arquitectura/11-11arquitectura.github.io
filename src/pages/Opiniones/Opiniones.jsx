import { useState, useRef } from "react";
import logoWhite from "../../assets/navbar/logo_short_black.png";
import "./Opiniones.css";

const CLAVE_CORRECTA = "onceoncearq";
const MAX_PALABRAS = 100;

const contarPalabras = (texto) =>
  texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;

/* ──────────────────────────────────────────
   GUARD: pantalla de clave
────────────────────────────────────────── */
const ClaveGuard = ({ onAcceso }) => {
  const [clave, setClave] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clave === CLAVE_CORRECTA) {
      onAcceso();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setClave("");
      inputRef.current?.focus();
    }
  };

  return (
    <div className="opiniones-guard">
      <div className={`opiniones-guard__card ${shake ? "opiniones-guard__card--shake" : ""}`}>
        <img src={logoWhite} alt="11 11 Arquitectura" className="opiniones-guard__logo" />
        <h1 className="opiniones-guard__title">Área privada</h1>
        <p className="opiniones-guard__sub">
          Ingresa la clave de acceso para continuar.
        </p>
        <form onSubmit={handleSubmit} className="opiniones-guard__form">
          <input
            ref={inputRef}
            type="password"
            value={clave}
            onChange={(e) => {
              setClave(e.target.value);
              setError(false);
            }}
            placeholder="Clave de acceso"
            className={`opiniones-input ${error ? "opiniones-input--error" : ""}`}
            autoComplete="current-password"
            autoFocus
          />
          {error && (
            <span className="opiniones-guard__error">Clave incorrecta. Inténtalo de nuevo.</span>
          )}
          <button type="submit" className="opiniones-submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────
   FORMULARIO DE TESTIMONIO
────────────────────────────────────────── */
const FormularioTestimonio = () => {
  const [form, setForm] = useState({ nombre: "", profesion: "", texto: "" });
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState({});
  const palabras = contarPalabras(form.texto);
  const sobrePalabras = palabras > MAX_PALABRAS;

  const validar = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio.";
    if (!form.texto.trim()) e.texto = "Por favor escribe tu opinión.";
    if (sobrePalabras) e.texto = `Máximo ${MAX_PALABRAS} palabras. Tienes ${palabras}.`;
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e_val = validar();
    if (Object.keys(e_val).length) {
      setErrores(e_val);
      return;
    }

    // Lee testimonios actuales del JSON (simulado en cliente con localStorage)
    const stored = localStorage.getItem("testimonios_1111");
    const actuales = stored ? JSON.parse(stored) : [];
    const nuevo = {
      id: Date.now(),
      nombre: form.nombre.trim(),
      profesion: form.profesion.trim() || null,
      servicio: "Bogotá",
      texto: form.texto.trim(),
    };
    const actualizados = [...actuales, nuevo];
    localStorage.setItem("testimonios_1111", JSON.stringify(actualizados));

    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="opiniones-success">
        <div className="opiniones-success__inner">
          <span className="opiniones-success__icon">✓</span>
          <h2>¡Gracias por tu opinión!</h2>
          <p>Tu testimonio ha sido registrado correctamente.</p>
          <button
            className="opiniones-submit opiniones-submit--outline"
            onClick={() => {
              setForm({ nombre: "", profesion: "", texto: "" });
              setEnviado(false);
            }}
          >
            Agregar otro testimonio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="opiniones-page">
      <div className="opiniones-page__card">
        {/* Encabezado */}
        <div className="opiniones-page__header">
          <img
            src={logoWhite}
            alt="11 11 Arquitectura"
            className="opiniones-page__logo"
          />
          <span className="eyebrow opiniones-eyebrow">Panel de testimonios</span>
          <h1 className="opiniones-page__title">
            Comparte tu experiencia con&nbsp;nosotros.
          </h1>
          <p className="opiniones-page__sub">
            Tu opinión nos ayuda a seguir construyendo con excelencia.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="opiniones-form" noValidate>
          {/* Nombre */}
          <div className="opiniones-field">
            <label htmlFor="op-nombre" className="opiniones-label">
              Nombre <span className="opiniones-required">*</span>
            </label>
            <input
              id="op-nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre o empresa"
              className={`opiniones-input ${errores.nombre ? "opiniones-input--error" : ""}`}
            />
            {errores.nombre && (
              <span className="opiniones-field__error">{errores.nombre}</span>
            )}
          </div>

          {/* Profesión (opcional) */}
          <div className="opiniones-field">
            <label htmlFor="op-profesion" className="opiniones-label">
              Profesión{" "}
              <span className="opiniones-optional">(opcional)</span>
            </label>
            <input
              id="op-profesion"
              name="profesion"
              type="text"
              value={form.profesion}
              onChange={handleChange}
              placeholder="Ej: Arquitecto, Empresario, Propietario…"
              className="opiniones-input"
            />
          </div>

          {/* Testimonio */}
          <div className="opiniones-field">
            <label htmlFor="op-texto" className="opiniones-label">
              Tu opinión <span className="opiniones-required">*</span>
            </label>
            <textarea
              id="op-texto"
              name="texto"
              value={form.texto}
              onChange={handleChange}
              placeholder="Cuéntanos cómo fue tu experiencia trabajando con nosotros…"
              rows={5}
              className={`opiniones-input opiniones-textarea ${
                errores.texto || sobrePalabras ? "opiniones-input--error" : ""
              }`}
            />
            <div className="opiniones-word-count">
              <span
                className={`opiniones-word-count__num ${sobrePalabras ? "opiniones-word-count__num--over" : ""}`}
              >
                {palabras}
              </span>
              <span className="opiniones-word-count__sep">/ {MAX_PALABRAS} palabras</span>
            </div>
            {errores.texto && (
              <span className="opiniones-field__error">{errores.texto}</span>
            )}
          </div>

          <button type="submit" className="opiniones-submit" disabled={sobrePalabras}>
            Enviar testimonio
          </button>
        </form>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────
   EXPORT PRINCIPAL
────────────────────────────────────────── */
export const Opiniones = () => {
  const [acceso, setAcceso] = useState(false);

  if (!acceso) return <ClaveGuard onAcceso={() => setAcceso(true)} />;
  return <FormularioTestimonio />;
};
