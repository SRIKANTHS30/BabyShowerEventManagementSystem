import React from 'react';
import '../UserDash/UserDashboard.css'
import { Link } from 'react-router-dom';

const Userdashboard = () => {
  
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">USER</span>
        </div>
        <ul className="nav-links">
          <li>
                <Link to="/Userlogin">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">DashBoard</span>
          </Link>
          </li>
          <li>

          <li>
          <Link to="/themesuser">
              <i className='bx bx-box'></i>
              <span className="links_name">View Themes</span>
              </Link>
          </li>
          
          </li>
          <li>
          <Link to="/receipe1">
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Food Items</span>
              </Link>
          </li>
          <li>
          <Link to="/form">
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Register The Event</span>
              </Link>
          </li>
          <li>
          <Link to="/viewbook">
              <i className='bx bx-box'></i>
              <span className="links_name">View Booking</span>
              </Link>
          </li>
        <li class="log_out">
          <Link to="/logout">
            <i class='bx bx-log-out'></i>
            <span class="links_name" >Log out</span>
          </Link>
        </li>
        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className='bx bx-search'></i>
          </div>
          <div className="profile-details">
          <Link to='/Userprofile'>
            <img src="images/profile.jpg" alt="" />
            <span className="admin_name">Srikanth</span>
          </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Order</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>
            
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Sales</div>
            <div class="number">38,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Profit</div>
            <div class="number">$12,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Return</div>
            <div class="number">11,086</div>
            <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div>
          </div>
          <i class='bx bxs-cart-download cart four' ></i>
        </div>
      </div>
          

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title12">Recent Sales</div>
          <div class="sales-details">
            <ul class="details1">
              <li class="topic">Date</li>
              <li><a href="#">22 Jan 2023</a></li>
              <li><a href="#">02 Feb 2024</a></li>
            </ul>
            <ul class="details1">
            <li class="topic">Customer</li>
            <li><a href="#">Alex Doe</a></li>
            <li><a href="#">David Mart</a></li>
          </ul>
          <ul class="details1">
            <li class="topic">Sales</li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            
          </ul>
          <ul class="details1">
            <li class="topic">Total</li>
            <li><a href="#">$204.98</a></li>
            <li><a href="#">$24.55</a></li>
    
            
          </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>

          
        </div>
      </div>
  </section>
    </>
  );
};

export default Userdashboard;