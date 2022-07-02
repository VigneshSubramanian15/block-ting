import Header from "../src/components/header";
import Hero from "../src/components/home/hero";
import What from "../src/components/home/what";
import Client from "../src/components/home/client";
import Contact from "../src/components/home/contact";
import Blogs from "../src/components/home/blogs";
import Footer from "../src/components/footer";
import Service from "../src/components/home/services";

function Home() {
    return (
        <>
            <div className="hero-section">
                <Header/>
                <Hero/>
            </div>

            <What/>
            <Service/>
            <Client/>
            <Contact/>
            <Blogs/>
            <Footer/>
        </>
    )
}

export default Home;
