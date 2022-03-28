import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";

export const LoginSignUp = () => {
 const [interest,setInterest]=useState([]);
 const [form,setForm]=useState({
   name:"",
   password:"",
   Location:"",
   interetst:[],
   image:"",
   subscribed:"",
 })

  const handleChange=(e)=>{
    console.log(e.target.value)

    const{className,value}=e.target
    if((className==='technology')||
    (className==='food')||
    (className==='movies')||
    (className==='culture')||
    (className==='art')||
    (className==='drama')){
      setInterest([...interest,value]);
      setForm({...form,interetsts:interest});
    }
    else
    setForm({...form,[className]:value})

    }
    const postdata=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:8080/users',{
        name:form.name,
        password:form.password,
        Location :form.Location,
        interests:form.interetst,
        image:form.image,
        subscribed:form.subscribed,

      })
    }
  

  

 
  




  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => {handleChange(e) }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleChange(event)  }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { handleChange(event)}}
          required
        />
        <br />
        <select value={""} className="location" onChange={(event) => { handleChange(event)}}>
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
          onChange={(event) => { handleChange(event)}}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => { handleChange(event)}}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => {handleChange(e) }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" onClick={postdata()} />
      </form>
    </div>
  );
};
