import "./Form.css";
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const formdata = new FormData();

    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("subject", subject);
    formdata.append("message", message);

    axios.post('https://portfolio-tours-core.onrender.com/register', formdata)
      .then(function (res) {

        if (res?.data.status === 1) {

          setTimeout(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: res?.data?.message,
              showConfirmButton: true,
            });
          }, 1000);

        } else {

          Swal.fire({
            position: "center",
            icon: "error",
            title: res?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          });

        }

      }).catch(function (err) {
        console.log("Backend Error", err);
      });
  };

  return (
    <div className="skill_1">

      <div className='skill_Tech'>
        <h1>Contact</h1>
      </div>

      <div className='form'>

        <label>Your Name</label>

        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Subject</label>

        <input
          type="text"
          placeholder="Enter your Subject"
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Message</label>

        <textarea
          rows="6"
          placeholder="Type your message here!!"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>

      </div>

    </div>
  );
}