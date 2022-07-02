import Image from "next/image";

function Contact() {
    return <div className="container contact-section">
        <div className="row">
            <h1 className="home-title">Contact Us</h1>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-5">
                        <form>
                            <div className="row">
                                <div className="col-xl-6">
                                    <label htmlFor="name">
                                        <input id="name"
                                               className="form-control"
                                        placeholder="Name"/>
                                    </label>
                                </div>
                                <div className="col-xl-6">
                                    <label htmlFor="firstname">
                                        <input id="firstname"
                                               placeholder="Organisation Name"
                                               className="form-control"/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <label htmlFor="name">
                                        <input id="name"
                                               className="form-control"
                                               placeholder="E-Mail"/>
                                    </label>
                                </div>
                                <div className="col-xl-6">
                                  <label className="w-75">
                                      <select className="form-control">
                                          <option>Country</option>
                                      </select>
                                  </label>
                                </div>
                            </div>
                            <Image src={"/assets/contact.png"} width={564} height={285} className="float-end"/>
                            <div className="row">
                                <div className="col-xl-12 w-75 p-0">
                                    <label htmlFor="name">
                                        <input id="name"
                                               className="form-control"
                                               placeholder="Contact Number"/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 w-75 p-0">
                                    <label>
                                        <select className="form-control">
                                            <option>Service Required</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <p className="required">All Fields are Required</p>
                    </div>

                    <div className="card-footer p-3">
                        <h6>Get Consultation</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Contact;