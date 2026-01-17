import styles from './SobreAngela.module.css'
import Home_Imagen3 from '../Imagenes/Img/About_Imagen1.png'

export default function SobreAngela() {
  return (
    <section className={styles.sobreAngela}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          <img 
            src={Home_Imagen3} 
            alt="Imagen sobre Angela y su trayectoria profesional" 
          />
        </div>

        <div className={styles.texto}>
          <h2>Sobre Angela</h2>
          <p>
            Con más de 25 años de experiencia, Angela ha acompañado a personas y
            organizaciones en procesos de crecimiento, transformación y toma
            de decisiones estratégicas, siempre con una mirada humana y
            profesional.
          </p>
          <button className={styles.boton}>
            <a
              href="/sobre-nosotros"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Conocé más
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}
