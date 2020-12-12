import React,{useEffect, useState}  from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './DisplayCustomer.css';
import Axios from 'axios';
import { withRouter,Redirect } from 'react-router-dom';

import Loading from '../../shared/components/Loading';
const Header = ()=>{
    return(
        <header className="header-dcustomer"><Link to="/agent"><FontAwesomeIcon icon={faHome} className="home-icon"/></Link><Link to="/placeOrder"><button className="place-order">Place Order</button></Link></header>
    );
};

const Footer=()=>{
    return(
        <footer className="footer-dcustomer"/>
    );
};

const CustInfo = (props)=>{
    return(
        <div>
            <h1 className="title-customer">Customer Info</h1>
            <p className="info"> Name: {props.data.name} <br/>
                Card No: {props.data.cardNo} <br />
                E-mail: {props.data.email} <br />
                Phone-no: {props.data.phone}
            </p>
        </div>
    );
}
const DisplayCustomer = (props)=>{
    const isScanned = localStorage.getItem('isScanned');
    const [isLoading, setIsLoading] = useState(false);
    const [loadedProfile,setLoadedProfile] = useState([]);
    useEffect(()=> {
        const sendRequest = async ()=> {
            setIsLoading(true);
            console.log("prop.location "+ props.location);
         
            let card = props.location.state.cardNo;
            console.log("Card:   "+card);
            let response = await Axios.get('/customers/'+card );
  
            setLoadedProfile(response.data);
            setIsLoading(false);
        }
        sendRequest();
    },[])

    return isScanned ? (
        <div>
            <Header />
            {isLoading? <Loading />:<CustInfo data={loadedProfile}/>}  
            <Footer />
        </div>
    ): (
        <Redirect to="/agent" />
    )};
export default withRouter(DisplayCustomer);