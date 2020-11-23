import React,{useEffect, useState}  from 'react';
import './DisplayCustomers.css';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';



const DisplayCustomers = (props)=>{

    const [isLoading, setIsLoading] = useState(false);
    const [loadedProfile,setLoadedProfile] = useState([]);
    useEffect(()=> {
        const sendRequest = async ()=> {
            setIsLoading(true);
             let response = await Axios.get('/customers/1' );
            console.log(response);
            console.log(response.data);
            setLoadedProfile(response.data);
            setIsLoading(false);
        }
        sendRequest();
    },[])

    return(
        <div>
            {isLoading? <h1>Page is Loading</h1>:<h1>Loaded {loadedProfile.name}</h1>}  
        </div>
    )};
export default withRouter(DisplayCustomers);