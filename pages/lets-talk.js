import Head from "next/head";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import GetStarted from "../src/components/get-started";
import BadgeTalk from "../src/components/lets-talk/badge-talk";
import ListTalk from "../src/components/lets-talk/list-talk";
import BadgeTwoTalk from "../src/components/lets-talk/badge-two-talk";
import CardTalk from "../src/components/lets-talk/card-talk";

function LetsTalk() {
  return (
    <div className="section-lets-talk">
      <Head>
        <title>Blockting - Lets Talk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header page={"our-solutions"} />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1 className="cms-title cms-title-one mb-5">
              How we can help you
            </h1>
            <BadgeTalk />
            <ListTalk />
            <h1 className="cms-title cms-title-two  text-center">
              How we can help you
            </h1>
            <BadgeTwoTalk />
            <CardTalk />
          </div>
        </div>
      </div>
      <GetStarted />
      <Footer />
    </div>
  );
}

export default LetsTalk;
