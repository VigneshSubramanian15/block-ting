import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";
import ImageSection from "../src/components/services/ImageSection";
import {pageColor} from "../src/constant";
import {motion} from "framer-motion";
import Head from "next/head";
import Footer from "../src/components/footer";
import GetStarted from "../src/components/get-started";
import WhyService from "../src/components/services/why-service";
import CardService from "../src/components/services/card-service";
import CarouselService from "../src/components/services/carousel-service";
import ProcessService from "../src/components/services/process-service";

function Service() {
    const content = {
        title: "Product Growth",
        content: `  Content marketing includes things like educational articles,
            e-books, videos, entertainment, and webinars that answer
            specific questions people have and provide them with
            something they can&apos;t get elsewhere.`,
    };
    const color = pageColor.productGrowthPage;
    return (
        <>
            <Head>
                <title>Blockting - Product Growth</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <motion.div
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.7, opacity: 0}}
                transition={{duration: 0.5}}
                className="service"
            >
                <Header page={"product-growth"}/>
                <div className="hero-section product-growth">
                    <ServiceHero
                        content={content}
                        page="product-growth"
                        image="/assets/service/product.svg"
                    />
                </div>
                <Features color={color}/>
                <ProcessService/>
                <WhyService/>
                <CardService/>
            </motion.div>
            <CarouselService/>
            <GetStarted/>
            <Footer/>
        </>
    );
}

export default Service;
