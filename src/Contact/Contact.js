import React from 'react';
import './Contact.css';


const Contact = (props)=>{
    return (
        <div className="Contact">
            <p>NAME : {props.name} </p>
            <p>CONTACT : {props.contact} </p>
            <span onClick={props.deleteHandler}>X</span>
        </div>
    )
}

export default Contact;