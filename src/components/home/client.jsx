import Image from "next/image";

const clientLogo = [
    "/assets/client/1.png",
    "/assets/client/2.png",
    "/assets/client/3.png",
    "/assets/client/4.png",
    "/assets/client/5.png",
    "/assets/client/6.png",
    "/assets/client/7.png",
    "/assets/client/8.png",
    "/assets/client/9.png",
]

function Client() {
    return <div className="container client-section">
        <div className="row">
            <h1 className="home-title">What Our Clients Say</h1>
            <div className="col-lg-6 mb-5">
                <div className="card-one">
                    <div className="card-two">
                        <div className="card-three">
                            <div className="card">
                                <div className="media">
                                    <div className="profile-user">
                                        <Image src={"/assets/user.png"}
                                               height={110}
                                               width={110}
                                               alt="Quote-Img"/>
                                    </div>
                                    <div className="media-body">
                                        <h5>Adil</h5>
                                        <p>Managing Director</p>
                                    </div>
                                </div>
                                <p>What we can do for you beyond marketing and content is to provide value to your
                                    ecosystem. The
                                    current Blockchain ecosystem is void of awareness and basic understanding which is

                                    <Image src={"/assets/icon/quote.png"}
                                           height={136}
                                           width={136}
                                           alt="Quote-Img"/>
                                    the biggest
                                    barrier for
                                    any project in
                                    this space.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="row client-grid">
                    {clientLogo?.map(img =>
                        <div className="col-sm-4 client-border" key={img}>
                            <Image
                                className="p-3"
                                src={img}
                                width={100}
                                height={100}/>
                        </div>)}
                    <div className="dot">
                        <button className="active" type="button">&#x2022;</button>
                        <button className="" type="button">&#x2022;</button>
                        <button className="" type="button">&#x2022;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Client;