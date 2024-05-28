import React from "react";
import ReactDOM from "react-dom/client";
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

const App = () => {
  return (
    <>
      <h1>Sample Testing Component</h1>
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
