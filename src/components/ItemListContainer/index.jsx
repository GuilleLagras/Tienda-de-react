import './itemListContainer.css'
import React from 'react'
import Title from '../Title';
import ItemCount from '../ItemCount';



export const ItemListContainer = ({ texto }) => {

    const onAdd = (quantity)=>{
        console.log(`Quieres agregar ${quantity} unidades?`  );
    }

    return (
        <div>
            <Title greeting={texto} />
            <ItemCount initial ={1} stock={5} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer