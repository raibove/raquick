import React,{useState} from 'react';
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
    const [result,setResult] = useState('');
        
    const handleScan = data => {
        if (data) {
        setResult(data);
        }
    }
    const handleError = err => {
        console.error(err)
    }


    if(result!=''){
        Axios.post('/scan',{
            cardNo:result
        })
        .then((response)=>{
            console.log(response);
        }).catch(error=>{
            console.log('sign in server error: ');
            console.log(error.response);
        });
    }
    return(
        <React.Fragment>
            <Header />
            <h1>In Scan QR</h1>
            <QrReader
                delay={0}
                onError={handleError}
                onScan={handleScan}
                className ="scan"
            />
            <p className="result">{result}</p>
            <Footer />
        </React.Fragment>
    );
};
export default Scan;