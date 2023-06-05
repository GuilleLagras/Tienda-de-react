import React from "react";
import { useCartContext } from "../../context/CartContext";
import './cartWidget.css';


export const CartWidget = () => {

    const {totalProduct}= useCartContext();


    return (
        <div className="iconoCarrito">
        <i className="bi bi-cart3"></i>
        <span>{totalProduct() || ''}</span>
        </div>
    );
}

export default CartWidget ;