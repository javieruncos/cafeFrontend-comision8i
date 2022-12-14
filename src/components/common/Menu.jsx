import { Navbar,Container,Nav } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavLink to='/' className={'nav-item nav-link'}>Inicio</NavLink>
              <NavLink to='administrador' className={'nav-item nav-link'}>Administrador</NavLink>
              <NavLink to='login' className={'btn btn-warning d-block w-50 me-1 mt-1'}>Login</NavLink>
              <NavLink to='registrarse' className={'btn btn-warning d-block w-50 me-1 mt-1'}>registrarse</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
