import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Mobile from "./Pages/Mobile";
import Pet from "./Pages/Pet";
import Services from "./Pages/Services";
import Sitter from "./Pages/Sitter";
import Testimonials from "./Pages/Testimonials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [component, setComponent] = useState("");
  const [bg, setBg] = useState("");
  useEffect(() => {
    switch (modalName) {
      case "contact":
        setComponent(<Contact />);
        setBg("bg-contact-confetti");
        break;
      case "pet":
        setComponent(<Pet />);
        setBg("bg-profile-confetti");
        break;
      case "sitter":
        setComponent(<Sitter />);
        setBg("bg-sitter-confetti");
        break;
      case "mobile":
        setComponent(<Mobile />);
        setBg("bg-app-confetti");
        break;
      case "about":
        setComponent(<About />);
        setBg("bg-about-confetti");
        break;
      case "testimonials":
        setComponent(<Testimonials />);
        setBg("bg-testimonial-confetti");
        break;
      case "services":
        setComponent(<Services />);
        setBg("bg-service-confetti");
        break;

      default:
        break;
    }
  }, [modalName]);

  return (
    <div className={`${modal ? "overflow-hidden max-h-screen" : ""}`}>
      <ToastContainer />
      <Header setModalName={setModalName} setModal={setModal} />
      <Hero setModalName={setModalName} setModal={setModal} />
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[99%] z-20"
            key={modal}
            initial={{ opacity: 0, bottom: "-100vh" }}
            animate={{ bottom: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            exit={{ opacity: 0, bottom: "-100vh" }}
          >
            <Modal bg={bg} setModal={setModal} Component={component} />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
