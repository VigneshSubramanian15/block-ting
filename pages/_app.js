import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/lib/main.scss";
import Footer from "../src/components/footer";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={"root"}>
        <Component {...pageProps} key={router.route} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
