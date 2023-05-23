import React from "react";
import { useCartContext } from "../../context/CartContext";


export const CartWidget = () => {

    const {totalProduct}= useCartContext();


    return (
        <>
        <i className="bi bi-cart3"></i>
        <span>{totalProduct() || ''}</span>
        </>
    );
}

export default CartWidget ;