import ContactoForm from '../../components/ContactoForm/ContactoForm';
import styles from './Contacto.module.css';
// Importamos el logo con color
import Logo_Rizzi_Color_Header from "../../components/Imagenes/Logos/Logo_Rizzi_Color_Header.png";

export default function Contacto() {
  return (
    <section className={styles.contacto}>
      <div className={styles.container}>
        <h1 className={styles.tituloPrincipal}>Contactános</h1>
        
        <div className={styles.mainGrid}>
          {/* Columna Izquierda: Introducción y Formulario */}
          <div className={styles.formCol}>
            <p className={styles.bajada}>
              Te asesoramos en cada paso del proceso para que tu inversión sea segura y personalizada.
            </p>
            <div className={styles.formWrapper}>
              <ContactoForm />
            </div>
          </div>

          {/* Columna Derecha: Logo e Info de Angela */}
          <div className={styles.infoCol}>
            <div className={styles.logoContainer}>
              {/* CORRECCIÓN: Usamos el nombre exacto de la importación */}
              <img src={Logo_Rizzi_Color_Header} alt="Rizzi Group Logo" className={styles.logo} />
            </div>
            
            <div className={styles.perfil}>
              <h2 className={styles.nombre}>Angela Rizzi</h2>
              <p className={styles.cargo}>Broker Associate</p>
              <p className={styles.certificaciones}>GRI, CRS, TRC, REO Certified</p>
            </div>

            <div className={styles.datosContacto}>
              <p>101 Crandon Blvd. Suite 276 Key Biscayne FL 33149</p>
              <p className={styles.telefono}>+1 786-853-9853</p>
              <p className={styles.email}>investments.rizzi@gmail.com</p>
            </div>

            <div className={styles.socialIcons}>
               <div className={styles.iconCircle}>f</div>
               <div className={styles.iconCircle}>ig</div>
               <div className={styles.iconCircle}>x</div>
               <div className={styles.iconCircle}>yt</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}