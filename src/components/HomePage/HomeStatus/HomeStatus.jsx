import React from "react";
import { Box } from "@mui/material";
import Chips from "./../../../customComponents/Chips/Chips";
import girl from "./../../../assets/images/girl.png";

export default function HomeStatus() {
  return (
    <React.Fragment>
      <Box 
        sx={{ 
          ml: "18.8rem", 
          mt: 5, 
          display: "flex", 
          flexDirection: "row", 
          flexWrap: "wrap", 
          gap: 2, 
        }}
      >
        <Chips label="Sexy" imageSrc={girl} showIcon={true} />
        <Chips label="Cool" imageSrc={girl} showIcon={false} />
        <Chips label="Stylish" imageSrc={girl} showIcon={false} />
        <Chips label="Stylish" imageSrc={girl} showIcon={false} />
        <Chips label="Stylish" imageSrc={girl} showIcon={false} />
        <Chips label="Stylish" imageSrc={girl} showIcon={false} />
        <Chips label="Stylish" imageSrc={girl} showIcon={false} />
      </Box>
    </React.Fragment>
  );
}
