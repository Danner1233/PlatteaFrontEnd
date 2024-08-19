import React from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import Overleyregister from "../components/Overleyregister";
import Overleylogin from "../components/Overleylogin";

const Iniciodesesio = () => {
  return (
    <div className="custom-container">
      <div className="container" id="container">
        <Register />
        <Login />
        <div className="overlay-container">
          <div className="overlay">
            <Overleyregister />
            <Overleylogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iniciodesesio;
