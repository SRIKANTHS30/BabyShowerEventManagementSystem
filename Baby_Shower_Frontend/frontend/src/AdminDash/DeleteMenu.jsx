import React, { useState, useEffect } from 'react';
import './DeleteMenu.css';
import axios from 'axios';

const DeleteMenu = () => {
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

  const handleDelete = () => {
    axios.delete(`http://localhost:8081/foodmenus/${deleteItemId}`)
      .then(response => {
        console.log('Item deleted successfully:', response.data);
        fetchMenuItems(); // Fetch menu items again after deletion
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
    setShowDeletePrompt(false); // Hide delete prompt after deletion
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
            <button onClick={() => {
              setDeleteItemId(item.id);
              setShowDeletePrompt(true);
            }}>Delete</button>
          </div>
        ))}
      </div>

      {/* Delete prompt */}
      {showDeletePrompt && (
        <div className="delete-prompt">
          <input
            type="text"
            placeholder="Enter item ID"
            value={deleteItemId}
            onChange={(e) => setDeleteItemId(e.target.value)}
          />
          <button onClick={handleDelete}>Confirm Delete</button>
          <button onClick={() => setShowDeletePrompt(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DeleteMenu;
