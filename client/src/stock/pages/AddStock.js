import React,{useState} from 'react';
import {useFormik} from 'formik';
import Axios from 'axios';
import './AddStock.css';
import { withRouter } from 'react-router-dom';
const validate = values=>{
    const errors={};
    if(!values.product){
        errors.product='Required';
    }
    if(!values.quantity){
        errors.quantity='Required';
    }else if(!/^[1-9][0-9]*/i.test(values.quantity)){
        errors.quantity="Invalid quantity";
    }
    return errors;
}
const AddStock = (props)=>{


    const [isSubmitClicked,setIsSubmitClicked]=useState(false);
    const formik = useFormik({
        initialValues:{
            product:'',
            quantity:'',
        },
        validate,
        onSubmit:values=>{
            if(isSubmitClicked===true){
                console.log(values.product,values.quantity);
                Axios.post("/stocks/add",{
                    product:values.product,
                    quantity:values.quantity
                })
                .then(response=>{
                    console.log(response);
                    props.history.push("/stocks");
                }).catch(error=>{
                    console.log('sign in server error: ');
                    console.log(error.response);
                })
            }
        }
    });
    return(
        <div>
        <h1>Add items</h1>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <label>Product</label>
            <select
                name="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ display: 'block' }}
            >
                <option value="" label="Select a product" />
                <option value="Rice" label="Rice"/>
                <option value="Sugar" label="Sugar"/>
                <option value="Wheat" label="Wheat"/>
            </select>
            {formik.touched.product && formik.errors.product ? <div>{formik.errors.product}</div>:null}
            <label>Quantity</label>
            <input
                id="quantity"
                name="quantity"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
                autoComplete="off"
            />
            {formik.touched.quantity && formik.errors.quantity? <div>{formik.errors.quantity}</div>:null}
            <button type="submit" className="stock-submit" onClick={()=> setIsSubmitClicked(true)}>Submit</button>
        </form>
        </div>
    );
}

export default withRouter(AddStock);