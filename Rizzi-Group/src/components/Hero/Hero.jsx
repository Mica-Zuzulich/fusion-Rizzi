import styles from './Hero.module.css';
import Home_Hero from '../Imagenes/Img/Home_Hero.jpg';
import Logo_Blanco_Home from '../Imagenes/Logos/Logo_Blanco_Home.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.covertor}></div>

      <div className={styles.texto}>
        <div className={styles.logo}>
          <img
            src={Logo_Blanco_Home}
            alt="Rizzi Group"
            className={styles.logoHero}
          />
        </div>

        <h1>Grupo Inmobiliario</h1>
      </div>
    </section>
  );
}
