import './item.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {

    return (
        <div className='cardsMarcadoras'>
            <Link to={`/detalle/${info.id}`} className='marcadora'>
            <img src={info.image} alt="" />
            <div>
            <p>{info.title} </p>
            <p>{info.precio} </p>
            </div>
            </Link>
        </div>
    );
}

export default Item ;