function HelpAdvisory() {

    const helpData = [
        {
            id: 1,
            title: "Blockchain",
            secondTitle: "Consultancy",
            description: "It is a long established fact that a reader will be  distracted by the lights flashed",
            img: "/advisory/1.png"
        },
        {
            id: 2,
            title: "Tokenomic",
            secondTitle: "advice",
            description: "It is a long established fact that a reader will be  distracted by the lights flashed",
            img: "/advisory/2.png"
        },
        {
            id: 3,
            title: "Launch",
            secondTitle: "plan",
            description: "It is a long established fact that a reader will be  distracted by the lights flashed",
            img: "/advisory/3.png"
        },
        {
            id: 4,
            title: "Fund raising",
            secondTitle: "strategy",
            description: "It is a long established fact that a reader will be  distracted by the lights flashed",
            img: "/advisory/4.png"
        },
        {
            id: 5,
            title: "Collabrations and",
            secondTitle: "market positioning",
            description: "It is a long established fact that a reader will be  distracted by the lights flashed",
            img: "/advisory/5.png"
        }
    ]

    return <div>
        <div className="row justify-content-center help-section">
            {helpData?.map(({id, title, description, secondTitle, img})=>
                <div className="col-6 col-xl-4 d-flex align-items-center justify-content-center mb-5">
                    <div className="help-section__wrapper">
                        <img  src={img} alt="icon"/>
                        <h2>{title} <br/> {secondTitle}</h2>
                        <h6>{description}</h6>
                    </div>
                </div>)}
        </div>


    </div>
}

export default HelpAdvisory;