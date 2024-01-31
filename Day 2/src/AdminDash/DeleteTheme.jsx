import React from 'react';
import '../assets/css/ViewEditBabyShowerTheme.css';
import babyShower1 from '../assets/images/babyShower1.jpg';
import babyShower2 from '../assets/images/babyShower2.jpg';
import babyShower3 from '../assets/images/babyShower3.jpg';
// Import other images as needed

const staticBabyShowerThemes = [
  {
    id: 1,
    name: 'Adorable Elephants',
    image: babyShower1,
    description: 'Cute elephants-themed baby shower',
    guestCapacity: 20,
    ratings: 4.8,
    availability: true,
  },
  {
    id: 2,
    name: 'Twinkle Twinkle Little Star',
    image: babyShower2,
    description: 'Magical starry night baby shower',
    guestCapacity: 15,
    ratings: 4.5,
    availability: false,
  },
  {
    id: 3,
    name: 'Sweet Dreams Baby',
    image: babyShower3,
    description: 'Dreamy clouds and moon baby shower',
    guestCapacity: 25,
    ratings: 4.2,
    availability: true,
  },
  // Add more themes as needed
];

const ViewEditBabyShowerTheme = () => {
  // ... (previous state and function declarations) ...

  return (
    <div className="adview">
      <AdminSidebar />
      <div className="baby-shower-themes">
        {staticBabyShowerThemes.map((theme) => (
          <div key={theme.id} className="baby-shower-theme">
            <img src={theme.image} alt={theme.name} />
            <div className="details">
              <h3>{theme.name}</h3>
              <p>Description: {theme.description}</p>
              <p>Guest Capacity: {theme.guestCapacity}</p>
              <p>Ratings: {theme.ratings}</p>
              <p>Availability: {theme.availability ? 'Available' : 'Not Available'}</p>
              {/* Add other details as needed */}
              <button onClick={() => handleDelete(theme.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEditBabyShowerTheme;
