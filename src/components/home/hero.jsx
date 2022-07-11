import Image from "next/image";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

function Hero() {
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="container h-90">
      <div className="row h-100">
        <div className="col-lg-6 hero-content">
          <h1>We do the best Marketing</h1>
          <p>
            {` Content marketing includes things like educational articles,
                    e-books, videos, entertainment, and webinars that answer
                    specific questions people have and provide them with
                    something they can't get elsewhere.`}
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your E-Mail Address"
              aria-label="Recipient's username"
              value={email}
              aria-describedby="button-addon2"
              onChange={({ target: { value } }) => setemail(value)}
            />
            <button
              className="btn btn-outline-secondary hero-button"
              type="button"
              id="button-addon2"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            >
              Free Consultation
              {loading && (
                <>
                  <Spinner
                    className="spinner-border m-1"
                    animation="border"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </>
              )}
            </button>
          </div>
          <div className="social-icons">
            <Image
              src={"/icons/twitter.png"}
              alt="twitter"
              height={29}
              width={29}
            />
            <Image
              src={"/icons/instagram.png"}
              alt="instagram"
              height={29}
              width={29}
            />
            <Image
              src={"/icons/telegram.png"}
              alt="telegram"
              height={29}
              width={29}
            />
          </div>
        </div>
        <div className="col-lg-6 hero-content">
          <Image
            src={"/assets/newBg.svg"}
            alt="hero-img"
            height={414}
            width={614}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
