import Image from "next/image";

function ServiceHero({ content }) {
  return (
    <div className="container h-90 service-wrapper">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-lg-4 hero-content order-2 order-lg-1">
            <Image src={"/hero-img.png"} height={414} width={614} />
          </div>
          <div className="col-lg-8 hero-content order-1 order-lg-2">
            <h1>{content.title}</h1>
            <p>
              Content marketing includes things like educational articles,
              e-books, videos, entertainment, and webinars that answer specific
              questions people have and provide them with something they
              can&apos;t get elsewhere.
            </p>
            <div className="text-end">
              <button
                className="btn btn-outline-secondary shadow-lg"
                type="button"
                id="button-addon2"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;