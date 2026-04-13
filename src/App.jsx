import React from "react";
import Navbar from "./Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Footer from "./Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

/* ================= PAGE TRANSITION ================= */
const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/* ================= ROUTES ================= */
const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>

      <Footer />
    </>
  );
};

/*  APP */
const App = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;