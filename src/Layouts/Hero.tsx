import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import CakeIMG from "../assets/images/cakeBG.jpg";
import { NavigationBar } from "./NavigationBar";

export const Hero = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#b65fa4",
          padding: "10px",
          alignItems: "center",
          // backgroundImage: `url(${CakeIMG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" style={{ color: "white" }}>
            Los Manjares de Luz{" "}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "20px" }}
          >
            Somos amantes de los pasteles, postres y salado, utilizando los
            materiales mas saludables,hecho a mano , creando una expericia
            exclusiva y unica para llevar algo de sabor y dulzura a tu vida.
            Convirtiendo tus ilusiones en pasteles .
          </Typography>
          {/* <Button
            style={{
              marginTop: "20px",
              width: "100%",
              color: "#c572b6",
              background: "white",
            }}
          >
            Productos
          </Button> */}
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          {/* <img style={{ width: "350px", height: "350px" }} src={CakeIMG} /> */}
        </div>
      </div>
    </>
  );
};
