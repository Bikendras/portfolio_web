import './Form.css';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { profile } from './Data';

const API_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://portfolio-tours-core.onrender.com'
    : 'http://localhost:8000');

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill all fields',
        showConfirmButton: true,
      });
      return;
    }

    const payload = new FormData();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('subject', subject);
    payload.append('message', message);

    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/register`, payload);

      if (res?.data?.status === 1) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: res?.data?.message || 'Thank you for reaching out. I will get back to you soon.',
          showConfirmButton: true,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: res?.data?.message || 'Something went wrong',
          showConfirmButton: true,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Unable to send message',
        text: 'Please try again later or email me directly.',
        showConfirmButton: true,
      });
      console.error('Backend Error', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <span className="section-line" />
        <p className="section-subtitle">Have a project in mind? Let&apos;s talk.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>{profile.location}</p>
            </div>
          </div>
          <div className="contact-info-card">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <p>{profile.phone}</p>
            </div>
          </div>
          <div className="contact-info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>{profile.email}</p>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
