import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { pageColor } from "../../constant";

function ServiceHero({ content, image, page }) {
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
    setScroll(offset > window.innerHeight / 4);
  }, [offset]);
  return (
    <div className="container h-90 service-wrapper">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-lg-5 hero-content order-2 order-lg-1">
            <Image src={image} height={414} width={614} />
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
            <nav className={` ${scroll ? "tabs-right" : "tabs"}`}>
              <div className="selector"></div>
              <a
                href="/marketing-strategy"
                style={{
                  color:
                    page === "marketing-strategy"
                      ? pageColor.marketingStrategyPage
                      : "black",
                }}
                className={` ${page === "marketing-strategy" ? "active" : " "}`}
              >
                Marketing Strategy
              </a>
              <a
                className={` ${page === "product-growth" ? "active" : " "}`}
                style={{
                  color:
                    page === "product-growth"
                      ? pageColor.productGrowthPage
                      : "black",
                }}
                href="/product-growth"
              >
                Product Growth
              </a>
              <a
                className={` ${page === "brand" ? "active" : " "}`}
                style={{
                  color: page === "brand" ? pageColor.brandPage : "black",
                }}
                href="/brand-building"
              >
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
