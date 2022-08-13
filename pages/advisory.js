import Head from "next/head";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import GetStarted from "../src/components/get-started";
import BadgeTalk from "../src/components/lets-talk/badge-talk";
import ListTalk from "../src/components/lets-talk/list-talk";
import BadgeTwoTalk from "../src/components/lets-talk/badge-two-talk";
import CardTalk from "../src/components/lets-talk/card-talk";
import BannerAdvisory from "../src/components/advisory/banner-advisory";
import HelpAdvisory from "../src/components/advisory/help-advisory";
import MembersAdvisory from "../src/components/advisory/members-advisory";

function LetsTalk() {
    return <div className="section-banner-advisory">
        <Head>
            <title>Blockting - Advisory</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header page={"advisory"}/>
        <div className="container">
            <div className="row position-relative">
                <div className="col-xl-12">
                    <h1 className="cms-title cms-title-one">Beyond Marketing
                        <br/>services</h1>
                    <BannerAdvisory/>
                    <h1 className="cms-title cms-title-two text-center">Members</h1>
                    <MembersAdvisory/>
                    <h1 className="cms-title cms-title-three text-center">What can we help you with?</h1>
                    <div className="help-description">
                        <p>
                            It is a long established fact that a reader will be distracted by the Lights Flashed It is a
                            long established fact that a reader will be distracted by the Lights Flashed
                        </p>
                    </div>
                    <HelpAdvisory/>
                </div>
            </div>
        </div>
        <GetStarted/>
        <Footer/>
    </div>
}

export default LetsTalk