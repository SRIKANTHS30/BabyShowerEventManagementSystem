import React from 'react';
import './UserReg.css'; // Make sure to import your CSS file
import { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        applicantName: '',
        applicantEmail: '',
        phoneNumber: '',
        applicantAddress: '',
        eventDate: '',
        eventTime: '',
        peopleCount: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/bookings', formData); // Adjust the endpoint URL accordingly
            console.log('Booking created:', response.data);
    
            // Navigate to the next page or show a success message
            // navigate('/userbookings1');
        } catch (error) {
            console.error('Error creating booking:', error);
            // Handle error, e.g., show error message
        }
    };
  return (
    <div className="container
    ">
      <div className="title">REGISTER YOUR EVENT</div>
      <form className="form2" onSubmit={handleSubmit}>
        <div className="user_details">
          <div className="input_pox">
            <span className="datails">Full Name</span>
            <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} placeholder="Enter your name" required />
          </div>
          <div className="input_pox">
            <span className="datails">Event Name</span>
            <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} placeholder="Enter your Event Name" required />
          </div>
          <div className="input_pox">
            <span className="datails">Email</span>
            <input type="text"  name="applicantEmail" value={formData.applicantEmail} onChange={handleChange}  placeholder="Enter your Email" required />
          </div>
          <div className="input_pox">
            <span className="datails">Phone Number</span>
            <input type="tel"  name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}  placeholder="Enter your Phone Number" required />
          </div>
          <div className="input_pox">
            <span className="datails">Address</span>
            <input type="text" name="applicantAddress" value={formData.applicantAddress} onChange={handleChange}  placeholder="Enter your Address" required />
          </div>
          <div className="input_pox">
            <span className="datails">Date</span>
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange}   required />
          </div>
          <div className="input_pox">
            <span className="datails">Time</span>
            <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange}  required />
          </div>
          <div className="input_pox">
            <span className="datails">People Count</span>
            <input type="text" name="peopleCount" value={formData.peopleCount} onChange={handleChange}  placeholder="Enter the People Count" required />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
