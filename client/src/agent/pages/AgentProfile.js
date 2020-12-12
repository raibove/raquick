import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import './AgentProfile.css'

import shop from '../image1.svg';

const Header = (props)=>{
    return(
        <div className="header-agent">
            <span className="greet">Welocme Agent!</span>
         </div>
    );
};


const Buttons = ()=>{
    return(
        <ul className="button-holder">
            <li><Link to="/customers/display" className='text-link'>Customers</Link></li>
            <li><Link to="/stocks" className="text-link">Check Stock</Link></li>
            <li><Link to="/scan" className="text-link">Scan QR</Link></li>
        </ul>
    );
};
const AgentProfile = (props)=>{
   localStorage.removeItem('isScanned');

    return(
        <div  className="main-page">
            <button className="sign-out" onClick={()=>{localStorage.removeItem('token'); props.history.push('/'); }}>Sign-Out</button>
            <Header />
            <Buttons />
            <img src={shop} className="shop" alt="shop"></img>
        </div>
    );
};

export default withRouter(AgentProfile);
