import React from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import QrReader from "react-qr-reader";

import './Scan.css';

const Header = ()=>{
    return(
        <header className="header-scan"><Link to="/agent"><FontAwesomeIcon icon={faHome} className="home-icon"/></Link></header>
    );
};

const Footer=()=>{
    return(
        <footer className="footer-scan"/>
    );
};
const Scan = ()=>{
    return(
        <React.Fragment>
            <Header />
            <h1>In Scan QR</h1>
            <Footer />
        </React.Fragment>
    );
};
export default Scan;