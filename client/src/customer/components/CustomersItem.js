import React from 'react';
import './CustomerItem.css'
const CustomerItem = (props)=>{
    return(
        <tr className="CustomerItem">
                <td>{props.cardNo}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
        </tr>
    );
};
export default CustomerItem;
