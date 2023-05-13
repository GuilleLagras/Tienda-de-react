import './itemDetail.css';
import ItemCount from '../ItemCount';
import React ,{useState} from "react";
import { Link } from "react-router-dom";


export const ItemDetail = ({data})=> {
    const [goToCart,setGoToCart]= useState (false);


    const onAdd = (quantity)=>{
        setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.image} alt="" />
                <div className="content" >
                    <h1 className='tituloDetail'>
                        {data.title}
                    </h1>
                    <h2 className='h2Detail'>
                        {data.precio}
                    </h2>
                    <h2>
                        {data.detalle}
                    </h2>
                    {
                        goToCart
                        ?<Link to='/cart' >Terminar compra</Link>
                        :<ItemCount initial ={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;