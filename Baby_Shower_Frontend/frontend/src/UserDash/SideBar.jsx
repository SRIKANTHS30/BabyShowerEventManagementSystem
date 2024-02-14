import React from 'react';
import './SideBar.css'; // Make sure to replace 'style.css' with the correct path to your CSS file

const Sidebar = () => {
  const handleArrowClick = (e) => {
    const arrowParent = e.currentTarget.parentElement.parentElement; // selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  };

  const handleSidebarBtnClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
  };

  return (
    <>
 
      <head>
        <meta charSet="UTF-8" />
        {/* Uncomment the line below if you have a title */}
        {/* <title>Drop Down Sidebar Menu | CodingLab</title> */}
        <link rel="stylesheet" href="style.css" />
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="sidebar close">
          <div className="logo-details">
            <i className='bx bxl-c-plus-plus'></i>
            <span className="logo_name">CodingLab</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">Dashboard</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Category</a></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className='bx bx-collection'></i>
                  <span className="link_name">Category</span>
                </a>
               
              </div>
           
            </li>
            {/* ... (repeat similar structure for other list items) */}
            <li>
              <div className="profile-details">
                <div className="profile-content">
                  <img src="image/profile.jpg" alt="profileImg"/>
                </div>
                <div className="name-job">
                  <div className="profile_name">SRIKANTH</div>
                  <div className="job">Web Desginer</div>
                </div>
                <i className='bx bx-log-out'></i>
              </div>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <div className="home-content">
            <i className='bx bx-menu' onClick={handleSidebarBtnClick}></i>
           
          </div>
        </section>
        
      </body>
      
    </>
  );
};

export default Sidebar;
