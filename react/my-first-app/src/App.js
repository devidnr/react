import React from 'react';
import logo from './logo.svg';
import './App.css';
import profilepic from './delivery-man.svg'
import data from './data.json';
import './css/bootstrap.min.css';

function App() {
  let profiles=data.profile;
  return (
    <div className="row  justify-content-center">


  { profiles.map((value)=>(
    <div className="col-lg-4 col-md-4 col-sm-10">
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #000"}}>
        <img src={profilepic} />
        <div className="card-body text-center">
         <h1>{value.basics.name}</h1>
         <div className="card-text">
           <h4>{value.basics.role}</h4>
         </div>
          <a href={"tel"+value.basics.phone}>{value.basics.phone}</a><br/>
          <a href={"mailto+"}>{value.basics.email}</a>

     </div>
     </div>
     </div>))
     }
</div>
)}
export default App;