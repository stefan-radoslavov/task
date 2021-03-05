import React, { useState, useEffect } from "react";
import './App.css';
import Request from "./requests_small.json";


const App = () => {
  const [time, setTime] = useState("time");
  const [user, setUser] = useState("user");
  const [message, setMessage] = useState("message");
 
  console.log(Request);


 
const {requests} = Request;

console.log(requests);
 

  return (
    <div className="App">
      <h1>Info box</h1>
      
        {
          requests.map(user => (
            <div className="box" key={user.user}>
             
            <div className="time">
          time:
          <label >
            {user.time}
          </label>
         
        </div>
        <div className="user">
          user:
          <label>
            {user.user}
          </label>
         
        </div>
        <div className="message">
          message:
          <label>
            {user.payload.message}
          </label>
         
        </div>

            </div>
          )) 
        }
    
       
       

      </div>
    
  );
}

export default App;
