import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import logo from "./AR_foodie_logo.png";
/*
 Reference model 

 MainComponent 
    Header
        Logo
        Navigation Items
    Body
        Search
        RestaurantContainer
            RestaurantCard
              Img
              Name of Restaurant, Cuisine, Star Rating
    Footer
        Copyright
        Links
        Address
        Contact
*/
const RestaurantCard = () => {
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#F5F5F5" }}>
      <img
        className="restaurant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
        alt="restaurant-logo"
      />
      <h3>Restaurant Name</h3>
      <h5>Biriyani, North Indian, Asian</h5>
      <h5>4.5</h5>
      <h5>38 minutes</h5>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const Header = () => {
  return (
    <div className="header">
      {/*  
            logo 
            Nav-items 
     */}
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-component">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      {/* 
        Header
        Body
        Footer
         */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
