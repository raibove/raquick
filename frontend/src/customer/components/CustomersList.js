import React from 'react';
import CustomerItem from './CustomersItem'
import './CustomersList.css'

const CustomersList = (props)=> {
    if(props.items.length === 0){
        return (
            <div>
                <h2>No Customer Found.</h2>
            </div>
        );
    }
    return (
        <table className="CustomersList">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>E-mail</th>
            </tr>
            {props.items.map(customer => (
                <CustomerItem 
                    key={customer.id} 
                    id={customer.id} 
                    name={customer.name} 
                    age={customer.age}
                    email = {customer.email}
                />
            ))}
        </table>
    );
};
export default CustomersList;