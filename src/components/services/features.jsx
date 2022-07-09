function Features() {
    const serviceContent = [
        {
            id: 1,
            title: "Lorem Ipsum is simply dummy text ",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                       className="bi bi-server" viewBox="0 0 16 16">
                <path
                    d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
                <path
                    d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/>
                <path
                    d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
            </svg>
        },
        {
            id: 2,
            title: "established fact that a",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
        },
        {
            id: 3,
            title: "Contrary to popular belief",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM.91 7.204A2.993 2.993 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782L.91 7.204z"/>
            </svg>
        },
    ]
    return <div className="container py-5 service-content">
        <div className="row">
            <div className="col-lg-12">
                <p className="service-content__sub-title">Features</p>
                <h1 className="service-content__title">Lorem Ipsum is simply dummy text <br/> of the printing and typesetting industry?</h1>

                <div className="row">
                    {serviceContent?.map(({id, title, description, icon})=><div className="col-xl-4 mb-4" key={id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="card-icon shadow-sm">
                                    {icon}
                                </div>
                                <h3 className="card-title">{title}</h3>
                                <p className="card-text">{description}</p>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    </div>
}

export default Features;