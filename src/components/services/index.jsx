import Image from "next/image";

function ServiceHero() {
    return <div className="container h-90">
        <div className="row h-100">
            <div className="col-lg-6 hero-content order-2 order-lg-1">
                <Image src={"/hero-img.png"}
                       height={414}
                       width={614}/>
            </div>
            <div className="col-lg-6 hero-content order-1 order-lg-2">
                <h1>
                    Lorem Ipsum is simply dummy text..
                </h1>
                <p>
                    Content marketing includes things like educational articles,
                    e-books, videos, entertainment, and webinars that answer
                    specific questions people have and provide them with
                    something they can't get elsewhere.
                </p>
               <div className="text-end">
                   <button
                       className="btn btn-outline-secondary"
                       type="button"
                       id="button-addon2">
                       Free Consultation
                   </button>
               </div>
            </div>
        </div>
    </div>
}

export default ServiceHero;