import React from "react";
import './cabecera.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Cabecera = () => {

    return (
        <div className="contenedorCabecera">
            <Link to="/"><img className="logoImagen" src="/img/logo/miraapng.png" alt="logo" /></Link>
            <Button variant="dark"  >Iniciar sesion</Button>
        </div>
    );
}

export default Cabecera;