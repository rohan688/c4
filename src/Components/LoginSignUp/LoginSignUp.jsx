import axios from "axios";
import { useState } from "react";


export const LoginSignUp = () => {

const [db,setdb]=useState([])
const [form,setform]=useState({
  name:"",
  password:"",
  location:"",
  interests:"",
  image:"",
  subscribed:"",
})

const handleform=(e)=>{

  const {className,value} = e.target;
  
  if((className=="technology")  || (className=="movies") || (className=="culture") || (className=="art") || (className=="drama")){
    setdb({...form,interests:form})
  }



}


const adddata=(e)=>{
e.preventDefault();
axios.post("http://localhost:8080/meetups",{
  name:form.name,
  password:form.password,
  location:form.location,
  interests:form.interests,
  image:form.image,
  subscribed:form.subscribed,
})
}



  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => {adddata(e)}}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleform(event) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleform(event)  }}
          required
        />
        <br />
        <select value={""} className="location" onChange={(event) => {handleform(event) }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => { handleform(event)}}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => { handleform(event)}} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => {handleform(event) }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => {handleform(event)}} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => {handleform(event) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => {handleform(event)}} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {handleform(event)}}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => {handleform(e)}}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleform(event)}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleform(event)}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
