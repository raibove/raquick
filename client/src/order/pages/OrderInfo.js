import React,{useEffect, useState}  from 'react';
import {Link} from 'react-router-dom';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './OrderInfo.css';
import {useLocation} from 'react-router-dom'

import { renderToStaticMarkup } from 'react-dom/server';
//import {Invoice} from 'react-simple-invoice';

const Header = ()=>{
    return(
        <header className="header-order"><Link to="/agent"><FontAwesomeIcon icon={faHome} className="home-icon"/></Link></header>
    )
};

const Table = (props)=>{
    const ordr = props.ordr;
    return(

        <div>
            <table className="order-info">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Quantity (kg)</th>
                    <th>Rate /kg</th>
                    <th>Amount</th>
                    </tr>
                    <tr>
                    <td>Wheat</td>
                    <td>{ordr.wheat}</td>
                    <td>{ordr.wheatCost}</td>
                    <td>{ordr.wheat * ordr.wheatCost}</td>
                    </tr>
                    <tr>
                    <td>Rice</td>
                    <td>{ordr.rice}</td>
                    <td>{ordr.riceCost}</td>
                    <td>{ordr.rice * ordr.riceCost}</td>
                    </tr>
                    <tr>
                    <td>Sugar</td>
                    <td>{ordr.sugar}</td>
                    <td>{ordr.sugarCost}</td>
                    <td>{ordr.sugar * ordr.sugarCost}</td>
                    </tr>
                </thead>
            </table>
        </div>
)}

const Footer = ()=>{
    return(
        <footer className="footer-order"></footer>
    )
};


const OrderInfo = (props)=>{

const location = useLocation()
const ordr = location.state.ordr;
    return(
        <div>
            <Header />
            <h1>Order</h1>
            <h1>Order No: {ordr.orderId}</h1>
            <Table ordr={ordr}/>
            <button>Pay</button>
            <Footer />
        </div>
    )}

export default OrderInfo;