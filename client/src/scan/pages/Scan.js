import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import QrReader from "react-qr-reader";

import { withRouter } from 'react-router-dom';
import './Scan.css';
import Axios from 'axios';


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
const Scan = (props)=>{
    const [result,setResult] = useState('');
        
    const handleScan = data => {
        if (data) {
        setResult(data);
        }
    }
    const handleError = err => {
        console.error(err)
    }


    
    if(result!==''){
        console.log(typeof(result));
       // const resInt = parseInt(result);
        Axios.post('/scan',{
            cardNo:result
        })
        .then((response)=>{
            console.log(response);
            if(response.statusText === "OK"){
                console.log("OKKKK");
                props.history.push({pathname:"/customers/"+result,state:{cardNo:result}});
            }
        }).catch(error=>{
            console.log('sign in server error: ');
            console.log(error.response);
            alert("Customer not found");
            props.history.push("/agent")
        });
    }
    return(
        <React.Fragment>
            <Header />
            <h1 className="title-scan">Scan your QR Code</h1>
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
export default withRouter(Scan);