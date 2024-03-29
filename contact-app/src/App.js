import React from 'react';
import './App.css';
import contacts from './contact';
import Details from './detail';




function Cards(props){
  return(
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <Details
          phone = {props.phone} />
          <Details
          phone = {props.email} />
        </div>
      </div>

    </div>
  )
}

function cardDetail(contact){
  return <Cards 
    key = {contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    phone = {contact.phone}
    email = {contact.email}
  />
}


function App() {
  return (
    
    <div>
      <h1 className="heading">My Contacts</h1>  {/*optional way of doing what is below*/}
      {contacts.map(cardDetail)}
      {/* <Cards
      name = {contacts[0].name}
      img = {contacts[0].imgURL}
    phone = {contacts[0].phone}
    email = {contacts[0].email}
       /> */}
       {/* <Cards
      name = {contacts[1].name}
      img = {contacts[1].imgURL}
    phone = {contacts[1].phone}
    email = {contacts[1].email}
       />
       <Cards
      name = {contacts[2].name}
      img = {contacts[2].imgURL}
    phone = {contacts[2].phone}
    email = {contacts[2].email}
       /> */}
    </div>
  );
}

export default App;
