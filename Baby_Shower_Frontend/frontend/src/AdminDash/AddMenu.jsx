import React, { useState } from 'react';
import axios from 'axios';
import './AddMenu.css'; // Import your CSS file for styling

const FoodMenuForm = ({ onSubmit, initialData, isUpdate }) => {
  const [foodMenu, setFoodMenu] = useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodMenu((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdate) {
        // Add your update logic here
        await axios.put(`/foodmenus/putfoodmenu/${foodMenu.id}`, foodMenu);
      } else {
        // Add your create logic here
        await axios.post('http://localhost:8081/foodmenus/postfood', foodMenu);
        alert("added");
      }

      // After a successful request, you can trigger any additional actions (e.g., closing modal, updating state)
      onSubmit(foodMenu);
    } catch (error) {
      console.error('Error:', error);
      // Handle error as needed (e.g., show an error message)
    }
  };

  return (
    <form className="food-menu-form" onSubmit={handleSubmit}>
      <label>
        Food Menu Name:
        <input type="text" name="foodmenuName" value={foodMenu.foodmenuName || ''} onChange={handleChange} />
      </label>
      <br />
      <label>
        Type:
        <textarea name="foodmenuType" value={foodMenu.foodmenuType || ''} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={foodMenu.description || ''} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={foodMenu.price || ''} onChange={handleChange} />
      </label>
      <br />

      {/* Add more fields as needed for your FoodMenu model */}

      <button type="submit" className="submit-button">
        {isUpdate ? 'Update' : 'Create'} FoodMenu
      </button>
    </form>
  );
};

export default FoodMenuForm;
