import React from 'react';
import '../AdminDash/AdminDashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <>
    <div className='hom'>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">ADMIN</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
          <Link to={"/addtheme"}>
              <i className='bx bx-box'></i>
              <span className="links_name">Add Themes</span>
              </Link>
          </li>
          <li>
          <Link to={"/entry"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">User Entries</span>
              </Link>
          </li>
        
          <li>
          <Link to={"/addons"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Add Add-Ons</span>
              </Link>
          </li>
          <li>
          <Link to={"/addfoodmenu"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Add FoodMenu</span>
              </Link>
          </li>
          <li>
          <Link to={"/deletemenu"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Delete FoodMenu</span>
              </Link>
          </li>
        
          <li>
          <Link to={"/updatetheme"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Update Theme</span>
              </Link>
          </li>
          <li>
          <Link to={"/deletetheme"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Delete Theme</span>
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
         
            <span className="admin_name">SRIKANTH</span>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Events</div>
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
            <div class="box-topic">Completed Events</div>
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
            <div class="box-topic">Pending Events</div>
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
            <div class="box-topic">Pending Events</div>
            <div class="number">11,086</div>
            <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div>
          </div>
          <i class='bx bxs-cart-download cart four' ></i>
        </div>
        <div class="table-data1">
				<div class="order">
					<div class="head">
						<h3>Recent Events</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Event Name</th>
								<th>Date Order</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Baby Shower</p>
								</td>
								<td>01-01-2024</td>
								<td><span class="status completed">Completed</span></td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>DJ Night</p>
								</td>
								<td>30-01-2024</td>
								<td><span class="status pending">Pending</span></td>
								<td><span class="status pending">Cancel</span></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Baby Feast</p>
								</td>
								<td>30-01-2024</td>
								<td><span class="status process">Process</span></td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Naming Party</p>
								</td>
								<td>02-02-2024</td>
								<td><span class="status pending">Pending</span></td>
								<td><span class="status pending">Cancel</span></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Party Night</p>
								</td>
								<td>27-01-2024</td>
								<td><span class="status completed">Completed</span></td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
          </div>
        
      </div>
    </div>
  </section>

          </div>
 

    </>
  );
};

export default Dashboard;