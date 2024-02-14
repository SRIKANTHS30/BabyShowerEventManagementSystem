// UpdateEventForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UpdateEventForm = () => {
  const [id, setEventId] = useState('');
  const [event, setEvent] = useState({
    themeName: '',
    themeURL: '',
    description: '',
    cost: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8081/themes/updatetheme/${id}`, event);
      console.log('Event updated successfully:', response.data);
      // Optionally: Reset form fields after successful update
      setEvent({
        themeName: '',
        themeURL: '',
        description: '',
        cost: ''
      });
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleFetchEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/themes/themeget/${id}`);
      setEvent(response.data);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  return (
    <div>
      <h2>Update Event Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventId">Event ID:</label>
        <input 
          type="text" 
          id="id" 
          name="eventId" 
          value={id} 
          onChange={(e) => setEventId(e.target.value)} 
        />
        <button type="button" onClick={handleFetchEvent}>Fetch Event Details</button>
        <label htmlFor="themeName">Theme Name:</label>
        <input 
          type="text" 
          id="themeName" 
          name="themeName" 
          value={event.themeName} 
          onChange={handleChange} 
        />
        <label htmlFor="themeURL">Theme URL:</label>
        <input 
          type="text" 
          id="themeURL" 
          name="themeURL" 
          value={event.themeURL} 
          onChange={handleChange} 
        />
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          name="description" 
          value={event.description} 
          onChange={handleChange} 
        />
        <label htmlFor="cost">Cost:</label>
        <input 
          type="text" 
          id="cost" 
          name="cost" 
          value={event.cost} 
          onChange={handleChange} 
        />
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default UpdateEventForm;
