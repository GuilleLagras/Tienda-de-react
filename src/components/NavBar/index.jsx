import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import DropDown from '../DropDown';


function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/' >Que es Airsoft</Navbar.Brand>
                    <Nav className="me-auto"id='navBar' >
                        <div className='divMenu' >
                        <DropDown />
                        <Nav.Link href='/galeria'>Galeria</Nav.Link>
                        </div>
                        <div>
                        <Nav.Link href='/cart'>Carrito</Nav.Link>
                        </div>
                        <div>
                        <Nav.Link href='/contacto'>Contacto</Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default ColorSchemesExample;