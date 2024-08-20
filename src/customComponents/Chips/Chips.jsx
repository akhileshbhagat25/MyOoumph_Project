import React from "react";
import { Chip, Avatar, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function Chips({ label, imageSrc, showIcon }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      {showIcon && <AddIcon sx={{ mr: 2 }} />}
      <Chip
        avatar={
          <Avatar
            alt="Profile Image"
            src={imageSrc}
          />
        }
        label={label}
        sx={{
          height: 40, 
          display: "flex",
          justifyContent: "flex-start", 
          alignItems: "center", 
          "& .MuiAvatar-root": {
            borderRadius: "50%",
            width: 25, 
            height: 25, 
            marginRight: "10px", 
          },
          fontSize: "12px", 
          padding: "0 10px", 
        }}
      />
    </Box>
  );
}
