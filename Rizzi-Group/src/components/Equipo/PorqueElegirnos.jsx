import styles from './PorqueElegirnos.module.css'
import Home_IconoTick from '../Imagenes/Íconos/Home_IconoTick.png'

export default function PorqueElegirnos() {
  return (
    <section className={styles.porque}>
      <div className={styles.contenedor}>
        <div className={styles.texto}>
          <h2>¿Por qué elegirnos?</h2>

          <ul>
            <li>
              <img
                src={Home_IconoTick}
                alt="Icono de verificación"
              />
              Más de 25 años de experiencia profesional
            </li>

            <li>
              <img
                src={Home_IconoTick}
                alt="Icono de verificación"
              />
              Acompañamiento personalizado y humano
            </li>

            <li>
              <img
                src={Home_IconoTick}
                alt="Icono de verificación"
              />
              Enfoque estratégico orientado a resultados
            </li>

            <li>
              <img
                src={Home_IconoTick}
                alt="Icono de verificación"
              />
              Compromiso, confianza y profesionalismo
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
