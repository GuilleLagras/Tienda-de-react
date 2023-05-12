import React ,{ useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";


const marcadoras = [
    {id: 1 , image: "/img/armas/Ghost/ghos.webp", title: "Ghost" , precio:"$375000" , category:"primarias" ,},
    {id: 2 , image: "/img/armas/LMG/GE-LMG-1.WEBP", title: "LMG" , precio:"$ 560000" , category:"primarias" ,},
    {id: 3 , image: "/img/armas/p90/p90.webp", title: "P90" , precio:"$245000" , category:"primarias" ,},
    {id: 4 , image: "/img/armas/scar/scar.jpg", title: "Scar" , precio:"$135000" , category:"primarias" ,},
    {id: 5 , image: "/img/armas/vector/vector.jpg", title: "Vector" , precio:"$325000" , category:"primarias"},
    {id: 6 , image: "/img/primarias/bereta.webp", title: "Beretta" , precio:"$55000" , category:"secundarias"},
    {id: 7 , image: "/img/primarias/glock18.webp", title: "Glock 18" , precio:"$80000" , category:"secundarias"},
    {id: 8 , image: "/img/primarias/revolver.webp", title: "Revolver" , precio:"$225000" , category:"secundarias"},
];

export const ItemDetailContainer = () => {

    const [ data,setData]= useState ({});
    const {detalleId} = useParams ();

    useEffect(() => {
        const getData = new Promise ( resolve =>{
            setTimeout (()=>{
                resolve (marcadoras);
            },2000);
    });

    getData.then(res=> setData(res.find(armas => armas.id === parseInt(detalleId))));
},[])

    return (
        <ItemDetail data ={data} />
    );
}

export default ItemDetailContainer ;
