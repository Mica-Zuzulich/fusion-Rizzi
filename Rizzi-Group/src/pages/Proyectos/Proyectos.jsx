import ProyectosIntro from '../../components/Proyectos/Proyectos';
import ProyectosCards from '../../components/Proyectos/ProyectosCards';
import ContactoForm from '../../pages/Contacto/Contacto';

export default function ProyectosPage() {
  return (
    <>
      <ProyectosIntro />
  
      <ProyectosCards />   {/*  banners */}

      <ContactoForm />

   
    </>
  );
}
