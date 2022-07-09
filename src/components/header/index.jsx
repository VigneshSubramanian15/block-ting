import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import HamburgerMenuIcon from "../../../public/icons/menu.png";

function Header({ page }) {
  return (
    <Navbar expand="lg" className={`header ${page}`}>
      <div className="container">
        <Navbar.Brand href="/">
          <Image src={Logo.src} height={50} width={200} alt={"img"} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto my-2 my-lg-0">
            <DropdownButton title="Services" className="services-dropdown mx-4">
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
            <Nav.Link href="/" className="hamburger-menu">
              <Image src={HamburgerMenuIcon.src} height={30} width={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
