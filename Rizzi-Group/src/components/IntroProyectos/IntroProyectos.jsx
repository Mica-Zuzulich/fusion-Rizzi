import styles from './IntroProyectos.module.css'
import casaImg from '../Imagenes/Img/mundi.png'

export default function IntroProyectos() {
  return (
    <section className={styles.introProyectos}>
      <div className={styles.contenedor}>
        <div className={styles.texto}>
          <h2 className={styles.titulo}>
            introducción a proyectos
          </h2>
          <p>
            Con sus más de 25 años de experiencia, Rizzi Group presenta una propuesta 
            innovadora que revoluciona la forma de acceder a una propiedad en 
            Estados Unidos. Con un esquema mucho más dinámico y flexible, pensado 
            especialmente para las familias latinoamericanas, se abre la puerta a un de 
            vida global, con beneficios que van más allá de la compra tradicional de 
            bienes raíces. Grupo Rizzi te invita: ¡Vive la experiencia!
          </p>
          <a href="/contacto" className={styles.boton}>
            Contáctanos
          </a>
        </div>
        <div className={styles.imagen}>
          <img
            src={casaImg}
            alt="Imagen representativa de propiedades globales"
            className={styles.casaImg}
          />
        </div>
      </div>
    </section>
  )
}