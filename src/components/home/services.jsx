import Image from "next/image";
import Router from "next/router";
import BrandingSVG from "./animations/branding";
import CenterBlock from "./animations/center-block";
import GrowthSVG from "./animations/growth";
import MarketingSVG from "./animations/marketing";
import MarketingOneSVG from "./animations/marketingOne";

function Service() {
  const serviceContent = [
    {
      id: "1",
      title: "BRAND BUILDING",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Branding.svg",
      imageC: <BrandingSVG />,
      url: "/brand-building",
    },
    {
      id: "2",
      title: "MARKETING STRATEGY",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Marketing.svg",
      imageC: <MarketingSVG />,
      url: "/marketing-strategy",
    },
    {
      id: "3",
      title: "PRODUCT GROWTH",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Brand-1.svg",
      imageC: <GrowthSVG />,
      url: "/product-growth",
    },
    {
      id: "4",
      title: "BRAND BUILDING",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Growth.svg",
      imageC: <MarketingOneSVG />,
      url: "/brand-building",
    },
  ];
  return (
    <section className="service-section">
      <div className="container">
        <div className="row">
          <h1 className="home-title">Our Services</h1>
          <div className="col-xl-12">
            <div className="service-grid">
              {serviceContent?.map(
                ({ id, title, description, imageC, url }) => (
                  <>
                    <div
                      onClick={() => {
                        Router.push(url);
                      }}
                      className="card"
                      key={id}
                    >
                      <div className="row">
                        <div className="col-xl-8 col-8">
                          <div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-4">
                          <div className="img-bg position-relative">
                            {imageC}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}

              <div className="group-icon__wrapper">
                <CenterBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
