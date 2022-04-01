// This is an event details page which has its own route
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Event = () => {

  const [form,setform]=useState([])

  useEffect(()=>{
    getdata()
   },[])

   const getdata = () =>{
    axios.get('http://localhost:8080/meetups').then(({data})=>{setform(data)})
    
  }

  const patchdata =(id,status,data) =>{
    if(status=="subscribe"){status="subscribe"}
    else{status="unsubscribe"}

    axios.patch(`http://localhost:8080/meetups/${id}`,{status}).then(()=>{getdata()})

  }

  return (
    <div className="eventContainer">
      {
      /* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */
      form.map((el) => {
          return (
            <>            <Link to={`/meetups/${el.location}`} className="events">
            { 
           
<table>
<tbody>

  <td>{el.title}</td>
  <td>{el.theme}</td>
  <td>{el.description}</td>
  <td>{el.date}</td>
  <td>{el.time}</td>

  </tbody>

</table>
            
          }
          
<button className="unsubscribe" onClick={() => { patchdata(el.id,el.status)}}>{el.status}</button>
<button className="subscribe" onClick={() => { patchdata(el.id,el.status)}}>{el.status}</button>
          </Link></>

          );
        })
      
      }

  
    </div>
  );
};
