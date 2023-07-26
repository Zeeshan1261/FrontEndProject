
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbars() {


return (


<Navbar  expand="lg" className="bg-body-tertiary" style={{marginTop:"0",marginBottom:"0",gap:0}} >
<Container  style={{background:'#2578fb'}} className='pt-3 pb-3 '  fluid>
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


</Nav>
<Nav.Link href="/cart"  >
Cart
</Nav.Link>
<Nav.Link href='/signup' style={{paddingLeft:"3rem"}} >
SignUp
</Nav.Link> 


</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default Navbars;