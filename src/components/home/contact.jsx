import Image from "next/image";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    email: "",
    country: "",
    contactNumber: "",
    serviceRequired: "",
  });

  const onInputChange = ({ target: { value, id } }) => {
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  const submitForm = () => {
    Axios.post("/api/contact-us", formData)
      .then((res) => {
        Swal.fire({
          title: "Success",
          text: "You have successfully submited the form, we will contast you shortly",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Error submitting the form, try again later",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="container contact-section">
      <div className="row">
        <h1 className="home-title">Contact Us</h1>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-5">
              <form>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="name">
                      <input
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={onInputChange}
                      />
                    </label>
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="firstname">
                      <input
                        id="organizationName"
                        placeholder="Organisation Name"
                        className="form-control"
                        onChange={onInputChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="name">
                      <input
                        id="email"
                        className="form-control"
                        placeholder="E-Mail"
                        onChange={onInputChange}
                      />
                    </label>
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="name">
                      <input
                        id="country"
                        className="form-control"
                        placeholder="Counry"
                        onChange={onInputChange}
                      />
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
                    <label htmlFor="name">
                      <input
                        id="contactNumber"
                        className="form-control width-percent"
                        onChange={onInputChange}
                        placeholder="Contact Number"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 p-0">
                    <label>
                      <select
                        id="serviceRequired"
                        onChange={onInputChange}
                        className="form-control width-percent"
                      >
                        <option value="" selected disabled>
                          Select Services{" "}
                        </option>
                        <option value={"BRAND BUILDING"}>BRAND BUILDING</option>
                        <option value={"MARKETING STRATEGY"}>
                          MARKETING STRATEGY
                        </option>
                        <option value={"PRODUCT GROWTH"}>PRODUCT GROWTH</option>
                      </select>
                    </label>
                  </div>
                </div>
              </form>
              <p className="required">All Fields are Required</p>

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
              <h6>Get Consultation</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
