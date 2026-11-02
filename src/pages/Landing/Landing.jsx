// import heroImg from "../../assets/navbar/hero.jpg"; // Imagen original del hero (comentada)
import heroVideo from "../../assets/navbar/video_hero.mp4";
import logoWhite from "../../assets/navbar/logo_white.png";
import { ProjectsGallery } from "../../components/ProjectsGallery/ProjectsGallery";
import { WhatsAppBtn } from "../../components/WhatsAppBtn/WhatsAppBtn";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "./Landing.css";

const scrollToId = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Landing = () => {
  return (
    <main className="landing">
      <section className="hero" id="inicio">
        <div className="hero__bg">
          {/* <img src={heroImg} alt="Proyecto de arquitectura o11ce" /> */}
          <video
            className="hero__video"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="hero__inner">
          <span className="eyebrow">Arquitectura y Construcción</span>
          <h1>Diseñamos y construimos espacios que trascienden.</h1>
          <p>
            Estudio arquitectónico y de construcción. Transformamos tu proyecto
            del plano a la realidad con diseño, técnica y acabados de alta
            calidad.
          </p>
          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--terra"
              onClick={() => scrollToId("contacto")}
            >
              Cotiza tu proyecto
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => scrollToId("proyectos")}
            >
              Ver proyectos
            </button>
          </div>
        </div>

        <div className="hero__scroll">Scroll</div>
      </section>

      <section className="landing-section" id="servicios">
        <div>
          <div className="landing-section__inner">
            <span className="eyebrow">Lo que Ofrecemos</span>
            <h2>Servicios Integrales a la Medida de tus Necesidades</h2>
            <p>
              Acompañamos cada etapa de tu proyecto desde la concepción hasta la
              ejecución.
            </p>
          </div>

          <div className="mx-auto md:mt-10 w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">01</span>
                <h3>Diseño Arquitectónico</h3>
                <p>
                  Anteproyecto, diseño y modelado de viviendas, locales y
                  oficinas que aprovechan el espacio, la luz y la funcionalidad.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">02</span>
                <h3>Construcción</h3>
                <p>
                  Levantamos tu proyecto desde cero, con supervisión de obra,
                  estructura y entrega llave en mano bajo control de calidad.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">03</span>
                <h3>Remodelación</h3>
                <p>
                  Renovamos casas, apartamentos y locales con una planificación
                  clara de plazos, presupuesto y resultados.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">04</span>
                <h3>Interiorismo</h3>
                <p>
                  Interiores personalizados con propuesta de iluminación,
                  pensados para ambientes cómodos de habitar.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">05</span>
                <h3>Licencias y trámites</h3>
                <p>
                  Tramitamos licencias de construcción y normativa para que tu
                  obra avance sin retrasos.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">06</span>
                <h3>Mobiliario</h3>
                <p>
                  Diseñamos y elegimos muebles y complementos que dan carácter y
                  armonía a cada ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section landing-section--alt pg-section" id="proyectos">
        <div className="landing-section__inner">
          <span className="eyebrow">Portafolio</span>
          <h2>Proyectos que hablan por nosotros</h2>
          <p>Selección de nuestros trabajos más destacados.</p>
        </div>
        <ProjectsGallery />
      </section>

      <section className="landing-section about-section" id="nosotros">
        <div className="landing-section__inner about-section__intro">
          <span className="eyebrow">Quiénes somos</span>
          <h2>Diseño con intención. Espacios para vivir.</h2>
          <p>
            En 11 11 conectamos arquitectura y construcción para crear espacios
            funcionales, cálidos y hechos a la medida de cada historia.
          </p>
        </div>

        <div className="about-section__team">
          <article className="about-card">
            <img
              className="about-card__image"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
              alt="Retrato de referencia de un arquitecto"
              loading="lazy"
            />
            <div className="about-card__content">
              <span className="eyebrow">Arquitecto · Diseño</span>
              <h3>Arq. Alejandro</h3>
              <p>
                Da forma a espacios funcionales con identidad y atención al
                detalle.
              </p>
            </div>
          </article>

          <article className="about-card">
            <img
              className="about-card__image"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
              alt="Retrato de referencia de un ingeniero"
              loading="lazy"
            />
            <div className="about-card__content">
              <span className="eyebrow">Ingeniero · Obra</span>
              <h3>Arq. Nicolás</h3>
              <p>
                Coordina cada etapa para materializar el diseño con calidad y
                precisión.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* <section className="landing-section landing-section--alt" id="blog">
        <div className="landing-section__inner">
          <span className="eyebrow">Notas</span>
          <h2>Blog</h2>
          <p>Sección lista para artículos.</p>
        </div>
      </section> */}

      <section className="contact-section" id="contacto">
        <div className="contact-section__intro">
          <span className="eyebrow">Hablemos</span>
          <h2>Cuéntanos qué quieres construir.</h2>
          <p>
            Escríbenos por WhatsApp y conversemos sobre tu próximo proyecto.
          </p>
          <a
            className="contact-section__cta"
            href="https://wa.me/573147361534?text=Buen%20d%C3%ADa%2C%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%2011%2011%20Arquitectura."
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a href="#inicio" aria-label="11 11 Arquitectura, ir al inicio">
              <img src={logoWhite} alt="11 11 Arquitectura" />
            </a>
            <p>
              Arquitectura y construcción para crear espacios funcionales,
              cálidos y hechos a la medida.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Navegación del pie de página">
            <h3>Navegación</h3>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="site-footer__contact">
            <h3>Contacto</h3>
            <a
              href="https://wa.me/573147361534?text=Buen%20d%C3%ADa%2C%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%2011%2011%20Arquitectura."
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/11.11arquitectura/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de 11 11 Arquitectura"
            >
              <FaInstagram aria-hidden="true" />
              Instagram
            </a>
            <span>
              <FaMapMarkerAlt aria-hidden="true" />
              Bogotá, Colombia
            </span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} 11 11 Arquitectura. Todos los derechos reservados.</span>
          <span>Arquitectura · Diseño interior · Construcción</span>
        </div>
      </footer>

      <WhatsAppBtn/>
    </main>
  );
};
