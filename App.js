import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./AR_foodie_logo.jpg"

import "./styles.css"
/* 
 App
  - Header
    -Logo
    -Nav Items
  -Body
    -Search
    -RestaurantContainer
        -RestaurantCard
  -Footer
    -CopyRight
    -Address
    -Links
    -Contact
*/

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className ="logo" src={logo}></img>
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
    </>
  );
};



const RestaurantCard =({})=>{
  return(
  <div className="restaurant-card">
    <img className="restaurant-logo" src={{}} alt="restaurant-logo"></img>
    <div>Restaurant-name</div>
    <div>Ratings</div>
    <div>Location</div>
  </div>);
}

const BodyComponent =()=>{
  return(
    <div className="body-component">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard/>
      </div>
    </div>
  )
}
const App = () => {
  return (
  <>
    <HeaderComponent/>
    <BodyComponent/>
  </>);
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
