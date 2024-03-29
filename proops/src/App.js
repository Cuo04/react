import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function Cards(props){
  return(<div>
      <h2>{props.name}</h2>
      <p>{props.detail}</p>
  </div>
    
  )
}


function App() {
  return (<div>
    <div className="App-header">
       <Cards 
      name="Ken" detail="hello world"
    /></div><div>
    <Cards name="Charles" detail={12+43}/>
  </div>
  </div>
   
  );
}

export default App;
