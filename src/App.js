import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Front from "./components/Front";
import About from "./components/About";
import PropertyList from "./components/PropertyList";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Details from "./components/Details";
import LoginForm from './LoginForm';

function App() {
  const handleLoginSuccess = (responseData) => {
    // Handle login success, e.g., set user data, show dashboard, etc.
    console.log('Login successful:', responseData);
  };

  // Define property and image states
  const [property, setProperty] = useState([]);
  const [image, setImages] = useState([]);

  // Fetch data for property and image states
  useEffect(() => {
    fetch('http://127.0.0.1:5000/properties')
      .then((r) => r.json())
      .then((data) => setProperty(data))
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/images')
      .then((r) => r.json())
      .then((data) => setImages(data))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/front" element={<Front />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Pass property and image as props to PropertyList */}
          <Route path="/properties" element={<PropertyList property={property} image={image} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />

          {/* Routes for Login and Register */}
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
          {/* You can add a similar route for Register component here */}

          {/* Other components or elements */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
