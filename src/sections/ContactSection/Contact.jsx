// import React from 'react'
import "./Contact.css"
import ContactItem from "../../components/ContactItem/ContactItem"
import { FaMapSigns } from "react-icons/fa";
import { FaPhone,FaEarthAmericas  } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import ContactForm from "../../components/ContactForm/ContactForm";
// import ContactForm from "../../components/ContactForm/ContactForm";
const Contact = () => {
    const contactInfo = [
        {   title:"Address",
            info:"198 West 21th Street, Suite 721 New York NY 10016",
            icon:<FaMapSigns />
        },
        {   title:"Contact Number",
            info:"+ 1235 2355 98",
            icon:<FaPhone />
        },
        {    title:"Email Address",
            info:"info@yoursite.com",
            icon:<BiLogoTelegram />
        },
        {   title:"Website",
            info:"yoursite.com",
            icon:<FaEarthAmericas />
        },
    ];

    return (
        <div className="contact-section">
            <div className="container">
                <div className="row d-flex contact-info mb-5">
                    {contactInfo.map((item,index)=>{
                        return (
                            <ContactItem key={index} title={item.title} info={item.info} icon={item.icon}/>
                        );
                    })}
                </div>
                <div className="row no-gutters block-9 contact-form-section">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact
