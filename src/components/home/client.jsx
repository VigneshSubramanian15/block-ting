import { motion } from "framer-motion";
import { useState } from "react";
import StackedCard from "./stacked-card";

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
  const [clientId, setClientId] = useState(clientInfo);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="container client-section">
      <div className="row">
        <h1 className="home-title">What Our Clients Say</h1>
        <div
          className="col-lg-6 mb-5"
          style={{ transform: "translate(10px, 50px)" }}
        >
          <StackedCard clientInfo={clientId} />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="row client-grid"
          >
            {clientInfo?.map((img, i) => (
              <div
                onClick={() =>
                  setClientId((setClientId) => [...setClientId, clientInfo[i]])
                }
                className="col-sm-4 client-border"
                key={img}
              >
                <motion.img
                  src={img.logoimage}
                  width={100}
                  alt={img.logoimage}
                  height={100}
                  variants={item}
                  key={img}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Client;
