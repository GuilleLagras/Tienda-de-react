import Item from "../Item";
import React from "react";

const ItemList = ({data= [] }) => {
    return(
        data.map (marcadora => <Item key={marcadora.id} info={marcadora} />)
    );
}

export default ItemList;