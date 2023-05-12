import React from "react";
import './galeria.css'

export const Galeria = () => {
    return (
        <div>
            <div className="galeriaResponsive">
    <h1 class="h1Galeria">Imagenes</h1>
    <div>
        <h2 class="h2Galeria">Campo 1</h2>
        <div className="galeriaImagen">
            <img src="/img/galeria/1.jpg" alt="imagen1" className="imagenHover"></img>
            <img src="/img/galeria/2.jpg" alt="imagen2" className="imagenHover"></img>
            <img src="/img/galeria/3.jpg" alt="imagen3" className="imagenHover"></img>
            <img src="/img/galeria/4.jpg" alt="imagen4" className="imagenHover"></img>
            <img src="/img/galeria/5.jpg" alt="imagen5" className="imagenHover"></img>
            <img src="/img/galeria/6.jpg" alt="imagen6" className="imagenHover"></img>
        </div>
    </div>

    <div>
        <h2 className="h2Galeria">Estacion 1</h2>
        <div className="galeriaImagen">
            <img src="/img/galeria/estacion1.jpg" alt="estacion1" className="imagenHover"></img>
            <img src="/img/galeria/estacion2.jpg" alt="estacion2" className="imagenHover"></img>
            <img src="/img/galeria/estacion3.jpg" alt="estacion3" className="imagenHover"></img>
            <img src="/img/galeria/estacion4.jpg" alt="estacion4" className="imagenHover"></img>
            <img src="/img/galeria/estacion5.jpg" alt="estacion5" className="imagenHover"></img>

        </div>
    </div>
</div>

            <section>

                <h1 className="h1GaleriaVideos">Videos</h1>
                <div className="galeriaVideos">
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZoEKpDZJslg?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qlqzxseMqaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MzYSt1V09_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/A_cxG1equWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bltOnRFhUts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/31o--OEV6m8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7lMi0Od3LjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Galeria;
