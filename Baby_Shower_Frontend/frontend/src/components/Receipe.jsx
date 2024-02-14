import React, { useState, useEffect } from 'react';
import './Receipe.css';
import axios from 'axios';

const Receipe = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState('');
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = () => {
    fetch('http://localhost:8081/foodmenus/getfood')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu data:', error));
  };


  return (
    <div className="receipe-container">
      <h1 className="title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.foodmenuName} />
            <h2>{item.foodmenuName}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Type: {item.foodmenuType}</p>
            
          </div>
        ))}
      </div>

     
      
    </div>
  );
};

export default Receipe;
