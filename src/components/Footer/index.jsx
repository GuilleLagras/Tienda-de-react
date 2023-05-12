import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div className="containerFooter" >
            <div className="logoFooter">
                <a href="/"><img src="/img/logo/miraapng.png" alt="one shot" className="imagenMenu"></img></a>
            </div>

            <section>
                <div className="contenedor">
                    <h2 className="tituloFooter">Contactate conmigo</h2>
                </div>
                <div className="redesSociales">
                    <a href="https://es-la.facebook.com/" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter"></i></a>
                </div>
                <div className="contenedor">
                    <div className="copy">2023 Guillermo Carrasquedo /Todos los derechos reservados</div>
                </div>
            </section>

            <section id="sectionFooter">
        <div className="direccionFooter">
            <h2>Contacto</h2>
            <p>Argentina-Rio Negro</p>
            <p>San Carlos de Bariloche</p>
            <p>Santiago Albarracin 1088</p>
            <p>www.OneShot.com.ar</p>
            <p>ventasml@oneshot.com</p>
        </div>
        {/* <!-- Mapa Ubicacion --> */}
    </section>

        </div>
    );
}

export default Footer;