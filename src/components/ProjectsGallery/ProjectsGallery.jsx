import { useState } from "react";
import "./ProjectsGallery.css";

/* ── Datos de proyectos ──────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "Casa Campestre Cajicá",
    location: "Cajicá",
    year: 2024,
    category: "Residencial",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "Apartamento Chapinero",
    location: "Bogotá",
    year: 2024,
    category: "Residencial",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "Oficinas Zona Norte",
    location: "Bogotá",
    year: 2025,
    category: "Comercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 4,
    title: "Penthouse Rosales",
    location: "Bogotá",
    year: 2023,
    category: "Residencial",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
  },
  {
    id: 5,
    title: "Local Comercial Usaquén",
    location: "Bogotá",
    year: 2024,
    category: "Comercial",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: 6,
    title: "Apartamento El Nogal",
    location: "Bogotá",
    year: 2025,
    category: "Residencial",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: 7,
    title: "Restaurante Zona Rosa",
    location: "Bogotá",
    year: 2025,
    category: "Comercial",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
  },
];

const TABS = ["Todos", "Residencial", "Comercial", "Visualización"];

const CATEGORY_COLORS = {
  Residencial: "#5a7a5a",
  Comercial: "#CD6F3F",
};

/* ── Componente ─────────────────────────────────────────────────────────── */
export const ProjectsGallery = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  /* Filtra según pestaña activa */
  const filtered =
    activeTab === "Todos" || activeTab === "Visualización"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  /* Cuántas mostrar */
  const INITIAL_COUNT = 6;
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <div className="pg">
      {/* ── Tabs ── */}
      <div className="pg__tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`pg__tab${activeTab === tab ? " pg__tab--active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Visualización 3D ── */}
      {activeTab === "Visualización" && (
        <div className="pg__viz">
          <iframe
            width="100%"
            height="450px"
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            src="https://kuula.co"
          ></iframe>
        </div>
      )}

      {/* ── Grid de tarjetas ── */}
      {activeTab !== "Visualización" && (
        <>
          <div className="pg__grid">
            {visible.map((p) => (
              <article key={p.id} className="pg__card">
                <div className="pg__card-img-wrap">
                  <img
                    className="pg__card-img"
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                  />
                  {/* Etiquetas esquina superior */}
                  <span className="pg__card-name-tag">{p.title}</span>
                  <span
                    className="pg__card-cat-tag"
                    style={{ background: CATEGORY_COLORS[p.category] }}
                  >
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className="pg__card-meta">
                  <span className="pg__card-title">{p.title}</span>
                  <span className="pg__card-year">{p.year}</span>
                </div>
                <span className="pg__card-location">{p.location}</span>
              </article>
            ))}
          </div>

          {/* ── Ver más ── */}
          {hasMore && (
            <div className="pg__more-wrap">
              <button
                type="button"
                className="pg__more-btn"
                onClick={() => setShowAll(true)}
              >
                Ver más proyectos
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
