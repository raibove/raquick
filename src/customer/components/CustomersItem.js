import React from 'react';
import './CustomerItem.css'
const CustomerItem = (props)=>{
    return(
        <tr className="CustomerItem">
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.email}</td>
        </tr>
    );
};
export default CustomerItem;
