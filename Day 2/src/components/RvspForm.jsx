import React, { useState } from 'react';
import './RvspForm.css';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('Yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, like sending it to a server or displaying a thank you message.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Attendance:', attendance);
  };

  return (
    <div className="rsvp-form-container">
      <h2>RSVP Form</h2>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="attendance">Will you attend?</label>
        <select
          id="attendance"
          name="attendance"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
        >
          <option value="Yes">Yes, I will attend</option>
          <option value="No">No, I won't attend</option>
        </select>

        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
};

export default RSVPForm;
