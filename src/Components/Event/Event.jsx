// This is an event details page which has its own route
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {useNavigate } from "react-router-dom"





export const Event = () => {

const[meet,setMeet]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8080/meetups/${Location}`).then((res)=>{
      setMeet(res.data)
    })
  },[])



  return (
    <div className="eventContainer">
     <h3>{meet.name}</h3>
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => { }}>Subscribe</button>
    </div>
  );
};
