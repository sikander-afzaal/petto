import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Pet from "./Pages/Pet";

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

      default:
        break;
    }
  }, [modalName]);

  return (
    <div className="App">
      <Header setModalName={setModalName} setModal={setModal} />
      <Hero setModalName={setModalName} setModal={setModal} />
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed bottom-0 left-0 w-full z-20"
            key={modal}
            initial={{ opacity: 0, bottom: "-100vh" }}
            animate={{ bottom: 0, opacity: 1 }}
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
