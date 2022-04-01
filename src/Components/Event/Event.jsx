// This is an event details page which has its own route
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Event = () => {

  const [form,setform]=useState([])
  console.log(form,"form")

  const {id}=useParams()

  useEffect(()=>{
    getdata()
   },[])

   const getdata = () =>{
    axios.get(`http://localhost:8080/meetups/${id}`).then(({data})=>{setform(data)})
    
  }

  const patchdata =(id,status,data) =>{
    if(status==="subscribe"){status="Unsubscribe"}
    else{status="subscribe"}

    axios.patch(`http://localhost:8080/meetups/${id}`,{status}).then(()=>{getdata()})

  }

  return (
    <div className="eventContainer">
      {
      /* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */
  
       
            <>        
            { 
           
<table>
<tbody>

  <td>{form.title}</td>
  <td>{form.theme}</td>
  <td>{form.description}</td>
  <td>{form.date}</td>
  <td>{form.time}</td>
  <td>{form.location}</td>
  </tbody>

</table>
            
          }
          
<button className="unsubscribe" onClick={() => { patchdata(form.id,form.status)}}>{form.status}</button>

         </>

          
        
      
      }

  
    </div>
  );
};
