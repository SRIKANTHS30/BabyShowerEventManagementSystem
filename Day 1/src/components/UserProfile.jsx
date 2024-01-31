import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="https://placekitten.com/200/200" alt="Profile" className="profile-picture" />
        <h2>Srikanth</h2>
        <p>User</p>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <strong>Email:</strong> john.doe@example.com
        </div>
        <div className="detail-item">
          <strong>Location:</strong>Chennai, Tamilnadu
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
