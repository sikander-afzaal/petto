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

function App() {
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [component, setComponent] = useState("");
  useEffect(() => {
    switch (modalName) {
      case "contact":
        setComponent(<Contact />);
        break;
      case "pet":
        setComponent(<Pet />);
        break;
      case "sitter":
        setComponent(<Sitter />);
        break;
      case "mobile":
        setComponent(<Mobile />);
        break;
      case "about":
        setComponent(<About />);
        break;
      case "testimonials":
        setComponent(<Testimonials />);
        break;
      case "services":
        setComponent(<Services />);
        break;

      default:
        break;
    }
  }, [modalName]);

  return (
    <div className={`${modal ? "overflow-hidden max-h-screen" : ""}`}>
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
            <Modal setModal={setModal} Component={component} />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
