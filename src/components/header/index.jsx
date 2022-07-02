import {Navbar, Nav} from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/logo.png"
import HamburgerMenuIcon from "../../../public/icons/menu.png"


function Header(){
    return <Navbar bg="light" expand="lg" className="header">
        <div className="container">
            <Navbar.Brand href="#">
                <Image src={Logo.src} height={50} width={200} />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="ml-auto my-2 my-lg-0">
                    <Nav.Link className="active" href="/">Our Solutions</Nav.Link>
                    <Nav.Link href="/">Blog</Nav.Link>
                    <Nav.Link href="/">Portfolio</Nav.Link>
                    <Nav.Link href="/" className="hamburger-menu">
                        <Image src={HamburgerMenuIcon.src} height={50} width={50}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
}

export default Header;