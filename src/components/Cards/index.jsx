import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const marcadoras = [
    { id: 1, image: 'img/armas/AK47/ak.jpg', title: "AK47 Airsoft", precio: "$279000" },
    { id: 2, image: 'img/armas/Ghost/gho.webp', title: "Ghost Airsoft", precio: "$345000" },
    { id: 3, image: 'img/armas/LMG/GE-LMG-1.webp', title: "LMG 45", precio: "$190000" },
    { id: 4, image: 'IMG/ARMAS/P90', title: "P90 Airsoft", precio: "$156000" },
];


function KitchenSinkExample() {
    return (
        <Card className ="marcadoras" style={{ backgroundColor:'rgb(89, 89, 89)',width: '13rem', margin:'2rem auto', padding:'2rem', borderRadius:'1rem'}}>
            <Card.Img variant="top" src='img/armas/AK47/ak.jpg' />
            <Card.Body>
                <Card.Title>AK 47 Airsoft</Card.Title>
                <Card.Text>
                    Marcadora Airsoft Cyma AK 47 M-Lok
                    Construcción: cuerpo de acero, empuñadura y guardamanos de polímero.
                    Capacidad del cargador: 500 bbs
                    Peso: 2400 gramos
                    Velocidad: 410fps
                    Longitud: 55.5 cm
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>NO puede usarse para disparar balines metálicos.</ListGroup.Item>
                <ListGroup.Item>NO INCLUYE BATERIA NI CARGADOR PARA LA MISMA!</ListGroup.Item>
                <ListGroup.Item>MERCADOPAGO:
                    • Tarjetas de crédito y débito, Rapipago, Pago Fácil, Provincia Net
                    • Tu dinero 100% protegido hasta que recibas tu compra</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default KitchenSinkExample;