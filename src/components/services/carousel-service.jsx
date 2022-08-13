function CarouselService() {
    const card = [
        {
            id: 1,
            firstname: "Adil Abbas",
            position: "MD - Kompwnd",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, labore dolores. Veniam accusantium corporis porro quasi eius qui modi, architecto iusto aliquid unde, vitae minus quod at, omnis temporibus molestiae",
        },
        {
            id: 2,
            firstname: "Kenny",
            position: "MD - Kompwnd",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, labore dolores. Veniam accusantium corporis porro quasi eius qui modi, architecto iusto aliquid unde, vitae minus quod at, omnis temporibus molestiae",
        },
        {
            id: 3,
            firstname: "Stephen",
            position: "MD - Kompwnd",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, labore dolores. Veniam accusantium corporis porro quasi eius qui modi, architecto iusto aliquid unde, vitae minus quod at, omnis temporibus molestiae",
        },
    ]
    const profile = [
        {
            id: 1,
            img: "/assets/service/profile/6.png"
        },
        {
            id: 2,
            img: "/assets/service/profile/5.png"
        },
        {
            id: 3,
            img: "/assets/service/profile/4.png"
        },
        {
            id: 4,
            img: "/assets/service/profile/3.png"
        },
        {
            id: 5,
            img: "/assets/service/profile/2.png"
        },
        {
            id: 6,
            img: "/assets/service/profile/1.png"
        },
        {
            id: 7,
            img: "/assets/service/profile/2.png"
        },
        {
            id: 7,
            img: "/assets/service/profile/3.png"
        },
        {
            id: 7,
            img: "/assets/service/profile/4.png"
        },
        {
            id: 7,
            img: "/assets/service/profile/5.png"
        },
        {
            id: 7,
            img: "/assets/service/profile/6.png"
        },
    ]
    return <div className="container-fluid carousel-service">
        <div className="container">
            <h1 className="cms-title my-5">
                What People Are Saying
            </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, labore dolores. Veniam accusantium
                corporis porro quasi eius qui modi, architecto iusto aliquid unde, vitae minus quod at, omnis temporibus
                molestiae
            </p>
        </div>

        <div className="container-fluid p-5">
            <div className="d-flex align-items-center justify-content-between profile-service">
                {profile?.map(({id, img}) => <div key={id} className="profile-img">
                    <img src={img} alt={"icon"}/>
                </div>)}
            </div>
        </div>

        <div className="container">
            <div className="card-wrapper p-4 p-md-0">
                {card?.map(({id, date, firstname, position, description, img}) =>
                    <div className="card">
                        <div className="card-body">
                            <div className="quote-service">
                                <img src="/assets/service/icons/quote.png" alt="quote-icon"/>
                            </div>
                            <div
                                className="position-relative">
                                <img alt={img} src={img}/>
                            </div>
                            <div className="card-title">{firstname} <br/> <span>{position}</span></div>
                            <div className="card-subtitle">{description}</div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default CarouselService;