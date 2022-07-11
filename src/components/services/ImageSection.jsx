import Image from "next/image";
import React from "react";

export default function ImageSection({ color }) {
  return (
    <section className="container py-5 image-section">
      <div className="row">
        <div className="col-md-7">
          <h1 style={{ color: "black" }} className="colored">
            Lorem ipsum dolor sit{" "}
          </h1>
          {/* <p className="service-content__sub-title" style={{ marginTop: 0 }}>
            Features
          </p> */}
          <h4 style={{ color: color }}>Highlight</h4>
          <div className="row" style={{ paddingLeft: "25px" }}>
            <div className="col-md-6">
              <ul className="list">
                <li>Lorem ipsum</li>
                <li> Veniam accusantium</li>
                <li>sit amet consectetur adipisicing</li>
                <li>temporibus molestiae</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list">
                <li>Lorem ipsum</li>
                <li> Veniam accusantium</li>
                <li>sit amet consectetur adipisicing</li>
                <li>temporibus molestiae</li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, labore dolores. Veniam accusantium corporis porro quasi
            eius qui modi, architecto iusto aliquid unde, vitae minus quod at,
            omnis temporibus molestiae
          </p>
          <p>
            Laudantium, labore dolores. Veniam accusantium corporis porro quasi
            eius qui modi, architecto iusto aliquid unde, vitae minus quod at,
            omnis temporibus molestiae
          </p>
        </div>
        <div className="col-md-5 align-right">
          <span className="image-span">
            <Image
              src="/assets/service/services.png"
              width={455}
              height={260}
              alt="service"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
