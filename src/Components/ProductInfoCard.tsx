import React from "react";
import { Grid, Link } from "@mui/material";

export const ProductInfoCard = ({ itemCard }) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#b65fa4",
                fontWeight: "bold",
              }}
            >
              {itemCard.title}
            </h1>
            <img
              src={itemCard.img}
              style={{
                width: "70%",
                height: "200px",
                borderRadius: "10px",
              }}
            />

            <p style={{ color: "#b65fa4", fontSize: "25px" }}>
              {itemCard.description}
            </p>
            {/* <Link
              style={{
                width: "20%",
                backgroundColor: "white",
                padding: "3px",
                color: "#b65fa4",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to="/productos"
            >
              Ver mas
            </Link> */}
          </div>
        </div>
      </Grid>
    </>
  );
};
