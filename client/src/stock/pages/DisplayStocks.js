import React from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './DisplayStocks.css';
const Header =()=>{
    return(
        <header className="header-stock"><Link to="/agent"><FontAwesomeIcon icon={faHome} className="home-icon" /></Link></header>
    );
};

const Footer=()=>{
    return(
        <footer className="footer-stock"></footer>
    );
};

const DisplayStocks = ()=>{
    return <React.Fragment>
        <Header />
        <h2>All Stocks in Store</h2>
        <Footer />
    </React.Fragment>
};

export default DisplayStocks;