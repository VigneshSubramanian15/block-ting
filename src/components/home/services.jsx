import Image from "next/image";

function Service() {
    const serviceContent = [
        {
            id: "1",
            title: "BRAND BUILDING",
            description: "Building a Blockchain brand is not just about creating a community but evangelizing ",
            image: "/assets/service/1.png"
        },
        {
            id: "2",
            title: "MARKETING STRATEGY",
            description: "Building a Blockchain brand is not just about creating a community but evangelizing ",
            image: "/assets/service/2.png"
        },
        {
            id: "3",
            title: "PRODUCT GROWTH",
            description: "Building a Blockchain brand is not just about creating a community but evangelizing ",
            image: "/assets/service/3.png"
        },
        {
            id: "4",
            title: "BRAND BUILDING",
            description: "Building a Blockchain brand is not just about creating a community but evangelizing ",
            image: "/assets/service/4.png"
        }
    ]
    return <section className="service-section">
        <div className="container">
            <div className="row">
                <h1 className="home-title">Our Services</h1>
                <div className="col-xl-12">
                    <div className="service-grid">
                        {serviceContent?.map(({id, title, description, image}) => <>
                            <div className="card" key={id}>
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div>
                                            <h1>{title}</h1>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 position-relative">
                                        <div className="img-bg">
                                            <Image src={image} height={70} width={70} alt={`${title}-img`}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)}

                        <div className="group-icon__wrapper">
                            <Image className="group-icon" src={"/assets/service/group.png"} height={320} width={320} alt={"service-img"}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Service;