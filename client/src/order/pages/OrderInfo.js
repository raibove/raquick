import React,{useEffect, useState}  from 'react';
import {Link} from 'react-router-dom';
import {faHome, faWindowRestore} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './OrderInfo.css';
import { useHistory ,withRouter,Redirect , useLocation} from 'react-router-dom'

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
                    <th>Amount ₹</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>{ordr.product[0]}</td>
                    <td>{ordr.inputQuantity[0]}</td>
                    <td>{ordr.price[0]}</td>
                    <td>{ordr.inputQuantity[0] * ordr.price[0]}</td>
                    </tr>
                    <tr>
                    <td>{ordr.product[1]}</td>
                    <td>{ordr.inputQuantity[1]}</td>
                    <td>{ordr.price[1]}</td>
                    <td>{ordr.inputQuantity[1] * ordr.price[1]}</td>
                    </tr>
                    <tr>
                    <td>{ordr.product[2]}</td>
                    <td>{ordr.inputQuantity[2]}</td>
                    <td>{ordr.price[2]}</td>
                    <td>{ordr.inputQuantity[2] * ordr.price[2]}</td>
                    </tr>
                </tbody>               
                <tfoot >
                    <tr>
                    <td colspan="3">Total Amount</td>
                    <td>{ordr.inputQuantity[0] * ordr.price[0] + ordr.inputQuantity[1] * ordr.price[1] + ordr.inputQuantity[2] * ordr.price[2]}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
)}




const Footer = ()=>{
    return(
        <footer className="footer-order"></footer>
    )
};


const OrderInfo = ( )=>{
    const history = useHistory();
    const PrintClicked = ()=>{
        let path = `/agent`;
   
        window.print();
        history.push(path);
        //props.history.push("/agent");
    };

const isScanned = localStorage.getItem('isScanned');
const location = useLocation()
const ordr = location.state.ordr;
console.log("isScanned"+isScanned);
    return isScanned ? (
        <div>
            <Header />
            <h1 className="title">Bill</h1>
            <h1 className="card-no">Card No: {ordr.cardNo}</h1>
            <h1 className="order-no">Order No: {ordr.orderId}</h1>
            <Table ordr={ordr}/>
            <button className="hide-on-print prnt" onClick={PrintClicked}>Print</button>
            <Footer />
        </div>
    ) : (
        <Redirect to="/agent" />
    )
}

export default OrderInfo;