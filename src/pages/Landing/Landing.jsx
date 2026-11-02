// import heroImg from "../../assets/navbar/hero.jpg"; // Imagen original del hero (comentada)
import heroVideo from "../../assets/navbar/video_hero.mp4";
import { ProjectsGallery } from "../../components/ProjectsGallery/ProjectsGallery";
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

      <section className="landing-section" id="nosotros">
        <div className="landing-section__inner">
          <span className="eyebrow">Estudio</span>
          <h2>Nosotros</h2>
          <p>Sección lista para el equipo y cifras del estudio.</p>
        </div>
      </section>

      {/* <section className="landing-section landing-section--alt" id="blog">
        <div className="landing-section__inner">
          <span className="eyebrow">Notas</span>
          <h2>Blog</h2>
          <p>Sección lista para artículos.</p>
        </div>
      </section> */}

      <section className="landing-section landing-section--alt" id="contacto">
        <div className="landing-section__inner">
          <span className="eyebrow">Hablemos</span>
          <h2>Contacto</h2>
          <p>Sección lista para el formulario de cotización.</p>
        </div>
      </section>
    </main>
  );
};
