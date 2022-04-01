import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";


export const Home = () => {

  const [form,setform]=useState([])
  const [location,setlocation]=useState()
const navigate=useNavigate()

  

  useEffect(()=>{
    getdata()
   },[])

  const getdata = () =>{
    axios.get('http://localhost:8080/meetups').then(({data})=>{setform(data)})
    
  }
  const handleChange =(e)=>{
    const {className,value} =e.target
    setlocation(value)
  }

  return (
    <div className="homeContainer">
      {form
        .filter((el) => {if(el.location==location)
          {return true}
        else{
          return false
        }}) 
        // / Filter on the basis of Users interests and location (both true)

        .map((el) => {
          return (
            <Link to={`/Event/${el.id}`} className="events">
              { 
              // add your children here (divs)
              // ex : title, theme, description, date, time, location, image(optional)
              // the classNames should be also : title, theme, description, date, time, location, image(optional)
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
            </Link>
          );
        })}

      <div className="subscribedData">
      
        <div>
          <select
         value={""} className="theme" onChange={(event) => {handleChange(event)}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/AddMeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {form
            .map((el) => {
              return (
                <Link to={`/Event/${el.id}`} className="events">
                  {
                  /* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */
                    <table>
  <tbody>

    <td>{el.title}</td>
    <td>{el.theme}</td>
    <td>{el.description}</td>
    <td>{el.date}</td>
    <td>{el.time}</td>
    <td>{el.location}</td>
  
    </tbody>

</table>
                    }
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
