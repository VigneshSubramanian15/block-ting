function CardService() {
    const card = [
        {
            id: 1,
            firstname: "Stephen",
            lastname: "Smith",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "/assets/service/profile-icon.png"
        },
        {
            id: 2,
            firstname: "Kenny",
            lastname: "Sabastine",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "/assets/service/profile-icon.png"
        },
        {
            id: 3,
            firstname: "Stephen",
            lastname: "Smith",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "/assets/service/profile-icon.png"
        },
    ]
    return <div className="container service-card">
        <div className="row">
            <div className="col-md-12">
                <h1 className="cms-title text-center my-5">
                    Our Experts Who can <br/> Fetch you Results
                </h1>
            </div>
        </div>
        <div className="row justify-content-center p-4 p-md-0">
            {card?.map(({id, date, firstname,lastname, description, img}) =>
                <div className="col-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body d-flex justify-content-center flex-column align-items-center">
                            <div className="position-relative d-flex align-items-center justify-content-center flex-column">
                                <img alt={img} src={img}/>
                            </div>
                            <div className="card-title">{firstname} <br/> <span>{lastname}</span></div>
                            <div className="card-subtitle">{description}</div>
                        </div>
                        <div className="card-footer">
                            <button type="button">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}

export default CardService;