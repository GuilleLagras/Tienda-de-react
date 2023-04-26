import './itemCount.css';
import React, { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <div className='counter'>
            <button disabled={count <= 1} className='botonContador' onClick={decrease}>➖</button>
            <span className='numeroCarrito'>{count} </span>
            <button disabled={count >= stock} className='botonContador' onClick={increase}>➕</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className='botonCarrito' > <i class="bi bi-cart3" width="16" height="16"></i> Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;
