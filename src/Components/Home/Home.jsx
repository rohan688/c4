import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {useNavigate } from "react-router-dom"

export const Home = () => {
const navigate=useNavigate()
const[meet,setMeet]=useState([])
const[location,setlocation]=useState()


useEffect(()=>{
  axios.get(`http://localhost:8080/meetups`).then((res)=>{
    setMeet(res.data)
  }).catch((err)=>{
     navigate("*")
  })
},[])
const handleChange =(e)=>{
 const {className,value}=e.target
 setlocation(value)
}

return (
    <div className="homeContainer">
      {meet
        .filter((el) => {if(el.location==location) 
          {return true}
          else{
            return false
          }}) 
        .map((el) => {
          return (
            <Link to={`/meetups/${el.location}`} className="events"> 
            
            
            </Link>
          );
        })} 

      <div className="subscribedData">
        <div>
          <select
             
            className="theme"  onChange={(e) => { handleChange(e)}} >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={"/addmeetups"}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {meet
            .map((el) => {
              return (
                <Link to={`/meetups/${el.location}`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}

                 <table>
                   
                   <tbody>
                     <tr>
                     <td>{el.title}</td>
                     <td>{el.theme}</td>
                     <td>{el.location}</td>
                     <td>{el.description}</td>
                     <td>{el.date}</td>
                     <td>{el.time}</td>
                     <td>{el.image}</td>
                     </tr>
                   </tbody>
                 </table>
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
