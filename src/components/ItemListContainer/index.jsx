import './itemListContainer.css'
import React, {useState,useEffect} from 'react';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';



const marcadoras = [
    {id: 1 , image: "/img/armas/Ghost/ghos.webp", title: "Ghost" , precio:"$375000" , category:"primarias" ,},
    {id: 2 , image: "/img/armas/LMG/LMGG.jpg", title: "LMG" , precio:"$ 560000" , category:"primarias" ,},
    {id: 3 , image: "/img/armas/p90/p90.webp", title: "P90" , precio:"$245000" , category:"primarias" ,},
    {id: 4 , image: "/img/armas/scar/scar.jpg", title: "Scar" , precio:"$135000" , category:"primarias" ,},
    {id: 5 , image: "/img/armas/vector/vector.jpg", title: "Vector" , precio:"$325000" , category:"primarias"},
    {id: 6 , image: "/img/primarias/bereta.webp", title: "Beretta" , precio:"$55000" , category:"secundarias"},
    {id: 7 , image: "/img/primarias/glock18.webp", title: "Glock 18" , precio:"$80000" , category:"secundarias"},
    {id: 8 , image: "/img/primarias/revolver.webp", title: "Revolver" , precio:"$225000" , category:"secundarias"},
];

export const ItemListContainer = ({ texto }) => {
    const [data,setData] = useState ([]);

    const {categoriaId} = useParams ();

    useEffect(()=> {
        const getData = new Promise(resolve=>{
            setTimeout(()=>{
                resolve(marcadoras);
            },1000);
        });
        if (categoriaId){
            getData.then(res=> setData(res.filter(primarias => primarias.category === categoriaId)));
        }else {
            getData.then(res=> setData(res));
        }
    },[categoriaId])

    

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