import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";
import ImageSection from "../src/components/services/ImageSection";
import { pageColor } from "../src/constant";
import { motion } from "framer-motion";
import Footer from "../src/components/footer";
import Head from "next/head";

function Service() {
  const content = {
    title: "Brand Building",
    content: `  Content marketing includes things like educational articles,
        e-books, videos, entertainment, and webinars that answer
        specific questions people have and provide them with
        something they can&apos;t get elsewhere.`,
  };
  const color = pageColor.brandPage;
  return (
    <>
      <Head>
        <title>Blockting - Brand Building</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="service"
      >
        <Header page={"brand"} />
        <div className="hero-section brand">
          <ServiceHero
            content={content}
            page="brand"
            image="/assets/service/branding.svg"
          />
        </div>
        <Features color={color} />
        <ImageSection color={color} />
      </motion.div>
      <Footer />
    </>
  );
}

export default Service;
