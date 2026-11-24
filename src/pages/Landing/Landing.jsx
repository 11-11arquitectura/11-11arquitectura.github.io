// import heroImg from "../../assets/navbar/hero.jpg"; // Imagen original del hero (comentada)
import heroVideo from "../../assets/navbar/video_hero.mp4";
import logoWhite from "../../assets/navbar/logo_white.png";
import alejandro from "../../assets/architects/alejo.jpeg"
import { ProjectsGallery } from "../../components/ProjectsGallery/ProjectsGallery";
import { WhatsAppBtn } from "../../components/WhatsAppBtn/WhatsAppBtn";
import { InstagramBtn } from "../../components/InstagramBtn/InstagramBtn";
import { Testimonios } from "../../components/Testimonios/Testimonios";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { NuevaOficina } from "../../components/NuevaOficina/NuevaOficina";
import { Estadisticas } from "../../components/Estadisticas/Estadisticas";
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
          <h1>Diseñamos y construimos espacios con intención</h1>
          <p className='text-justify'>
            Somos un estudio de Arquitectura, Interiorismo y Construcción. Acompañamos tu proyecto desde el diseño técnico hasta su ejecución.
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

        {/* <div className="hero__scroll">Scroll</div> */}
      </section>

      <section className="landing-section" id="servicios">
        <div>
          <div className="landing-section__inner">
            <span className="eyebrow">LO QUE HACEMOS</span>
            <h2>NUESTROS SERVICIOS</h2>
            <p>
              Conoce el alcance de tu proyecto
            </p>
          </div>

          <div className="mx-auto md:mt-10 w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">01</span>
                <h3>DISEÑO ARQUITECTÓNICO</h3>
                <p className='text-justify'>
                  Diseñamos y desarrollamos proyectos arquitectónicos residenciales, comerciales y de servicios, considerando la distribución, la luz y el uso de cada espacio.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">02</span>
                <h3>CONSTRUCCIÓN</h3>
                <p className='text-justify'>
                  Ejecutamos proyectos desde la obra inicial hasta la entrega, con supervisión técnica, control de calidad y modalidades de administración delegada o entrega llave en mano.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">03</span>
                <h3>REMODELACIÓN</h3>
                <p className='text-justify'>
                  Transformamos viviendas, apartamentos y locales, tanto en obra gris como en espacios existentes. Planificamos el alcance, los plazos y el presupuesto para cuidar cada etapa de la ejecución.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">04</span>
                <h3>INTERIORISMO</h3>
                <p className='text-justify'>
                  Asesoramos tu proyecto en la elección de materiales, iluminación y distribución para lograr interiores cómodos, funcionales y acordes con tu estilo.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">05</span>
                <h3>LICENCIAS Y ESTUDIOS TÉCNICOS</h3>
                <p className='text-justify'>
                  Gestionamos licencias de reconocimiento, obra nueva, demolición, ampliación y modificación. También realizamos estudios de suelos y diseños arquitectónicos y estructurales para respaldar cada trámite.
                </p>
              </div>
              <div className="service-card px-8 py-10">
                <span className="eyebrow_services">06</span>
                <h3>MOBILIARIO</h3>
                <p className='text-justify'>
                  Desarrollamos soluciones de mobiliario para tu proyecto, desde el diseño y la fabricación hasta la selección de cada pieza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Estadisticas />

      <section className="landing-section landing-section--alt pg-section" id="proyectos">
        <div className="landing-section__inner">
          <span className="eyebrow">PORTAFOLIO</span>
          <h2>Proyectos que hablan por nosotros</h2>
          <p>Selección de nuestros trabajos más destacados.</p>
        </div>
        <ProjectsGallery />
      </section>

      <section className="landing-section about-section" id="nosotros">
        <div className="landing-section__inner about-section__intro">
          <span className="eyebrow">QUIÉNES SOMOS</span>
          <h2>DISEÑO Y CONCEPTO CON INTENCIÓN</h2>
          <p>
            En ONCE 11 ARQUITECTURA conectamos la arquitectura para crear espacios funcionales, estéticos y hechos a la medida de cada historia.
          </p>
        </div>

        <div className="about-section__team">
          <article className="about-card">
            <img
              className="about-card__image"
              src={alejandro}
              alt="Retrato de referencia de un arquitecto"
              loading="lazy"
            />
            <div className="about-card__content">
              <span className="eyebrow">ARQUITECTO - OBRA</span>
              <h3>ARQ. ALEJANDRO ARIAS</h3>
              <p>
                Dirección y Ejecución de Obra Civil e Interiores.
              </p>
              <p className='span'>Coordinador de Proyectos de Consultoría.</p>
            </div>
          </article>
          <article className="about-card">
            <img
              className="about-card__image"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
              alt="Retrato de referencia de un arquitecto"
              loading="lazy"
            />
            <div className="about-card__content">
              <span className="eyebrow">ARQUITECTO - DISEÑO</span>
              <h3>ARQ. NICOLAS CASTELLANOS</h3>
              <p>
                Proyectista en el área de Diseño y Visualización 3D.
              </p>
              <p className='span'>Diseñador BIM para proyectos técnicos.</p>
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
      <NuevaOficina />
      <Testimonios />

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

      <InstagramBtn />
      <WhatsAppBtn/>
    </main>
  );
};
