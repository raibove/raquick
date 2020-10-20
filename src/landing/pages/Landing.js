import React from 'react';

import './Landing.css';

import illustration from './design2.png';
const Header = () => {
    return(
        <div className="header">
            <span className="HeaderTitle">
                One Nation One Ration Card
            </span>
            <button className="AgentLogin">Agent Login</button>
        </div>
    );
};

const Footer = ()=>{
    return(
        <div className="footer">
        </div>
    );
}

const Tagline = ()=>{
    return(
        <div className="Tagline">Mordern Approach <br />&ensp;to Existing System</div>
    );
};
const Landing = ()=>{
    return( 
        <div className="container">
            <Header />
            <img src={illustration} className="image1" />
            <Tagline />
            <Footer />
        </div> 
        );
  
};
export default Landing;