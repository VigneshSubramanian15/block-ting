import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StackedCard({ clientInfo }) {
  return (
    <div className="card stacked-cards">
      {clientInfo.map((iclientInfo, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            top: "-50px",
          }}
          key={iclientInfo.key}
          className="card card--added"
        >
          <div className="media">
            <div className="profile-user">
              <Image
                src={iclientInfo.clientProfilePic}
                height={110}
                width={110}
                alt="Quote-Img"
              />
            </div>
            <div className="media-body">
              <h5>{iclientInfo.clientName}</h5>
              <p>{iclientInfo.clientDesignation}</p>
            </div>
          </div>
          <p>
            {iclientInfo.clientTestimonial}
            <Image
              src={iclientInfo.logoimage}
              height={136}
              width={136}
              alt="Quote-Img"
              className="logo-bg"
            />
          </p>
        </motion.div>
      ))}
    </div>
  );
}
