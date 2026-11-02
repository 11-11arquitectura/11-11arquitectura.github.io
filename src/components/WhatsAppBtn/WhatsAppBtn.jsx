import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppBtn = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+573147361534&text=Buen%20d%C3%ADa!%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%2011%2011%20Arquitectura."
        data-te-toggle="tooltip"
        target="_blank"
        rel="noreferrer"
        title="Hola! Estoy en Línea."
        
  className="fixed w-15 h-15 bottom-3.75 lg:bottom-5 right-2.5 lg:right-5 !text-white bg-[var(--ink)] rounded-full text-center flex items-center justify-center text-4xl z-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[var(--accent-d)]"
>
      
        <FaWhatsapp />
      </a>
    </div>
  );
};
