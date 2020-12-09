import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CustomersList from '../components/StockList';
import './DisplayStocks.css';
import Axios from 'axios';
import Loading from '../../shared/components/Loading';

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
            setLoadedStock(response.data.items);
            console.log(response.data.items);
            setIsLoading(false);
        }
        sendRequest();
    },[])
    return <React.Fragment>
        <Header />
        <h2  className="title">Stock Available</h2>
        {isLoading?<Loading />:<CustomersList items={loadedStock}/>}  
        <Footer />
    </React.Fragment>
};

export default DisplayStocks;