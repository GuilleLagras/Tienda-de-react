import Carousel from 'react-bootstrap/Carousel';
import './carrousel.css';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item className='carrouselInicio' >
                <img
                    className="d-block w-100"
                    src='/img/Airsoft.jpg'
                    alt="First slide"
                    height={500} 
                />
                <Carousel.Caption>
                    <h3>Ludico</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carrouselInicio'>
                <img
                    className="d-block w-100"
                    src='/img/carrusel3.jpg'
                    alt="Second slide"
                    height={500}
                />

                <Carousel.Caption>
                    <h3>MilSim</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carrouselInicio'>
                <img
                    className="d-block w-100"
                    src='/img/carrusel2.jpg'
                    alt="Third slide"
                    height={500}
                />

                <Carousel.Caption>
                    <h3>TacSim</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;