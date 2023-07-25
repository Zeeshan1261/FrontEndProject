import Nav from "react-bootstrap/Nav";
function Navbars() {
  return (
    <Nav
      style={{ backgroundColor: "grey", fontSize: "2rem" }}
      justify
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link eventKey="link-1">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Cart</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbars;
