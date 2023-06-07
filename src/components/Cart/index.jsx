import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Guille',
            email: 'guille@mail.com',
            phone: '2944525252',
            adress: 'asdasd'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, ' orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>Total: {totalPrice()}</p>
            <button onClick={handleClick} >Realizar compra</button>
        </>
    )
}

export default Cart;