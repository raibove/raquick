import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomersList from '../components/CustomersList';

import Axios from 'axios';
import Loading from '../../shared/components/Loading';

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
    const Customers = ()=> {

        const [isLoading, setIsLoading] = useState(false);
        const [loadedCustomers,setLoadedCustomers] = useState([]);
        

        //var loadedCustomers=[];
            
            useEffect(()=> {
            const sendRequest = async ()=> {
                setIsLoading(true);
                let response = await Axios.get('/display' );
                console.log(typeof(loadedCustomers))
                //loadedCustomers =  response.data.customers;
                setLoadedCustomers(response.data.customers)
                console.log(typeof(loadedCustomers))
                //loadedCustomers = data.customers;
                console.log(loadedCustomers);
                //console.log(loadedCustomers.customers);
                setIsLoading(false);
            }
            sendRequest();
        },[]);

    return (
        <div>
            <Header />
            <h1 className="title">Customers List</h1>
            {isLoading? <Loading/>:<CustomersList items={loadedCustomers}/>}  
            <Footer />
        </div>
        );
};

export default Customers;
