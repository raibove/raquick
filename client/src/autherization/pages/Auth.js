import React from 'react';
import { withRouter,Redirect} from 'react-router-dom';

import { useFormik  } from 'formik';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

import './Auth.css';


const validate = values => {
    const errors={};
    if(!values.username){
        errors.username = 'Required';
    }

    if(!values.password){
        errors.password= 'Required';
    }

    return errors;

}
const Auth = (props)=>{
    const isAuthenticated = localStorage.getItem('token');
       
   
    

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
    validate,
    onSubmit: values => {
        //alert(JSON.stringify(values, null, 2));
        console.log(values.username,values.password)
    

        Axios.post('/auth',{
            username:values.username,
            password:values.password
        })
        .then(response => {
            // Save to Local Storage
            //Set token to Local Storage
            const {token} = response.data;
            localStorage.setItem('token',token);
            console.log(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);
            console.log(decoded);
            props.history.push('/agent');

            /*
            console.log(response)
            console.log(response.data)
            
            if(response.data){
                console.log('successful signip');
            }
            else{
                console.log("sign-in error");
            }
            */
        }).catch(error=>{
            console.log('sign in server error: ')
            console.log(error.response)
        })
        }, 
    });

    return isAuthenticated ? (
         <Redirect to="/agent" />
     ) : (
        <React.Fragment>
            <div className="auth-div">
                <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <legend className="agent-login">Agent Login</legend>
                    <label>Username</label>
                    <input
                        id="username"
                        name="username"
                        type="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className={
                            formik.errors.username && formik.touched.username
                              ? "text-input error"
                              : "text-input"
                          }
                    />
                    {formik.touched.username && formik.errors.username ? <div className="input-feedback">{formik.errors.username}</div>: null}
                    <label>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={
                            formik.errors.password && formik.touched.password
                              ? "text-input error"
                              : "text-input"
                          }
                    />
                    {formik.touched.password && formik.errors.password ? <div className="input-feedback">{formik.errors.password}</div>: null}
                    <button type="submit" className="submit">Submit</button>
                </fieldset>
                </form>
            </div>
        </React.Fragment>
    );
    
};

export default withRouter(Auth);