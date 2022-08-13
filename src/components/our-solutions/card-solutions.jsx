function CardSolutions() {
    const card = [
        {
            id: 1,
            date: "15-07-2022",
            title: "Airdrop Crypto Promotion",
            description: "Though the ICO era may be over, the many instruments that were employed during it for community building and",
            data: "15-07-2022",
            img: "/solutions/solutions-1.png"
        },
        {
            id: 2,
            date: "15-07-2022",
            title: "Airdrop Crypto Promotion",
            description: "Though the ICO era may be over, the many instruments that were employed during it for community building and",
            data: "15-07-2022",
            img: "/solutions/solutions-2.png"
        },
        {
            id: 3,
            date: "15-07-2022",
            title: "Airdrop Crypto Promotion",
            description: "Though the ICO era may be over, the many instruments that were employed during it for community building and",
            data: "15-07-2022",
            img: "/solutions/solutions-3.png"
        },
        {
            id: 4,
            date: "15-07-2022",
            title: "Airdrop Crypto Promotion",
            description: "Though the ICO era may be over, the many instruments that were employed during it for community building and",
            data: "15-07-2022",
            img: "/solutions/solutions-1.png"
        }
    ]
    return <>
        <div className="row p-4 p-md-0">
            {card?.map(({id, date, title, description, img}) =>
                <div className="col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="position-relative">
                                <img alt={img} src={img}/>
                                <p>{date}</p>
                            </div>
                            <div className="card-title">{title}</div>
                            <div className="card-subtitle">{description}</div>
                        </div>
                        <div className="card-footer">
                            <button type="button">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
}

export default CardSolutions;