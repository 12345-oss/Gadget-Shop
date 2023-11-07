import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Smartwatch } from "react-bootstrap-icons";

function NavBarC() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#e42424", flexDirection: "column" }}
    >
      <Smartwatch size={65}/>
      <Container>
        <Navbar.Brand href="/">
          <h1>Gadget Shop</h1>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastrar Produto</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarC;
