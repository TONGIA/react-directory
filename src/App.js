import React, { Component } from 'react';
import './App.css';
import Contact from './Contact/Contact.js';
import Addcontact from './Addcontact/Addcontact';

class App extends Component {
    
  
  state = {
        persons: [
        ],
      name: "",
      contact: ""
    };
  
  deleteHandler = (personIndex)=>{
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }
  
  addHandler = () =>{
      const persons = [...this.state.persons];
      let name = this.state.name;
      let contact = this.state.contact;
      if(name.length>0 && contact.length>0)
      {
        const newPerson = {
            id: name+contact,
            name: name,
            contact: contact
        }
        persons.push(newPerson);
        this.setState({
            persons:persons,
            name: "",
            contact: ""
        });
      }
  }
  
  changeNameHandler = (event)=>{
      const name = event.target.value;
      this.setState({name:name});
  }
  
   changeContactHandler = (event)=>{
      const contact = event.target.value;
      this.setState({contact:contact});
  }

  render() {
    return (
      <div className="App">
        <h1>PHONE DIRECTORY</h1>
        <Addcontact 
        name={this.state.name}
        contact={this.state.contact}
        addHandler={this.addHandler}
        changeName={this.changeNameHandler}
        changeContact={this.changeContactHandler}/>
        
        
        {this.state.persons.map((person,index) =>{
            return (
                <Contact 
                name={person.name} 
                contact={person.contact} 
                deleteHandler={()=>this.deleteHandler(index)} 
                key={person.id}/>
            )
        })}
      </div>
    );
  }
}

export default App;
