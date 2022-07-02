import Image from "next/image";

function Hero() {
    return <div className="container h-90">
        <div className="row h-100">
            <div className="col-lg-6 hero-content">
                <h1>We do the best
                    Marketing
                </h1>
                <p>
                    Content marketing includes things like educational articles,
                    e-books, videos, entertainment, and webinars that answer
                    specific questions people have and provide them with
                    something they can't get elsewhere.
                </p>
                <div className="input-group mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="Your E-Mail Address"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"/>
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2">
                        Free Consultation
                    </button>
                </div>
                <div className="social-icons">
                    <Image src={"/icons/twitter.png"}
                           height={29}
                           width={29}/>
                    <Image src={"/icons/instagram.png"}
                           height={29}
                           width={29}/>
                    <Image src={"/icons/telegram.png"}
                           height={29}
                           width={29}/>
                </div>
            </div>
            <div className="col-lg-6 hero-content">
                <Image src={"/hero-img.png"}
                       height={414}
                       width={614}/>
            </div>
        </div>
    </div>
}

export default Hero;