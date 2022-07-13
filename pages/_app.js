import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/lib/main.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <SSRProvider>
      <Component {...pageProps} key={router.route} />
    </SSRProvider>
  );
}

export default MyApp;
