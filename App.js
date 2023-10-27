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
    Footer
        Copyright
        Links
        Address
        Contact
*/

const Header = () => {
  return (
    <div className="header">
      {/*  
            logo 
            Nav-items 
     */}

      <img src={logo} className="logo"/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body =()=>{
    return(
        <div className="body-component">
            <div className="Restaurant-container">
                
            </div>
        </div>
    );
}
const App = () => {
  return (
    <div className="app-layout">
      {/* 
        Header
        Body
        Footer
         */}
      <Header />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
