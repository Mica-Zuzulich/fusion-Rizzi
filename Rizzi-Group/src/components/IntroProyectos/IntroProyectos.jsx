import styles from './IntroProyectos.module.css'
import casaImg from '../Imagenes/Img/mundi.png'
import { useTranslation } from 'react-i18next' 

export default function IntroProyectos() {
  const { t } = useTranslation()
  
  const tituloHtml = t('introProyectos.titulo_html', { 
    interpolation: { escapeValue: false } 
  })

  return (
    <section className={styles.introProyectos}>
      <div className={styles.contenedor}>

        <div className={styles.texto}>
          <h2 dangerouslySetInnerHTML={{ __html: tituloHtml }} />
          
          <p>
            {t('intro.descripcion')}
          </p>
          <button className={styles.boton}>
            <a 
              href="/contacto" 
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {t('intro.boton')}
            </a>
          </button>
        </div>

          <div className={styles.imagen}>
            {<img 
              src={casaImg} 
              alt={t('intro.alt_imagen')} 
              className={styles.casaImg} 
            />}
          </div>
      </div>
    </section>
  )
}