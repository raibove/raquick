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
        <React.Fragment>
        <div className="wrapper">
            <table className="CustomersList">
                <thead>
            <tr>
                <th>Card NO</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Phone</th>
            </tr>

            {props.items.map(customer => (
                <CustomerItem 
                    key={customer.id} 
                    id={customer.id} 
                    cardNo={customer.cardNo}
                    name={customer.name} 
                    phone={customer.phone}
                    email = {customer.email}
                />
            ))}
            </thead>
        </table>
        </div>
        </React.Fragment>
    );
};
export default CustomersList;