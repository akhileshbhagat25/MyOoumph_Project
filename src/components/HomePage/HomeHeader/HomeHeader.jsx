import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Meter from "../../../customComponents/Meter/Meter";

const HomeHeader = () => {
  return (
    <React.Fragment>
      <Box sx={{ ml:{xl:"18.8rem" ,lg:"27rem",md:"18.8rem",sm:"1rem",xs:'8rem'}}}>
        <Grid container>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Box sx={{ ml: 5, mt: 2.5 }}>
              <Typography>(0.0 Vibes)</Typography>
              <Typography sx={{ fontSize: "2.4rem", fontWeight: "bold",mt:2 }}>
                4.2
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Meter
              value="3.5"
              text="IQ"
              dotColors={[
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
                "#03a9f4",
                "#00bcd4",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Meter
              value="4.2"
              text="Appeal"
              dotColors={[
                "#ff5722",
                "#ff9800",
                "#ffc107",
                "#ffeb3b",
                "#cddc39",
                "#8bc34a",
                "#4caf50",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Meter
              value="4.2"
              text="Social"
              dotColors={[
                "#ff5722",
                "#ff9800",
                "#ffc107",
                "#ffeb3b",
                "#cddc39",
                "#8bc34a",
                "#4caf50",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Meter
              value="4.2"
              text="Humanity"
              dotColors={[
                "#ff5722",
                "#ff9800",
                "#ffc107",
                "#ffeb3b",
                "#cddc39",
                "#8bc34a",
                "#4caf50",
              ]}
            />
          </Grid>
          
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default HomeHeader;
