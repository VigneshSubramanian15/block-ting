import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/lib/main.scss';
import Footer from "../src/components/footer";

function MyApp({Component, pageProps}) {
    return <>
        <Component {...pageProps} />
        <Footer/>
    </>
}

export default MyApp
