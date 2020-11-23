import React,{useState} from 'react';
import {useFormik} from 'formik';
import QRCode from 'qrcode.react';
import './AddCustomer.css';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';


//let generate='false';
//let submitClicked='false';


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
    if(!values.phone){
        errors.phone = 'Required';
    }
    if(!values.cardNo){
        errors.cardNo = 'Required';
    }
    if(!values.email){
        errors.email = 'Required';
    }
    return errors;
}
const AddCustomer = (props)=>{
    const [isGenrated, setIsGenerated] = useState(false);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const generateQR=()=>{
        setIsGenerated('true');
     };

    const formik = useFormik({
        initialValues:{
        name:'',
        phone:'',
        cardNo:'',
        email:''
        },
        validate,
        onSubmit: values =>{
            if(isSubmitClicked==='true'){
            console.log(values.name, values.phone, values.cardNo);
            Axios.post('/addCustomer',{
                name: values.name,
                email:values.email,
                phone: values.phone,
                cardNo: values.cardNo
            })
            .then(response=> {
                console.log(response);
                props.history.push("/customers/display");
            }).catch(error=>{
                console.log('sign in server error: ');
                console.log(error.response);
                console.log(error.response.data);
                alert("Ration card no already exists");
            })
        }
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
              type="number"
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
  
            {isGenrated==='true'? <QRCode id="QRCode" value={formik.values.cardNo} size={150} level={"H"} includeMargin={true}/>:null}
  
            <label>Ration Card No</label>
            <input 
                id="cardNo"
                type="text"
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
            <button type="generate" className="generate" onClick={generateQR} disabled={!formik.values.cardNo}>Generate</button>
            <button type="download" className="download" onClick={downloadQR} disabled={isGenrated==='false'}>Download</button>
            <button type="submit" className="submit" onClick={()=>setIsSubmitClicked('true')}  disabled={isGenrated ==='false'}>Submit</button>
        </form>
    </div>;
}

export default withRouter(AddCustomer);