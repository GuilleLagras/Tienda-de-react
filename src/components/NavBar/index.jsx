import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>Que es Airsoft</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/categoria/primarias'>Primarias</Nav.Link>
                        <Nav.Link href='/categoria/secundarias'>Secundarias</Nav.Link>
                        <Nav.Link href='/galeria'>Galeria</Nav.Link>
                        <Nav.Link href='/cart'>Carrito</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default ColorSchemesExample;