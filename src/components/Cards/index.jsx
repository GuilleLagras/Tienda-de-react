import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount';
import React ,{useState} from "react";
import { Link } from "react-router-dom";
import './cards.css'

function CardDetalle({data}) {
    const [goToCart,setGoToCart]= useState (false);

    const onAdd = (quantity)=>{
        setGoToCart(true);
    }

    return (
        <Card className='cardDetalle' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{data.precio}</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href='/cart'>Ver el carrito</Card.Link>
                <Card.Link href="/cart">{}</Card.Link>
                {
                        goToCart
                        ?<Link to='/cart' >Terminar compra</Link>
                        :<ItemCount initial ={1} stock={5} onAdd={onAdd} />
                    }
            </Card.Body>
        </Card>
    );
}

export default CardDetalle;