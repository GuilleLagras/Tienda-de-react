import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Marcadoras
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                <Dropdown.Item href='/categoria/primarias'>Armas Primarias</Dropdown.Item>
                <Dropdown.Item href='/categoria/secundarias'>Armas Secundarias</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDown;