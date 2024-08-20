import React, { useState } from "react";
import { Tabs, Tab, Box, Chip } from "@mui/material";
import laugh from "./../assets/images/laugh.png";
import friends from "./../assets/images/friends.png";
import place from "./../assets/images/place.png";
import PeopleIcon from "@mui/icons-material/People";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeIcon from "@mui/icons-material/Home"; 
import NatureIcon from "@mui/icons-material/Nature"; 
import WorkIcon from "@mui/icons-material/Work"; 
import StarIcon from "@mui/icons-material/Star"; 
import "./Testings.css";

const TabContent = ({ value, index, children }) => {
  return value === index ? <Box p={3}>{children}</Box> : null;
};

const Testings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    setTabValue(0);
  };

  const tabSets = [
    ["Gallery", "Images", "Videos", "Documents"],
    [
      { label: "Truth", icon: <HomeIcon /> },
      { label: "Fun", icon: <NatureIcon /> },
      { label: "Debate", icon: <WorkIcon /> },
      { label: "Opportunity", icon: <StarIcon /> }
    ],
    ["Members", "Events", "Groups", "Notifications"],
    ["Offers", "Discounts", "Promotions", "New Arrivals"],
  ];

  const images = [laugh, friends, place];

  const chipData = [
    { label: "People", icon: <PeopleIcon /> },
    { label: "Content", icon: <ContentPasteIcon /> },
    { label: "Community", icon: <GroupIcon /> },
    { label: "Offers", icon: <LocalOfferIcon /> },
  ];

  return (
    <Box className="container" sx={{ mt: 2, ml: "18.8rem" }}>
      <div className="custom-chips">
        {chipData.map((chip, index) => (
          <Chip
            key={index}
            label={chip.label}
            icon={chip.icon}
            onClick={() => handleButtonClick(index)}
            color={activeButton === index ? "primary" : "default"}
            className={`custom-chip ${activeButton === index ? "active" : ""}`}
          />
        ))}
      </div>

      <Box className="custom-tabs">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="main tabs"
        >
          {tabSets[activeButton].map((tab, index) => (
            <Tab
              key={index}
              label={
                <div className="tab-label">
                  {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                  {tab.label}
                </div>
              }
              className={`custom-tab ${tabValue === index ? "active" : ""}`}
            />
          ))}
        </Tabs>
      </Box>

      {tabSets[activeButton].map((_, index) => (
        <TabContent key={index} value={tabValue} index={index}>
          {index === 0 && activeButton === 1 ? (
            <div className="gallery">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Gallery ${i}`}
                  className="gallery-image"
                />
              ))}
            </div>
          ) : (
            <p>{`${tabSets[activeButton][index]} content here.`}</p>
          )}
        </TabContent>
      ))}
    </Box>
  );
};

export default Testings;
