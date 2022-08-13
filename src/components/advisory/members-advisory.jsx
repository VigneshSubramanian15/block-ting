function MembersAdvisory() {

    const membersData = [
        {
            id: 1,
            name: "Varun \n" +
                "Singhi\n",
            img: "/advisory/profile/1.png"
        },
        {
            id: 2,
            name: "Pankaj \n" +
                "Diwan\n",
            img: "/advisory/profile/1.png"
        },
        {
            id: 3,
            name: "Prasanna \n" +
                "Lohar\n",
            img: "/advisory/profile/1.png"
        },
        {
            id: 4,
            name: "Raj A \n" +
                "Kapoor\n",
            img: "/advisory/profile/1.png"
        },
        {
            id: 5,
            name: "Pankaj \n" +
                "Diwan\n",
            img: "/advisory/profile/1.png"
        }
    ]

    return <div className="members-section">
        <div className="card">
            <div className="card-body">
                <div className="row justify-content-around">
                    {membersData?.map(({id, name, img}) =>
                        <div className="col-6 col-md-1 d-flex align-items-center justify-content-center flex-column">
                            <img src={img} alt="icon"/>
                            <h2>{name}</h2>
                        </div>)}
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting,
                </p>
            </div>

        </div>
    </div>
}

export default MembersAdvisory;