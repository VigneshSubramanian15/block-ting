import Image from "next/image";

function What() {
    return <section className="what-section">
        <div className="container">
            <div className="row">
                <h1 className="home-title">What we Do</h1>
                <div className="col-lg-6">
                    <Image src={"/home/chart.png"} height={388} width={571}/>
                </div>
                <div className="col-lg-6">
                    <p>
                        Disruptive marketing involves using experimental tactics that challenge the status quo. Rather
                        than following conventional marketing wisdom, disruptive marketers test daring, new tactics that
                        haven't been tried before. Some work while others fall flat. And that's ok, that's how
                        innovation works.
                    </p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card card-one position-relative">
                                <strong>20 <span>Projects Completed <Image src={"/icons/hand.png"}
                                                       height={41}
                                                       width={41}/></span>
                                </strong>
                            </div>

                            <div className="card card-two">
                                <strong>450% <span>Average ROI</span></strong>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card card-two">
                                <strong>93% <span>Client Retension</span></strong>
                            </div>
                            <div className="card card-one last">
                                <strong>2000 <Image src={"/icons/coffee.png"} height={33} width={33}/></strong> <span>Cups Of Coffee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default What;