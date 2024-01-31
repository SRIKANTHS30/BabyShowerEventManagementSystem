import React from 'react';
import { MDBBtn, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import '../components/Themes.css';

import Userdashboard from '../UserDash/UserDashboard';
const ThemesPage = () => {
    const bestsellers = [
      {
        id: 1,
        name: 'Teddy Bear Bash Theme',
        category: 'Just like rubber duckies and balloons, teddy bears are simple and sweet childhood classics — and make for a timeless baby shower theme.',
        price: 61.99,
        discount: 0,
        badges: ['New'],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Teddy-Bear-Themed-Baby-Shower.jpg?width=596',
      },
      {
        id: 2,
        name: 'Balloon-Themed',
        category: 'Plenty of showers revolve around balloons, especially if they incorporate extravagant balloon decor.Balloons are also a simple and sweet element to feature on invitations.',
        price: 61.99,
        discount: 0,
        badges: ['Eco'],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Balloon-Themed-Baby-Shower.jpg?width=596',
      },
      {
        id: 3,
        name: 'Minimalist-Theme',
        category: 'For the expectant parents who are into clean lines, all-white everything and simple details, a modern minimalist theme can be on-point and seriously elegant. Touches of nature and subtle pops of color add charm to a baby shower or baby sprinkle.',
        price: 50.99,
        discount: 10,
        badges: [],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Minimalist-themed-baby-shower.jpg?width=596',
      },
      {
        id: 4,
        name: 'Paris-Theme',
        category: 'For the Francophile mom, the City of Lights offers plenty of inspiration — from the Eiffel Tower to Chanel. French cuisine could make up the baby shower menu, too. Croissants, macarons, éclairs are just some of the sweet treats you could serve.',
        price: 50.99,
        discount: 10,
        badges: ['Eco'],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Paris-Themed-Baby-Shower.jpg?width=596',
      },
      {
        id: 5,
        name: 'Vintage-Theme',
        category: 'Pearls, lace and other elements that speak to a parents love of thrifting, antiquing or crafting can create a sweet, elegant throwback theme.',
        price: 61.99,
        discount: 0,
        badges: [],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Vintage-Themed-Baby-Shower.jpg?width=596',
      },
      {
        id: 6,
        name:'Little Star-Themed',
        category: 'This timeless lullaby lends itself to simple, heartwarming and adorable details — often done in soft whites, blues, silver and gold.',
        price: 61.99,
        discount: 0,
        badges: [],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Twinkle-Twinkle-Little-Star-Themed-Baby-Shower.jpg?width=596',
      },
      {
        id: 7,
        name: 'Butterfly-Themed',
        category: 'This adorable theme makes decorations easy (fill the room with paper butterflies!) and allows for cute expressions like "You give me butterflies."',
        price: 61.99,
        discount: 0,
        badges: [],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Butterfly-Baby-Shower.jpg?width=596',
      },
      {
        id: 8,
        name: 'Garden-Themed',
        category: 'Flowers are an especially popular motif for celebrating baby girls, but you can also use floral decor to welcome a baby boy — especially if the parents-to-be are big Bridgerton fans!',
        price: 61.99,
        discount: 0,
        badges: [],
        imageUrl: 'https://images.agoramedia.com/wte3.0/gcms/Garden-baby-shower.jpg?width=596',
      },
  
  ];

  const handleBooking = (productName) => {
    // Implement your booking logic here
    alert(`Booking ${productName}`);
  };

  return (
    <>
    <Userdashboard/>
    <div className='mar'>
    <section style={{ backgroundColor: '#ffff' }}>
      <div className="text-center container py-2">
        <div className="row">
          {bestsellers.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-5 mb-3">
              <div className="card">
                <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                  <img src={product.imageUrl} className="w-100" alt={product.name} />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        {product.badges.map((badge, index) => (
                          <h5 key={index}><span className={`badge ${badgeClass(badge)}`}>{badge}</span></h5>
                        ))}
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">{product.name}</h5>
                  </a>
                  <a href="#!" className="text-reset">
                    <p>{product.category}</p>
                  </a>
                  <h6 className="mb-3">
                    {product.discount > 0 && <s>${product.price.toFixed(2)}</s>}
                    <strong className={`ms-2 ${product.discount > 0 ? 'text-danger' : ''}`}>
                      ${(product.price - (product.price * product.discount) / 100).toFixed(2)}
                    </strong>
                    </h6>
                  <MDBBtn color="primary">Register for an Event</MDBBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </>
  );
};

// Helper function to determine badge class based on badge content
const badgeClass = (badge) => {
  switch (badge) {
    case 'New':
      return 'bg-primary ms-2';
    case 'Eco':
      return 'bg-success ms-2';
    default:
      return 'bg-primary';
  }
};

export default ThemesPage;