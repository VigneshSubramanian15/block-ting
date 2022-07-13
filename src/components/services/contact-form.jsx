import React from "react";
import { useState } from "react";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";
import Loader from "../Loader";
import Swal from "sweetalert2";

export default function ContactForm({ show, setShow }) {
  const handleClose = () => setShow(false);

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
  // Form Data End
  return (
    <Modal
      size="lg"
      className="popup-contactform"
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className="  contact-section ">
          <div className="card-body p-5">
            <h3 style={{ color: "black", marginBottom: "20px" }}>
              Get Free Consultation
            </h3>
            <form onSubmit={submitForm}>
              <div className="row">
                <div className="col-md-12 col-xl-6">
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
                <div className="col-md-12 col-xl-6">
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
                <div className="col-md-12 col-xl-6">
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
                <div className="col-md-12 col-xl-6">
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

              <div className="row">
                <div className="col-md-12 col-xl-6">
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
                </div>

                <div className="col-md-12 col-xl-6">
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
                      <option className="options" value={"Marketing Strategy"}>
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
  );
}
