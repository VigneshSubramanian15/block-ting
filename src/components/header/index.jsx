import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import HamburgerMenuIcon from "../../../public/icons/Menu.png";
import { useState, useEffect } from "react";

function Header({ page }) {
  const [scrolled, setScrolled] = useState(0);
  const [offset, setOffset] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
    setScroll(offset > window.innerHeight / 4);
  }, [offset]);

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar expand="lg" className={`header ${page}`}>
        <div className="container">
          <Navbar.Brand href="/">
            <Image src={Logo.src} height={50} width={200} alt={"img"} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto my-2 my-lg-0">
              <DropdownButton
                title="Services"
                className="services-dropdown mx-4"
              >
                <Dropdown.Item href="/product-growth">
                  Product Growth
                </Dropdown.Item>
                <Dropdown.Item href="/brand-building">
                  Brand Building
                </Dropdown.Item>
                <Dropdown.Item href="/marketing-strategy">
                  Marketing Strategy
                </Dropdown.Item>
              </DropdownButton>
              <Nav.Link href="/">Blog</Nav.Link>
              <Nav.Link href="/">Portfolio</Nav.Link>
              <Nav.Link href="/advisory">Advisory</Nav.Link>
              <Nav.Link href="/" className="hamburger-menu">
                {/* <Image src={HamburgerMenuIcon.src} height={30} width={30} /> */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div
        onClick={scrollToTop}
        className={`scroll-progress ${scroll ? "scroll-active" : ""}`}
      >
        <span style={{ height: scrolled, backgroundColor: "" }}></span>
      </div>
    </>
  );
}

export default Header;
