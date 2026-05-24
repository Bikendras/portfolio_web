import "./Form.css";

import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
// import swal from 'sweetalert';

export default function Form() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");
  console.log(name, email);
  const handleSubmit =()=>{
    const formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("subject",subject);
    formdata.append("message",message);
    console.log(name, email);
    axios.post('http://localhost:8000/register', formdata).then(function(res){
      console.log("backend Success Response", res);
      if(res?.data.status==1){
        setTimeout(()=>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: res?.data?.message,
            showConfirmButton: true,
            // timer: 1500,
          });
        },1000);
      }
      else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }

    }).catch(function(err){
      console.log("Backend Error", err);
    })
  };
  return (
    <div className="skill_1">
      <div className='skill_Tech'>
          <h1>Contact</h1>
        </div>
        <div className='form'>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} ></input>
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} ></input>
            <label>Subject</label>
            <input type="text" placeholder="Enter your Subject" onChange={(e)=>setSubject(e.target.value)} ></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here!!" onChange={(e)=>setMessage(e.target.value)} ></textarea>
            <button className="btn" onClick={()=>handleSubmit()} >Submit</button>
        </div>

    </div>
  )
}
