import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

const DropDown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Marcadoras
            </Dropdown.Toggle>
            
            <Dropdown.Menu className="dropdown-menu" variant="dark">
                <Dropdown.Item className="dropdown-item" as={NavLink} to="/categoria/primarias">
                    Primarias
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item" as={NavLink} to="/categoria/secundarias">
                    Secundarias
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDown;


