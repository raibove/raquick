import React from 'react';
import {Link} from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomersList from '../components/CustomersList';

import './Customers.css';

const Header = ()=>{
    return(
        <header className="header-customer"><Link to="/agent"><FontAwesomeIcon icon={faHome} className="home-icon"/></Link><Link to="/addCustomer"><button className="add-customer">Add Customer</button></Link></header>
    );
};

const Footer = ()=>{
    return(
        <footer className="footer-customer"></footer>
    );
};
const Customers = ()=>{
    const CUSTOMERS = [
        {
            id:'u1',
            name:'Anand Kumar', 
            age:28,
            email:'anandkam@gmail.com'
        }
    ];

    return (
        <div>
            <Header />
            <h1 className="title">Customers List</h1>
            <CustomersList items={CUSTOMERS}/>
            <Footer />
        </div>
        );
};

export default Customers;