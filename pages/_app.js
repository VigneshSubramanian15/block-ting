import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/lib/main.scss";
function MyApp({ Component, pageProps, router }) {
  console.log(router);
  return (
    <>
      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
