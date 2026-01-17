import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AppRouter } from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
