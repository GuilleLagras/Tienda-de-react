import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Marcadoras
            </Dropdown.Toggle>

            <ul className="dropdown-menu" variant="dark">
                <li className="dropdown-item"  to='/categoria/primarias'>Armas Primarias</li>
                <li className="dropdown-item" to='/categoria/secundarias'>Armas Secundarias</li>
            </ul>
        </Dropdown>
    );
}

export default DropDown;