import { useState } from "react";
import { Box, Slider, Fab, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const EmojiSlider = styled(Slider)({
  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    backgroundColor: "transparent",
    "&:before": {
      content: '"🥰"',
      fontSize: "25px",
    },
    "&:focus, &:hover, &.Mui-active": {},
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function HomePageSlider() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 900, ml:{xl:"22rem",lg:"22rem",md:"22rem",xs:"0px"},mt:10 }}>
      <Fab
        variant="extended"
        aria-label="send-vibes"
        sx={{
          mr: 2,
          fontSize: "12px",
          textTransform: "none",
          width: 100,
          height:40,
          backgroundColor: "#E0E0DE",
          boxShadow:"0px 0px 20px 10px rgba(173, 216, 230, 10)"
        }}
        onClick={handleButtonClick}
      >
        <Typography sx={{ color: "black",fontSize:"12px" }}>Send Vibe</Typography>
      </Fab>
      <EmojiSlider
        aria-label="Custom marks"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={0.1}
        min={1}
        max={10}
        color="secondary"
        valueLabelDisplay="on"
      />
    </Box>
  );
}
