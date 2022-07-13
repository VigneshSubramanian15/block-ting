import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";
import Loader from "../Loader";
import Swal from "sweetalert2";

function ServiceHero({ content, image, page }) {
  const [scroll, setScroll] = useState(false);
  const [offset, setOffset] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form Data Start
  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    email: "",
    country: "",
    contactNumber: "",
    serviceRequired: "",
  });
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = ({ target: { value, id } }) => {
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.organizationName &&
      formData.email &&
      formData.country &&
      formData.contactNumber &&
      formData.serviceRequired
    ) {
      setLoading(true);
      Axios.post("/api/contact-us", formData)
        .then((res) => {
          setLoading(false);
          setShow(false);
          setFormData({
            name: "",
            organizationName: "",
            email: "",
            country: "",
            contactNumber: "",
            serviceRequired: "",
          });
          Swal.fire({
            title: "Success",
            text: "You have successfully submited the form, we will contast you shortly",
            icon: "success",
            confirmButtonText: "Done",
          });
        })
        .catch((err) => {
          setLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Error submitting the form, try again later",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } else {
      setShowError(true);
    }
  };
  // Form Data End

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
    <>
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
                e-books, videos, entertainment, and webinars that answer
                specific questions people have and provide them with something
                they can&apos;t get elsewhere.
              </p>
              <div className="text-end">
                <button
                  className="btn btn-outline-secondary shadow-lg"
                  type="button"
                  id="button-addon2"
                  onClick={handleShow}
                >
                  Free Consultation
                </button>
              </div>
              <nav className={` ${scroll ? "tabs-hide" : "tabs"}`}>
                <Link href="/product-growth">
                  <a
                    className={`${page === "product-growth" ? "active" : " "}`}
                    style={{
                      color: page === "product-growth" ? "black" : "#cfcfcf",
                    }}
                  >
                    Product Growth
                  </a>
                </Link>
                <Link href="/brand-building">
                  <a
                    className={`${page === "brand" ? "active" : " "}`}
                    style={{
                      color: page === "brand" ? "black" : "#cfcfcf",
                    }}
                  >
                    Brand Building
                  </a>
                </Link>
                <Link href="/marketing-strategy">
                  <a
                    className={` ${
                      page === "marketing-strategy" ? "active" : " "
                    }`}
                    style={{
                      color:
                        page === "marketing-strategy" ? "black" : "#cfcfcf",
                    }}
                  >
                    Marketing Strategy
                  </a>
                </Link>
              </nav>
              <nav className={` tabs-hidden ${!scroll ? "" : "tabs-show"}`}>
                <div>
                  <Link href="/product-growth">
                    <a
                      className={`${
                        page === "product-growth" ? "active" : " "
                      }`}
                      style={{
                        color: page === "product-growth" ? "black" : "#cfcfcf",
                      }}
                    >
                      Product Growth
                    </a>
                  </Link>
                  <Link href="/brand-building">
                    <a
                      className={`${page === "brand" ? "active" : " "}`}
                      style={{
                        color: page === "brand" ? "black" : "#cfcfcf",
                      }}
                    >
                      Brand Building
                    </a>
                  </Link>
                  <Link href="/marketing-strategy">
                    <a
                      className={` ${
                        page === "marketing-strategy" ? "active" : " "
                      }`}
                      style={{
                        color:
                          page === "marketing-strategy" ? "black" : "#cfcfcf",
                      }}
                    >
                      Marketing Strategy
                    </a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Modal className="popup-contactform" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="  contact-section ">
            <div className="card-body p-5">
              <h3 style={{ color: "black", marginBottom: "20px" }}>
                Get Free Consultation
              </h3>
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-xl-12">
                    <label htmlFor="name">
                      <input
                        id="name"
                        className="form-control"
                        value={formData.name}
                        placeholder="Name"
                        required
                        onChange={onInputChange}
                      />
                    </label>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="firstname">
                      <input
                        id="organizationName"
                        placeholder="Organisation Name"
                        className="form-control"
                        value={formData.organizationName}
                        required
                        onChange={onInputChange}
                      />
                      {showError && !formData.organizationName && (
                        <small className="input-error">
                          This field is required
                        </small>
                      )}
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <label htmlFor="name">
                      <input
                        id="email"
                        className="form-control"
                        value={formData.email}
                        placeholder="E-Mail"
                        required
                        onChange={onInputChange}
                      />
                      {showError && !formData.email && (
                        <small className="input-error">
                          This field is required
                        </small>
                      )}
                    </label>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="country">
                      <input
                        id="country"
                        className="form-control"
                        placeholder="Counry"
                        value={formData.country}
                        required
                        onChange={onInputChange}
                      />
                      {showError && !formData.country && (
                        <small className="input-error">
                          This field is required
                        </small>
                      )}
                    </label>
                  </div>
                </div>

                <div className="col-xl-12 p-0">
                  <label htmlFor="contactNumber">
                    <input
                      id="contactNumber"
                      className="form-control"
                      placeholder="Contact Number"
                      value={formData.contactNumber}
                      required
                      type="number"
                      onChange={onInputChange}
                    />
                    {showError && !formData.contactNumber && (
                      <small className="input-error">
                        This field is required
                      </small>
                    )}
                  </label>

                  <div className="col-xl-12">
                    <label>
                      <select
                        id="serviceRequired"
                        className="form-control"
                        value={formData.serviceRequired}
                        required
                        onChange={onInputChange}
                      >
                        <option className="options" value="" selected disabled>
                          Select Services{" "}
                        </option>
                        <option className="options" value={"Brand Building"}>
                          Brand Building
                        </option>
                        <option
                          className="options"
                          value={"Marketing Strategy"}
                        >
                          Marketing Strategy
                        </option>
                        <option value={"Product Growth"}>Product Growth</option>
                      </select>
                      {showError && !formData.serviceRequired && (
                        <small className="input-error">
                          This field is required
                        </small>
                      )}
                    </label>
                  </div>
                </div>
              </form>
              <div onClick={submitForm} className="card-footer submit-btn p-3">
                {!loading ? (
                  <h6>Get Consultation</h6>
                ) : (
                  <div className="loader-animation">
                    <Loader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceHero;
