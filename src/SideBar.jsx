import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ooumphlogo from "./../src/assets/images/ooumph-logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import profileimage from "./../src/assets/images/profile-photo.png";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const menuItems = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon />,
    route: "/home-page",
  },
  {
    label: "Search",
    icon: <SearchOutlinedIcon />,
    route: "/accountsetting",
  },
  {
    label: "Plus",
    icon: <AddOutlinedIcon />,
    route: "/subadminmanagement",
  },
  {
    label: "Messages",
    icon: <MarkunreadOutlinedIcon />,
    route: "/rolesandpermission",
  },
  {
    label: "Notifications",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    label: "Profile",
    imgSrc: profileimage , // Add the image path here
    route: "/booking",
  },
  {
    label: "Settings",
    icon: <MenuOutlinedIcon />,
    route: "/prescription",
  },
];

export default function SideBar() {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = React.useState(!isMobile);
  const [selectedItem, setSelectedItem] = React.useState();
  const Navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleListItemClick = (index) => {
    const menuItem = menuItems[index];
    setSelectedItem(index);
    if (menuItem.subMenu && !isMobile) {
      return;
    }
    Navigate(menuItem.route);
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", background: "#2c3d69" }}>
        {isMobile && (
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          anchor="left"
          open={openDrawer}
          onClose={handleDrawerToggle}
          sx={{
            position: isMobile ? "fixed" : "static",
            height: isMobile ? "100%" : "auto",
            // background: "#2c3d69",
          }}
        >
          <Box sx={{ background: "", height: "100%", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mt: 4,
                mb: 2,
                ml: 4,
              }}
            >
              <img src={ooumphlogo} alt="Icon" width="70%" height="90vh" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <List sx={{ background: "" }}>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      disablePadding
                      onClick={() => handleListItemClick(index)}
                      className={`sidebar-item`}
                      sx={{
                        backgroundColor:
                          selectedItem === index
                            ? "#638889 !important"
                            : "transparent",
                        pr: 8,
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ color: "black" }}>
                          {item.label === "Profile" && item.imgSrc ? (
                            <img
                              src={item.imgSrc}
                              alt={item.label}
                              style={{ width: "40px", borderRadius: "50%" }}
                            />
                          ) : (
                            item.icon
                          )}
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="h2"
                            sx={{ color: "black", fontSize: "16px" }}
                          >
                            {item.label}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
