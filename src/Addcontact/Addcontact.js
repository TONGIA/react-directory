import React from 'react';
import './Addcontact.css';

const Addcontact = (props)=>{
    return (
        <div class="Addcontact">
            NAME: <input id="name" type="text" className="name" value={props.name} onChange={props.changeName}></input>
            CONTACT: <input id="contact" type="text" className="contact" value={props.contact} onChange={props.changeContact}></input>
            <button onClick={props.addHandler}>ADD CONTACT</button>
        </div>
    )
}

export default Addcontact;