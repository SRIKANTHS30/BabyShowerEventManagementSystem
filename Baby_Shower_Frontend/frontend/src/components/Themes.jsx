import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import '../components/Themes.css';
import { Link } from 'react-router-dom';

const ThemesPage = () => {
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get('http://localhost:8081/themes/themeget'); // Replace '/api/themes' with your actual backend endpoint
        setThemes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching themes:', error.message);
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  const handleBooking = (productName) => {
    // Implement your booking logic here
    alert(`Booking ${productName}`);
  };

  return (
    <>
      <Link to="/Userlogin" className="btn btn-primary mb-3">
        Back to Dashboard
      </Link>

      <div className='themes-container'>
        {loading ? (
          <p>Loading themes...</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {themes.map((theme) => (
              <div key={theme.id} className="col">
                <MDBCard className="theme-card">
                  <MDBCardImage src={theme.themeURL} alt={theme.themeName} position='top' zoom />
                  <MDBCardBody>
                    <MDBCardTitle>{theme.themeName}</MDBCardTitle>
                    <MDBCardText>{theme.description}</MDBCardText>
                    <h6 className="card-price mb-3">
                      
                      <strong className={`ms-2 ${theme.discount > 0 ? 'text-danger' : ''}`}>
                        ${theme.cost}
                      </strong>
                    </h6>
                    <MDBBtn color="primary" onClick={() => handleBooking(theme.themeName)}>
                      Register for an Event
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ThemesPage;
