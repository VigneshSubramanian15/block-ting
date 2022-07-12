import Header from "../src/components/header";
import Hero from "../src/components/home/hero";
import What from "../src/components/home/what";
import Client from "../src/components/home/client";
import Contact from "../src/components/home/contact";
import Blogs from "../src/components/home/blogs";
import Service from "../src/components/home/services";
import { motion } from "framer-motion";
import Footer from "../src/components/footer";
import { useEffect } from "react";
import Axios from "axios";

function Home() {
  useEffect(() => {
    Axios.get("/api/user");
  }, []);
  return (
    <>
      <motion.div
        className="home-page"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-section">
          <Header />
          <Hero />
        </div>

        <What />
        <Service />
        <Client />
        <Contact />
        <Blogs />
      </motion.div>
      <Footer />
    </>
  );
}

export default Home;
