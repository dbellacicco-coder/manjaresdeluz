import React from "react";
import logo from "../assets/images/luzbakerylogo.png";

export const Footer = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ height: "80px" }}>
        <img src={logo} style={{ height: "75px", borderRadius: "50px" }} />
      </div>

      <div>
        <p style={{ color: "#c572b6", margin: "0px", textAlign: "center" }}>
          Calle Esteban Collantes, 31 28017 Madrid
        </p>
        <hr />
      </div>
    </div>
  );
};
