import styles from './Servicios.module.css'
import Icono1 from '../../components/Imagenes/Íconos/home_inversion_inmobiliaria.png'; 
import Icono2 from '../../components/Imagenes/Íconos/home_alcance_internacional.png'; 
import Icono3 from '../../components/Imagenes/Íconos/home_asesoramiento_legal.png'; 
import Icono4 from '../../components/Imagenes/Íconos/home_prestamos.png';

export default function Servicios() {
  return (
    <section className={styles.servicios}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={Icono1} alt="Propiedades" className={styles.cardImg} />
          <h3>Propiedades</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    <button></button>
        </div>
        <div className={styles.card}>
          <img src={Icono2} alt="Inversiones Internacionales" className={styles.cardImg} />
          <h3>Inversiones Internacionales</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    <button></button>
        </div>
        <div className={styles.card}>
          <img src={Icono3} alt="Propiedades en Miami" className={styles.cardImg} />
          <h3>Asesoramiento Legal</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    <button></button>
        </div>
        <div className={styles.card}>
          <img src={Icono4} alt="Inversión Inmobiliaria" className={styles.cardImg} />
          <h3>Prestamos inmobiliarios</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    <button className={styles.botonPrestamo}>Consulte con nuestro experto de confianza</button>

        </div>
      </div>
    </section>
  )
}