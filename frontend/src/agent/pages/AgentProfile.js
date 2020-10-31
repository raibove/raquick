import React from 'react';
import {Link} from 'react-router-dom';

import './AgentProfile.css'

import shop from '../image1.svg';

const Header = ()=>{
    return(
        <div class="header-agent">
            <span class="greet">Welocme Agent!</span>
            <button className="sign-out">Sign-Out</button>
        </div>
    );
};


const Buttons = ()=>{
    return(
        <ul class="button-holder">
            <li><Link to="/customers/display" className='text-link'>Customers</Link></li>
            <li><Link to="/stocks" className="text-link">Check Stock</Link></li>
            <li><Link to="/scan" className="text-link">Scan QR</Link></li>
        </ul>
    );
};
const AgentProfile = ()=>{
    return(
        <div  class="main-page">
       
        <Header />
        <Buttons />
        <img src={shop} class="shop" alt="shop"></img>
        </div>
    );
};

export default AgentProfile;