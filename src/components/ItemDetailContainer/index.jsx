import React ,{ useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import CardDetalle from "../Cards";


const marcadoras = [
    {id: 1 , image: "/img/armas/Ghost/ghos.webp", title: "Ghost" , price:375000 , category:"primarias" ,},
    {id: 2 , image: "/img/armas/LMG/GE-LMG-1.WEBP", title: "LMG" , price: 560000 , category:"primarias" ,},
    {id: 3 , image: "/img/armas/p90/p90.webp", title: "P90" , price:245000 , category:"primarias" ,},
    {id: 4 , image: "/img/armas/scar/scar.jpg", title: "Scar" , price:135000 , category:"primarias" ,},
    {id: 5 , image: "/img/armas/vector/vector.jpg", title: "Vector" , price:325000 , category:"primarias"},
    {id: 6 , image: "/img/primarias/bereta.webp", title: "Beretta" , price:55000 , category:"secundarias"},
    {id: 7 , image: "/img/primarias/glock18.webp", title: "Glock 18" , price:80000 , category:"secundarias"},
    {id: 8 , image: "/img/primarias/revolver.webp", title: "Revolver" , price:225000 , category:"secundarias"},
];

export const ItemDetailContainer = () => {

    const [ data,setData]= useState ({});
    const {detalleId} = useParams ();

    useEffect(() => {
        const getData = new Promise ( resolve =>{
            setTimeout (()=>{
                resolve (marcadoras);
            },1000);
    });

    getData.then(res=> setData(res.find(armas => armas.id === parseInt(detalleId))));
},[])

    return (
        <div>
            <CardDetalle data ={data}/>
        </div>
    );
}

export default ItemDetailContainer ;
