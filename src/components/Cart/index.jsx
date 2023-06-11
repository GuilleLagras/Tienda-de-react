import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import "./cart.css"
import DatosComprador from "../DatosComprador";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const [datosDelComprador, setDatosDelComprador] = useState(
        JSON.parse(localStorage.getItem("datosDelComprador")) || []
    );

    const order = {
        buyer: datosDelComprador[0] || {},
        items: cart.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
        })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'compra');
        window.location.href = 'https://www.mercadopago.com';
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
            .catch(error => console.log("Error al agregar el documento: ", error));
    }

    if (cart.length === 0) {
        return (
            <>
                <p className="carritoVacio">No hay elementos en el carrito</p>
            </>
        );
    }
    console.log(order);
    return (
        <div className="divCarrito">
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <DatosComprador key={datosDelComprador }  />
            <p className="labelForm">Total a pagar: $ {totalPrice()}</p>
            <button className="botonComprar" onClick={handleClick}>Realizar compra</button>
        </div>
    );
}

export default Cart;