const Comprador = ({ nombre, apellido, direccion, email }) => {


    return (
        <div >
            <ul className="labelForm">
                <h1>Datos del comprador</h1>
                <br />
                <li>Nombre: {nombre}</li>
                <li>Apellido: {apellido}</li>
                <li>Direccion: {direccion}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    );
}

export default Comprador;