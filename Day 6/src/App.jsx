import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'

import Navbar from "./components/Nav";
import ThemesPage from "./components/Themes";

import FormCon from "./components/RvspForm";
import Role from "./components/Role";

import ExampleWithProviders from "./AdminDash/Function";
import Dashboard from "./AdminDash/AdminDashboard";
import AddTheme from "./AdminDash/AddTheme";
import SignUp from "./components/SignUp";
import Display from "./components/Display";
import Cards from "./components/Projects";
import Testimonials from "./components/Testimonial";
import Packages from "./components/Packages";
import Userdashboard from "./UserDash/UserDashboard";
import Receipe from "./components/Receipe";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";





function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/Content" element={<FormCon/>}></Route>
        <Route path="/themesuser" element={<ThemesPage/>}></Route>
        {/* <Route path="/book" element={<RegistrationForm/>}></Route>   */}
        {/* <Route path="/view" element={<ViewEventDetails/>}></Route>   */}
        <Route path="/role" element={<Role/>}></Route>  
        <Route path="/Adminlogin" element={<Dashboard/>}></Route>    
        <Route path="/entry" element={<ExampleWithProviders/>}></Route>    
        <Route path="/Userlogin" element={<Userdashboard/>}></Route>    
        <Route path="/addtheme" element={<AddTheme/>}></Route>    
        <Route path="/signup" element={<SignUp/>}></Route>    
        <Route path="/service" element={<Display/>}></Route>    
        <Route path="/projects" element={<Cards/>}></Route>    
        <Route path="/testimonials" element={<Testimonials/>}></Route>    
        <Route path="/packages" element={<Packages/>}></Route>    
        <Route path="/receipe1" element={<Receipe/>}></Route>    
        <Route path="/login" element={<Login/>}></Route>    
        <Route path="/Userprofile" element={<UserProfile/>}></Route>    
        </Routes>
      </Router>
    </div>

  )
}

export default App;