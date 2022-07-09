import Image from "next/image";
import { useState } from "react";

const clientInfo = [
  {
    clientName: "Adil",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
    ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
    the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/1.png",
  },
  {
    clientName: "Adil 1",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/2.png",
  },
  {
    clientName: "Adil 2",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/3.png",
  },
  {
    clientName: "Adil 3",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/4.png",
  },
  {
    clientName: "Adil",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/5.png",
  },
  {
    clientName: "Adil",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/6.png",
  },
  {
    clientName: "Adil",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/7.png",
  },
  {
    clientName: "Adil",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/8.png",
  },
  {
    clientName: "Adil",
    clientDesignation: "Managing Director",
    clientProfilePic: "/assets/user.png",
    clientTestimonial: `What we can do for you beyond marketing and content is to provide value to your
        ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is
        the biggest barrier for any project in this space.`,
    logoimage: "/assets/client/9.png",
  },
];

function Client() {
  const [clientId, setClientId] = useState(0);
  return (
    <div className="container client-section">
      <div className="row">
        <h1 className="home-title">What Our Clients Say</h1>
        <div className="col-lg-6 mb-5">
          <div className="card-one">
            <div className="card-two">
              <div className="card-three">
                <div className="card">
                  <div className="media">
                    <div className="profile-user">
                      <Image
                        src={clientInfo[clientId].clientProfilePic}
                        height={110}
                        width={110}
                        alt="Quote-Img"
                      />
                    </div>
                    <div className="media-body">
                      <h5>{clientInfo[clientId].clientName}</h5>
                      <p>{clientInfo[clientId].clientDesignation}</p>
                    </div>
                  </div>
                  <p>
                    {clientInfo[clientId].clientTestimonial}
                    <Image
                      src={clientInfo[clientId].logoimage}
                      height={136}
                      width={136}
                      alt="Quote-Img"
                      className="logo-bg"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="row client-grid">
            {clientInfo?.map((img, i) => (
              <div
                onClick={() => setClientId(i)}
                className="col-sm-4 client-border"
                key={img}
              >
                <Image
                  className="p-3"
                  src={img.logoimage}
                  width={100}
                  alt="quotes"
                  height={100}
                />
              </div>
            ))}
            <div className="dot">
              <button className="active" type="button">
                &#x2022;
              </button>
              <button className="" type="button">
                &#x2022;
              </button>
              <button className="" type="button">
                &#x2022;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
