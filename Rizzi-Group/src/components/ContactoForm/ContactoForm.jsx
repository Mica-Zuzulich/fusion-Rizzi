import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ContactoForm.module.css";

export default function ContactoForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setEstado("Por favor, verificá que no sos un robot.");
      return;
    }

    setEnviando(true);
    setEstado("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje, captchaToken }),
      });

      const data = await res.json();

      if (data.success) {
        setEstado("Mensaje enviado correctamente. Gracias por contactarnos.");
        setNombre("");
        setEmail("");
        setMensaje("");
        setCaptchaToken("");
      } else {
        setEstado("Ocurrió un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      setEstado("No se pudo conectar con el servidor.");
    }

    setEnviando(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        placeholder="Tu nombre"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Tu email"
      />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        placeholder="Escribí tu mensaje"
        rows={12}
      />

      <div className={styles.captchaContainer}>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
        />
      </div>

      <button type="submit" disabled={enviando || !captchaToken}>
        {enviando ? "Enviando..." : "Enviar mensaje"}
      </button>

      {estado && <p className={styles.estadoMensaje}>{estado}</p>}
    </form>
  );
}
