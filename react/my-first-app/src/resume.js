import React from 'react';
import data from './resume.json';
import profilepic from './delivery-man.svg'
export default function Resume(props){
 fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))
    let info=data.profile[props.location.data.id]
console.log(info.carrer)
        return (
          
            <div className="row justify-content-center">
                <div className="col-lg-3 m-2">
                    <div className="card shadow">
                    <div  className="card-body text-center">
                    <img src={profilepic} alt="pic" style={{width:"30%"}}/>
                    <h2>{info.basics.name}</h2>
           <h4 className="text-secondary">{info.basics.role}</h4>
        <a href={"tel:"+info.basics.phone}>   
         <h4>{info.basics.phone}</h4>
             </a> 
        <a href={"mailto:"+info.basics.email}>
            <h4>{info.basics.email}</h4>
        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-8 m-2">
                 <div className="card shadow" >
                     <div className="card-body">
                    <h2>Carrer Objective</h2>
                    <hr/>
                    <p>
                        { info.carrer}
                    </p>
                    <h2>Education Details</h2>
                    <div class="container mt-5">
            <div class="table-responsive-lg">
        <table class="table table-bordered
         table-striped table-hover">
            <thead class="thead-dark">
               <tr>
                   <th scope="col">S.NO</th>
                   <th>Institute</th>
                <th>percentage</th>
           </tr>
            </thead>
            <tbody>
              <tr>
                  <td>1</td>
                 <td >{info.edu.coll1}</td>
                  <td>{info.edu.per1}</td>
              </tr>
              <tr>
              <td>2</td>
              <td >{info.edu.coll2}</td>
                  <td>{info.edu.per2}</td>
               
            </tr>
            <tr>
            <td>3</td>
            <td >{info.edu.coll3}</td>
                  <td>{info.edu.per3}</td>
            </tr>
            
            </tbody>
           
        </table>
    </div>
</div> 
<h2>Skills</h2>
<ul>
    <li>{info.skills.s1}</li>
    <li>{info.skills.s2}</li>
    <li>{info.skills.s3}</li>
    <li>{info.skills.s4}</li>
</ul>
<h2>Hobbies</h2>
<ul>
    <li>{info.Hobbies.h1}</li>
    <li>{info.Hobbies.h2}</li>
    
</ul>

        </div>
         </div>
        </div>
        </div> 
                   )
}
