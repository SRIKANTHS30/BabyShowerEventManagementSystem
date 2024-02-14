import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Navbar from "./components/Nav";
import ThemesPage from "./components/Themes";
import ExampleWithProviders from "./AdminDash/Function";
import Dashboard from "./AdminDash/AdminDashboard";
import AddTheme from "./AdminDash/AddTheme";
import Display from "./components/Display";
import Cards from "./components/Projects";
import Testimonials from "./components/Testimonial";
import Packages from "./components/Packages";
import Receipe from "./components/Receipe";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import AddOns from "./AdminDash/AddOns";
import About from "./components/ABout";
import BabyShowerRegistration from "./UserDash/UserReg";
import Signup from "./components/SignUp";
import UserDashboard from "./UserDash/UserDashboard";
import FoodMenuForm from "./AdminDash/AddMenu";
import EventTable from "./UserDash/EventTable";
import UpdateTheme from "./components/UpdateTheme";
import DeleteMenu from "./AdminDash/DeleteMenu";
import { useEffect, useState } from "react";
import Logout from "./AdminDash/Logout";






function App() {
  const [user,setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("role"));
  
    // Only update the state if the user is different
    if (user !== storedUser) {
      setUser(storedUser);
    }
  });
  // console.log(user);
  return (
    <div>
      <Router>
        {
          !user ?
          <Routes>
             <Route path="/" element={<Navbar/>}></Route>   
             <Route path="/service" element={<Display/>}></Route>    
             <Route path="/login" element={<Login/>}></Route>        
             <Route path="/signup" element={<Signup/>}></Route>    
             <Route path="/projects" element={<Cards/>}></Route>   
             <Route path="/Adminlogin" element={<Dashboard/>}></Route> 
 
             <Route path="/testimonials" element={<Testimonials/>}></Route>        
             <Route path="/packages" element={<Packages/>}></Route>    
             <Route path="/about" element={<About/>}></Route>    
          </Routes>
          : user.role === 'user' ? <Routes>
            <Route path="/" element={<Navbar/>}></Route>
            <Route path="/themesuser" element={<ThemesPage/>}></Route> 
            <Route path="/Userlogin" element={<UserDashboard/>}></Route>    
            <Route path="/viewbook" element={<EventTable/>}></Route>  
            <Route path="/Userprofile" element={<UserProfile/>}></Route>    
            <Route path="/form" element={<BabyShowerRegistration/>}></Route>    
            <Route path="/receipe1" element={<Receipe/>}></Route>    
            <Route path="/logout" element={<Logout/>}></Route>    

          </Routes> :
          <Routes>   
            <Route path="/" element={<Navbar/>}></Route>
            <Route path="/addons" element={<AddOns/>}></Route>    
            <Route path="/addtheme" element={<AddTheme/>}></Route>    
            <Route path="/Adminlogin" element={<Dashboard/>}></Route> 
            <Route path="/login" element={<Login/>}></Route>   
            <Route path="/entry" element={<ExampleWithProviders/>}></Route>    
            <Route path="/updatetheme" element={<UpdateTheme/>}></Route>    
            <Route path="/deletemenu" element={<DeleteMenu/>}></Route>    
            <Route path="/addfoodmenu" element={<FoodMenuForm/>}></Route>    
            <Route path="/logout" element={<Logout/>}></Route>    

          </Routes>
        }
       
      </Router>
    </div>

  )
}

export default App;