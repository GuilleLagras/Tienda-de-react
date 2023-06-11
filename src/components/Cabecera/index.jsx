import React from "react";
import './cabecera.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Cabecera = () => {

    return (
        <div className="contenedorCabecera">
            <Link to="/"><img className="logoImagen" src="/img/logo/miraapng.png" alt="logo" /></Link>
            <Link to="/contacto"><Button variant="dark"  >Login/Logout</Button></Link>
        </div>
    );
}

export default Cabecera;