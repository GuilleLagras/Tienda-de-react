import './itemListContainer.css'
import React, { useState, useEffect } from 'react';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';






export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');


        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoriaId])



    return (
        <div >
            <Title greeting={texto} />
            <div className='cardsItemListoContainer'>
                <ItemList data={data} />
            </div>
        </div>
    );
}

export default ItemListContainer