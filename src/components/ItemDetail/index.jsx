import './itemDetail.css';
import ItemCount from '../ItemCount';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FormCompra from '../FormCompra';



export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    const [datosDelComprador, setDatosDelComprador] = useState([]);
    const datosCompra = (dataComprador) => {
        setDatosDelComprador(prevState => [...prevState, dataComprador]);
    };

    useEffect(() => {
        localStorage.setItem("datosDelComprador", JSON.stringify(datosDelComprador))
    }, [datosDelComprador])



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
                <ListGroup.Item>${data.price}</ListGroup.Item>
                <ListGroup.Item><img className="imgTarjetas" src="/img/tarjetas.jpg" alt="logo" /></ListGroup.Item>
                <ListGroup.Item><FormCompra onSubmit={datosCompra}  /></ListGroup.Item>
            </ListGroup>
            <Card.Body >
                <div className='botonesVerCarrito'>
                    {
                        goToCart
                            ? <Link className="labelForm" to='/cart' >Terminar compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </Card.Body>
        </Card>
    );
}


export default ItemDetail;