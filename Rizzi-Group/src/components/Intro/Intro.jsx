import styles from './Intro.module.css'
import casaImg from '../Imagenes/Img/casaImg.png'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          <img 
            src={casaImg} 
            alt="Casa moderna" 
            className={styles.casaImg} 
          />
        </div>
        <div className={styles.texto}>
          <h2 className={styles.titulo}>
            La forma más <span className={styles.flexible}>flexible</span> de invertir.
          </h2>
          <p>
            Con sus más de 25 años de experiencia a una propuesta innovadora que 
            revoluciona la forma de acceder a una propiedad en Estados Unidos. Con un 
            esquema mucho más dinámico y flexible, pensado especialmente para las 
            familias latinoamericanas, se abre la puerta a un estilo de vida global, con 
            beneficios que van más allá de la compra tradicional de bienes raíces. 
            Rizzi Group te invita ¡Vive la experiencia!
          </p>
          <a href="/contacto" className={styles.boton}>
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}