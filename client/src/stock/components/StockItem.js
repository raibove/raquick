import React from 'react';
import './StockItem.css';

const StockItem =(props)=>{
    return(
        <tr className="StockItem">
            <td>{props.product}</td>
            <td>{props.date}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
        </tr>
    );
};

export default StockItem;