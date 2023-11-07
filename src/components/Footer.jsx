import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{padding:"20px"}}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>Sobre a Gadget Shop</h4>
            <p>
              Somos um Site de aparelhos eletronicos presente em todo o Brasil
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              © 2023 Gadget Shop. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
