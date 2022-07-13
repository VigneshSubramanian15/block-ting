import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/lib/main.scss";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <SSRProvider>
        <Component {...pageProps} key={router.route} />
      </SSRProvider>
    </AnimatePresence>
  );
}

export default MyApp;
