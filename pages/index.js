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
import Head from "next/head";

function Home() {
  useEffect(() => {
    Axios.get("/api/user");
  }, []);
  const transition = { duration: 0.5, ease: "easeInOut" };

  return (
    <>
      <Head>
        <title>Blockting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div
        className="home-page"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ y: -100, opacity: 0, transition }}
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
