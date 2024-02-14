// AddonForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddonForm = () => {
  const [addon, setAddon] = useState({
    addonName: '',
    addonDescription: '',
    price: 0,
  });

  const handleChange = (e) => {
    setAddon({ ...addon, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your backend API endpoint for creating a new addon is /api/addons
      const response = await axios.post('http://localhost:8081/addons/postadd', addon);

      // Handle the response as needed
      console.log('Addon created:', response.data);

      // You can also redirect to another page or update the state accordingly
    } catch (error) {
      console.error('Error creating addon:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Addon Name:
        <input type="text" name="addonName" value={addon.addonName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Addon Description:
        <textarea name="addonDescription" value={addon.addonDescription} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={addon.price} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddonForm;
