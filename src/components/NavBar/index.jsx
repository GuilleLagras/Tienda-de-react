import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import Dropdown from '../DropDown';


const menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Que es Airsoft</Navbar.Brand>
                    <Nav className="me-auto" id='navBar' >
                        <div className='divMenu' >
                            < Dropdown />
                            <NavLink className="nav-link" to='/galeria'>Galeria</NavLink>
                        </div>
                        <div>
                            <NavLink className="nav-link" to='/cart'><CartWidget /></NavLink>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default menu;