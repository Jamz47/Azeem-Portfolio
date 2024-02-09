import "./NavigationBar.css";
import favicon from "../assets/favicon.png";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

const NavigationBar = () => {
  return (
    
      <Navbar className="nav-container">
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/">
              <h2 className="pr-name">Azeem Rafique</h2>
            </Nav.Link>
          </Navbar.Brand>
        </Container>

        <Container className="contnaa">
          <Nav.Link className="navvbtns" href="/">HOME</Nav.Link>
          <Nav.Link className="navvbtns" href="/about">ABOUT</Nav.Link>
          <Nav.Link className="navvbtns" href="/Skills">SKILLS</Nav.Link>
          <Nav.Link className="navvbtns" href="/projects">PROJECT</Nav.Link>
          <Nav.Link className="navvbtns" href="/experience">EXPERIENCE</Nav.Link>
          <Nav.Link className="navvbtns" href="/contact">CONTACT</Nav.Link>
          <Image className="img-logo" src={favicon} alt="logo" />
        </Container>
      </Navbar>
   
  );
};

export default NavigationBar;
