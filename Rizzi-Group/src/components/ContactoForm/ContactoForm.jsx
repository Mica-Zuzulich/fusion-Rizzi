import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import styles from "./ContactoForm.module.css";

export default function ContactoForm() {
  const { t } = useTranslation(); 

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setEstado(t("contacto.estado.captcha_error"));
      return;
    }

    setEnviando(true);
    setEstado("");

    try {
     
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje, captchaToken }),
      });

      const data = await res.json();
      if (data.success) {
        setEstado(t("contacto.estado.success"));
        setNombre("");
        setEmail("");
        setMensaje("");
        setCaptchaToken("");
      } else {
        setEstado(t("contacto.estado.fail"));
      }
    } catch (error) {
      console.error("Error:", error);
      setEstado(t("contacto.estado.connect_error"));
    }

    setEnviando(false);
  };
  
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Campo Nombre */}
      <label htmlFor="nombre">{t("contacto.label_nombre")}</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        placeholder={t("contacto.placeholder_nombre")}
      />
      
      {/* Campo E-mail */}
      <label htmlFor="email">{t("contacto.label_email")}</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder={t("contacto.placeholder_email")}
      />
      
      {/* Campo Mensaje */}
      <label htmlFor="mensaje">{t("contacto.label_mensaje")}</label>
      <textarea
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        placeholder={t("contacto.placeholder_mensaje")}
        rows={12} 
      />

      {/*  Implementación de ReCAPTCHA */}
      <div className={styles.captchaContainer}>
        
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY" 
          onChange={handleCaptchaChange}
        />
      </div>

      {/* Botón de Envío */}
      <button type="submit" disabled={enviando || !captchaToken}>
        {enviando ? t("contacto.boton_enviando") : t("contacto.boton_enviar")}
      </button>
      
      {/* Mensaje de Estado */}
      {estado && <p className={styles.estadoMensaje}>{estado}</p>}
    </form>
  );
}
