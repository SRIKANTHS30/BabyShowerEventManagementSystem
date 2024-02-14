import react from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.css';

const Profile = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
    <div className="user-profile">
      <div className="profile-header">
        <img src="https://placekitten.com/200/200" alt="Profile" className="profile-picture" />
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          {/* Add other user details here */}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};
export default Profile;
