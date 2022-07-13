import Link from "next/link";
import links from "../../../data/footer-links.json";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "../services/contact-form";

function FooterLinks() {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const company = [
    { name: "About Us", href: "/" },
    { name: "Careers and Culture", href: "/" },
    { name: "Leadership", href: "/" },
    { name: "Partners", href: "/" },
    { name: "news", href: "/" },
  ];

  const learn = [
    { name: "PPC", href: "/" },
    { name: "Whitepapers", href: "/" },
    { name: "Webinars", href: "/" },
    { name: "Videos", href: "/" },
  ];

  return (
    <div className="container footer-links">
      <div className="row">
        <div className="col-lg-6 footer-links__left">
          <div className="row">
            <div className="col-xl-12">
              <form className="form">
                <button onClick={handleShow}>Request Consultation</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <h6>Company</h6>
              <ul>
                {company?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-4">
              <h6>Learn</h6>
              <ul>
                {learn?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="position-relative d-flex align-items-center">
                <Image
                  src="/icons/location.png"
                  width={12}
                  height={20}
                  alt={"Location-icon"}
                />
                <p className="mx-3">
                  Sefaköy Ave, Küçükçekmece <br /> District, Istanbul
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 footer-links__right mb-5">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <h6>Free Keyword Tool & Resources</h6>
              <ul>
                {links?.resource?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 mb-5">
              <h6>Search Marketing Fundamentals</h6>
              <ul>
                {links?.searchMarketing?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 mb-5">
              <h6>Marketing 101</h6>
              <ul>
                {links?.marketing?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <h6>Online Marketing Tools</h6>
              <ul>
                {links?.onlineMarketing?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 mb-5">
              <h6>Call to Action Examples</h6>
              <ul>
                {links?.action?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 mb-5">
              <h6>PPC Research</h6>
              <ul>
                {links?.research?.map(({ name, href }) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ContactForm show={show} setShow={setShow} />
    </div>
  );
}

export default FooterLinks;
