import Image from "next/image";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Loader";

function Contact() {
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
            text: "You have successfully submitted the form, we will contact you shortly",
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
  return (
    <div className="container contact-section">
      <div className="row">
        <h1 className="home-title">Contact Us</h1>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-5">
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="name">
                      <input
                        id="name"
                        className="form-control"
                        value={formData.name}
                        placeholder="Name"
                        required
                        onChange={onInputChange}
                      />
                      {showError && !formData.name && (
                        <small className="input-error">
                          This field is required
                        </small>
                      )}
                    </label>
                  </div>
                  <div className="col-xl-6">
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
                  <div className="col-xl-6">
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
                  <div className="col-xl-6">
                    <label htmlFor="country">
                      <input
                        id="country"
                        className="form-control"
                        placeholder="Country"
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

                <div className="desktop-img">
                  <Image
                    src={"/assets/contact.png"}
                    width={564}
                    height={285}
                    className="float-end"
                    alt={"img"}
                  />
                </div>

                <div className="row">
                  <div className="col-xl-12 p-0">
                    <label htmlFor="contactNumber">
                      <input
                        id="contactNumber"
                        className="form-control width-percent"
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 p-0">
                    <label>
                      <select
                        id="serviceRequired"
                        className="form-control width-percent"
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

              <div className="mobile-img">
                <Image
                  src={"/assets/contact.png"}
                  width={564}
                  height={285}
                  className="float-end"
                  alt={"img"}
                />
              </div>
            </div>

            <div onClick={submitForm} className="card-footer p-3">
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
      </div>
    </div>
  );
}

export default Contact;
