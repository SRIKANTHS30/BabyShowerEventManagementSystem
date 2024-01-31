import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-box'></i>
              <span className="links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Order list</span>
            </a>
          </li>
          {/* Add more list items as needed */}
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
            <img src="images/profile.jpg" alt="" />
            <span className="admin_name">Prem Shahi</span>
            <i className='bx bx-chevron-down'></i>
          </div>
        </nav>

        <div className="home-content">
          {/* Add content for the home section */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
