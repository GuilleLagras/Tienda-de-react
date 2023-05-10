import './item.css';
import React from 'react';

const Item = ({info}) => {

    return (
        <div className='cardsMarcadoras'>
            <a href="" className='marcadora'>
            <img src={info.image} alt="" />
            <p>{info.title} </p>
            <p>{info.precio} </p>
        </a>
        </div>
    );
}

export default Item ;