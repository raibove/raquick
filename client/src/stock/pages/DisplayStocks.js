import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CustomersList from '../components/StockList';
import './DisplayStocks.css';
import Axios from 'axios';
const Header =()=>{
    return(
        <header className="header-stock"><Link to="/agent"><FontAwesomeIcon icon={faHome} className="home-icon" /></Link><Link to="/stocks/add"><button className="add-stock">Add Stock</button></Link></header>
    );
};

const Footer=()=>{
    return(
        <footer className="footer-stock"></footer>
    );
};

const DisplayStocks = ()=>{

    const [isLoading, setIsLoading] = useState(false);
    const [loadedStock,setLoadedStock] = useState([]);
    
    useEffect(()=>{
        const sendRequest = async()=>{
            setIsLoading(true);
            let response = await Axios.get('/stocks');
            //console.log(loadedStock);
            //setLoadedStock(response.data.items);
            //console.log(loadedStock);
            //console.log("loaded");
            setLoadedStock(response.data.items);
            console.log(response.data.items);
            setIsLoading(false);
        }
        sendRequest();
    },[])
    return <React.Fragment>
        <Header />
        <h2>Stock Available</h2>
        {isLoading? <h1>Page is Loading</h1>:<CustomersList items={loadedStock}/>}  
        <Footer />
    </React.Fragment>
};

export default DisplayStocks;

/*
 <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price (/kg)</th>
                    <th>Date of purchase</th>
                </tr>
                <tr>
                    <td>101</td>
                    <td>Rice</td>
                    <td>50</td>
                    <td>28</td>
                    <td>20-8-2020</td>
                </tr>
            </thead>
        </table>
        */