import React,{useState} from 'react'

let StatesConcept=()=>{
    const[count]=useState(["Klayan","Rajesh","swami"]);
    return(
        <div style={{textAlign:"center"}}>
        <h2>states</h2>
        <h2>{count.map(i=>(
            <span> {i}<br/> </span>
        ))}</h2>
        </div>
    )
}
 export default StatesConcept;