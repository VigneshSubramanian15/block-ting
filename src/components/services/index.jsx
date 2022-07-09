import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

function ServiceHero({ content }) {
  const [scroll, setScroll] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let event = offset > window.innerHeight;
    console.log({ offset, height: window.innerHeight, event });
    setScroll(offset > window.innerHeight / 4);
  }, [offset]);
  return (
    <div className="container h-90 service-wrapper">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-lg-5 hero-content order-2 order-lg-1">
            <Image src={"/hero-img.png"} height={414} width={614} />
          </div>
          <div className="col-lg-7 hero-content order-1 order-lg-2">
            <h1 style={{ color: "black" }}>{content.title}</h1>
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
            <nav className={`tabs ${scroll ? "scroll" : ""}`}>
              <div className="selector"></div>
              <a href="#" className="active">
                {/* <i className="fab fa-superpowers"></i> */}
                Marketing Strategy
              </a>
              <a href="#">
                {/* <i className="fas fa-hand-rock"></i> */}
                Product Growth
              </a>
              <a href="#">
                {/* <i className="fas fa-bolt"></i> */}
                Brand Building
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
