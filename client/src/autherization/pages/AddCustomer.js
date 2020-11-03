import React from 'react';
import {useFormik} from 'formik';
import QRCode from 'qrcode.react';
import './AddCustomer.css';


let generate='false';
const generateQR=()=>{
    generate='true';
};

const downloadQR=()=>{
    const canvas = document.getElementById("QRCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "QRCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

const validate = values =>{
    const errors={};

    if(!values.name){
        errors.name = 'Required';
    }
    if(!values.contact){
        errors.contact = 'Required';
    }
    if(!values.cardNo){
        errors.cardNo = 'Required';
    }

    return errors;
}
const AddCustomer = ()=>{

    const formik = useFormik({
        initialValues:{
        name:'',
        contact:'',
        cardNo:''
        },
        validate,
        onSubmit: (values)=>{
            console.log(values.name, values.contact, values.cardNo);
        }
    });

    return <div className="container-customer">
        <form onSubmit={formik.handleSubmit} className="formAddCustomer" autoComplete="off">
            <label>Name</label>
            <input
                id="name"
                name="name"
                type= "name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={
                formik.errors.name && formik.touched.name
                  ? 'text-input error'
                  : 'text-input'
                }
                autoComplete="off"
            />
            {formik.touched.name && formik.errors.name ? <div className="input-feedback">{formik.errors.name}</div>: null}
            <label>Phone Number</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              className={
                formik.errors.cardNo && formik.touched.cardNo
                ? 'text-input error'
                : 'text-input'
              }
              autoComplete="off"
            />
            {formik.touched.phone && formik.errors.phone ? <div className="input-feedback">{formik.errors.cardNo}</div>:null}
            <label>E-mail</label>
            <input 
             id="email"
             name="email"
             autoComplete="off"
             type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              className={
                  formik.errors.email && formik.touched.email
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {formik.touched.email && formik.errors.email ? <div className="input-feedback">{formik.errors.email}</div>: null}
  
            {generate==='true'? <QRCode id="QRCode" value={formik.values.cardNo} size={200} level={"H"} includeMargin={true}/>:null}
  
            <label>Ration Card No</label>
            <input 
                id="cardNo"
                type="cardNo"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.cardNo}
                className={
                    formik.errors.cardNo && formik.touched.cardNo
                    ? 'text-input error'
                    : 'text-input'
                }
                autoComplete="off"
            />
            {formik.touched.cardNo && formik.errors.cardNo ? <div className="input-feedback">{formik.errors.cardNo}</div>: null}            
            

            <br />
            <button type="generate" className="generate" onClick={generateQR} disabled={formik.values.cardNo}>Generate</button>
            <button type="download" className="download" onClick={downloadQR}>Download</button>
            <button type="submit" className="submit" disabled={!generate}>Submit</button>
        </form>
    </div>;
}

export default AddCustomer;