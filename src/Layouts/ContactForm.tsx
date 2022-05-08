import { TextareaAutosize, TextField } from "@mui/material";
import React from "react";

export const ContactForm = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b65fa4"
          fill-opacity="1"
          d="M0,256L80,229.3C160,203,320,149,480,106.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div>
        <h1
          style={{
            display: "inline",
            borderBottom: "1px solid #b65fa4 ",
            margin: "0px",
            textAlign: "center",
            color: "#B462A9",
          }}
        >
          {" "}
          Escribenos...
        </h1>
        <div
          style={{
            display: "flex",
            height: "300px",
            width: "70%",
            margin: "auto",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TextField
            type="text"
            label="Nombre"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextField
            type="text"
            label="Correo Electronico"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Escribe Tu Mensaje..."
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
