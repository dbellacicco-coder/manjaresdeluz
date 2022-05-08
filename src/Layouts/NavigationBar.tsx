import { Box, Container, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/luzbakerylogo.png";

export const NavigationBar = () => {
  const links = ["Inici", "Productos", "Contacto"];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffe4fa",
        position: "fixed",
        top: 0,
        borderBottom: "1px solid #b65fa4 ",
      }}
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

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <div>
          <NavLink
            style={{
              color: "#b65fa4",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/"
          >
            Inicio
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{
              color: "#b65fa4",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/productos"
          >
            Productos
          </NavLink>
        </div>
        <div>
          <NavLink
            style={{
              color: "#b65fa4",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/contacto"
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </div>
  );
};
