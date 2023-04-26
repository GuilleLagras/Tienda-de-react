import React from "react";
import './cabecera.css'
import Button from 'react-bootstrap/Button';

export const Cabecera = () => {

    return (
        <div className="contenedorCabecera">
            <a href=""><img className="logoImagen" src="img/logo/miraapng.png" alt="logo" /></a>
            <Button variant="dark">Iniciar sesion</Button>
        </div>
    );
}

export default Cabecera;