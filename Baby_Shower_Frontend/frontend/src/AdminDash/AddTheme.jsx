import React, { useState } from 'react';
import axios from 'axios';
import '../AdminDash/AddTheme.css'
const AddTheme = () => {
  const [themeName, setThemeName] = useState('');
  const [themeURL, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/themes/addtheme', {
        themeName,
        themeURL,
        description,
        cost,
      });

      alert('Theme added successfully:');

      // You can add further logic here, like redirecting or showing a success message
    } catch (error) {
      alert('Error adding theme:');
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="theme-form">
      <label>
        Theme Name:
        <input type="text" value={themeName} onChange={(e) => setThemeName(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={themeURL} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Cost:
        <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
      </label>
      <button type="submit">Add Theme</button>
    </form>
  );
};

export default AddTheme;
