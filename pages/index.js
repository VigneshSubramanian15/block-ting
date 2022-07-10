import Header from "../src/components/header";
import Hero from "../src/components/home/hero";
import What from "../src/components/home/what";
import Client from "../src/components/home/client";
import Contact from "../src/components/home/contact";
import Blogs from "../src/components/home/blogs";
import Service from "../src/components/home/services";
import { motion } from "framer-motion";

function Home() {
  const item = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div variants={item} initial="hidden" animate="visible" exit="exit">
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
  );
}

export default Home;
