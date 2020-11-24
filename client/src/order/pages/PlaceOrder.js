import React,{useState} from 'react';
import {useFormik} from 'formik';
import './PlaceOrder.css';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

const validate= values =>{
    const errors = {};
    if(!values.rice){
        errors.rice = 'Required';
    }
    if(!values.wheat){
        errors.wheat = 'Required';
    }
    if(!values.sugar){
        errors.sugar = 'Required';
    }
    return errors;
}
const PlaceOrder = ()=>{
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const formik = useFormik({
        initialValues:{
            rice:'',
            wheat:'',
            sugar:''
        },
        validate,
        onSubmit: values=>{
            if(isSubmitClicked === 'true'){
                console.log(values);
            }
        }
    });
    return <div className="container-order">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <label>Rice</label>
            <input 
                id="rice"
                name="rice"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rice}
                className={
                formik.errors.rice && formik.touched.rice
                  ? 'text-input error'
                  : 'text-input'
                }
                autoComplete="off"
            />
            {formik.touched.rice && formik.errors.rice ? <div className="input-feedback">{formik.errors.rice}</div>:null}

            <label>Wheat</label>
            <input
                id="wheat"
                name="wheat"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.wheat}
                className={
                    formik.errors.wheat && formik.touched.wheat
                    ? 'text-input error'
                    : 'text-input'
                }
                autoComplete="off"
            />
            {formik.touched.wheat && formik.touched.wheat ? <div className="input-feedback">{formik.errors.wheat}</div>:null}

            <label>Sugar</label>
            <input
                id="sugar"
                name="sugar"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sugar}
                className={
                    formik.errors.sugar && formik.errors.sugar
                    ? 'text-input error'
                    : 'text-input'
                }
                autoComplete="off"
            />
            {formik.touched.sugar && formik.touched.sugar ? <div className='input-feedback'>{formik.errors.sugar}</div>:null}
            <br />
            <button type="submit" className="submit" onClick={()=>setIsSubmitClicked('true')}>Submit</button>
        </form>
    </div>
}

export default PlaceOrder;