
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {


return (


<Navbar  expand="lg" className="bg-body-tertiary" >
<Container  style={{background:'orange'}} className='pt-3 pb-3 '  fluid>
<Navbar.Brand href='/'>Shoez.com</Navbar.Brand>
<Navbar.Brand href="/">Home</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav
className="me-auto my-2 my-lg-0"
style={{ maxHeight: '100px' }}
navbarScroll
>
{/* <Nav.Link href="/cart">Cart</Nav.Link> */}
<Nav.Link href="/login">Login</Nav.Link>

<Nav.Link href="#" >
CustomerCare
</Nav.Link>

</Nav>

<NavDropdown title="ViewMore" id="navbarScrollingDropdown">
<NavDropdown.Item href="#action3">Categories</NavDropdown.Item>
<NavDropdown.Item href="#action4">
Buisness Enquiry
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action5">
Our Locations
</NavDropdown.Item>
</NavDropdown>
<Nav.Link style={{paddingLeft:"1rem"}} >
SignUp
</Nav.Link>
</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default Navbars;