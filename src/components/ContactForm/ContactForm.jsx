// import React from 'react'
import { useState } from "react";
import image from "./../../assets/images/bg_1.png"
import "./ContactForm.css"
import axios from "axios";
const ContactForm = () => {
    
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [subject,setSubject] = useState();
    const [message,setMessage] = useState();

    const sendData = (e) => { 
        e.preventDefault();
        axios.post("api",{"name":name,"email":email,"subject":subject,"message":message})
        .then(res => console.log(res));
    };

    return (
    <>
        <div className="col-md-6 order-md-last d-flex pl-0 form">
            <form action="#" className="bg-light p-4 p-md-5 contact-form" onSubmit={(e)=>{sendData(e)}}>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" onChange={(e)=>{setSubject(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <textarea name="message" id="" cols="30" rows="7" className="form-control" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary py-3 px-5">Send Message</button>
                </div>
            </form>
        </div>
        <div className="col-md-6 d-flex img">
            <img className="form-image" src={image}></img>
        </div>
    </>
    );
}

export default ContactForm
