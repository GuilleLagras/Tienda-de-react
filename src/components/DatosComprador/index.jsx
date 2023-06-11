import { useState } from "react";
import Comprador from "../Comprador";

const DatosComprador = () => {
    
    const [datosDelComprador, setDatosDelComprador] = useState(
        JSON.parse(localStorage.getItem("datosDelComprador")) || []
    );


    return (
        <div>
            {datosDelComprador.length > 0 &&
                datosDelComprador.map((datosDelComprador) => (
                    <Comprador
                        key={datosDelComprador.email} 
                        nombre={datosDelComprador.nombre}
                        apellido={datosDelComprador.apellido}
                        direccion={datosDelComprador.direccion}
                        email={datosDelComprador.email}
                    />
                ))}
        </div>

    )
}
export default DatosComprador;