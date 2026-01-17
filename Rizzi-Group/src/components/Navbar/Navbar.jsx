import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo_Rizzi_Color_Header from "../Imagenes/Logos/Logo_Rizzi_Color_Header.png";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src={Logo_Rizzi_Color_Header}
            alt="Rizzi Group - Home"
            className={styles.logoImg}
          />
        </Link>

        {/* Botón hamburguesa */}
        <button className={styles.menuBtn} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navegación */}
        <nav className={`${styles.nav} ${menuAbierto ? styles.navVisible : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            Contacto
          </NavLink>
        </nav>

        {/* Redes Sociales */}
        <div className={styles.redes}>
          <a href="#" className={styles.iconoRed} aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className={styles.iconoRed} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className={styles.iconoRed} aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="#" className={styles.iconoRed} aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </header>
  );
}