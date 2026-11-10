import { FaInstagram } from "react-icons/fa";

export const InstagramBtn = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/11.11arquitectura/"
        target="_blank"
        rel="noreferrer"
        title="Síguenos en Instagram"
        className="fixed w-15 h-15 bottom-[5.5rem] lg:bottom-[6rem] right-2.5 lg:right-5 text-white! bg-[var(--accent-d)] rounded-full text-center flex items-center justify-center text-4xl z-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <FaInstagram />
      </a>
    </div>
  );
};
