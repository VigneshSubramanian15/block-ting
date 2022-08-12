import CardSolutions from "../src/components/our-solutions/card-solutions";
import Head from "next/head";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import BadgeSolutions from "../src/components/our-solutions/badge-solutions";
import PaginationSolutions from "../src/components/our-solutions/pagination-solutions";
import GetStarted from "../src/components/get-started";

function OurSolutions(){
    return <div className="section-our-solutions">
        <Head>
            <title>Blockting - Our Solutions</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header page={"our-solutions"} />
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <h1 className="cms-title text-center">Our Solutions</h1>
                    <BadgeSolutions/>
                    <CardSolutions/>
                    <PaginationSolutions/>
                </div>
            </div>
        </div>
        <GetStarted/>
        <Footer/>
    </div>
}

export default OurSolutions