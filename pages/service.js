import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";

function Service() {
    return (
        <div className="service">
            <div className="hero-section">
                <Header/>
                <ServiceHero/>
            </div>
            <Features/>
        </div>
    )
}

export default Service;
