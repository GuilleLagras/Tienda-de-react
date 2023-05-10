import React ,{ useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";


const arma =  {id: 1 , image: "img/armas/Ghost/ghos.webp", title: "Ghost" , precio:"$375000" , detalle:"Arma Primaria" ,}


export const ItemDetailContainer = () => {

    const [ data,setData]= useState ({});

    useEffect(() => {
        const getData = new Promise ( resolve =>{
            setTimeout (()=>{
                resolve (arma);
            },2000);
    });

    getData.then(res=> setData(res));
},[])

    return (
        <ItemDetail data ={data} />
    );
}

export default ItemDetailContainer ;
