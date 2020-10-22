import React from 'react';

import './Auth.css';

const Header = ()=>{
    return(
        <header className="header-auth">

        </header>
    );
};
const Footer=()=>{
    return(
        <footer className="footer-auth"/>
    );
}
const Auth = ()=>{
    return(
        <React.Fragment>
            <Header />
            <div class="login-div">
                <h1 className="Login">Login</h1>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Auth;