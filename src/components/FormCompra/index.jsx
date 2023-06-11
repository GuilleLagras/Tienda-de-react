import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCompra = ({ onSubmit }) => {

    const [formCompra, setFormCompra] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formCompra.nombre || !formCompra.apellido || !formCompra.direccion || !formCompra.email) {
            return;
        }
        onSubmit(formCompra);
        noti(); 
    };


    const noti = () => {
        toast('¡Datos agregados correctamente!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
    };

    return (
        <form className='formularioCompra' action="" onSubmit={handleSubmit}  >
            <div>
                <p className="labelForm">Datos del Comprador</p>
            </div>
            <div>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" className="labelForm" value={formCompra.nombre} onChange={(e) => setFormCompra((prevState) => ({ ...prevState, nombre: e.target.value }))} />
            </div>
            <div>
                <input type="text" name="apellido" placeholder="Ingrese su Apellido" className="labelForm" value={formCompra.apellido} onChange={(e) => setFormCompra((prevState) => ({ ...prevState, apellido: e.target.value }))} />
            </div>
            <div>
                <input type="text" name="direccion" placeholder="Ingrese su Direccion" className="labelForm" value={formCompra.direccion} onChange={(e) => setFormCompra((prevState) => ({ ...prevState, direccion: e.target.value }))} />
            </div>
            <div>
                <input type="email" id="" name="email" className="labelForm" placeholder="Ingrese su E-mail" value={formCompra.email} onChange={(e) => setFormCompra((prevState) => ({ ...prevState, email: e.target.value }))} />
            </div>
            <button className="labelForm" type="submit">Agregar mis datos</button>
            <ToastContainer />
        </form>
    );
}

export default FormCompra;