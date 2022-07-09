import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import HamburgerMenuIcon from "../../../public/icons/menu.png";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <div className="container">
        <Navbar.Brand href="/">
          <Image src={Logo.src} height={50} width={200} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto my-2 my-lg-0">
            <DropdownButton title="Services" className="services-dropdown">
              <Dropdown.Item href="/marketing-strategy">
                Marketting Strategy
              </Dropdown.Item>
              <Dropdown.Item href="/product-growth">
                Product Growth
              </Dropdown.Item>
              <Dropdown.Item href="/brand-building">
                Brand Building
              </Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/" className="hamburger-menu">
              <Image src={HamburgerMenuIcon.src} height={50} width={50} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
