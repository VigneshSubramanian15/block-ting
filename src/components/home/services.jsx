import Image from "next/image";
import Router from "next/router";

function Service() {
  const serviceContent = [
    {
      id: "1",
      title: "BRAND BUILDING",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Branding.svg",
      url: "/brand-building",
    },
    {
      id: "2",
      title: "MARKETING STRATEGY",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Marketing.svg",
      url: "/marketing-strategy",
    },
    {
      id: "3",
      title: "PRODUCT GROWTH",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Brand-1.svg",
      url: "/product-growth",
    },
    {
      id: "4",
      title: "BRAND BUILDING",
      description:
        "Building a Blockchain brand is not just about creating a community but evangelizing ",
      image: "/assets/HomePage/Growth.svg",
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
              {serviceContent?.map(({ id, title, description, image, url }) => (
                <>
                  <div
                    onClick={() => {
                      Router.push(url);
                    }}
                    className="card"
                    key={id}
                  >
                    <div className="row">
                      <div className="col-xl-8">
                        <div>
                          <h1>{title}</h1>
                          <p>{description}</p>
                        </div>
                      </div>
                      <div className="col-xl-4 position-relative">
                        <div className="img-bg">
                          <Image
                            src={image}
                            height={70}
                            width={70}
                            alt={`${title}-img`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

              <div className="group-icon__wrapper">
                <Image
                  className="group-icon"
                  src={"/assets/HomePage/center-block.svg"}
                  height={320}
                  width={320}
                  alt={"service-img"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
