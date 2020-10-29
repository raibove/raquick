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
            <div class="auth-div">
          
                    <form className="form">
                    <fieldset>
                        <legend className="login">Login</legend>
                        Username:<br />
                        <input />
                        <br />
                        Password:<br />
                        <input/><br/>
                        <button type="submit" className="submit">Submit</button>
                        </fieldset>
                    </form>
            </div>
        </React.Fragment>
    );
};

export default Auth;